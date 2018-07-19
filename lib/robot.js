
class Robot {

  constructor(coordinates = [0,0], bearing = 'north') {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(num1, num2) {
    this.coordinates = [num1, num2];
  }

  setBearing(bearing) {
    let directions = ["north", "east", "south", "west"]
    if (!directions.includes(bearing)) { throw "Invalid Robot Bearing"
    }
      return this.bearing = bearing;
  }

  place(object) {
    this.setCoordinates(object.x, object.y);
    this.setBearing(object.direction);
  }


  turnRight() {
    let directions = ["north", "east", "south", "west"]

    let index = directions.indexOf(this.bearing);

    if (index >= (directions.length - 1)) {
      this.setBearing(directions[0])
    } else {
    this.setBearing(directions[index + 1]);
  }

  }

  turnLeft() {
    let directions = ["north", "west", "south", "east"]

    let index = directions.indexOf(this.bearing);

    if (index >= (directions.length - 1)) {
      this.setBearing(directions[0])
    } else {
    this.setBearing(directions[index + 1]);
  }

  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.setCoordinates(this.coordinates[0], (this.coordinates[1] + 1));
        break;
      case "east":
        this.setCoordinates(this.coordinates[0] + 1, (this.coordinates[1]));
        break;
      case "south":
        this.setCoordinates(this.coordinates[0], (this.coordinates[1] -1 ));
        break;
      case "west":
        this.setCoordinates(this.coordinates[0] - 1, (this.coordinates[1]));
        break;
    }
  }

  translateInstructions(instructions) {
    let helper_array = instructions.split("");
    helper_array.forEach( function(char) {
      if (char.toLowerCase() === "l") {
        this.turnLeft();
      } else if (char.toLowerCase() === "r") {
        this.turnRight();
      } else {
        this.advance();
      }
    }.bind(this)
    )
    }
  }
