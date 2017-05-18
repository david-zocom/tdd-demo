const backwards = require('../backwards.js');
/*
Skriv testfall för funktionen backwards(x). Det är en funktion som ska ta en sträng som parameter. Den ska returnera en sträng som är den ursprungliga strängen baklänges. Funktionen ska också kunna ta tal som parametrar, genom att göra om dem till strängar.

backwards('string') -> 'gnirts'
backwards(42) -> '24'
backwards(null) -> throw Error
backwards(object) -> throw Error
*/

describe('backwards', () => {
	test('normal string', () => {
		expect( backwards('string') ).toBe('gnirts');
	})
	
	test('number', () => {
		expect( backwards(42) ).toBe('24');
	})
	
	test('null should throw', () => {
		let func = () => { backwards(null) };
		expect( func ).toThrow();
	})
	
	test('object should throw', () => {
		expect( () => { backwards({}) } ).toThrow();
	})
});





