// program # 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

function checktriangle() {
var side1 = prompt("Enter the value of side1:");
var side2 = prompt("Enter the value of side2:");
var side3 = prompt("Enter the value of side3:");
if (side1 ==60  || side2 ==60 || side3 ==60){
    console.log("This is a traingle");
}
    else{
        console.log("This is not a Triangle");
    }
}
checktriangle()