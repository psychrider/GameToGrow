let cnv;//for canvas
let video;
let score = 0;
let life=3;
let nosex =0;
let nosey =0;
let leyex = 0;
let leyey = 0;
let d =0 ;//distance between left eye and nose
let Poses = [];//for skeleton function
let options =  {
  architecture: 'MobileNetV1',
  imageScaleFactor: 0.3,
  outputStride: 16,
  flipHorizontal: false,
  minConfidence: 0.5,
  maxPoseDetections: 5,
  scoreThreshold: 0.5,
  nmsRadius: 20,
  detectionType: 'single',
  inputResolution: 513,
  multiplier: 0.75,
  quantBytes: 2
}
let objects=[];
let xValues =[];
let rwx;
let rwy;
let bLock=0;
let sLock=0;
let X;
let Y;
let sc="Score: 0";
let lf="Life: 3";
let coin;
let err;
class obj{
  constructor(){
    this.x = getX();//x coordinate of object
    this.y = getY();
    this.type = getType(); //0 for 'score' 1 for 'bomb'
    this.speed = 1; //speed of object, changes with level      
  }

  move(){
    this.y += this.speed;
  
    if(this.y > height){
      this.y = getY();
    }

    let p = Math.round((this.y)/100);
    let q = Math.round((this.x)/100);
  
  
    if(p == rwy && q == rwx && this.type == 0){
      //console.log("displaced");
      this.y = getY();
      score+=1;
      coin.play();
      document.getElementById("Score").value=score;
      //document.getElementById("Score").placeholder=score;
      sc = "Score: "+score.toString();
      //console.log(sc);
    }
    if(p == rwy && q == rwx && this.type == 1){
      //console.log("displaced");
      this.y = getY();
      life-=1;
      err.play();
      document.getElementById("Life").value=life;
      //document.getElementById("Life").placeholder=life;
      lf = "Life: "+life.toString();
    }    
  }
  
  show(){
      strokeWeight(1);
      stroke(200);
      if(this.type == 0){
        fill(154,205,50);//pink score
        ellipse(this.x,this.y,25,25);
      }
      else if(this.type){
        fill(0);//black bomb
        ellipse(this.x,this.y,25,25);
      }
  }
}

function getType(){
  var t = Math.random();
  if(t >= 0.6) return 1;//less no. of bombs
  else return 0;
}

function getX(){
  var t = Math.floor(Math.random()*xValues.length);
  return xValues[t];
}

function getY(){
  var t = Math.floor(Math.random()*yValues.length);
  return yValues[t]-100;
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}


function modelReady(){
  console.log("Model Ready");
} 


function gotPoses(poses){
  console.log(poses);
  Poses = poses;
  if(poses.length > 0){
    nosex = poses[0].pose.keypoints[0].position.x;
    nosey = poses[0].pose.keypoints[0].position.y;
    leyex = poses[0].pose.keypoints[1].position.x;
    leyey = poses[0].pose.keypoints[1].position.y;
    d = dist(nosex,nosey,leyex,leyey);    
  }
}


// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < Poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = Poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255,255,0);
        noStroke();
        //strokeWeight(2);
        //stroke(230,230,255);
        ellipse(keypoint.position.x, keypoint.position.y, 5, 5);  
        //drawing sword in the right hand
        if(pose.keypoints[10].score > 0.2){
          let rwristx = pose.keypoints[10].position.x;//right wrist x coordinate
          let rwristy = pose.keypoints[10].position.y;//right wrist y coordinate
          stroke(100,100,100);
          fill(200);
          rect(rwristx,rwristy-100,15,150,30,30,1,1);
          rwx = Math.round(rwristx/100);
          rwy = Math.round(rwristy/100);
        }
      }
    }
  }
}


// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < Poses.length; i++) {
    let skeleton = Poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      strokeWeight(2);
      stroke(0, 255, 100);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}

//loops over and over
function draw() {
  image(video, 0, 0);
  drawKeypoints();
  drawSkeleton();
  for(var i=0; i<10; i++){
    t = objects[i];
    t.show();
    t.move();
  }
  stroke(255);
  fill(0,255,0);
  textSize(16);
  text(sc,X-400,Y+300);
  text(lf,X-400,Y+320);

  if(life == 0){
    noLoop();
    var pro = alert('You ran out of life :(');
  }
}

//runs only once
function setup() {
  cnv = createCanvas(640, 480);
  centerCanvas();
  w=width;
  h=height;
  X = (windowWidth - width) / 2;
  Y = (windowHeight - height) / 2;
  xValues =[100,w/2,w-100];
  yValues = [0,-100,-200,-300,-600,-400,-500,-700,-800,-900];
  video = createCapture(VIDEO);//capturing the vid
  video.hide();
  poseNet = ml5.poseNet(video,options, modelReady);//fires modelReady when model is ready
  poseNet.on('pose', gotPoses);
  for(var i=0;i<10;i++){
    let o = new obj;
    objects[i]=o;
  }
  document.getElementById("menu").addEventListener("click",function(){
    window.open("age1menu.php","_self");
  });
  coin = loadSound("sounds/coin.mp3");
  err = loadSound("sounds/error.mp3");
}