/* Vad är förväntat resultat för felaktiga värden?
Alternativ
- throw Error
- return false
- return 0
- return NaN
*/
function hypotenuse(a, b) {
	if( a <= 0 || b <= 0 || a === Infinity || b === Infinity )
		return NaN;
	return Math.sqrt(a*a + b*b);
}

module.exports = hypotenuse;