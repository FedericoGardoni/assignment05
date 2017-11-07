var pausa = false;
var crop;
var vol = 0;
function preload() {
  cover = loadImage("./assets/cover.jpg");
  cover2 = loadImage("./assets/cover.jpg");
  canzone = loadSound("./assets/PodingtonBear_Starling.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  canzone.play();
   analyzer = new p5.Amplitude();
   analyzer.setInput(canzone);
   frameRate(60);
  
}

function draw() {
  vol = analyzer.getLevel();
  var vol2 = map(vol,0,1,0,2);
 if (vol2 >= 0 && vol2<.2) { background(140,10,10,50);}
 else if (vol2 >= .2 && vol2<0.5) { background(120,20,20,50);}
 else {background(70,30,30,50);}
   
  var crop = width/300;
  var crop2 = crop/1.667;

  //image(cover, crop/8, crop/7, crop*6/8,crop*1.7778);
  var img=image(cover, crop*40, crop*40, cover.width/6*crop,cover.height/6*crop);
 if (mouseX>=crop*40 && mouseX<=255*crop && mouseY>=crop2*65 && mouseY<=270*crop2) {
    cover.filter("gray");
    push();
    fill(255,100,100,90);
    strokeWeight(2);
    stroke(100,10,10);
    rect(crop*40, crop*40, cover.width/6*crop, cover.height/6*crop);
    
    push();
    stroke(30);
    fill(210);
  textAlign(CENTER);
  textSize(25);
  textFont('Montserrat');
  text("Made by: Podington Bear", width/2, cover.height/12*crop);
    text("Song Name: Starling", width/2, cover.height/10*crop);
      text("Album: Solo Instruments", width/2, cover.height/8.6*crop);
    pop();
    pop();
  }
  else {
  image(cover2, crop*40, crop*40, cover.width/6*crop,cover.height/6*crop);
  }

 textAlign(CENTER);
  textSize(35);
  textFont('Rozha One');
  text("Click to pause/play", width/2, cover.height/6*crop+crop*62);

  push();
  fill(130,30,30);
  noStroke();
  ellipse(width/2,cover.height/3.5*crop,vol*200,vol*200);
  pop();
//console.log(testo);
}


function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}


function funzionePausa() {
  pausa = !pausa;
  if (pausa === true) {
     canzone.pause();
  }
  else {
    canzone.play();
  }
}


function mouseClicked() {
funzionePausa();
}

