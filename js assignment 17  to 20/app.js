// Assignment 17 to 20



// Ans(1)
// var name = [ [] ]



// Ans(2)
// var num = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];

// for(var i = 0 ; i < num.length; i++){
//     document.writeln(num[i].join(" ") , "<br>")
// }

// Ans(3)
// for(var i = 1 ; i<=10; i++){
//     document.writeln(i , "<br>")

// }


// Ans(4)
// var getTable = +prompt("Enter a number show its multiplication table")

// var getlength = +prompt("Enter lenght multiplication table ")
// document.writeln(`Multiplication table of ${getTable}<br>`)
// document.writeln(`Lenght ${getlength} <br>`)

// for(var i = 1 ; i <= getlength; i++){
//     document.writeln(`${getTable} X ${i} = ${getTable * i} <br>`)
// }

// Ans(5)
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i = 0 ; i < fruits.length ; i++){
//     document.writeln(fruits[i] , "<br>")
// }


// Ans(6)
// part (a)
// for(var i = 1 ; i <= 15; i++){
//     document.writeln(i)
// }
// part (b)
// for(var i = 15 ; i => 1; i--){
//     document.writeln(i)
// }
// part (c)
// for(var i = 1; i <= 15; i = i+2){
//     document.writeln(i)
// }
// part (d)
// for(var i = 0; i <= 15; i = i+2){
//     document.writeln(i)
// }
// part (e)
// for(var i = 2; i <= 20; i = i+2){
//     document.writeln(`${i}k,`)
// }




// Ans(7)
// var getItemName = prompt("Welcom to abc bakery. what do you want to order sir/ma'am? ")
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var checker = false;
// for (var i = 0; i < items.length; i++) {
//     if (items[i] == getItemName) {
//         checker = true
//         document.write("cookie is available at index ", i, " ", "in our bakery")
//         break
//     }
// }
// if (checker == false) {
//     document.write("We are sorry. ", getItemName ," is not available in our bakery")
// }




// Ans(8)
// var number = [24, 53, 78, 91, 12];
// var numberLenght = number[0]

// for(var i = 0 ; i < number.length; i++){
//     if(numberLenght <= number[i] ){
//         numberLenght = number[i] 
//     }
// }
// document.write(numberLenght)


// Ans(9)
// var number = [24, 53, 78, 91, 12];
// var numberLenght = number[0]

// for(var i = 0 ; i < number.length; i++){
//     if(numberLenght >= number[i] ){
//         numberLenght = number[i] 
//     }
// }
// document.write(numberLenght)

// Ans(10)
// for (var i = 5; i <= 100; i += 5) {
//     document.writeln(i);
// }