const numberOfDays = require('../numberOfDays.js');

// function numberOfDays(month, year)
/*
- båda parametrarna är ok
- månad felaktig
- dag felaktig
- båda felaktiga

year: från år 0 och "ingen" övre gräns
långa månader, korta månader, februari

*/

describe('numberOfDays test suite', () => {
	test('allowed values', () => {
		expect( numberOfDays('jan', 2017) ).toBe(31);
		expect( numberOfDays('mar', 2017) ).toBe(31);
		expect( numberOfDays('apr', 2017) ).toBe(30);
		expect( numberOfDays('feb', 2017) ).toBe(28);
		expect( numberOfDays('feb', 2016) ).toBe(29);
	});
	test('bad month', () => {
		expect( () => { numberOfDays('kshjfkdgkf', 2017) } ).toThrow();
	});
	test('bad year', () => {
		expect( () => { numberOfDays('maj', -1) } ).toThrow();
		expect( () => { numberOfDays('maj', null) } ).toThrow();
	});
	test('invalid parameters', () => {
		expect( () => { numberOfDays([], undefined) } ).toThrow();
		expect( () => { numberOfDays() } ).toThrow();
	});
})



