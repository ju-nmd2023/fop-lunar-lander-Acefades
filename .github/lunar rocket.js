let rocketX = 300;
let rocketY = -30;
let speed = 0;

let gravity = 5;
let velocity = 0.5;

let gameStatus = "start";

function mainScreen() {
  background(20);
  fill(255, 50);
  rect(230, 210, 230, 100, 30);
  fill(255);
  textSize(20);
  text("Click to start", 290, 265);
  text("Use upKeyArrow to controll the speed of the spaceship", 90, 360);
} 

function resultScreen() {
  background(0);
  fill(255, 50);
  rect(230, 210, 230, 100, 30);
  fill(255);
  textSize(30);
  text("you lost", 300, 265);
}

function youWon() {
  background(0);
  fill(255, 50);
  rect(230, 210, 230, 100, 30);
  fill(255);
  textSize(30);
  text("you won", 290, 265);
}

function drawMoon(x, y) {
  let color1 = color(148, 87, 235); // Purple color
  let color2 = color(155, 100, 20); // M color

  // Create a gradient using lerpColor
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color1, color2, inter);

    stroke(c);
    line(0, i, width, i);
  }
  //moon
  fill(128);
  ellipse(x + 200, y + 150, 900, 300);

  //landing space
  fill(255, 155, 120);
  ellipse(x + 150, 470, 50, 90);

  //moon details
  fill(255);
  ellipse(x - 40, y + 90, 20, 20);
  ellipse(x + 90, y + 95, 30, 30);
  ellipse(x + 100, y + 120, 40, 40);
  ellipse(x + 250, y + 100, 50, 50);
  ellipse(x + 370, y + 100, 20, 20);
  ellipse(x + 300, y + 86, 30, 30);
}
let acceleration = 0;

function draw() {
  drawMoon(250, 400);
  clear();

  if (gameStatus == "start") {
    mainScreen();
  } else if (gameStatus == "game") {
    //rocketY = rocketY + speed;
    if (keyIsDown(38)) {
      acceleration = 7;
      velocity = 0;
    } else {
    }

    speed = gravity + velocity;
    rocketY = rocketY + speed - acceleration;
    velocity += 2;

    //moon
    drawMoon(150, 400);

    //landing
    rocket(rocketX, rocketY);
    if (rocketY > 430) {
      if (velocity > 11) {
        gameStatus = "result";
      } else {
        gameStatus = "win";
      }
      console.log(velocity);
    }
  } else if (gameStatus == "result") {
    //"win" but "result was"
    // console.log(gameStatus);
    resultScreen();
  } else if (gameStatus == "win") {
    youWon();
  }
}

// blir konstigt på denna console.lo g(draw);

function rocket(x, y) {
  //flames
  fill(255, 127, 80);
  noStroke();
  ellipse(x, y + random(50, 65), 20, 50);
  fill(255, 215, 0);
  ellipse(x, y + random(50, 65), 20, 50);

  //wings
  fill(202, 50);
  arc(x + 3, y + 40, 50, 50, 100, 90);
  arc(x - 3, y + 40, 50, 50, 0, 80);

  //body
  fill(202, 50, 0);
  ellipse(x, y, 50, 150);

  //windows
  fill(255);
  ellipse(x, y + 20, 20, 20);
  ellipse(x, y - 10, 20, 20);
  ellipse(x, y - 40, 20, 20);
}

function mouseClicked() {
  //gameStatus="game";
  if (
    gameStatus == "start" &&
    mouseX > 249 &&
    mouseX < 478 &&
    mouseY > 250 &&
    mouseY < 349
  ) {
    gameStatus = "game";
    console.log("start");
  }
  if (
    gameStatus == "result" &&
    mouseX > 249 &&
    mouseX < 478 &&
    mouseY > 250 &&
    mouseY < 349
  ) {
    console.log("gameStatus end");
    gameStatus = "game";
    rocketY = 0;
    gravity = 5;
    velocity = 0.5;
  }
  if (
    gameStatus == "win" &&
    mouseX > 249 &&
    mouseX < 478 &&
    mouseY > 250 &&
    mouseY < 349
  ) {
    console.log("gameStatus end");
    gameStatus = "game";
    rocketY = 0;
    gravity = 5;
    velocity = 0.5;
  }
}

// create 2 variables, velocity and gravity, then gravity values changes, 1,2,3. Then you add the gravity to velocity, velocity = 0 and then when gravity is added to velocity. so velocity = gravity + velocity. y= y + velocity
