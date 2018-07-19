class Robot {
	constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  }
  setCoordinates(a, b){
    this.coordinates = [a, b]
  }
  setBearing(bearing){

    if (bearing === "north" || bearing === "south" || bearing === "east" || bearing === "west"){this.bearing = bearing}
    else { throw "invalid robot bearing"}
  }

  place(obj){
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight(){
    if (this.bearing === "north"){
      this.bearing = "east"
    }
    else if (this.bearing === "south"){
      this.bearing = "west"
    }
    else if (this.bearing === "east"){
      this.bearing = "south"
    }
    else if (this.bearing === "west"){
      this.bearing = "north"
    }
  }

  turnLeft(){
    if (this.bearing === "north"){
      this.bearing = "west"
    }
    else if (this.bearing === "south"){
      this.bearing = "east"
    }
    else if (this.bearing === "east"){
      this.bearing = "north"
    }
    else if (this.bearing === "west"){
      this.bearing = "south"
    }
  }

  advance(){
      if (this.bearing === "north"){
        this.coordinates[1] += 1
      }
      else if (this.bearing === "south"){
        this.coordinates[1] = this.coordinates[1] - 1
      }
      else if (this.bearing === "east"){
        this.coordinates[0] = this.coordinates[0] + 1
      }
      else if (this.bearing === "west"){
        this.coordinates[0] = this.coordinates[0] - 1
      }
    }

  translateInstructions(inst){

    for (let i = 0; i < inst.length; i++){
      if (inst[i] === "L"){
      this.turnLeft();
      }
      else if (inst[i] === "R"){
        this.turnRight();
      }
      else if (inst[i] === "A"){
      this.advance();
        }
      }
    }
}
