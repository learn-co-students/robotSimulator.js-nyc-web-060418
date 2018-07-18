class Robot {


  constructor() {
  this.x = 0
  this.y = 0
  this.coordinates = [this.x,this.y]
  this.bearing = 'north'
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direct) {
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(direct)) {
      this.bearing = direct
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(hash) {
    let x =hash["x"]
    let y= hash["y"]
    let direction= hash["direction"]
    this.setCoordinates(x,y)
    this.setBearing(direction)
  }

  turnRight() {
    if (this.bearing === "north"){
      this.bearing = "east"
    }else if (this.bearing === "east") {
      this.bearing = "south"
    }else if (this.bearing === "south"){
      this.bearing = "west"
    }else if (this.bearing === "west") {
      this.bearing = "north"
    }

  }
  turnLeft() {
    switch(this.bearing) {
        case 'north':
            this.bearing = 'west'
            break;
        case 'east':
            this.bearing = 'north'
            break;
        case 'south':
          this.bearing = 'east'
          break;
        case 'west':
          this.bearing = 'south'
          break;
        default:
          "wrong input"
    }
  }
  advance() {
    let location = this.bearing
    switch (location) {
      case 'north':
        ++this.coordinates[1]
        break;
      case 'south':
        --this.coordinates[1]
        break;
      case 'east':
        ++this.coordinates[0]
        break;
      case 'west':
        --this.coordinates[0]
        break;
      default:
        "Wrong input"
    }
  }
  translateInstructions(instruction) {
    let instructions = instruction.split("")
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
          break;
        default:
          "I don't know"
      }
    }
  }




}
