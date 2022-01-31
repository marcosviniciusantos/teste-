var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cd254686-6923-46d5-b373-7b9240970f32","9df14d11-3853-4c5e-99f2-def3d487584f","0a3a280c-1102-48ea-bdca-22781325e5d3"],"propsByKey":{"cd254686-6923-46d5-b373-7b9240970f32":{"name":"bola","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":2,"looping":true,"frameDelay":12,"version":"Wwyv8mj0YgjhOJpl6Jg.o6aP0oNjVZF7","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":788},"rootRelativePath":"assets/cd254686-6923-46d5-b373-7b9240970f32.png"},"9df14d11-3853-4c5e-99f2-def3d487584f":{"name":"boneco","sourceUrl":null,"frameSize":{"x":175,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"U6k2pq4mizHexmC6iw2cL_K_OtgXc0Zv","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":400},"rootRelativePath":"assets/9df14d11-3853-4c5e-99f2-def3d487584f.png"},"0a3a280c-1102-48ea-bdca-22781325e5d3":{"name":"menina","sourceUrl":"assets/api/v1/animation-library/gamelab/lc.kZRNOjmRnThhoJJmIYC4w6ZXFL2bW/category_people/green_shirt_wave2.png","frameSize":{"x":157,"y":392},"frameCount":1,"looping":true,"frameDelay":15,"version":"lc.kZRNOjmRnThhoJJmIYC4w6ZXFL2bW","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":157,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lc.kZRNOjmRnThhoJJmIYC4w6ZXFL2bW/category_people/green_shirt_wave2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
ball.setAnimation("bola");
ball.scale=0.1
playerPaddle.setAnimation("boneco");        
playerPaddle.scale=0.3
computerPaddle.setAnimation("menina");
computerPaddle.scale=0.3
                            
   

function draw() {
  background(220);
for (var i = 0; i < 400; i=20+i) {
line(200, i,200, i+10);
        
  }
    if (ball.isTouching(playerPaddle)){
 playSound("assets/default.mp3", false);
           
      
}
    
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  
  if(keyDown("space"))
  {
     ball.velocityX=2;
     ball.velocityY=3;
  }
  
  computerPaddle.y=ball.y;

    
  //criando a linha
  // line(200,0,       200, 10)
  // line(200,0+20,    200, 0+10+20)
  // line(200,0+20+20 ,200, 0+10+20+20)
  
  
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
  
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
