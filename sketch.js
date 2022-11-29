let r =  1;
let x= 52
let b = 0

let circlecount = 1
let et = false
let pet = false  
let numberx = 0

let mat = (-6.63*1/10000000000000000000000000000000000)*(3.000000000*100000000)*(1.097000000*1/10000000)

let lastcircle = -13.6
let thiscircle = -13.6
let calc 


function setup(){
  createCanvas(1536,864)
  angleMode(DEGREES)
  fill(0,0,100)

}


function draw(){
  background(0,0,0)
  translate(width/2 , height/2)
  fill(255,0,0)
  noStroke()
  ellipse(0,0,70,70)
  noFill()

  let colorlist2 =['red', 'yellow', 'green', 'blue', 'purple', 'orange'] 
  strokeWeight(4)

  for(let elk = 0; elk<6; elk++){
    stroke(colorlist2[elk])
    ellipse(0,0,(elk+150+(100*elk)),(elk+150+(100*elk)))
  }
  

  noStroke()
  button1 = createButton('1')
  button1.position(width/2-12.5, height/2-105);
  button1.mousePressed(button1cliked)

  button2 = createButton('2')
  button2.position(width/2-12.5, height/2-155);
  button2.mousePressed(button2cliked)

  button3 = createButton('3')
  button3.position(width/2-12.5, height/2-205);
  button3.mousePressed(button3cliked)

  button4 = createButton('4')
  button4.position(width/2-12.5, height/2-255);
  button4.mousePressed(button4cliked)

  button5 = createButton('5')
  button5.position(width/2-12.5, height/2-305);
  button5.mousePressed(button5cliked)
  
  button6 = createButton('6')
  button6.position(width/2-12.5, height/2-355);
  button6.mousePressed(button6cliked)

  fill(255,255,255)
  stroke(255,255,255)
  
  strokeWeight(1)
  textSize(20)
  
  if(et == true){
    text("Absorption: Efoton = ", (-width/2.2)-40,(-height/2.3)-25)
    numberx=150
    text(calc + " J", (-width/2.2)+ numberx,(-height/2.3)-24)
  } 
  else if(pet == true){
    text("Emission: Efoton = ", (-width/2.2)-40,(-height/2.3)-25)
    numberx=135
    text(calc+" J", (-width/2.2)+ numberx,(-height/2.3)-24)
  } else{text("Absorption: Efoton = 0", (-width/2.2)-40,(-height/2.3)-25)}

  text("Brintatomets energi med elektronen: ", (-width/2.2)-40, -height/2.4)

  text(mat*1/(circlecount*circlecount)+ " J", (-width/3.8), -height/2.4)
  

  r++

  rotate(r)
  fill(255,255,255)
  noStroke()
  ellipse(x,x,25,25)

  stroke(0)
  strokeWeight(3)
  //line(x-3,x-3,x+3,x+3)



  
 
}



function button1cliked(){
  if(button1 && x == 52){
  }
  else if(button1 && x>52){
    thiscircle = -13.6
    calc = lastcircle - thiscircle 
    x= 52
    circlecount = 1
    et = false
    pet = true
    lastcircle = -13.6
  }
} 

function button2cliked(){
  if(button2 && x<55){
    thiscircle = -3.4
    calc = thiscircle - lastcircle 
    console.log(calc)
    x = 52+35
    circlecount = 2
    et = true
    pet = false
    lastcircle = 3.4
}
  else if(button2 && x>55){
    thiscircle = 3.4
    calc = lastcircle - thiscircle 
    console.log(calc)
    x = 52+36
    circlecount = 2
    et = false
    pet = true
    lastcircle = 3.4
  }
}

function button3cliked(){
  if(button3 && x<52+36*2){
    thiscircle = -1.5
    calc = thiscircle -lastcircle
    console.log(calc)
    x = 52+36*2
    circlecount = 3
    et = true
    pet = false
    lastcircle = -1.5
    
}
  else if(button3 && x>52+36*2){
    thiscircle = -1.5
    calc = lastcircle - thiscircle 
    console.log(calc)
    x = 52+36*2
    circlecount = 3
    et = false
    pet = true
    lastcircle = -1.5
  }
}


function button4cliked(){
  if(button4 && x<52+36*3){
    thiscircle = -0.85
    calc = thiscircle-lastcircle 
    x = 52+36*3
    circlecount = 4
    et = true
    pet = false
    lastcircle = -0.85
}
  else if(button2 && x>52+36*3){
    thiscircle = -0.85
    calc = lastcircle - thiscircle 
    x = 52+36*3
    circlecount = 4
    et = false
    pet = true
    lastcircle = -0.85
  }
}


function button5cliked(){
  if(button3 && x<52+36*4){
    thiscircle = -0.54
    calc = thiscircle - lastcircle  
    x = 52+36*4
    circlecount = 5
    et = true
    pet = false
    lastcircle = -0.54
}
  else if(button2 && x>52+36*4){
    thiscircle = -0.54
    calc = lastcircle - thiscircle 
    x = 52+36*4
    circlecount = 5
    et = false
    pet = true
    lastcircle = -0.54
    
  }
}


function button6cliked(){
  if(button6 && x<52+36*5){
    thiscircle = -0.38
    calc = thiscircle - lastcircle  
    x = 52+36*5
    circlecount = 6
    et = true
    pet = false
    lastcircle = -0.38
}
  else if(button6 && x>52+36*5){
    thiscircle = -0.38
    calc = lastcircle - thiscircle 
    x = 52+36*5
    circlecount = 6
    et = false
    pet = true
    lastcircle = -0.38
    
  }

}










/*
function keyReleased() {

  if(keyCode == 38){
    
  }

  
  print(keyCode)

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
*/



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




  
  /*





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
  */