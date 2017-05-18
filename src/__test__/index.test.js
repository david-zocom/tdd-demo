// const uppgifter = require('../index.js');
const {makeHTML, isFingerNumber} = require('../index.js');

// här kommer testen

describe('makeHTML test suite', () => {
	test('empty string', () => {
		let actual = makeHTML('');
		let expected = '<p></p>';
		expect(actual).toBe(expected);
	});

	test('normal string', () => {
		expect(makeHTML('yellow')).toBe('<p>yellow</p>');
	});
	
	test('number', () => {
		// TODO
	});
	
	test('illegal values', () => {
		// TODO
	});
});