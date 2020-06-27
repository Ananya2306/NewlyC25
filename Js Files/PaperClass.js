class Paper {
  constructor(x, y,radius) {
    var options = {
     /* density:1.2,
      friction: 0.5,
      restitution:1.0,
      isStatic : false*/
      isStatic : false,
          restitution : 0.5,
           friction : 0.5,
          density : 1.2
    };

    this.body = Matter.Bodies.circle(x, y, radius, options)
    this.radius =radius;
    this.image = loadImage("images/paper.png")
    World.add(world, this.body);
    
  };
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50,50);
    pop();
  };
};


