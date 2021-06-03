	  var fixedRect, movingRect;
  var objectA , objectB, objectC;

  function setup() {
    createCanvas(1200,800);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;
    movingRect = createSprite(400,200,80,30);
    movingRect.shapeColor = "green";
    movingRect.debug = true;

    objectA=createSprite(100,100,50);
    objectA.shapeColor="blue";

    objectB=createSprite(200,100,50,50);
    objectB.shapeColor="blue";

    objectC=createSprite(300,100,50,50);
    objectC.shapeColor="blue";


  }

  function draw() {
    background(0,0,0);  
    objectA.x = World.mouseX;
    objectA.y = World.mouseY;

    if (isTouching(objectA,objectB)){
      objectA.shapeColor="green"
      objectB.shapeColor="green"
    }
    else
    {
      objectA.shapeColor="blue"
      objectB.shapeColor="blue"
    }


    if (isTouching(objectA,objectC)){
      objectA.shapeColor="silver"
      objectC.shapeColor="silver"
    }
    else
    {
      objectA.shapeColor="blue"
      objectC.shapeColor="blue"
    }


    drawSprites();
  }


  