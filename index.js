let kitty, kittyImg, asteroids, asteroidImg, survivalTime, gameOver;

function preload() {
  kittyImg = loadImage('kitty.png');
  asteroidImg = loadImage('https://cdn-icons-png.flaticon.com/64/7480/7480279.png');
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  survivalTime = 0;
  gameOver = false;
  setupKitty();
}

function draw() {
  background(color(11, 11, 70)); // fixes kitty image trail

  fill(255); //white
  textSize(24);
  textAlign(CENTER);
  text('Help space kitty avoid the asteroids!', width / 2, height / 16);

  kitty.position.x = mouseX;
  kitty.position.y = mouseY;

  survivalTime = int(millis()/1000); // counts time since setup() function

  for (i = 0; i < 10; i++) {
    let ang = random(360);
    let px = width / 2 + 1000 * cos(ang);
    let py = height / 2 + 1000 * sin(ang);
    createAsteroid(px, py);
  }

  asteroids.cull(0);
  kitty.overlaps(asteroids, endGame);
}

function setupKitty() {
  kitty = createSprite(width/2, height/2); //spawns in center
  kitty.addImage(kittyImg);
}

function createAsteroid(px, py) {
  asteroids = new Group();
  //let a = createSprite(random(width), random(height), 25, 25);
  //a.shapeColor = color(random(100, 255));
 // a.velocity.x = random(0.5,5);
 // a.velocity.y = 0.5;
  //a.direction = random(360);
 // asteroids.add(a);
  let a = new Sprite(px, py, 90);
  a.direction = random(360);
  a.speed = 2.5;
  a.rotationSpeed = random(-1, 1);
  a.mass = 2;
  asteroids.add(a);
}

function endGame() {
  asteroids.remove();
  fill(255); //white
  textSize(24);
  textAlign(CENTER);
  text('Game Over! You survived ' + survivalTime + 'seconds', width / 2, height / 2);
  survivalTime = 0;
  gameOver = true;
}

function mousePressed() {
  if (gameOver) {
    reset();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
