class Robot {
	//your solution here
	constructor(coordinates = [0,0], bearing = 'north'){
		this.coordinates = coordinates;
		this.bearing = bearing;
		this.validDirections = ['north', 'east', 'south', 'west'];
	}
	

	setCoordinates(x,y){
		this.coordinates[0] = x;
		this.coordinates[1] = y;
	}

	setBearing(newDirection){
		if (this.validDirections.indexOf(newDirection) >  -1){
			this.bearing = newDirection;
		} else {
			throw 'Invalid Robot Bearing'
		}
		// return this.bearing;
	}

	place(params){
		this.setCoordinates(params['x'], params['y']);
		// debugger;
		this.setBearing(params['direction']);
	}

	turnRight(){
		let currentDirection = this.validDirections.indexOf(this.bearing);
		if (currentDirection < 3) {
			this.bearing = this.validDirections[currentDirection + 1] 
		} else {
			this.bearing = this.validDirections[0]
		}
	}

	turnLeft(){
		let currentDirection = this.validDirections.indexOf(this.bearing);
		if (currentDirection > 0) {
			this.bearing = this.validDirections[currentDirection - 1]
		} else {
			this.bearing = this.validDirections[3]
		}
	}

	advance(){
		if (this.bearing === "north") {
			this.coordinates[1] ++;
		} else if (this.bearing === "east") {
			this.coordinates[0] ++;
		} else if (this.bearing === "south") {
			this.coordinates[1] --;
		} else {
			this.coordinates[0] --;
		}
	}

	translateInstructions(string) {
		
		string.split('').forEach(function(element) {
			if (element === 'R') {
				this.turnRight();
			} else if (element === 'L') {
				this.turnLeft()
			} else if (element === 'A') {
				this.advance();
			}
		}.bind(this))
	}

}
