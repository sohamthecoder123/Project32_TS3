const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var score = 0;

var stoneState = "onCatapult"

function preload() {
    backgroundImg = loadImage("bgImg.png");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    //the ground and other platforms
    ground = new Ground(600, height,1200, 5);
    platform1 = new Ground(350, 365, 225, 20);
    platform2 = new Ground(700, 245, 225, 20);

    //the boxes
    box1 = new Box(280,350,30,40);
    box2 = new Box(310,350,30,40);
    box3 = new Box(340,350,30,40);
    box4 = new Box(370,350,30,40);
    box5 = new Box(400,350,30,40);

    box6 = new Box(280, 335, 30, 40);
    box7 = new Box(310, 335, 30, 40);
    box8 = new Box(340, 335, 30, 40);
    box9 = new Box(370, 335, 30, 40);
    box10 = new Box(400, 335, 30, 40);

    box17 = new Box(630, 200, 30, 40);
    box18 = new Box(660, 200, 30, 40);
    box19 = new Box(690, 200, 30, 40);
    box20 = new Box(720, 200, 30, 40);
    box21 = new Box(750, 200, 30, 40);

    box22 = new Box(660, 190, 30, 40);
    box23 = new Box(690, 190, 30, 40);
    box24 = new Box(720, 190, 30, 40);

    box25 = new Box(690, 180, 30, 40);

    shooter = new Shooter(100, 200, 10, 10);

    var pointBloc = {
        x:100,
        y:200
    }
    sling1 = new SlingShot(shooter.body, pointBloc)
}

function draw(){
    background(backgroundImg);
    noStroke();
    textSize(20);
    fill(255);
    text("Score: " + score, 750, 40);
    stroke(0);
    Engine.update(engine);
    strokeWeight(4);
    
    textSize(50);
    fill(221, 57, 24);
    text("Siege the Towers!", 300, 45);

    ground.display();

    platform1.display();
    platform2.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();

    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();
    box20.display();
    box20.score();
    box21.display();
    box21.score();

    box22.display();
    box22.score();
    box23.display();
    box23.score();
    box24.display();
    box24.score();

    box25.display();
    box25.score();

    shooter.display();
    sling1.display();

}

function mouseDragged(){
    if(stoneState !== "launched"){
    Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling1.fly();
    stoneState = "launched";
}

function keyPressed(){
    if(keyCode===32){
        sling1.attach(shooter.body);
        stoneState = "onSling"
    }
}