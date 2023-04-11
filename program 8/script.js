// program # 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

function checkvowels(){
    value=prompt("Enter a value");
    if(value == "a" || value == "e" || value == "i" || value == "o" || value =="u"){
        console.log("Value is vowel");
    }
    else if (value >= "a" && value <= "z" || value >= "A" && value <="Z")
    { 
        console.log("Value is a Consonant");
    }
    else{
        console.log("Value is not a alphabet");
    }
}
checkvowels()