var x = 12; //global variable because it is not inside of a function
function Add_numbers() { //made function named Add_numbers
    document.write(20 + x + "<br>"); //adds and displays sum. br returns to next line
}
Add_numbers(); //calls the function to do its thing

function Add_numbers2() { //creates function named "Add_numbers2"
    var z = 3; //local varible becuase it is inside the function
    document.write(4 + z); //displays the answer of (4+z) on the html
}
Add_numbers2(); //calls the function

function Add_numbers3() {
    var e = 4;
    console.log(10 + e);
}
Add_numbers3(); //calls the function

//function another(){
   // console.log(4 + e);   //to debug I would define var e in the function or globally
//}
//another();

function thedate() {
    var yep = "it's one o-clock"; //variable isn't necessary because I could've just used a string but I did it this way for practice
    var nope = "it's not one o-clock";
    if (new Date().getHours()==13) { // this checks if hour of the day is equal to 13(or one oclock pm) 
        document.getElementById("water").innerHTML= yep; //if it is one oclock this message/var will display at the "water" id in the html
    } else {
        document.getElementById("water").innerHTML= nope;// if it is any hour besides one in the afternoon this message/var will display at the "water" id
    }
}

function dirt() {
    if (7>5) {
        document.getElementById("lava").innerHTML= "7 is greater than 5"; //if seven is greater than 5 this string will display at the id location "lava"
    }
}

function Old_Function() {
    Age = document.getElementById("Age").value; //Age is going to be equal to the value that the user inputs
    if (Age > 55) {
        seagull = "You're old"; //seagull is being used as a variable for this string
    }
    else {
        seagull = "You're not that old"; //seagull is also being used as a variable for this string
    }
    document.getElementById("helicopter").innerHTML= seagull; //the correct "seagull" string dependant on what value the user enters in will display at the id location "helicopter"
}

function Time_Function() { //name a function Time_Function
    var Time = new Date().getHours(); //create variable named "Time" and set it equal to the hour of the day that it is
    var Reply; //creates variable named "Reply" but doesn't assign it a value yet
    if (Time < 12 == Time > 0) { //if the hour of the day is less than 12 but greater than 0
        Reply = "It is morning time!"; //"Reply" is assigned a string that will display if its conditions are met
    }
    else if (Time >= 12 == Time < 18) { //if the hour of the day is greater than or equal to 12 while also less than 18
        Reply = "It is afternoon."; //"Reply" is assigned another string that will display if its conditions are met
    }
    else {
        Reply = "It is evening time."; //"Reply" is assigned another string that will display if its conditions are met
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //at the id location "Time_of_day", the corresponding Reply "string" will display
}