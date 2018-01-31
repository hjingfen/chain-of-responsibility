"use strict";

export class Loan {
	constructor(minAge, maxAge, loanAmount) {
		this.maxAge = maxAge;
		this.minAge = minAge;
		this.loanAmount = loanAmount;
	}

	setPrevious(previous) {
		previous.setNext(this);
		return previous;
	}

	setNext(next) {
		this.next = next;
		return next;
	}

	judge(age) {
		if (age >= this.minAge && age < this.maxAge) {
			return this.loanAmount;
		} else if (this.next instanceof Loan) {
			return this.next.judge(age);
		}
	}
}