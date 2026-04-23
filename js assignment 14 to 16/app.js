
// assignment14 to 16
// Answer(1)
// var studentNames = [];

// Answer(2)
// var studentNames = new Array();

// Answer(3)
// var stringsArray = ["Rizwan", "Hassan", "Saad"]

// Answer(4)
// var numberArray = [49 , 82 , 12 , 34 , 63]

// Answer(5)
// var booleanArray = [true , false]

// Answer(6)
// var mixedArray = ["bilal" , true ,99]

// Answer(7)
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.writeln("Qualifications:");
// document.writeln(
//     `
//     <li> 1) ${qualifications[0]}</li>
//     <li> 2) ${qualifications[1]}</li>
//     <li> 3) ${qualifications[2]}</li>
//     <li> 4) ${qualifications[3]}</li>
//     <li> 5) ${qualifications[4]}</li>
//     <li> 6) ${qualifications[5]}</li>
//     <li> 7) ${qualifications[6]}</li>
//     <li> 8) ${qualifications[7]}</li>
//     `
// );


// Answer(8)
// var studentsName = ["Tom", "John", "Jorden"]
// var studentMarks = [320, 420, 270]
// var totalMarks = [500]

// var studentPercentages1 = (studentMarks[0] / totalMarks) *100
// var studentPercentages2 = (studentMarks[1] / totalMarks) *100
// var studentPercentages3 = (studentMarks[2] / totalMarks) *100

// document.writeln( 
//     `
//     Score of ${studentsName[0]} is ${studentMarks[0]} Percentages: ${studentPercentages1}% <br>
//     Score of ${studentsName[1]} is ${studentMarks[1]} Percentages: ${studentPercentages2}% <br>
//     Score of ${studentsName[2]} is ${studentMarks[2]} Percentages: ${studentPercentages3}% 
// `)



// Answer(9)
// var colorName = ["purple", "red" , "yellow"]
// part(a)
// var a = prompt("what color he/she wants to add to the beginning1")
// colorName.unshift(a)
// document.writeln(colorName,"<br>");

// // part(b)
// var b = prompt("what color he/she wants to add to the end2")
// colorName.push(b)
// // document.writeln(colorName,"<br>")

// // part(c)
// var c1 = prompt("what color he/she wants to add to the beginning3")
// var c2 = prompt("what color he/she wants to add to the beginning4")
// colorName.unshift(c1 , c2)
// // document.writeln(colorName,"<br>")

// // part(d)
// colorName.shift()
// // document.writeln(colorName,"<br>")

// // part(e)
// colorName.pop()
// // document.writeln(colorName,"<br>")


// // part(f)

// var f1 = +prompt("which index he/she wants to add a color?");
// var f2 = prompt("Which color do you want to add "+f1);

// colorName.splice(f1,1, );

// document.writeln(colorName);

// // part(g)
// var g1 = +prompt("which index he/she wants to delete color");
// var g2 = +prompt("which index he/she wants to delete color");

// colorName.splice(g1,g2 );

// document.writeln(colorName);

// Answer(10)
// var studentScores = [320 , 230 , 480 , 120]

// document.writeln("Scores of Students",studentScores ,"<br>")
// studentScores.sort()
// document.writeln("Ordered Scores of Students",studentScores)


// Answer(11)
// var cityNames = ["Karachi" , "Lahore", "Islamabad" , "Quetta" , "Peshawar"]

// var names = cityNames.slice(2,4)
// document.writeln("selected Cities list:","<br>" ,names)


// Answer(12)
// var arr = ["this" , "is" , "my" , "cat"]
// document.writeln("Array:", "<br>", arr , "<br>")
// document.writeln("String:" , "<br>",arr[0] , " " , arr[1] , " " , arr[2] , " " , arr[3])


// Answer(13)
// var values = []
// var name1 = prompt("enter1")
// var name2 = prompt("enter2")
// var name3 = prompt("enter3")
// var name4 = prompt("enter4")
// values.push(name1 , name2 , name3 , name4)
// document.writeln("Devices", "<br>" , values , "<br>")

// document.writeln("out:" ,"<br>", values.shift() ,"<br>", "out:" ,"<br>", values.shift() ,"<br>", "out:" ,"<br>", values.shift() ,"<br>", "out:" ,"<br>", values.shift())


// Answer(14)
// var values = []
// var name1 = prompt("enter1")
// var name2 = prompt("enter2")
// var name3 = prompt("enter3")
// var name4 = prompt("enter4")
// values.push(name1 , name2 , name3 , name4)
// document.writeln("Devices", "<br>" , values , "<br>")

// document.writeln("out:" ,"<br>", values.pop() ,"<br>", "out:" ,"<br>", values.pop() ,"<br>", "out:" ,"<br>", values.pop() ,"<br>", "out:" ,"<br>", values.pop())


// Answer(15)
// var phoneName = ["Apple" , "Samsung" , "Motorola", "Nokia", "Sony" , "Haier"]
// document.writeln(`

//     <select name="1" id="">
//         <option value="1">manufacturers companys name</option>
//         <option value="">${phoneName[0]}</option>
//         <option value="">${phoneName[1]}</option>
//         <option value="">${phoneName[2]}</option>
//         <option value="">${phoneName[3]}</option>
//         <option value="">${phoneName[4]}</option>
//     </select>
//     `)


// --------------------------------- Assignment 14 to 16 end --------------------------------