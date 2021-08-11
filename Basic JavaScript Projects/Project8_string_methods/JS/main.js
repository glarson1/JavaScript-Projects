function combine(){
    var first = "This "; //created variable named "first" equal to the string "This "
    var second = "is the sentence "; //created a variable named "second" equal to "is the sentece" and etc for a third time
    var third= "that you get.";
    var all = first.concat(second, third); //var named "all" is equal to variables "first, second, third" connected
    document.getElementById("combination").innerHTML = all; //display the variable "all" at the id location "combination"
}

function cuttingstrings() {
    var full = "Red, blue, green, yellow.";
    var partial = full.slice(5,9);
    document.getElementById("cut").innerHTML = partial;
}

function uppercaseFunction() {
    var c = "words and stuff"; //variable c is equal to a string
    var d = c.toUpperCase(); //varible d is equal to the variable c but all characters uppercase
    document.getElementById("upper").innerHTML = d; // display varible d at the id location "upper" in the html
}

function spiderman() {
    var spider = "there goes spidey"; //variable spider is equal to a string
    document.getElementById("find").innerHTML = spider.search("spidey"); //the search() method searches a string for a specified value and returns the position of the match
}

function numstr() {
    var he = 44;
    document.getElementById("numberstring").innerHTML = he.toString(); //toString() turns the number into a string
}

function pancake() {
    var tree = 123.34456332234;
    document.getElementById("monkey").innerHTML = tree.toPrecision(4); //formats a number to a specific amount of digits
}

function desert() {
    var dog = 12.3456;
    document.getElementById("lizard").innerHTML = dog.toFixed(1); //converts a number to a string, rounding to a specified number of decimals
}

function plains() {
    var cat = "hi there";
    document.getElementById("buffalo").innerHTML = cat.valueOf(); //coverts many types of values into a string
}