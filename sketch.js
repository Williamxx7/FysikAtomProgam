let r =  1;
let x= 52
let b = 0
let circle1 = 1*1
let circle2 = 2*2
let circle3 = 3*3
let circle4 = 4*4
let circle5 = 5*5

let circle1en = 1
let circle2en = 2
let circle3en = 3
let circle4en = 4
let circle5en = 5

let circlecount = 1
let emisson = 0
let plusisson = 0
let et = false
let pet = false  
let numberx = 0

let mat = (-6.63*1/10000000000000000000000000000000000)*(3.000000000*100000000)*(1.097000000*1/10000000)

function setup(){
  createCanvas(1440,1000)
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

  fill(255,255,255)
  stroke(255,255,255)
  
  strokeWeight(1)
  textSize(20)
  
  if(et == true){
    text("Absorption: Efoton = ", (-width/2.2)-40,(-height/2.3)-25)
    numberx=150
    text(emisson, (-width/2.2)+ numberx,(-height/2.3)-24)
  } 
  else if(pet == true){
    text("Emission: Efoton = ", (-width/2.2)-40,(-height/2.3)-25)
    numberx=135
    text(emisson, (-width/2.2)+ numberx,(-height/2.3)-24)
  } else{text("Absorption: Efoton = 0", (-width/2.2)-40,(-height/2.3)-25)}

  text("Brintatomets energi med elektronen: ", (-width/2.2)-40, -height/2.4)
  
  
  if(circlecount == 1){
  text(mat*1/(circlecount*circlecount), (-width/4), -height/2.4)
  } 
  else if(circlecount == 2){
    text(mat*1/(circlecount*circlecount), (-width/4), -height/2.4)
  }
  else if(circlecount == 3){
    text(mat*1/((circlecount*circlecount)), (-width/4), -height/2.4)
  }
  else if(circlecount == 4){
    text(mat*1/((circlecount*circlecount)), (-width/4), -height/2.4)
  }
  else if(circlecount == 5){
    text(mat*1/((circlecount*circlecount)), (-width/4), -height/2.4)
  }
  
  
    rotate(r)
  fill(255,255,255)
  noStroke()
  ellipse(x,x,25,25)

  stroke(0)
  strokeWeight(3)
  line(x-3,x-3,x+3,x+3)

  
 
}

function keyReleased() {
  /*
  switch (key) {
    case value:
      
  
    case 1:
      dff
      break;
    default:
      break;
  }
*/

  if (keyCode == 38&&x<192) {
    x=x+35;
    circlecount += 1
    console.log(x)
    
    if(circlecount == 1){
      emisson = 0
      et = true
      pet = false
    } 

    else if(circlecount == 2){
      emisson = circle2-circle1
      et = true
      pet = false
    } 

    else if(circlecount == 3){
      emisson = circle3-circle2
      et = true
      pet = false
    } 

    else if(circlecount == 4){
      emisson = circle4-circle3
      et = true
      pet = false

    } 

    else if(circlecount == 5){
      emisson = circle5-circle4
      et = true
      pet = false
    } 

   

  } else {
    value = 0;
  }

  if (keyCode == 40&&x>52) {
    x=x-35;
    console.log(x)
    circlecount -=1

    if(circlecount == 0){
      emisson = 0
      pet = true
      et = false 
    } 

    else if(circlecount == 1){
      emisson = circle2-circle1
      pet = true
      et = false 
    } 

    else if(circlecount == 2){
      emisson = circle3-circle2
      pet = true
      et = false 
    } 

    else if(circlecount == 3){
      emisson = circle4-circle3
      pet = true
      et = false 
    } 

    else if(circlecount == 4){
      emisson = circle5-circle4
      pet = true
      et = false 
    } 

  } else {
    value = 0;
  }




}
