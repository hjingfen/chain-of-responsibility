"use strict";

export class Discount {
	constructor(price, discountPrice) {
		this.price = price;
		this.discountPrice = discountPrice;
	}

	setPrevious(discount) {
		discount.setNextDiscount(this);
		return discount;
	}

	setNextDiscount(discount) {
		this.nextDiscount = discount;
		return discount;
	}

	calculate(totalPrice) {
		if (totalPrice >= this.price) {
			return totalPrice - this.discountPrice;
		} else if (this.nextDiscount instanceof Discount) {
			return this.nextDiscount.calculate(totalPrice);
		}
	}
}