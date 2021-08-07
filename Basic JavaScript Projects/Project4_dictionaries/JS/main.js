function dictionary1() { //name a function dictionary1()
    var Car = {              //family name/var name
        Make: "Dodge",        //key value pair for dictionary
        Model: "Challenger", //key value pair
        Color: "Purple",    //key value pair
        Year: "2018"        //key value pair
    };
    delete Car.Model;      //this deletes Car.Model
    document.getElementById("Dictionary").innerHTML= Car.Model //Car.Model no longer exists so this will result in "undefined"
}