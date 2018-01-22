"use strict";

const canHandle = () => Promise.resolve(true);

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
	}

	calculate(price) {
		return canHandle().then(canHandled => {
			if (price >= this.price && canHandled) {
				return price - this.discountPrice;
			} else if (this.nextDiscount instanceof Discount) {
				return this.nextDiscount.calculate(price);
			}
		});
	}
}