class Paper extends BaseClass{
  constructor(x,y){
    var options = {
      isStatic: false
  }
    super(x,y,0,0,0,10);
      this.image = loadImage("paper.png");
    }
  };