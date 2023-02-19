let kitty, kittyImg, spaceImg;
let asteroids;
function preload() {
  kittyImg = loadImage('/images/kitty.png');
  //spaceImg = loadImage('/images/space.jpg');
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  kitty = createSprite(width/2, height/2);
  kitty.addImage(kittyImg);

  asteroids = new Group();
  for (let i = 0; i < 10; i++) {
    let a = createSprite(random(width), random(height), 25, 25);
    a.shapeColor = color(random(200, 255));
    asteroids.add(a);
  }
}

function draw() {
  background(color(11, 11, 70)); // fixes kitty image trail

  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('Avoid the asteroids!', width / 2, height / 2);

  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
}
