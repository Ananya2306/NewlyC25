class Paper {
    constructor(x, y,radius) {
      var options = {
          isStatic : false,
          restitution : 1.0,
           friction : 0.5,
          density : 1.2
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y,radius, options);
       World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("blue"); 
      fill("red");
      circle(0, 0, this.radius);
      pop();
    }
  };