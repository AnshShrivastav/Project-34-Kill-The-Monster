class Monster {
  constructor(x,y,r) {
    var options = { 
        isStatic:false,
        frictionAir:1,
        density:1,
        restitution:0.1
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("Monster-01.png");
    this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
    World.add(world, this.body);
  }
  display(){
     push();
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,300,300);
      pop();
  }
}
