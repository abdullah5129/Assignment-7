// program # 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

function Result() {
var physics =+ prompt("Enter marks obtained in Physics");
var chemistry =+ prompt("Enter marks obtained in Chemistry");
var biology =+ prompt("Enter marks obtained in Biology");
var mathematics =+ prompt("Enter marks obtained in Mathematics");
var computer =+ prompt("Enter marks obtained in Computer");
var totalMarks =+ (physics + chemistry + biology + mathematics + computer);
percentage = (totalMarks * 100) / 500;
var grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";   
}
console.log("Total marks obtained: ",totalMarks);
console.log("Percentage: ",percentage);
console.log("Grade: ",grade);
}
Result()