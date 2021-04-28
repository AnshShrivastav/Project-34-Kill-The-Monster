const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImage


function preload() {

  bgImage=loadImage("background.jpg");
  
 
}

function setup() {
  createCanvas(2800, 2800);

   engine = Engine.create();
   world = engine.world;

  ground= new Ground(300,500,810,10);
  hero = new Hero(200,300,1);
  block1=new Block(520,250,50,50);
  block2=new Block(510,280,50,50);
  block3=new Block(500,300,50,50);
  block4=new Block(500,320,50,50);
  block5=new Block(500,350,50,50);

  block6=new Block(560,250,50,50);
  block7=new Block(570,350,50,50);
  block8=new Block(500,400,50,50);
  block9=new Block(540,450,50,50);
  block10=new Block(550,250,50,50);
  block11=new Block(560,200,50,50);
  block12=new Block(560,150,50,50);   

  monster=new Monster(700,20,20,10);
  //ground1=new Ground(860,400,100,10);

  fly= new Fly(hero.body,{x:255,y:200})

  

}

function draw() {
 
  background(bgImage);

  Engine.update(engine);

  ground.display();
  //ground1.display();
  
  hero.display();
  fill("red")
  monster.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("red")
  
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

