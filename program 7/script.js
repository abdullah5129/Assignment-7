// program # 7. Write a js program to check whether a character is alphabet or not.

function character(){
    value=prompt("Enter a value");
    if((value >= "a" && value <= "z"||value >= "A" && value <= "Z")){
        console.log("This is alphabet character");
    }
    else{
        console.log("This is not alphabet chracter");
    }
}
character()