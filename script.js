// let const var..use only let or var//


// let count = 10 + 2
// console.log("count")


// console.log(count)
// food = Number(prompt("hello tip me"))



//simple weather app using conditionals
//conditonal operators == === < > !== !===



// let weather = prompt("how is the weather!")


// if ( weather == "rain") {
//     console.log("grab your umb")
// }
    
    
    
//  else {
//     console.log("okay then")
// }



//functions 



//arguments in functions

// function sayMyName3(name) {
//     console.log("name")
// }

// sayMyName3("githinji")


// function sayMyName(name){
// greet = `hi ${name}, nice to see you`
// console.log(greet)
// }

// sayMyName("william")

// //returns 
//  function sum(a, b) {
// //     //return
//     return a + b
//  }
// num1 = sum(1,3)  //storing in num1
// console.log(num1)


//tip calculator
// console.log(sum(1, 2))


// food = Number(prompt("how much was the food"))
// tipPercentage = Number(prompt("tip %?"))
// tipAmount = food + tipPercentage
// total = food + tipAmount

// console.log("tip amount", tipAmount)
// console.log("total", total)
// alert(tipAmount + food)


//type casting

// function calcFoodTotal(food, tip) {

//     const tipPercentage = tip / 100
//     const tipAmount = food * tipPercentage
//     const total = sum(food, tipAmount)
//     return total
   
// }

// console.log(calcFoodTotal(100, 13))

//1.04.14


//es6 arrow funtions=> for explicit retuns :modern way



// const sumrrow = (a, b) => {
//     return a + b
// }
// console.log(sumrrow(49, 724))

//arow functions for implicit returns...remove {}

// const sumArrow = (a, b) => a + b
// console.log(sumArrow(30, 43))



//arrays basics n shit;

// const grocerys = [":pear", "banana", "gum"]
// // console.log(grocerys);
// // console.log(grocerys[2]) //indexing
// grocerys.push("milk") //adding something
// // console.log(grocerys)

//slice start from 0 inclusive and upto 2[0, 1]
// console.log(grocerys.slice(0, 2))


// console.log(grocerys.slice(1, 2))

//array methods (slice push lengh indexOf)

// console.log(grocerys.indexOf("gum"))


// console.log(grocerys.length)

//OBBJECTS ..{}...

// const person = {
//     name: "william",
//     shirt: "coral"
// }

//accesing via dot notation
//  console.log(person.name)
//  console.log(person.shirt)

//  //bracett notation
// console.log(person["name"])
// console.log(person["shirt"])

//all
// console.log(person)
 
// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 100000,
//         liability: 5000,
//         networth: function() {
//             return this.assets - this.liability
//         }
//     }


//     const intro =
//     `my name is ${person.name} and i fly while wearing ${person.networth()}`


// return intro
// }

// console.log(introducer("william", "pink"))

// //for  loopss

//  const fruits = ["pera", "banana", "avo", "orange", "pera", "banana", "avo", "aorange",]
// // for (let i=0; i < fruits.length; i++) {
// //     console.log(i, fruits[i])
// // }

// for(const fruit of fruits) {
//     console.log(fruit)
// }
let result = []

const Numbers = [1, 2, 3, 4, 5, 6, 7 ,8]
for (const number of Numbers) {
    console.log(number * 4)
    result.push(number * 4)
}

console.log(result)
 //2.2.2