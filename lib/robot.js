class Robot {
    //your solution here
  constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  };

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {
    if (direction == 'north' || direction == 'east' || direction == 'south' || direction == 'west') {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(object) {
    this.setCoordinates(object.x, object.y);
    this.setBearing(object.direction);
  }

  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.setBearing('east')
        break;
      case 'east':
        this.setBearing('south')
        break;
      case 'south':
        this.setBearing('west')
        break;
      case 'west':
        this.setBearing('north')
        break;
    }
  }

  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.setBearing('west')
        break;
      case 'east':
        this.setBearing('north')
        break;
      case 'south':
        this.setBearing('east')
        break;
      case 'west':
        this.setBearing('south')
        break;
    }
  }

  advance() {
    let xCoord = this.coordinates[0]
    let yCoord = this.coordinates[1]

    switch(this.bearing) {
      case 'north':
        this.setCoordinates(xCoord, yCoord + 1)
        break;
      case 'east':
        this.setCoordinates(xCoord + 1, yCoord)
        break;
      case 'south':
        this.setCoordinates(xCoord, yCoord - 1)
        break;
      case 'west':
        this.setCoordinates(xCoord - 1, yCoord)
        break;
    }
  }

  translateInstructions(input) {
    for (let i = 0; i < input.length; i++) {
      switch(input[i]) {
        case 'R':
          this.turnRight()
          break;
        case 'L':
          this.turnLeft()
          break;
        case 'A':
          this.advance()
          break;
      }
    }
  }

}
