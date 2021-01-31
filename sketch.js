var pla,plaImg,bg,pi1,pi2,pi3,pi4,pi5,pi6,pi7,pi8,pi9,pi10,pi11,pi12,pi13,pi14,pi15,pi16,ground,piGrp,b;
var  score,s1,s2,s3,s4,s5,s6,s7,s8,sGrp;
function preload(){
 plaImg = loadImage("bird.png");
  bg = loadImage("back.png");
}
function setup(){
  createCanvas(1500,540);
 pla = createSprite(70,270)
pla.addImage(plaImg)
pla.scale= 0.10;
  
  pi1 = createSprite(250,420,30,250);
  pi1.shapeColor = "red";
  
  pi2 = createSprite(250,50,30,100);
  pi2.shapeColor = "red";
  
  pi3 = createSprite(400,486,30,100);
  pi3.shapeColor = "cyan";
  
  pi4 = createSprite(400,70,30,250);
  pi4.shapeColor = "cyan";
  
  pi5 = createSprite(550,387,30,300);
  pi5.shapeColor = "red";
  
  pi6 = createSprite(550,50,30,100);
  pi6.shapeColor = "red";
  
  pi7 = createSprite(700,486,30,100);
  pi7.shapeColor = "cyan";
  
  pi8 = createSprite(700,150,30,300);
  pi8.shapeColor = "cyan";
  
  pi9 = createSprite(850,437,30,200);
  pi9.shapeColor = "red";
  
  pi10 = createSprite(850,100,30,200);
  pi10.shapeColor = "red";
  
  pi11 = createSprite(1000,486,30,100);
  pi11.shapeColor = "cyan";
  
  pi12 = createSprite(1000,150,30,300);
  pi12.shapeColor = "cyan";
  
  pi13 = createSprite(1150,387,30,300);
  pi13.shapeColor = "red";
  
  pi14 = createSprite(1150,50,30,100);
  pi14.shapeColor = "red";
  
  pi15 = createSprite(1300,486,30,100);
  pi15.shapeColor = "cyan";
  
  pi16 = createSprite(1300,150,30,300);
  pi16.shapeColor = "cyan";
  
  ground = createSprite(750,539,1500,3)
  
  piGrp = new Group();
 
  
  b = createSprite(750,1,1500,3);
  
  s1 = createSprite(270,270,1,540);
  s1.visible = false;
  
  s2 = createSprite(420,270,1,540);
  s2.visible = false;
  
  s4 = createSprite(570,270,1,540);
  s4.visible = false;
  
  s4 = createSprite(720,270,1,540);
  s4.visible = false;
  
  s5 = createSprite(870,270,1,540);
  s5.visible = false;
  
  s6 = createSprite(1020,270,1,540);
  s6.visible = false;
  
  s7 = createSprite(1170,270,1,540);
  s7.visible = false;
  
  s8 = createSprite(1320,270,1,540);
  s8.visible = false;
  
  score = 0;
  
}



function draw(){
  background(bg);
 
  
  if(keyDown("w") || keyDown("up") || keyDown("space")||mousePressedOver(pla)) {
         pla.velocityY  = -8;
     
    }
    pla.velocityY = pla.velocityY + 0.7;
  
  piGrp.add(pi1);
  piGrp.add(pi2);
  piGrp.add(pi3);
  piGrp.add(pi4);
  piGrp.add(pi5);
  piGrp.add(pi6);
  piGrp.add(pi7);
  piGrp.add(pi8);
  piGrp.add(pi9);
  piGrp.add(pi10);
  piGrp.add(pi11);
  piGrp.add(pi12);
  piGrp.add(pi13);
  piGrp.add(pi14);
  piGrp.add(pi15);
  piGrp.add(pi6);
  pla.collide(b);
  
  
  
  if(pla.isTouching(piGrp) || pla.isTouching(ground)){
    pla.y = 600;
    textSize(35);
    fill("white");
    text("YOU LOST",750,270);
       pi1.velocityX = - 4;
 pi2.velocityX = 0;
 pi3.velocityX = 0;
 pi4.velocityX = 0;
 pi5.velocityX = 0;
 pi6.velocityX = 0;
 pi7.velocityX = 0;
 pi8.velocityX = 0;
 pi9.velocityX = 0;
 pi10.velocityX = 0;
 pi11.velocityX = 0;
 pi12.velocityX = 0;
 pi13.velocityX = 0;
 pi14.velocityX = 0 ;
 pi15.velocityX = 0;
 pi16.velocityX = 0;
  }
   pi1.velocityX = - 4;
 pi2.velocityX = - 4;
 pi3.velocityX = - 4;
 pi4.velocityX = - 4;
 pi5.velocityX = - 4;
 pi6.velocityX = - 4;
 pi7.velocityX = - 4;
 pi8.velocityX = - 4;
 pi9.velocityX = - 4;
 pi10.velocityX = - 4;
 pi11.velocityX = - 4;
 pi12.velocityX = - 4;
 pi13.velocityX = - 4;
 pi14.velocityX = - 4;
 pi15.velocityX = - 4;
 pi16.velocityX = - 4;
  if(pi1.x<0){
  pi1.x = 1500;
   pi2.x = 1500;
   pi1.velocityX = pi1.velocityX+1;
   pi2.velocityX = pi1.velocityX+1;
  }
 if(pi3.x<0){
  pi3.x = 1500;
   pi4.x = 1500;
  pi3.velocityX = pi3.velocityX+1;
   pi4.velocityX = pi3.velocityX+1;
  }
 if(pi5.x<0){
  pi5.x = 1500;
   pi6.x = 1500;
  pi5.velocityX = pi5.velocityX+1;
   pi6.velocityX = pi6.velocityX+1;
  }
 if(pi7.x<0){
  pi7.x = 1500;
   pi8.x = 1500;
  pi7.velocityX = pi7.velocityX+1;
   pi8.velocityX = pi7.velocityX+1;
  }
 if(pi9.x<0){
  pi9.x = 1500;
   pi10.x = 1500;
  pi9.velocityX = pi9.velocityX+1;
   pi10.velocityX = pi9.velocityX+1;
  }
 if(pi11.x<0){
  pi11.x = 1500;
   pi12.x = 1500;
  pi11.velocityX = pi11.velocityX+1;
   pi12.velocityX = pi11.velocityX+1;
  }
 if(pi13.x<0){
  pi13.x = 1500;
   pi14.x = 1500;
   pi13.velocityX = pi13.velocityX+1;
   pi14.velocityX = pi13.velocityX+1;
  }
 if(pi15.x<0){
  pi15.x = 1500;
   pi16.x = 1500;
   pi15.velocityX = pi15.velocityX+1;
   pi16.velocityX = pi15.velocityX+1;
  }
drawSprites();
}
