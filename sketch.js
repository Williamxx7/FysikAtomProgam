let r =  1;
let x= 52



function setup(){
  createCanvas(1920,975)
  
  angleMode(DEGREES)
  fill(0,0,100)

}

function draw(){
  background(0,0,100)
  translate(width/2 , height/2)
  fill(255,0,0)
  noStroke()
  ellipse(0,0,70,70)
  noFill()
  r++;

  stroke(255,0,0)
  ellipse(0,0,150,150)

  stroke(255,255,0)
  ellipse(0,0,250,250)
  
  stroke(0,255,0)
  ellipse(0,0,350,350)
  
  stroke(0,0,255)
  ellipse(0,0,450,450)

  stroke(255,0,255)
  ellipse(0,0,550,550)

  rotate(r)
  fill(255,255,255)
  noStroke()
  ellipse(x,x,25,25)

  stroke(0)
  strokeWeight(3)
  line(49,49,55,55)

  if(keyIsPressed){
    s = true
  }


  
}