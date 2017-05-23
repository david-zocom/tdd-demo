const { Memory, Counter } = require('../exercises.js');

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

/*
Skriv testfall för metoderna countUp och countDown. countUp ska räkna upp egenskapen value med ett. countDown ska räkna ner med ett om värdet är större än noll, annars ska funktionen kasta ett Error.*/
describe('exercise 11, Counter', () => {
	test('countUp increases value with 1', () => {
		let counter = new Counter();
		counter.countUp();
		expect( counter.value ).toBe( 2 );
		
		counter.countUp();
		expect( counter.value ).toBe( 3 );
	});
	
	test('countDown decreases value with 1', () => {
		let counter = new Counter();
		counter.countDown();
		expect( counter.value ).toBe( 0 );
	});
	
	test('countDown throws when 0', () => {
		let counter = new Counter();
		counter.countDown();
		expect( () => { counter.countDown() } )
			.toThrow('Cannot count below zero');
	})
})




