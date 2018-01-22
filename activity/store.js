"use strict";

export const STORE = {
	BOOK_A: '清华书店',
	BOOK_B: '北大书店',
	BOOK_C: '58书店',
	BOOK_D: '赶集书店',
};

export const DISCOUNTS = {
	[STORE.BOOK_A]: [{
	price: 100,
	discountPrice: 20
}, {
	price: 200,
	discountPrice: 30
}, {
	price: 300,
	discountPrice: 40
}, {
	price: 400,
	discountPrice: 50
}, {
	price: 800,
	discountPrice: 100
}],
	[STORE.BOOK_B]: [{
	price: 800,
	discountPrice: 300
}, {
	price: 700,
	discountPrice: 200
}, {
	price: 600,
	discountPrice: 150
}, {
	price: 500,
	discountPrice: 100
}, {
	price: 400,
	discountPrice: 80
}, {
	price: 300,
	discountPrice: 50
}],
	[STORE.BOOK_C]: [{
	price: 100,
	discountPrice: 10
}],
	[STORE.BOOK_D]: []
};