// program # 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

function checktriangle() {
var angle1 = prompt("Enter the value of angle1:");
var angle2 = prompt("Enter the value of angle2:");
var angle3 = prompt("Enter the value of angle3:");
if (angle1 ==60  && angle2 ==60 && angle3 ==60){
    console.log("This is a traingle");
}
    else{
        console.log("This is not a Triangle");
    }
}
checktriangle()