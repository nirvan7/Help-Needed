class Ball{
  constructor(x, y, diameter) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, diameter);
      this.diameter = diameter;
      this.image=loadImage ("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
  //  rectMode(CENTER);
    fill("red");
    circle(pos.x, pos.y, this.diameter);
    image(this.image, 0, 0, 20, 20);
    }
}
