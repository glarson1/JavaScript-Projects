function salad() { //created a function named salad()
    var x = "watermelon"; //x is equal to a string
    document.getElementById("frog").innerHTML = x.length; //this will display the length of the string in the id location "frog"
}

function Call_Loop() { //created a function named Call_Loop()
    var Digit = "";
    var c = 1;
    while (c < 4) { //when c is less than 4
        Digit += "<br>" + c; //digit added to c
        c++; //were adding one to c
    }
    document.getElementById("Loop").innerHTML = Digit; //This would output the loop at id location "Loop"
}

var colors = ["Red", "Green", "Yellow", "Purple"]; //variable colors is equal to this list
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < colors.length; Y++) {
        Content += colors[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //this sends the data to the location id "List_of_Instruments"
}

function array_Function() {//function named
    var lizard = []; //variable lizard is about to become part of an array
    lizard[0] = "green"; //giving string values to different indexes of the array
    lizard[1] = "brown";
    lizard[2] = "gray";
    lizard[3] = "orange";
    document.getElementById("Array").innerHTML = "the lizard is the color " + lizard[2];//index lizard[2] is what we will display along with the string 
}

function constant_function() {
    const car = {make: "Ford", model: "Mustang", color: "Red"}; //created a car const
    car.color = "Green"; //changed the cars color
    car.price = "$30,000"; //added a new feature of the car
    document.getElementById("Constant").innerHTML = "The cost of the " + //this displays the strings plus the vaules of the car elements ath the "constant" id
    car.model + " was " + car.price;
}

var v = 5; //created a variable v
document.write("<br>" + v); //displaying v value
{
    let v = 34; //using let on variable v now
    document.write("<br>" + v); //displaying let v value
}
document.write("<br>" + v); //displays variable v value (5)

function adding() {
    var g = 5;
    var f = 6;
    return (g+f);//returns the value
}
document.getElementById("adder").innerHTML = adding();//displays the value

let John = {
    height: "6 foot ", //define parts of the object
    weight: "165 pound ",
    gender: "male ",
    description: function() { //needs to say function(). cant be a made up function name
        return "John is a " + this.height + this.weight + this.gender;
        }
};
document.getElementById("objects").innerHTML = John.description(); //displays the return


let text = "";
for (let i = 0; i < 6; i++) { //i = 0 but will add 1 to it everytime i is less than 6
  if (i === 3) { continue; } //skips the third step
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text; //displays text


let txet = "";
for (let w = 0; w < 6; w++) { //w = 0 but will add 1 to it everytime w is less than 6
  if (w === 3) { break; } //loop is broken when w reaches 3
  txet += "The number is " + w + "<br>";
}

document.getElementById("demo2").innerHTML = txet; //displays txet