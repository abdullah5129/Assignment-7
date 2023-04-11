// program # 6. Write a js program to check whether a year is leap year or not.

function checkLeapyear() {
var year=prompt("Enter a number");
    if (year % 4 === 0)
     {
          console.log("year is a leap year");
    }
    else{
        console.log("This is not leap year");
    }
}
    checkLeapyear()