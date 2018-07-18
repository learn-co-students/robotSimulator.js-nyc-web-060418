class Robot {
	constructor(coordinates = [0,0], bearing = 'north') {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y) {
    this.coordinates = [x,y]
  }

  setBearing(direction) {
      let result;
      let lowerCaseDirection = direction.toLowerCase();

      switch (lowerCaseDirection) {
        case 'north':
        case 'south':
        case 'east':
        case 'west':
          result = true;
          break;
        default:
          result = false;
          break;
      }
      if (result === false) {
        throw new Error("Invalid Robot Bearing");
      } else {
        this.bearing = lowerCaseDirection;
      }
    }

  // place() {
  //   return Object.assign({}, {['x']: this.coordinates[0], ['y']: this.coordinates[1], ['bearing']: this.bearing})
  // }

  place(object) {
    this.coordinates[0] = object.x;
    this.coordinates[1] = object.y;
    this.bearing = object.direction
  }

  turnRight() {

    switch (this.bearing) {
      case 'north':
        this.setBearing('east');
        break;
      case 'east':
        this.setBearing('south');
        break;
      case 'south':
        this.setBearing('west');
        break;
      case 'west':
        this.setBearing('north');
        break;
    }
  }

  turnLeft() {

    switch (this.bearing) {
      case 'north':
        this.setBearing('west');
        break;
      case 'east':
        this.setBearing('north');
        break;
      case 'south':
        this.setBearing('east');
        break;
      case 'west':
        this.setBearing('south');
        break;
    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] = (this.coordinates[1] + 1);
        break;
      case 'east':
        this.coordinates[0] = (this.coordinates[0] + 1);
        break;
      case 'south':
        this.coordinates[1] = (this.coordinates[1] - 1);
        break;
      case 'west':
        this.coordinates[0] = (this.coordinates[0] - 1);
        break;
    }
  }
    translateInstructions(command) {
      for (let i = 0; i < command.length; i++) {
      switch (command[i]) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
        }}
    }




}
