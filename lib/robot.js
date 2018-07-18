class Robot {
  constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(coordinate1, coordinate2){
    this.coordinates = [coordinate1, coordinate2]
  }
  setBearing(direction){
    const permittedBearings = ['north', 'west', 'south', 'east']
    if (permittedBearings.includes(direction)){
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing";
    }
  }
  place(coordinatesAndBearing){
    this.setCoordinates(coordinatesAndBearing.x, coordinatesAndBearing.y)
    this.setBearing(coordinatesAndBearing.direction)
  }
  turnRight(){
    const bearings = ['north', 'east', 'south', 'west']
    let currentBearingIndex = bearings.indexOf(this.bearing)
    currentBearingIndex = (currentBearingIndex + 1) % bearings.length
    this.setBearing(bearings[currentBearingIndex])
  }
  turnLeft(){
    const bearings = ['north', 'west', 'south', 'east']
    let currentBearingIndex = bearings.indexOf(this.bearing)
    currentBearingIndex = (currentBearingIndex + 1) % bearings.length
    this.setBearing(bearings[currentBearingIndex])
  }
  advance(){
    switch (this.bearing){
      case 'north':
        this.coordinates[1] += 1; break;
      case 'south':
        this.coordinates[1] -= 1; break;
      case 'east':
        this.coordinates[0] += 1; break;
      case 'west':
        this.coordinates[0] -= 1; break;
    }
  }
  translateInstructions(instructions){
    for (let instruction of instructions){
      switch (instruction.toUpperCase()){
        case 'L':
          this.turnLeft(); break;
        case 'R':
          this.turnRight(); break;
        case 'A':
          this.advance(); break;
      }
    }
  }
}
