function addition_Function() { //made function named addition_Function()
    var addition = 7+3; //made variable called addition and set it equal to 7+3
    document.getElementById("math").innerHTML = addition; //finds location of id "math" in html and gives variable addition to that spot
}

function subtraction_Function() { //made function named subtraction_Function()
    var subtraction = 7-3; //made variable named subtraction and set it equal to 7-3
    document.getElementById("math2").innerHTML = subtraction; //finds location of id "math2" in html and gives variable subtraction to that spot
}

function multiplication() { //made function named multiplication()
    var multiply = 7*3; //made variable named multiply and set it equal to 7*3
    document.getElementById("math3").innerHTML = multiply; //finds location of id "math3" in html and gives variable subtraction to that spot
}

function division() { //made function named division()
    var divide = 20/2; //made variable named divide and set it equal to 20/2
    document.getElementById("math4").innerHTML = divide; //finds location of id "math4" in html and gives variable subtraction to that spot
}

function mathstuff() { //made function named mathstuff
    var maththings = (3+4)-(7*3); //made variable named maththings 
    document.getElementById("lotsofmath").innerHTML= maththings; //finds location of id "lotsofmath" in html and gives variable maththings to the spot
}

function modulus_Function() { //made function named modulus_Function
    var remainder = 7%3; //made variable named remainder and made it equal to 7%3
    document.getElementById("remain").innerHTML= remainder; //finds location of id "remain" in html and gives the variable remainder to the spot
}

function unary() { //made function named unary()
    var neg= 6; //variable named neg is equal to 6
    document.getElementById("negative").innerHTML = -neg; //finds location of id "negative" in html and give variable neg to the spot
}

var x = 4; //var named x is equal to 4
x++; //var x is now up one digit
document.write(x); //print value of x

var v = 4; //var named v is equal to 4
v--; //var v is now down one digit
document.write(v); //print value of v

function randomnum() { //made function named randomnum()
    var random= (Math.random() * 100); //varible random is equal to Math.random() function *100
    document.getElementById("rando").innerHTML = random; //finds location of id "rando" in html and displays value for variable "random"
}

function poww() { //made function named poww
var t= Math.pow(4,2); //var t is equal to Math.pow(4,2) (4 to the second power)
document.getElementById("power").innerHTML = t //finds location of id "power" in the html and gives the value of var t in that spot
}