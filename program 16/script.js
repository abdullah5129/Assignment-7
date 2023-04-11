// program # 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

function checktriangle() {
var angle1 = prompt("Enter the value of angle1:");
var angle2 = prompt("Enter the value of angle2:");
var angle3 = prompt("Enter the value of angle3:");
if (angle1 ==60  && angle2 ==60 && angle3 ==60){
    console.log("Triangle is Equivalent");
}
    else if(angle1 == angle2  ||  angle2 == angle3 ||  angle1 == angle3){
        console.log("Triangle is isosceles");
    }
    else{
        console.log("Triangle is scalene");
    }
}
checktriangle()