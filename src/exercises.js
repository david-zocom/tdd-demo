class Memory {
	constructor() {
		this.data = undefined;
	}
	
	remember(value) {
		this.data = value;
	}
	
	forget() {
		this.data = undefined;
	} 
	
	// this.data är namnet på egenskapen som sparas i klassen
}

class Counter {
	constructor() {
		this.value = 1;
	}
	countUp() {
		this.value++;
	}
	countDown() {
		if( this.value === 0 )
			throw new Error('Cannot count below zero');
		this.value--;
	}
}



module.exports = { Memory, Counter };
