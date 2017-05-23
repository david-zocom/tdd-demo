const Memory = require('../exercises.js');
/*
*/

describe('exercise 10, Memory', () => {
	test('remember saves value in class', () => {
		let mem = new Memory();
		const value = { testing: 'is fun'};
		mem.remember(value);
		// value should be saved in mem.data
		expect( mem.data ).toBe( value );
	})
	
	test('remember no value, saves undefined', () => {
		let mem = new Memory();
		mem.remember();
		expect( mem.data ).toBe( undefined );
	})
	
	test('forget removes value', () => {
		let mem = new Memory();
		mem.remember({ testing: 'is fun'});
		// we have already tested remember, no need to do that again
		mem.forget();
		expect( mem.data ).toBe( undefined );
	})
	
})









