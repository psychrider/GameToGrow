let x =0;
let bColor = 'rgba(100,100,100,0.2)';
let bSize = 50;
let bgColor = 'rgba(220,200,0,255)';
let fillColor = 'rgba(100,100,100,0.2)';
let slider;
let flag = 1;
let cnv;

function centerCanvas() {
    var x = (windowWidth - width) / 2+125;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
  }
function windowResized() {
    centerCanvas();
}

function setup(){
	cnv = createCanvas(1200,720);
	centerCanvas();	
	background(bgColor);
	
	let brushBtn = createButton('🖌️');
	brushBtn.position(825,50);
	let eraseBtn = createButton(' ⚪ ');
	eraseBtn.position(870,50);

	slider = createSlider(5, 200, 50,1);
  	slider.position(820	, 100);
	slider.style('width', '80px');	

	document.querySelectorAll("button")[0].addEventListener("click",function(){
		fillColor = bColor;
	});
	document.querySelectorAll("button")[1].addEventListener("click",function(){
		fillColor = bgColor;
	});
	document.getElementById("back").addEventListener("click",function(){
		window.open("age1menu.php","_self");
	});

	c1picker = document.querySelector("#c1picker");
  	c1picker.addEventListener("change", updateBrush, false);
	c1picker.select();
	  
	c2picker = document.querySelector("#c2picker");
  	c2picker.addEventListener("change", updateBack, false);
  	c2picker.select();

}
function updateBrush(event) {
	bColor = event.target.value;
	bColor = "#"+bColor[1]+bColor[2]+bColor[3]+bColor[4]+bColor[5]+bColor[6]+"33";
	//console.log(bColor);
	fillColor = bColor;
  }

function updateBack(event) {
	bgColor = event.target.value;
	background(bgColor);
}


function draw(){
	bSize = slider.value(); 
	noStroke();
	fill(fillColor);
	if(flag == 1){
		ellipse(mouseX,mouseY,bSize,bSize);
	}
	fill(200,40);
	rectMode(CENTER);
	rect(600,60,100,100,5,5,5,5);
}
