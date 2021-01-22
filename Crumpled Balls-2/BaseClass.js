class BaseClass{
    constructor(x, y, diameter) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,diameter,options);
        this.diameter =diameter;
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.diameter);
        pop();
      }
}