/*
Skriv testfall för funktionen backwards(x). Det är en funktion som ska ta en sträng som parameter. Den ska returnera en sträng som är den ursprungliga strängen baklänges. Funktionen ska också kunna ta tal som parametrar, genom att göra om dem till strängar.
*/
function backwards(x) {
	if( typeof(x) === 'number' )
		x = String(x);
	else if( typeof(x) !== 'string' )
		throw new Error('parameter is not a string');
	return x.split('').reverse().join('');
}

module.exports = backwards;