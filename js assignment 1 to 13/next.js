// Assignment 9 to 11

// answer(1)
// var enterCity = prompt("Enter your city name")

// var cityName = "karachi"

// if( enterCity == cityName){
//     document.writeln("Welcome to city of lights")

// }
// else{
//     document.writeln("come to karachi")
// }

// answer(2)

// var enterGender = prompt("Enter your gender ")

// var gender_male = "Male"
// var gender_female = "Female"

// if (enterGender == gender_male ){
//     document.writeln(" Good Morning Sir.")
// }else if (enterGender == gender_female){
//     document.writeln("Good Morning Ma’am.")
// }else{
//     document.writeln("Incorrect gender")
// }


// answer(3)

// var signal_color = prompt("Enter the traffic signal color")

// var color1 = "Red"
// var color2 = "Yellow"
// var color3 = "Green"

// if (signal_color == color1){
//     document.writeln("Must Stop")
// }else if (signal_color == color2){
//     document.writeln("Ready to move")
// }else if (signal_color == color3){
//     document.writeln("Move now")
// }else{
//     document.writeln("Enter a correct traffic signal color")

// }

// answer(4)
// var remaining_Fuel = prompt("remaining fuel in car")

// var number = 0.25

// if(remaining_Fuel < number){
//     document.writeln("Please refill the fuel in your car")
// }else{
//     document.writeln("You have fuel in your car")

// }

// answer(5)
// (a) true
// (b) false
// (c) part(3)true 
// ?????





// answer(6)
// var eng = +prompt("Enter English Marks:");
// var urd = +prompt("Enter Urdu Marks:");
// var mat = +prompt("Enter Math Marks:");

// // 2. Calculations
// var totalMarks = 300;
// var marksObtained = eng + urd + mat;
// var percentage = (marksObtained / totalMarks) * 100;

// var grade = "";
// var remarks = "";


// if (percentage >= 80) {
//     grade = "A-One";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "B";
//     remarks = "Good";
// }
// else if (percentage >= 60) {
//     grade = "C";
//     remarks = "You need to improve";
// }
// else {
//     grade = "Fail";
// }


// document.writeln(`
//    <table>
   
//    <tr>
//      <th>${"<h1>Marks Sheet</h1>"}</th>
//    </tr>

//    <tr>
//         <td>${"Total marks : " + totalMarks }</td>
//    </tr>

//    <tr>
//         <td>${"Marks obtained : " + marksObtained  }</td>
//    </tr>
//    <tr>
//         <td>${"Percentage : " + percentage.toFixed(0)+"% "}</td>
//    </tr>
//    <tr>
//         <td>${"Grade : " + grade }</td>
//    </tr>
//    <tr>
//         <td>${"Remarks : " + remarks}</td>
//    </tr>
   
//    </table>
//    `)
// answer(7)



// var secretNumber = 7;


// var userGuess = +prompt("Guess the secret number (1-10):");

// // Check the guess
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if ( secretNumber +1 === userGuess || secretNumber -1 === userGuess) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Wrong guess! Try again.");
// }

// answer(8)


// var num = +prompt("Enter a number:");

// // Check divisibility
// if (num % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is NOT divisible by 3");
// }


// answer(9)

// var num = +prompt("Enter a number:");

// // Check even or odd
// if (num % 2 === 0) {
//     alert("The number is Even");
// } else {
//     alert("The number is Odd");
// }


// answer(10)


// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operation = prompt("Enter operation (+, -, *, /, %):");

// if (operation === "+") {
//     alert("Result: " + (num1 + num2));
// }
// else if (operation === "-") {
//     alert("Result: " + (num1 - num2));
// }
// else if (operation === "*") {
//     alert("Result: " + (num1 * num2));
// }
// else if (operation === "/") {
//     alert("Result: " + (num1 / num2));
// }
// else if (operation === "%") {
//     alert("Result: " + (num1 % num2));
// }
// else {
//     alert("Invalid operation!");
// }


// answer(11)
// ???
// ---------------------------------------- Assignment 9 to 11 End ---------------------------------------


// assignment 11 to 13
// answer()


// answer(1) ???
// var ch = prompt("Enter a single character:");

// if (ch) {

//     if (ch >= '0' && ch <= '9') {
//         alert("It is a number");
//     }
//     else if (ch >= 'A' && ch <= 'Z') {
//         alert("It is an Uppercase letter");
//     }
//     else if (ch >= 'a' && ch <= 'z') {
//         alert("It is a Lowercase letter");
//     }
//     else {
//         alert("It is a special character");
//     }

// } else {
//     alert("Please enter only ONE character");
// }

// answer(2)
// var num1 = parseInt(prompt("Enter the first number:"));
// var num2 = parseInt(prompt("Enter the second number:"));

// if (num1 > num2) {
//     document.writeln("The larger number is: " + num1);
// } 
// else if (num2 > num1) {
//     document.writeln("The larger number is: " + num2);
// } 
// else  {
//     document.writeln("Both numbers are equal: " + num1);
// }

// answer(3)

// var getNumber = prompt("Enter a number")

// if(getNumber > 0){
//     document.writeln("The number is positive");
// }
// else if(getNumber < 0){
//     document.writeln("The number is negative");
// }
// else {
//     document.writeln("The number is zero");
// }
// answer(4)
// var vowel = prompt("Enter a vowel word")

// var vowel1 = "a"
// var vowel2 = "e"
// var vowel3 = "i"
// var vowel4 = "o"
// var vowel5 = "u"
// if (vowel.length === 1) {
// if (vowel == vowel1){
//     document.writeln("True")
// }
// else if (vowel == vowel2){
//     document.writeln("True")
// }
// else if (vowel == vowel3){
//     document.writeln("True")
// }
// else if (vowel == vowel4){
//     document.writeln("True")
// }
// else if (vowel == vowel5){
//     document.writeln("True")
// }
// else{
//     document.writeln("This is not vowel word")
// }
// }else{
//     alert("Please enter only ONE character")
// }


// answer(5)
// let userPassword = prompt("Apna password enter karen:");

// let correctPassword1 = "Muhammad Bilal";
// let correctPassword2 = "Bilal";

// if (userPassword == correctPassword1 || userPassword == correctPassword2) {
//     alert("Your password is correct");
// } 
// else {
//     alert(" your password is Incorrect");
// }
// answer(6)
// answer part (1)
// var hour = 19;
// if (hour < 18) {
// greeting = "Good day";
// document.writeln(greeting)
// }
// else{
// greeting = "Good evening";
// document.writeln(greeting)
// }

// answer part (2)
// var greeting;
// var hour = 19;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// document.writeln(greeting)



// answer(7)
    // var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

    // if (time >= 0 && time < 12.00) {
    //     alert("Good Morning");
    // }
    // else if (time >= 12.00 && time < 17.00) {
    //     alert("Good Afternoon");
    // }
    // else if (time >= 17.00 && time < 21.00) {
    //     alert("Good Evening");
    // }
    // else if (time >= 21.00 && time <= 23.59) {
    //     alert("Good Night");
    // }
    // else {
    //     alert("Invalid time");
    // }

// ---------------------------------------- Assignment 11 to 13 End ---------------------------------------
