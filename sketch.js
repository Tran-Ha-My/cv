
let angle = 0;
let a =10;
var song;
var button1;
var button2;
var angleRotate = 0.0;

var run = 0;
var catX1 = 50;
var catY1 = 350;
var catX2 = 350;
var catY2 = 100;

var catX3 = 0;
var catY3 = 350;

var catX4 = 400;
var catY4 = 5;

let cat;
let present;
let pop;
var drops = [];

let video;
let videoPath = 'heyhey.mp4';



function preload(){
    video  = createVideo(videoPath); // go to https://www.codecademy.com/courses/learn-p5js/lessons/p5js-images-and-videos/exercises/p5js-videos to learn  more about videos
    pop = loadSound("pop.mp3"); 
    present = loadImage("box.png");
    song = loadSound("BDAY.mp3");  // it actually won't start unless u type song.play(); or song.stop(); on CHROME
}


function playSound(){
  song.play();
  song.setVolume(0.2);   // 1 = MAX
    }


function setup() {
  createCanvas(400,400);

  cat = loadImage('nyan.png');
  present = loadImage('box.png');

    function stopSound(){
      song.stop();
    }

  button1 = createButton("PLAY");
  button1.mousePressed(playSound);

  button2 = createButton("STOP");
  button2.mousePressed(stopSound);

  background(0);
  angleMode(DEGREES);

  alert("HAPPY BIRTHDAY EIII");
  alert("PHÓNG TO MÀN HÌNH LÊN");
  alert("DI CON TRỎ CHUỘT CHẠY VÒNG VÒNG. KHÔNG ẤN CHUỘT");
    setTimeout( function(){ alert("BẤM NÚT 'PLAY'"); }, 
    4000);

 

// i noticed that if i let width = 640 the image will double, and i increase the height manually to view the full image

for (var i = 0; i < 100; i++) {
  drops[i] = new Drop();
}

setTimeout( function() {
  alert("Bây giờ thì bấm vào màn hình rồi GIỮ NÓ");
}, 10000);

setTimeout( function(){
alert("Ermm... chắc là phải ấn lại rồi đó :D");},
  16000);

    video.hide();

}



function draw() {
    
  background(89, 52, 235);
  //rotate(angle);
  //angle += 1;
  noStroke();
  fill(252, 3, 123);
  beginShape();

  let spacing =  map(mouseX, 0, width, 5, 100);
      for (let t = 0; t < 400; t+= spacing){
        a = map(mouseY, 0, height, 4, 13);
        let x  = 16*Math.pow(sin(t), 3);
        let y = 13*cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t);
        vertex(a*x + 200, -a*y + 200); // it's upside down so I made y negative
      
  endShape(CLOSE);  //close will complete the shape and "close" the circuit (optional)
      }

    
      if (mouseIsPressed == true){
      showBox();
      textSize(30);
      textStyle(BOLD);
      fill(0);
      text('HAPPY BIRTHDAYYY', 150, 200); 
      } 
      show();
      
      for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();
      }

      if (mouseIsPressed == true){
        video.play();
          resizeCanvas(480, 852);
          image(video, 230, 400, 480, 852);
      }
}
 

    function showBox(){
      image(present,200, 200,  100,100);
    }


    function show(){
      noStroke();
      fill(0);
      imageMode(CENTER);

      image(cat,catX1, catY1,150, 100);
      catX1 +=10;
      if(catX1 > width){
        catX1 = -catX1;
        }

        image(cat,catX2 , catY2 ,150, 100);
      catX2 +=5;
        if(catX2 > width ){
          catX2 = -catX2;
          }
             
          
      image(cat, catX3 , catY3 ,150/2, 100/2);
  catX3 +=7;
  catY3 -=6;
    if(catX3 > width && catY3 < height){
      catX3 = -catX3;
      catY3= -catY3;
      }

      image(cat, catX4 , catY4  ,150/2, 100/2);
      catX4 -=7;
      catY4 +=6;
        if(catX4 > width && catY4 < height){
          catX4= -catX4;
          catY4 = -catY4;
          }
    

      }

  
        /* I GOT REFERENCE FROM GITHUB - TAKE NOTES ON HOW THEY USE FUNCTION
        INSTEAD OF CLASS   */ 
        
    function Drop(x,y,z, len, yspeed) {

     this.x  = random(width); 
     this.y  = random(-500, -50); //negative values because drop first begins off screen to give a realistic effect
     this.z  = random(0, 20); // z value is to give a perspective view , farther and nearer drops effect
     this.len = map(this.z, 0, 20, 10, 20); 
     this.yspeed  = map(this.z, 0, 20, 1, 20); 

      this.fall = function() {
    this.y += this.yspeed;
    let grav = map(this.z, 0, 20, 0, 0.2);   // if z is near then gravity on drop is more
    this.yspeed += grav;  

    if (this.y > height) { 
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

   this.show = function() { 
   var thicc = map(this.z, 0, 20, 1, 3); //if z is near , drop THICCER
    strokeWeight(thicc); 
    stroke(138, 43, 226); 
    line(this.x, this.y, this.x, this.y+this.len);
  };
}
    

     


     
