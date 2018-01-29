"use strict";
import { Discount } from "./discount";

const discountData = [{
	price: 500, discountPrice: 50
}, {
	price: 800, discountPrice: 100
}, {
	price: 1000, discountPrice: 150
}];

const discount = totalPrice => {
	const discount1000 = new Discount(1000, 150);
	const discount800 = new Discount(800, 100);
	const discount500 = new Discount(500, 50);

	discount1000.setNextDiscount(discount800).setNextDiscount(discount500);
	return discount1000.calculate(totalPrice);

	//return new Discount(0, 0).setPrevious(new Discount(500, 50)).setPrevious(new Discount(800, 100)).setPrevious(new Discount(1000, 150)).calculate(totalPrice);

	//return discountData
	//  .reduce((discountChain, { price, discountPrice }) => discountChain.setPrevious(new Discount(price, discountPrice)), new Discount(0, 0))
	//  .calculate(totalPrice);
};

const calculate = price => {
	console.log(`Total $${price}, actually pay $${discount(price)}`);
};

calculate(1000);
calculate(900);
calculate(800);
calculate(700);
calculate(600);
calculate(500);
calculate(400);