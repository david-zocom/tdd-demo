/* Skriv testfall för funktionen numberOfDays(month, year). Funktionen ska ta två parametrar. Den första ska vara de första tre bokstäverna i en månad. Exempel: "jan" för januari, "dec" för december osv. Den andra ska vara ett heltal som är det året det gäller. Funktionen ska returnera hur många dagar den aktuella månaden har. Tips: spara att testa februari till sist. Information om skottår här.

Kasta error om felaktiga parametrar.
*/
function numberOfDays(month, year) {
	if( typeof(year) !== 'number' || year < 0 )
		throw new Error('bad year');
	switch(month) {
		case 'jan':
		case 'mar':
		case 'maj':
		case 'jul':
		case 'aug':
		case 'okt':
		case 'dec':
			return 31;
		case 'apr':
		case 'jun':
		case 'sep':
		case 'nov':
			return 30;
		case 'feb': 
			if( year % 4 == 0 )
				return 29;
			else 
				return 28;
		default:
			throw new Error('Bad month');
	}
}

module.exports = numberOfDays;