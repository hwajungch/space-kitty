let kitty, kittyImg;
let asteroids;
function preload() {
  kittyImg = loadImage('https://cdn-icons-png.flaticon.com/128/763/763763.png');
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
  background(255); // fixes kitty image trail

  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('Avoid the asteroids!', width / 2, height / 2);

  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
}