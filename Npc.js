class Npc{
    constructor(x,y,r) {
      var options = {
        isStatic:false,
          restitution:0.9,
          friction:0.2,
          density:0.8
      }
      this.body = Bodies.circle(x,y,r,options);
   this.r=r
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
angle=angle+90
        ellipseMode(CENTER);
        ellipse( 0,0,this.r);
        pop();


    }

  };