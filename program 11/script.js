//Write a js program to input week number and print week day.
function weekdays() {
var num =+ prompt("Enter the Number of a day(1-7):");

if (num == 1) {
    console.log("Monday");
}
 else if (num == 2) {
    console.log("Tuesday");
}
else if (num == 3) {
    console.log("Wednesday");
}
else if (num == 4) {
    console.log("Thursday");
}
else if (num == 5) {
    console.log("Friday");
}
else if (num == 6) {
    console.log("Saturday");
}
else if (num == 7) {
    console.log("Sunday");
}
else {
    console.log("Please enter correct Number.");
}
}
weekdays()