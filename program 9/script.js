// program # 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

function specialchatacter(){
    value=prompt("Enter a value");
    if (value >= "a" && value <= "z" || value >= "A" && value <="Z"){
        console.log("This is Alphabet character");
    }
    else if (value >= "0" && value <= "9")
    { 
        console.log(" value is a digit");
    }
    else{
        console.log("This is a Special characters");
    }
}
specialchatacter()