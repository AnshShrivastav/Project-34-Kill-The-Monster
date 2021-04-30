class Hero {
  constructor(x,y,r) {
    var options = {
        frictionAir:2,
        density:1,
        restitution:55
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("Superhero-01.png");
    this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
    World.add(world, this.body);
  }
  display(){
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,200,150);
  }
}
