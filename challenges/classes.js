// 1. Copy and paste your prototype in here and refactor into class syntax.

class cuboid{
    constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    }
    volume() {
        return this.length * this.width * this.height ;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height) ;
      }
  }
  
  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
 let newCuboid = new cuboid(4, 5,5);

  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.