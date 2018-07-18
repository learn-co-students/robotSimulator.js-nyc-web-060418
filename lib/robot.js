class Robot {
    //your solution here
 constructor(coordinates = [0,0], bearing = "north") {
   this.coordinates = coordinates
   this.bearing = bearing
 }

 setCoordinates(x, y) {
   this.coordinates = [x,y]
 }

 setBearing(direction) {
   const directions = ["north", "south", "east", "west"]
   if (directions.indexOf(direction) != -1) {
     this.bearing = direction
   } else {
     throw "Invalid Robot Bearing"
   }
 }

 place(args) {
   this.coordinates = [args.x, args.y]
   this.bearing = args.direction
 }

 turnRight() {
   switch (this.bearing) {
     case "north":
       this.setBearing("east")
       break
     case "east":
       this.setBearing("south")
       break
     case "south":
       this.setBearing("west")
       break
     case "west":
       this.setBearing("north")
   }
 }

 turnLeft() {
   switch (this.bearing) {
     case "north":
       this.setBearing("west")
       break
     case "west":
       this.setBearing("south")
       break
     case "south":
       this.setBearing("east")
       break
     case "east":
       this.setBearing("north")
   }
 }

 advance() {
   switch (this.bearing) {
     case "north":
       this.setCoordinates(this.coordinates[0], this.coordinates[1]+ 1)
       break
     case "west":
       this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1])
       break
     case "south":
       this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1)
       break
     case "east":
       this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1])
   }
 }

 translateInstructions(direction) {

   let instArray = direction.split("")
   for (const element of instArray) {
     switch (element) {
       case "R":
         this.turnRight()
         break
       case "L":
         this.turnLeft()
         break
       case "A":
         this.advance()
         break
     }
   }
 }
}
