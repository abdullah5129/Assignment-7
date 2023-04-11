// program # 1. Write a js program to find maximum between two numbers.

function findMax() {
  var a=prompt("Enter 1st number: ");
  var b=prompt("Enter 2nd number: ");
    if (a>b) {
      console.log("Greater is :",a);
      return a;
        }
    else {
      console.log("Greater is :",b);
      return b;
    }
  }
  findMax();