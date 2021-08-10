function Ride_Function() {
    var Height, Can_ride; //create variable named Height as well as one called Can_ride
    Height = document.getElementById("Height").value; //height is equal to the value typed in at id "height"
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //strings produced and dependent on Height<52
    document.getElementById("Ride").innerHTML= Can_ride + " to ride."; //locates id "Ride" in the HTML and selects the correct string and adds "to ride" to it
}

function Vote_Function() {
    var Age, Can_vote; //create variable named Age as well as one called Can_vote
    Age = document.getElementById("Age").value;//age is equal to the value type in at id "age"
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; //strings produced and dependent on Age<18
    document.getElementById("Vote").innerHTML= Can_vote + " to vote."; //locates id "Vote" in the HTML and selects the correct string and adds "to vote to it"
}

function Vehicle(Make, Model, Year, Color) { //creates function named Vehicle that has 4 components to it
    this.Vehicle_Make = Make; //"this" will represent var names for each specific part (make,model,year,color) in other words "this" will become the new object
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //creating vehicles for different var (names of people)
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //creating a function that outputs the following data and strings at the id "Keywords_and_Constructors"
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function people(Gender, Weight, Hair_Color) { //defining what characteristics there are of "people"
    this.people_Gender = Gender;
    this.people_Weight = Weight;
    this.people_Hair_Color = Hair_Color;
}
var Steve = new people("Male", 199, "Brown");
var Lisa = new people("Female", 155, "Blonde");
function peopleFunction() { //function that outputs the following data and string at the id "New_and_This"
    document.getElementById("New_and_This").innerHTML = "Steve is a "
    + Steve.people_Gender + " that weighs " + Steve.people_Weight +
    ", and has " + Steve.people_Hair_Color + " hair color."
}

//var true= "sdfs"; //doesn't work because true is a reserved word
//document.write(true);

function count_Function() { //function named count_Function
    document.getElementById("Nested_Function").innerHTML = Count()//finds id "Nested_Function" in the html and performs Count() in that place
    function Count() { //function Count() is created
        var Starting_Point = 8; //Variable "Starting_Point" is assigned the value 8
        function Plus_one() {Starting_Point +=1;} //function Plus_one is created and it is the starting_point +=1
        Plus_one(); //here it is adding a 1 to the starting point
        return Starting_Point; //Starting_Point value will be returned to id "Nested_Function"
    }
}