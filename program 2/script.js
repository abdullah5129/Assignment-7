// program # 2. Write a js program to find maximum between three numbers.

function findMax() {
  var a=prompt("Enter 1st number: ");
  var b=prompt("Enter 2nd number: ");
  var c=prompt("Enter 3nd number: ");
    if (a>b) {
      console.log("Greater is :",a);
      return a;
        }
    else if(b>c) {
      console.log("Greater is :",b);
      return b;
    }
    else {
      console.log("Greater is :",c);
    }
  }
  findMax();