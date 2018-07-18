class Robot {
    constructor(x = 0, y = 0) {
   this.x = x
   this.y = y
   this.coordinates = [this.x, this.y];
   this.bearing = 'north';
 }

 setCoordinates(x, y) {
   this.coordinates[0] = x
   this.coordinates[1] = y
   return this.coordinates[0]
 }

 setBearing(bearing) {
   switch (bearing) {
     case 'north':
     case 'east':
     case 'south':
     case 'west':
       this.bearing = bearing
       return this.bearing;
       break;
     default: throw "Invalid Robot Bearing";
   }
 }

 place(args) {

   this.setCoordinates(args['x'], args['y'])
   this.setBearing(args['direction'])
 }

 turnRight() {
   switch (this.bearing) {
     case 'north':
       this.bearing = 'east'
       break;
     case 'east':
       this.bearing = 'south'
       break;
     case 'south':
       this.bearing = 'west'
       break;
     case 'west':
       this.bearing = 'north'
       break;
   }
 }
 turnLeft() {
   switch (this.bearing) {
     case 'north':
       this.bearing = 'west'
       break;
     case 'west':
       this.bearing = 'south'
       break;
     case 'south':
       this.bearing = 'east'
       break;
     case 'east':
       this.bearing = 'north'
       break;
   }
 }
 advance() {
   switch (this.bearing) {
     case 'north':
       this.coordinates[1]++
       break;
     case 'west':
       this.coordinates[0]--
       break;
     case 'south':
       this.coordinates[1]--
       break;
     case 'east':
       this.coordinates[0]++
       break;
   }
 }

 translateInstructions(letters) {
   for(const element of letters) {
     switch(element) {
       case 'A':
           this.advance()
           break;
       case 'R':
           this.turnRight()
           break;
       case 'L':
           this.turnLeft()
           break;
     }
   }
 }
}