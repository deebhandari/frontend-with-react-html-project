// IF ELSE

// if(true){
//   do something
// }else{
//   do something
// }

// if true ? "Do Something" : "Do Something"

// let marks = 25;

// if (marks > 40) {
//   console.log("Congratulations");
// } else {
//   console.log("Try Again");
// }

// ELSE IF

// let marks = 90;

// if (marks < 40) {
//   console.log("Try Again");
// } else if (marks > 40 && marks < 60) {
//   console.log("You've got 2nd Division");
// } else if (marks > 60 && marks < 80) {
//   console.log("You've got 1st Division");
// } else {
//   console.log("You've got Distinction");
// }

// SWITCH CASE

// let grade = "A";
// switch (grade) {
//   case "A":
//     console.log("Excellent");
//     break;
//   case "B":
//     console.log("Good");
//     break;
//   case "C":
//     console.log("Fair");
//     break;
//   default:
//     console.log("Invalid grade");
// }

let date = new Date();
let day = date.getDay();

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thrusday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  default:
    console.log("Today is Saturday");
}
