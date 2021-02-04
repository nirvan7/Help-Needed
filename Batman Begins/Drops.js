     class Drops{
        constructor(x, y) {
            var options = {
                'restitution':0.1,
                'friction':0.00001,
            }
            this.x = x;
            this.y = y;
            this.body = Bodies.circle(this.x, this.y,1,options);
             World.add(world, this.body);
             Matter.Body.setStatic(this.body,true);   
          }
          display(){
           var pos =this.body.position;
       //    push();
        //  translate(pos.x, pos.y);
        // rectMode(CENTER);
          ellipseMode (CENTER);
          fill("blue");
          ellipse(pos.x, pos.y, this.r,this.r);
        //  pop();
          }
    }