const directions = ["north", "east", "south", "west"];


class Robot {
	//your solution here
  constructor(coordinates = [0,0], bearing = 'north'){
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(num1, num2){
    this.coordinates = [num1, num2]
    return this.coordinates
  }

  setBearing(direction){
    if (!directions.includes(direction)) {
      throw "Invalid Robot Bearing"
    }

    return this.bearing = direction
  }

  place(obj){
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight(){

    let index = directions.indexOf(this.bearing)

    if (this.bearing === 'west') {
      return this.setBearing(directions[0])
    }

    return this.setBearing(directions[index+1])

  }

  turnLeft(){
    const directionsLeft = ["west", "south", "east", "north"];

    let index = directionsLeft.indexOf(this.bearing)

    if (this.bearing === 'north') {
      return this.setBearing(directionsLeft[0])
    }

    return this.setBearing(directionsLeft[index+1])
  }

  advance(){
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1;
        break;
      case 'south':
        this.coordinates[1] -= 1;
        break;
      case 'east':
        this.coordinates[0] += 1;
        break;
      case 'west':
        this.coordinates[0] -= 1;
        break;
    }
  }

  translateInstructions(str){
    for (let char of str) {
      switch (char.toLowerCase()) {
        case 'r':
          this.turnRight(); break;
        case 'l':
          this.turnLeft(); break;
        case 'a':
          this.advance(); break;
      }
    }
  }

}
