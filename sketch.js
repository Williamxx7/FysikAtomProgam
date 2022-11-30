let b = 0

let circlecount = 1
let et = false
let pet = false 
let numberx = 0

let mat = (-6.63*1/10000000000000000000000000000000000)*(3.000000000*100000000)*(1.097000000*1/10000000)

let lastcircle = -13.6
let thiscircle = -13.6
let calc 

let a = 0

let r = 75

let sideforskydning = 300

let ex = 0
let ey = 200

function setup(){
createCanvas(1400,1000)
fill(0,0,100,)
createButtons()


}


function draw(){

background("white")
translate(width/2 + sideforskydning , height/2)

noStroke()
  fill(50,50,50)
  rect(-width + 410, -height +510 ,600, 980, 10)


fill(255,0,0, 200)
noStroke()
ellipse(0,0,50,50,)
noFill()

strokeWeight(2)
stroke(0,0,0, 200)
for(let elk = 0; elk<6; elk++){
ellipse(0,0,(elk+150+(100*elk)),(elk+150+(100*elk)))
}


noStroke()
fill(0,0,255, 245)

a %= TWO_PI
a += 0.03
ellipse(cos(a) * r , sin(a) * r,25)


fill(255,255,255)
stroke(255,255,255)
strokeWeight(0.2)
textSize(20)

mattext()
arbejdsspørgsmål()
foton()






fill(0,255,0)
ellipse(ex,ey,25)
ey += sin(a) * r / 6 
ex += cos(a) * r / 6





}




function mattext(){

  if(et == true){
    text("Absorption: Efoton = ", (-width/1.5)-40,(-height/2.5)-25)
    numberx=150
    text(calc + " eV", (-width/1.5)+ numberx,(-height/2.5)-24)
  } 
  else if(pet == true){
    text("Emission: Efoton = ", (-width/1.5)-40,(-height/2.5)-25)
    numberx=135
    text(calc+" eV", (-width/1.5)+ numberx,(-height/2.5)-24)
  } else{text("Absorption: Efoton = 0", (-width/1.5)-40,(-height/2.5)-25)}

  text("Brintatomets energi med elektronen: ", (-width/1.5)-40, -height/2.7)

  text(mat*1/(circlecount*circlecount)+ " J", (-width/2.2), -height/2.7)

}




function arbejdsspørgsmål(){

  text("Arbejdsspørgsmål:", (-width/1.5) -40, -height/3.5)
  text("Hvad er brintatomets energi med elektronen på E1?", (-width/1.5) -40, -height/4)
  text("Hvad bliver absorption hvis man går fra E1 til E3?", (-width/1.5) -40, -height/4.5 +5)
  text("Hvad er brintatomets energi med elektronen på E5?", (-width/1.5) -40, -height/5+15)
  text("Hvad bliver emission hvis man går fra E6 til E4?", (-width/1.5) -40, -height/5.5 +30)
  

}


function svarpåarbejdsspørgsmål(){

  

}



function foton(){

}




function createButtons(){

  noStroke()
  button1 = createButton('E1')
  button1.position(width/2-15 + sideforskydning, height/2-105);
  button1.mousePressed(button1cliked)

  button2 = createButton('E2')
  button2.position(width/2-15 + sideforskydning, height/2-155);
  button2.mousePressed(button2cliked)

  button3 = createButton('E3')
  button3.position(width/2-15 +sideforskydning, height/2-205);
  button3.mousePressed(button3cliked)

  button4 = createButton('E4')
  button4.position(width/2-15+sideforskydning, height/2-255);
  button4.mousePressed(button4cliked)

  button5 = createButton('E5')
  button5.position(width/2-15+sideforskydning, height/2-305);
  button5.mousePressed(button5cliked)
  
  button6 = createButton('E6')
  button6.position(width/2-15 +sideforskydning, height/2-355);
  button6.mousePressed(button6cliked)

}


// ikke spagetti


function button1cliked(){
if(button1 && r == 52){
}
else if(button1 && r>52){
thiscircle = -13.6
calc = lastcircle - thiscircle 
r = 75
circlecount = 1
et = false
pet = true
lastcircle = -13.6
}
} 

function button2cliked(){
if(button2 && r<55){
thiscircle = -3.4
calc = thiscircle - lastcircle 
console.log(calc)
r = 75 + 50
circlecount = 2
et = true
pet = false
lastcircle = 3.4
}
else if(button2 && r>55){
thiscircle = 3.4
calc = lastcircle - thiscircle 
console.log(calc)
r = 75 + 50
circlecount = 2
et = false
pet = true
lastcircle = 3.4
}
}

function button3cliked(){
if(button3 && r<52+36*2){
thiscircle = -1.5
calc = thiscircle -lastcircle
console.log(calc)
r = 75 + 50*2
circlecount = 3
et = true
pet = false
lastcircle = -1.5
}
else if(button3 && r>52+36*2){
thiscircle = -1.5
calc = lastcircle - thiscircle 
console.log(calc)
r = 75 + 50*2
circlecount = 3
et = false
pet = true
lastcircle = -1.5
}
}


function button4cliked(){
if(button4 && r<52+36*3){
thiscircle = -0.85
calc = thiscircle-lastcircle 
r = 75 + 50*3
circlecount = 4
et = true
pet = false
lastcircle = -0.85
}
else if(button2 && r>52+36*3){
thiscircle = -0.85
calc = lastcircle - thiscircle 
r = 75 + 50*3
circlecount = 4
et = false
pet = true
lastcircle = -0.85
}
}


function button5cliked(){
if(button3 && r<52+36*4){
thiscircle = -0.54
calc = thiscircle - lastcircle 
r = 75 + 50*4
circlecount = 5
et = true
pet = false
lastcircle = -0.54
}
else if(button2 && r>52+36*4){
thiscircle = -0.54
calc = lastcircle - thiscircle 
r = 75 + 50*4
circlecount = 5
et = false
pet = true
lastcircle = -0.54
}
}


function button6cliked(){
if(button6 && r<52+36*5){
thiscircle = -0.38
calc = thiscircle - lastcircle 
r = 75 + 50*5
circlecount = 6
et = true
pet = false
lastcircle = -0.38
}
else if(button6 && r>52+36*5){
thiscircle = -0.38
calc = lastcircle - thiscircle 
r = 75 + 50*5
circlecount = 6
et = false
pet = true
lastcircle = -0.38
}

}