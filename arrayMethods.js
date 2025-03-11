// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const firstEvenNumbers = numbers.filter((number) => {
//   return  number % 2 === 0});
// console.log(firstEvenNumbers);

// const students =[
//     {name: "john",age:23},
//     {name: "jane",age:16},
//     {name: "mary",age:21},
//     {name: "mathew",age:13},
// ];
// const studentsabover18 =students.filter((students) =>{
// return students.age>18;
// });

// console.log(studentsabover18);
//map () method
//return-->returns an object
//--> performs a function e.g adding numbers, dividing numbers

// const MultiplyByTwo = Number.map((num) =>{
//     return num * 2;
// })
// console.log(MultiplyByTwo);

// // exseesxise -->  a function that capitalized the  first letter of each name in students
// ['john', 'jane', ;mary', 'mathew']
const students = [
    { name: "john" },
    { name: "jane" },
    { name: "mary" },
    { name: "mathew" }
];

const capitalizedFirstLetter = students.map((student) => {
    return { 
        name: student.name.charAt(0).toUpperCase() + student.name
         .slice(1)
        
    };
});

console.log(capitalizedFirstLetter);

// split each character in the string

// PSEUDOCODE
//  -LOOP OVER THE ARRAY TO GRAB EACH ELEMENT
//  --> map()
//   - be able to grab the name of each student (the name is nested insude an object
//  --> split(), charAt by checking the index position of that  first letter which is zero (0)

// -capitalized the first letter character/index position of the name
//  return our modified array with the names
// --> toUpperCase() to capitalize the first letter of the name 


