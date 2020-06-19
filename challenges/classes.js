// 1. Copy and paste your prototype in here and refactor into class syntax.

class Maker{
    constructor (length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
  const shape = new Maker(4, 5, 5);
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(shape.volume()); // 100
console.log(shape.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Maker{
    constructor(side){
        super(side);
        this.side = side;
    }
    volume(){
        return this.side * this.side * this.side;
    }
    surfaceArea(){
        return 6 * (this.side * this.side);
    }
}

const cube = new CubeMaker(5);

console.log(cube.volume());
console.log(cube.surfaceArea());