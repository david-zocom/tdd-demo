const hypotenuse = require('../hypotenuse.js');

describe('hypotenuse test suite', () => {
	/*
	hypotenuse(number, number) -> number
	positiva tal
	negativa tal
	infinity
	noll
	allt som inte är tal
	*/
	test('allowed values', () => {
		expect( hypotenuse(3, 4) ).toBe(5);
		
		let a = 200, b = 125.5;
		expect( hypotenuse(a, b) ).toBe(Math.sqrt(a*a+b*b));
	})
	test('disallowed numbers', () => {
		expect( hypotenuse(-5, 100) ).toBeFalsy();
		expect( hypotenuse(100, -5) ).toBeFalsy();
		expect( hypotenuse(0, 100) ).toBeFalsy();
		expect( hypotenuse(10, Infinity) ).toBeFalsy();
		expect( hypotenuse(10, -Infinity) ).toBeFalsy();
		expect( hypotenuse(10, NaN) ).toBeFalsy();
	})
	test('disallowed values', () => {
		expect( hypotenuse('abc', 1000) ).toBeFalsy();
		expect( hypotenuse(1000, 'abc') ).toBeFalsy();
	})
	
})








