function setup(){
  createCanvas(800,800)
  background(0,0,100)
  angleMode(DEGREES)
  fill(0,0,100)

}

function draw(){
  translate(width/2 , height/2)
  fill(255,0,0)
  noStroke()
  ellipse(0,0,70,70)
  noFill()

  stroke(255,0,0)
  ellipse(0,0,150,150)

  stroke(255,255,0)
  ellipse(0,0,250,250)
  
  stroke(255,0,0)
  ellipse(0,0,350,350)
  
  stroke(255,0,0)
  ellipse(0,0,450,450)

  stroke(255,0,0)
  ellipse(0,0,550,550)


}