document.write(typeof 5); //uses typeof

document.write("<BR>"); //skips a line in the html so things layout better

document.write("10"+ 5);//type coercion

function nan() { //named a function nan
    document.getElementById("soda").innerHTML = 0/0; //finds id "soda" in the html and function will result in NaN
}


function nan1() { //named function nan1
    document.getElementById("soda2").innerHTML = isNaN('words');//finds id "soda2" in the html and isNaN determines if what in the parenthesis is true or not
}


function nan2() { //named function nan2
    document.getElementById("soda3").innerHTML = isNaN('99494');//finds id "soda3" in the html and isNaN determines if what in the parenthesis is true or not
}

function big() {//named function big
    var b= 5E343 //var b is equal to 5E343
    document.getElementById("yoda1").innerHTML = b //finds id "yoda1" in the html variable b is presented which will result in infinity
}

function small() {//named function big
    var s= -5E343 //var b is equal to -5E343
    document.getElementById("yoda2").innerHTML = s //finds id "yodas" in the html variable s is presented which will result in -infinity
}

document.write("<BR>"); //skip a line

document.write(4>5); //Boolean false

document.write("<BR>"); //skip a line

document.write(4>3); //Boolean true

console.log(3+2); // will display 5 in the console

console.log(4<3);//will display false in the console

document.write("<BR>"); //skip a line

document.write(4==4); //will display true

document.write("<BR>"); //skip a line

document.write(4==5);//will display false

document.write("<BR>"); //skip a line

var x= 2; //define variable
var y= 2; //define variable
var z= 3;  //define variable
var p="3"; //define variable
var k= "dog"; //define variable

document.write(x===y); //result in true
document.write(x===k); //result in false
document.write(z===p); //result in false
document.write(x===z); //result in false

document.write("<BR>"); //skip a line

document.write(6>3 && 5<7); //uses AND result:true
document.write(4>3 && 4>9); //uses AND result:false
document.write(6>3 || 3>2); //uses OR result:true
document.write(5>7 || 4>7); //uses OR result:false

function nope() { //created function named nope
    document.getElementById("not1").innerHTML= !(4>3); //finds id "not1" in the html and outputs NOT !(4>3): False
}

function yep() { //created function named yep
    document.getElementById("not2").innerHTML= !(4<3); //finds id "not2" in the html and outputs NOT !(4<3): True
}