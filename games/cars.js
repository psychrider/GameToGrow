//flags to switch lanes
let lflag = 0;
let rflag = 0;
let xValues=[];//array for x coordinates
let yValues = [];
let objects=[];
let Type = 0;
let cnv;
let life=3;
let score = 0;
let b1;
let b2;
let b3;
let b4;
let fire = 0;
let img1;
let img2;
let X;
let Y;
let level=1;
let spd=2;
let coin;
let err;

//the object on the road

class obj{
   constructor(){
       this.x = getX();//x coordinate of object
       this.y = getY();
       this.speed = spd; //speed of object, changes with level
       this.type = getType(); //0 for 'score' 1 for 'bomb'
   }  
   move(){
       this.y += this.speed;
       if(this.y > height){
           this.y = getY();
           this.x = getX();
           this.type = getType();
        }
        if(this.type == 0 && this.y >= 700 && lflag == 0 && this.x == 90 ){
            score ++;
            // console.log(score);
            coin.play();
            document.getElementById("Score").textContent="Score: "+score;
            document.getElementById("Score").value=score;
            this.y = getY();
           this.x = getX();
           this.type = getType();
        }
        if(this.type == 1 && this.y >= 700 && lflag == 0 && this.x == 90 ){
            life --;
            err.play();
            document.getElementById("Life").textContent="Life: "+life;
            document.getElementById("Life").value=life;
            this.y = getY();
           this.x = getX();
           this.type = getType();
        }
        if(this.type == 0 && this.y >= 700 && lflag == 1 && this.x == 190 ){
            score++;
            coin.play();
            // console.log(score);
            document.getElementById("Score").textContent="Score: "+score;
            document.getElementById("Score").value=score;
            this.y = getY();
           this.x = getX();
           this.type = getType();
        }
        if(this.type == 1 && this.y >= 700 && lflag == 1 && this.x == 190 ){
            life--;
            err.play();
            // console.log(life);
            document.getElementById("Life").textContent="Life: "+life;
            document.getElementById("Life").value=life;
            this.y = getY();
           this.x = getX();
           this.type = getType();
        }
        if(this.type == 0 && this.y >= 700 && rflag == 0 && this.x == 310 ){
            score ++;
            coin.play();
            // console.log(score);
            document.getElementById("Score").textContent="Score: "+score;
            document.getElementById("Score").value=score;
            this.y = getY();
           this.x = getX();
           this.type = getType();
        }
        if(this.type == 1 && this.y >= 700 && rflag == 0 && this.x == 310 ){
            life --;
            err.play();
            // console.log(life);
            document.getElementById("Life").textContent="Life: "+life;
            document.getElementById("Life").value=life;
            this.y = getY();
           this.x = getX();
           this.type = getType();
        }
        if(this.type == 0 && this.y >= 700 && rflag == 1 && this.x == 420 ){
            score++;
            coin.play();
            // console.log(score);
            document.getElementById("Score").textContent="Score: "+score;
            document.getElementById("Score").value=score;
            this.y = getY();
           this.x = getX();
           this.type = getType();
        }
        if(this.type == 1 && this.y >= 700 && rflag == 1 && this.x == 420 ){
            life--;
            err.play();
            // console.log(life);
            document.getElementById("Life").textContent="Life: "+life;
            document.getElementById("Life").value=life;
            this.y = getY();
           this.x = getX();
           this.type = getType();
        }

    }
   
   show(){
       //strokeWeight(1);
       noStroke();
       if(this.type == 0){
            fill(255,255,10);//pink score
            ellipse(this.x,this.y,40,40);
       }
       else if(this.type){
            fill(0);//black bomb
            ellipse(this.x,this.y,40,40);
       }
   }
}


function getType(){
    var t = Math.random();
    if(t >= 0.75) return 1;//less no. of bombs
    else return 0;
}

function getX(){
    var t = Math.floor(Math.random()*xValues.length);
    return xValues[t];
}

function getY(){
    var t = Math.floor(Math.random()*yValues.length);
    return yValues[t];
}

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
  }


function preload() {
    img1 = loadImage('images/car4.png');
    img2 = loadImage('images/car4.png')
}

//executes once
function setup(){
    cnv = createCanvas(500,900);
    centerCanvas(); 
    xValues = [90,190,310,420];
    yValues = [0,-150,-300,-450,-600,-750];
    X = (windowWidth - width) / 2;
    Y = (windowHeight - height) / 2;
    for(var i =0;i<10;i++){
        var o = new obj;
        objects[i] = o;
    }
    document.getElementById("menu").addEventListener("click",function(){
        window.open('age2menu.php','_self');
    });
    coin = loadSound('sounds/coin.mp3');
    err = loadSound('sounds/error.mp3');
}

function windowResized() {
    centerCanvas();
  }

//when key is pressed this function executes
function keyPressed(){
    if(keyCode == 65)    {
        if (lflag == 0){lflag = 1;}
        else if (lflag == 1){lflag = 0;}
        //console.log(lflag);
    }
    if(keyCode == 76){
        if (rflag == 0){rflag = 1;}
        else if (rflag == 1){rflag = 0;}
        //console.log(rflag);
    }
}
//loops forever
function draw(){
    noStroke();
    fill(100);
    rectMode(CENTER);
    rect(250,350,500,1050);
    strokeWeight(2);
    stroke(200);
    line(30,0,30,850);
    line(470,0,470,850);
    strokeWeight(4);
    line(250,0,250,850);

    //in which lane to draw the car
    if(lflag == 0){
        fill(255,175,0);
        image(img1, 30, 700, 120, 120);
    }
    else if(lflag == 1){
        fill(255,175,0);
        image(img1, 130, 700, 120, 120);
    }

    if(rflag == 0){
        fill(0,175,255);
        image(img2, 250, 700, 120, 120);
    }
    else if(rflag == 1){
        fill(0,175,255);
        image(img2, 360, 700, 120, 120);
    }
    for(var i =0; i<10; i++){
        objects[i].show();
        objects[i].move();        
    }
    // if(fire == 1){
    //     if(b1.f==1){b1.show(); b1.move();}
    //     if(b2.f==1){b2.show(); b2.move();}
    //     if(b3.f==1){b3.show(); b3.move();}
    //     if(b4.f==1){b4.show(); b4.move();}
    // }
    if(life==-1){
        noLoop();
        var x= alert('GAME OVER!');
    }
    if(score > 0 && score%5 ==0 ){spd+=1;}
}