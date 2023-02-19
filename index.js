let kitty, kittyImg;
let asteroids;
function preload() {
  kittyImg = loadImage('kitty.png');
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  setupKitty();
  setupAsteroids();
}

function draw() {
  background(color(11, 11, 70)); // fixes kitty image trail

  fill(255); //white
  textSize(24);
  textAlign(CENTER);
  text('Avoid the asteroids!', width / 2, height / 2);

  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
}

function setupKitty() {
  kitty = createSprite(width/2, height/2); //spawns in center
  kitty.addImage(kittyImg);
}

function setupAsteroids() {
  asteroids = new Group();
  for (let i = 0; i < 10; i++) {
    let a = createSprite(random(width), random(height), 25, 25);
    a.shapeColor = color(random(100, 255));
    asteroids.add(a);
  }
}
