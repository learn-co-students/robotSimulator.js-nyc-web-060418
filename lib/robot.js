class Robot {
	constructor(coordinates = [0,0], bearing = "north") {
    this.coordinates = coordinates,
    this.bearing = bearing
  }

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(string){
    if (string === "north" || string === "south" || string === "west" || string === "east"){
      this.bearing = string
    }else {
      throw "invalid robot bearing"
    }
  }

  place({x,y,direction}){
    //deconstructed object == mass assignments
    this.setCoordinates(x,y)
    this.setBearing(direction)
  }

  turnRight() {
    if (this.bearing === "north") {
      this.setBearing("east")
    } else if (this.bearing === "east") {
      this.setBearing("south")
    } else if (this.bearing === "south") {
      this.setBearing("west")
    } else {
      this.setBearing("north")
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      this.setBearing("west")
    } else if (this.bearing === "east") {
      this.setBearing("north")
    } else if (this.bearing === "south") {
      this.setBearing("east")
    } else {
      this.setBearing("south")
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1] += 1
        break;
      case "south":
        this.coordinates[1] -= 1
        break;
      case "east":
        this.coordinates[0] += 1
        break;
      case "west":
        this.coordinates[0] -= 1
        break;
    }
  }

  translateInstructions(characters) {
    //have to iterate because a string of characters is passed in
   for (let character of characters) {
     switch (character.toUpperCase()) {
       case 'L':
         this.turnLeft()
         break
       case 'R':
         this.turnRight()
         break
       case 'A':
         this.advance()
         break
     }
   }
 }

}
