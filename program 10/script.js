//   program # 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
function character(){
    value=prompt("Enter a value");
    if(value >= "A" && value <= "Z"){
        console.log("This is alphabet is upper case");
    }
    else if (value >= "a" && value <= "z")
    { 
        console.log("This is alphabet is lower case");
    }
    else{
        console.log("This is not a alphabet");
    }
}
character()