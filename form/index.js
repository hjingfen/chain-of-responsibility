"use strict";
import {Loan} from './loan.js';

window.onload = () => {
	//校验身份证号码
	const validateIDCardNumber = (cardNum) => {
		var aCity = {
				11: "北京",
				12: "天津",
				13: "河北",
				14: "山西",
				15: "内蒙古",
				21: "辽宁",
				22: "吉林",
				23: "黑龙江 ",
				31: "上海",
				32: "江苏",
				33: "浙江",
				34: "安徽",
				35: "福建",
				36: "江西",
				37: "山东",
				41: "河南",
				42: "湖北 ",
				43: "湖南",
				44: "广东",
				45: "广西",
				46: "海南",
				50: "重庆",
				51: "四川",
				52: "贵州",
				53: "云南",
				54: "西藏 ",
				61: "陕西",
				62: "甘肃",
				63: "青海",
				64: "宁夏",
				65: "新疆",
				71: "台湾",
				81: "香港",
				82: "澳门",
				91: "国外 "
			},
			iSum = 0;

		if (!cardNum) {
			return false;
		}
		if (!cardNum.length == 18) {
			return false;
		}
		if (!/^\d{17}(\d|x)$/i.test(cardNum)) {
			return false;
		}
		cardNum = cardNum.replace(/x$/i, "a");
		if (aCity[parseInt(cardNum.substr(0, 2))] == null) {
			return false;
		}
		var sBirthday = cardNum.substr(6, 4) + "/" + Number(cardNum.substr(10, 2)) + "/" + Number(cardNum.substr(12, 2));

		var d = new Date(sBirthday);

		if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
			return false;
		}
		for (var i = 17; i >= 0; i--) {
			iSum += (Math.pow(2, i) % 11) * parseInt(cardNum.charAt(17 - i), 11);
		}
		if (iSum % 11 != 1) {
			return false;
		}
		return true;
	}

	//根据身份证号计算年龄
	const getAge = (cardNum) => {
		var today = new Date(),
			year = today.getFullYear(),
			month = today.getMonth() + 1,
			day = today.getDate(),
			age = year - cardNum.substring(6, 10) - 1;

		if(cardNum.substring(10, 12) < month || (cardNum.substring(10, 12) == month && cardNum.substring(12, 14) <= day)) {
			age++;
		}
		return age;
	}

	//根据年龄段判断贷款额度规则
	const loanData = [{
		minAge: 20, maxAge: 30, loanAmount: 10
	}, {
		minAge: 30, maxAge: 40, loanAmount: 30
	}, {
		minAge: 40, maxAge: 50, loanAmount: 50
	}, {
		minAge: 50, maxAge: 60, loanAmount: 40
	}, {
		minAge: 60, maxAge: 200, loanAmount: 0
	}];

	const loan = age => {
		const loanAmount = loanData
			.reduce((initLoan, { minAge, maxAge, loanAmount }) =>
				initLoan.setPrevious(new Loan(minAge, maxAge, loanAmount))
			, new Loan(0, 20, 0))
			.judge(age);
		document.getElementById('loanAmount').value = loanAmount + '万';
	};

	document.getElementById('idCardNO').oninput = el => {
		const cardNum = el.target.value;
		const isValidated = validateIDCardNumber(cardNum);
		document.getElementById('tip').style.display = isValidated ? 'none' : 'block';
		isValidated && loan(getAge(cardNum));
	};
}