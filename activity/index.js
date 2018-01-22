const discount = totalPrice => {
	if (totalPrice >= 1000) {
		return totalPrice - 150;
	} else if (totalPrice >= 800) {
		return totalPrice - 100;
	} else if (totalPrice >= 500) {
		return totalPrice - 50;
	} else {
		return totalPrice;
	}
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