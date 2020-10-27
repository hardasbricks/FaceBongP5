let capture;
let ctracker;
let bong;
let wait;
let first;

function setup() {
  createCanvas(400, 225);
  capture=createCapture(VIDEO);
  capture.size(400, 225);
  capture.hide();
  first = 0;
  wait = 100;

  ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(capture.elt);
  soundFormats('mp3', 'ogg');
  bong = loadSound('assets/bong.mp3');
}

function draw() {
  background(220);
  image(capture, 0, 0);

  var positions = ctracker.getCurrentPosition();
  if(positions){
    positions.forEach(pos => {
      fill(255, 0, 0);
      noStroke();
      circle(pos[0], pos[1], 3);
    });

    const mouthTop = createVector(positions[60][0], positions[60][1]);
    let mouthBottom = createVector(positions[57][0], positions[57][1]);

    const mouthDist = mouthTop.sub(mouthBottom).mag();
    
    if(mouthDist > 10){
    //   if(first == 0){wait = 0; first++;}
    //   if(wait == 0){
    //     bong.play();
    //   }
    //   else if(wait > 200){
    //     wait = 0;
    //   }
    //   else{
    //     wait++;
    //   }
         
    // }
    // else{
    //   if(!(first === 0)){
    //     wait++;
    //   }
    // }
    // print(wait);
    // print(mouthDist);
    }
  }
}
