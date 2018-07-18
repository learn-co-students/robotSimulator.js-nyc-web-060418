class Robot {
	constructor(coordinates = [0, 0], bearing = 'north') {
      this.coordinates = coordinates
      this.bearing = bearing
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    if (bearing === 'north' || bearing === 'south' || bearing === 'east' || bearing === 'west') {
      this.bearing = bearing
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(obj) {
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.bearing = 'east'
    } else if (this.bearing === 'east') {
      this.bearing = 'south'
    } else if (this.bearing === 'west') {
      this.bearing = 'north'
    } else if (this.bearing === 'south') {
      this.bearing = 'west'
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.bearing = 'west'
    } else if (this.bearing === 'east') {
      this.bearing = 'north'
    } else if (this.bearing === 'south') {
      this.bearing = 'east'
    } else if (this.bearing === 'west') {
      this.bearing = 'south'
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    } else if (this.bearing === 'west') {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i] === 'L') {
        this.turnLeft()
      } else if (instructions[i] === 'R') {
        this.turnRight()
      } else if (instructions[i] === 'A') {
        this.advance()
      }
    }

  }

}
