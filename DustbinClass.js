class Dustbin extends BaseClass{
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      super(x,y,200,150);
      this.image = loadImage("dustbingreen.png");
    }
   };