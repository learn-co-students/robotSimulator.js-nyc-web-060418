class Robot {
	constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(coordinate1, coordinate2) {
    this.coordinates = [coordinate1, coordinate2]
  }
  setBearing(direction) {
    const permittedBearings = ["north", "south", "east", "west"]
    if (permittedBearings.includes(direction)){
      this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }
  place(object) {
    this.setCoordinates(object.x, object.y)
    this.setBearing(object.direction)
  }
  turnRight() {
    const bearings = ['north', 'east', 'south', 'west']
    let currentBearingIndex = bearings.indexOf(this.bearing)
    if (currentBearingIndex === 3) {
      let newBearingIndex = 0;
      this.setBearing(bearings[newBearingIndex])
    } else {
      let newBearingIndex = (currentBearingIndex + 1);
      this.setBearing(bearings[newBearingIndex])
    }
  }
  turnLeft() {
    const bearings = ['north', 'west', 'south', 'east']
    let currentBearingIndex = bearings.indexOf(this.bearing)
    if (currentBearingIndex === 3) {
      let newBearingIndex = 0;
      this.setBearing(bearings[newBearingIndex])
    } else {
      let newBearingIndex = (currentBearingIndex + 1);
      this.setBearing(bearings[newBearingIndex])
    }
  }
  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break
      case 'east':
        this.coordinates[0] += 1
        break
      case 'south':
        this.coordinates[1] -= 1
        break
      case 'west':
        this.coordinates[0] -= 1
        break
    }
  }
  translateInstructions(characters) {
    for (let character of characters) {
      switch (character) {
        case 'L':
        case 'l':
          this.turnLeft()
          break
        case 'R':
        case 'r':
          this.turnRight()
          break
        case 'A':
        case 'a':
          this.advance()
          break
      }
    }
  }
}
