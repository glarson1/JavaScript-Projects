function My_First_Function() {   //created a function named My_First_Function which gets called by the onclick
    var str = "This text is green!"; //created a variable str
    var result = str.fontcolor("green"); //created a variable named result
                                          //which is str with green font
    document.getElementById("Green_Text").innerHTML = result;
}                 //calling to the id in the html to print or document the var named result

function conFunction() {   //created a function named confunction which gets called by onclick in the html
    var sentence = "water"; //created a variable named sentece that = string "water"
    sentence += "melon"; //This is saying sentence is also = string "melon" and they are to be added together
    document.getElementById("Concatenate").innerHTML = sentence; //Calling to the id concatenate to print the var sentence
}
