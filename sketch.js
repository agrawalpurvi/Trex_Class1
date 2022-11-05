var trex, trex_running, trex_collided;
var ground, invisible_ground, ground_img;
var cloud_img;
var o1, o2, o3, o4, o5, o6;
var game_over_img, restart_img, gameover, restart;

function preload(){
    trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
    trex_collided=loadAnimation("trex_collided.png"); 

    ground_img=loadImage("ground2.png");
    cloud_img=loadImage("cloud.png");

    o1=loadImage("obstacle1.png");
    o2=loadImage("obstacle2.png");
    o3=loadImage("obstacle3.png");
    o4=loadImage("obstacle4.png");
    o5=loadImage("obstacle5.png");
    o6=loadImage("obsatcle6.png");

    game_over_img=loadImage("gameOver.png");
    restart_img=loadImage('restart.png'); 
}

function setup(){
    createCanvas(600,200);

    trex=createSprite(50,180,20,50);
    trex.addAnimation("running",trex_running);
    trex.addAnimation("collided",trex_collided);

    trex.scale=0.5;

    ground=createSprite(200,180,400,20);
    ground.addImage(ground_img);


    gameover=createSprite(300,100);
    gameover.addImage(game_over_img);

    restart=createSprite(300,140);
    restart.addImage(restart_img);

    invisible_ground=createSprite(200,190,400,10);
    invisible_ground.visible=true;
}

function draw(){
    background("white");
    drawSprites();
}