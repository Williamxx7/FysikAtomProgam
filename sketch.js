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
let ey = 0

let omgx = -600
let omgy = -600

let efotondis = 400

let lol = false

let lolm = false

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
a = 5.60
let elektronfoton = dist(cos(a) * r , sin(a) * r,-omgx, sin(a) * r  )
ellipse(cos(a) * r , sin(a) * r,25)
fill("white")
textAlign(CENTER, CENTER)
textSize(35)
text("-", cos(a) * r , sin(a) * r )

fill("blue")
ellipse(-omgx,  sin(a) * r  , 20)
fill("white")
textSize(15)
text("+", -omgx,  sin(a) * r+ 1  ,)



if(et == true && elektronfoton > 22.5 && lol == true){
    omgx += cos(a) * 10
  } else if(elektronfoton <22.6 && et == true) {
    r = 75 + 50 * (circlecount-1)
    omgx = -600
    lol = false 
    
  }

if(pet == true && -omgx < 500 && lolm == true){
    omgx -= cos(a) * 10
    print(-omgx)

  } else if (pet == true && lolm == true){
    r = 75 + 50 * (circlecount-1)
    omgx = -600
    lolm = false
    
  }



/*
else {
  efotondis = 400 
  omgy = 0
}
*/


fill(255,255,255)
stroke(255,255,255)
strokeWeight(0.2)
textSize(20)

mattext()
arbejdsspørgsmål()
foton()

/*
fill("green")
ellipse(omgx - 400, omgy - 400,25)

omgx += cos(a)*r/100
omgy += sin(a)*r/100
*/

}




function mattext(){

  textAlign(LEFT, CENTER)

  if(et == true){
    text("Absorption: Efoton = ", (-width/1.5)-40,(-height/2.5)-25)
    numberx=150
    text(calc + " eV", (-width/1.8),(-height/2.5)-24)
  } 
  else if(pet == true){
    text("Emission: Efoton = ", (-width/1.5)-40,(-height/2.5)-25)
    numberx=135
    text(calc+" eV", (-width/1.8),(-height/2.5)-25)
  } else{text("Efoton = -13,6", (-width/1.5)-40,(-height/2.5)-25)}

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




function button1cliked(){
if(button1 && r == 52){
  et = true
  pet = false
  lol = true
}
else if(button1 && r>52){
thiscircle = -13.6
calc = lastcircle - thiscircle 

circlecount = 1
et = false
omgx = -(cos(a)*r)
pet = true
lastcircle = -13.6
lolm = true
}
} 

function button2cliked(){
if(button2 && r<=75){
thiscircle = -3.4
calc = thiscircle - lastcircle 
lastcircle = -3.4
circlecount = 2
et = true
pet = false
lol = true

}
else if(button2 && r>75){
thiscircle = -3.4
calc = lastcircle - thiscircle 
lastcircle = -3.4
console.log(calc)
circlecount = 2
et = false
omgx = -(cos(a)*r)
pet = true
lolm = true
}
}

function button3cliked(){
if(button3 && r<=175){
thiscircle = -1.5
calc = thiscircle - lastcircle
console.log(calc)
circlecount = 3
et = true
pet = false
lastcircle = -1.5
lol = true
}
else if(button3 && r>175){
thiscircle = -1.5
calc = lastcircle - thiscircle 
console.log(calc)

circlecount = 3
et = false
omgx = -(cos(a)*r)
pet = true
lastcircle = -1.5
lolm = true
}
}


function button4cliked(){
if(button4 &&  r<=225){
thiscircle = -0.85
calc = thiscircle-lastcircle 
circlecount = 4
et = true
pet = false
lastcircle = -0.85
lol = true
}
else if(button2 && r>225){
thiscircle = -0.85
calc = lastcircle - thiscircle 
circlecount = 4

et = false
omgx = -(cos(a)*r)
pet = true
lastcircle = -0.85
lolm = true
}
}


function button5cliked(){
if(button3 && r<=275){
thiscircle = -0.54
calc = thiscircle - lastcircle 

circlecount = 5
et = true
pet = false
lastcircle = -0.54
lol = true
}
else if(button2 && r>275){
thiscircle = -0.54
calc = lastcircle - thiscircle 

circlecount = 5
et = false
omgx = -(cos(a)*r)
pet = true
lastcircle = -0.54
lolm = true
}
}


function button6cliked(){
if(button6 && r<=325){
thiscircle = -0.38
calc = thiscircle - lastcircle 

circlecount = 6
et = true
pet = false
lastcircle = -0.38
lol = true
}
else if(button6 && r>325){
thiscircle = -0.38
calc = lastcircle - thiscircle 

circlecount = 6
et = false
omgx = -(cos(a)*r)
pet = true
lastcircle = -0.38
lolm = true
}

}