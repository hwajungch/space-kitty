let kitty, kittyImg, asteroids, asteroidImg, survivalTime, tutorialOver;

function preload() {
  kittyImg = loadImage('kitty.png');
  asteroidImg = loadImage('https://cdn-icons-png.flaticon.com/64/7480/7480279.png');
  kitty = new Sprite(width/2, height/2); //spawns in center
  kitty.addImage(kittyImg);
  asteroids = new Group();
  asteroids.addImage(asteroidImg);
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  survivalTime = 0;
  setInterval(timer,1000);
  createAsteroids();
}

function draw() {
  background(color(11, 11, 70)); // fixes kitty image trail

  fill(255); //white
  textSize(24);
  textAlign(CENTER);
  if (tutorialOver) {
    text('Help space kitty! You can do it!', width / 2, height / 16);
  } else {
    text('Move your mouse to avoid the asteroids!', width / 2, height / 16);
  }

  kitty.position.x = mouseX;
  kitty.position.y = mouseY;

  text('Time: ' + survivalTime + ' seconds', width / 2, height*2 / 16);

  // from p5play.org demos
  for (let a of asteroids) {
		if (a.x < -32) a.x = width + 32;
		if (a.x > width + 32) a.x = -32;
		if (a.y < -32) a.y = height + 32;
		if (a.y > height + 32) a.y = -32;
    a.addSpeed(0.01);
	}

  if (kitty.collides(asteroids)) {
    endGame();
  }
}

function createAsteroids() {
  for (let i = 0; i < 10; i++) {
    let a = new asteroids.Sprite(random(width), height, 64);
    a.speed = 2;
    a.mass = 2;
    a.rotationSpeed = random(-1, 1);
    a.direction = random(360);
  }
}

function endGame() {
  asteroids.remove();
  survivalTime = 0;
  tutorialOver = true;
  createAsteroids();
}

function timer() {
  survivalTime += 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
