// document.querySelectorAll(".btn").forEach((button) => {
//     button.addEventListener("click", () => {
//         alert("hello world")
//     })
// })

// document.write("hello world")
// // alert("hello world")
// console.log("hello world")

// document.write({key: "value"})
// // alert({key: "value"})
// console.log({key: "value"})

// let person_name = "john"

// console.log("hello " + person_name);
// console.log(person_name == undefined);

// let address, zip, state

// address = "test address"
// zip = 100000
// state = "CA"
// console.log(address, zip, state)

// let name = "test"
// var state = "CA" // outdated, replaced with "let"
// const PI = 3.14

// console.log("this is 'test'")
// console.log('this is "test"')
// console.log("this is \"test\"")
// console.log('this is \'test\'')

// let firstname = "john"
// let lastname = "wick"

// console.log("your full name is " + firstname + " " + lastname)

// let age = 30
// let pi = 3.14
// pi = "pi"

// let num = 5
// num += 10 // -=, /=, *=, ...

// console.log(num);

// Implicit type conversion
// let fname = "john"
// let lname = "hostings"
// console.log(fname + " " + lname)
// console.log(fname - lname) // NaN

// let v1 = 10
// let v2 = 12
// console.log(v2 + v2)
// console.log(v1 + fname)

// let v11 = "10"
// let v22 = "12"
// console.log(v11 - v22) // first convert to int and try the operation, if sucess show result, else return NaN
// console.log(v11 + v22) // string concatenation
// // use parseInt

// Datatypes
// // Primitve: String, Number, Boolean, Null, Undefined (Nothing), Symbol
// // Object: Arrays, Functions, Object

// // typeof: type of variable/value

// // String
// let namee = "this is string datatype"
// console.log(namee, typeof namee)
// // Number
// let number = 10
// console.log(number, typeof number)
// // Boolean
// let bool = true
// console.log(bool, typeof bool)
// // Null
// let n = null
// console.log(n, typeof n) // returns object instead of null
// // Undefined
// let udf = undefined
// let udff
// console.log(udf, typeof udf, typeof udff)
// // Symbol (ES6)

// Arrays
// let friends = ["john", "maria", "corey", "bob"]
// console.log(friends)
// friends.push("peter")
// friends.push(...["alex", "mike"])
// console.log(friends)
// console.log(friends[friends.length]) // no error, undefined

// Functions
// function say_hello(namee) {
//     console.log("hello " + namee)
// }
// say_hello("mike")

// function inches_to_cm(value) {
//     return parseFloat(value) * 2.54
// }
// console.log(inches_to_cm(10))

// // Function expression
// // anonymouts functions
// const add = function (v1, v2) {
//     return v1 + v2
// }
// console.log(add(1, 2))

// Objects
// // key-value pairs
// const person = {
//     fname: "john",
//     lname: "peters",
//     "state": "CA",
//     age: 40,
//     siblings: ["anna", "chris", "jacob"],
//     greet: function () {
//         return "Hello " + this.fname
//     }
// }
// console.log(person)
// console.log(person.greet())

// Conditional statements
// // <, >, <=, >=, ==, ===, !=, !===
// if (true) {
//     console.log("Yay")
// } else if (false) {
//     console.log("...")
// } else {
//     console.log("Nay")
// }

// // == check only value
// // === check value and type

// console.log("6" == 6)
// console.log("6" === 6)
// console.log(6 === 6)
// console.log("6" !== 6)

// // logical operator
// // || OR
// // && AND
// // ! NOT

// Switch statements
// const dice = 7
// switch (dice) {
//     case 1:
//         console.log("its 1")
//         break
//     case 2:
//         console.log("its 2")
//         break
//     case 3:
//         console.log("its 3")
//         break
//     case 4:
//         console.log("its 4")
//         break
//     default:
//         console.log("you did not roll the dice :)")
// }

// While loop
// let n = 2
// while (n <= 100) {
//     console.log(n)
//     n *= n
// }

// Do-While loop
// let n = 1
// do {
//     console.log(n)
//     n += 1
// } while (n < 10)

// For loop
// for (let i = 0; i < 10; i ++) {
//     console.log(i)
// }

// String properties and methods
// let text = "Hello Mr. Jordan"
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
// console.log(text.length)
// console.log(text.charAt(0))
// console.log(text.charAt(text.length - 1))
// console.log(text.indexOf("p")) // -1 if character if not present
// console.log(text.indexOf("M"))
// console.log(text.trim()) // strip
// console.log(text.startsWith("H"))
// console.log(text.startsWith("Hello "))
// console.log(text.toLowerCase().includes("jordan"))
// console.log(text.slice(1, 11)) // substring
// console.log(text.slice(-3)) // last 3 chars

// Template literals: ES6+
// let namee = "Peter"
// let age = 40
// console.log("It's " + namee +  ", I am " + age + " years old...")
// console.log(`It's ${namee}, I am ${age} years old...`) // Using template literal

// Array properties and methods
// names = ["john", "mike", "peter", "mathew"]
// console.log(names.length)
// console.log(names[names.length - 1])
// console.log(names.concat(["alex", "bob"]))
// console.log(names.reverse())
// names.unshift("start") // add at beginning of the array
// console.log(names)
// names.shift() // remove first item from the array
// console.log(names)
// names.push("end") // add at end of the array
// console.log(names)
// names.pop() // remove last item from the array
// console.log(names)
// picked_names = names.splice(1, 2) // mutate original array and remove 4 elements after 1 index
// console.log(picked_names)
// console.log(names)

// exercise
// const names = ["anna", "mike", "peter", "alex"]
// const last_name = "shakeandbake"
// let new_arr = []

// for (let i = 0; i < names.length; i++) {
//     new_arr.push(`${names[i]} ${last_name}`)
// }
// // names.forEach(n => function() {
// //     new_arr.push(`${n} ${last_name}`)
// // })
// console.log(new_arr)

// exercise
// const gas = [30, 40, 50]
// const food = [140, 150, 135]

// function total(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i ++) {
//         sum += arr[i]
//     }
//     console.log(arr)

//     if (sum > 100) {
//         console.log("You are spending too much on")
//     }
//     return sum
// }
// gas_total = total(gas)
// food_total = total(food)
// console.log({
//     "gas_total": gas_total,
//     "food_total": food_total
// })

// value vs reference
// primitve datatypes: string, number, symbol, boolean, undefined, null
// object: arrays, function, objects

// when assigning primitve datatype value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitve datatype value to a variable is done by reference so, any change will affect all the reference

// let n1 = 10
// let n2 = n1
// n2 = 15
// console.log(n1)
// console.log(n2)

// let p1 = {
//     name: "this is test"
// }
// let p2 = p1 // pass by reference
// p2.name = "this is test updated"
// console.log(p1)
// console.log(p2)

// null vs undefined
// null: developed has not set the value (variable without value, missing function args, missing object properties)
// undefined: js cannot find a value

// console.log(20 + null) // 20 + 0
// console.log(20 + undefined) // NaN

// truthy and falsy
// // falsy values: "", '', ``, 0, -0, NaN, false, null, undefined
// console.log("" == false)
// console.log(0 == false)

// ternary operators
// let age = 19
// age > 18 ? console.log("valid age") : console.log("invalid age")

// global scope
// any variable outside code block {} is said to be in a global scope
// can be accessed anywhere in the program
// name collisions, modify by mistake

// global variable
// let namee = "peter"
// namee = "peter updated"
// // const namee = "bob" // error

// function calculate() {
//     // some other code...
//     console.log(namee)
//     namee = "john" // name is changed
//     console.log(namee)

//     function inner() {
//         namee = "inner name value" // name changed
//     }

//     inner()
// }
// calculate()
// console.log(namee)

// if (true) {
//     namee = "mike" // name is changed
// }
// console.log(namee)

// local variable (const and let): cannot access outside the code block
// let nname = "alex"

// function calculate() {
//     const nname = "charlie" // local variable
//     // code goes here
//     global_variable = "this is global variable, as it is not declared using keyword"
// }
// console.log(nname)
// calculate()
// console.log(nname)
// // console.log(age) // reference error, age is not defined in the global scope
// console.log(global_variable)

// if (true) {
//     const nname = "corey"
// }
// console.log(nname)

// variable lookup
// {} -> code block
// const number = 5

// function add(a, b) {
//     // if a variable is not in the local scope, the JS will look for it in the global scope
//     // if it is not found in the global scope, ReferenceError is raised
//     // let number = 6
//     console.log(a + b + number)

//     function multiply() {
//         // if a variable is not in the local scope, the JS will look for it in the global scope
//         // if it is not found in the global scope (hierarchy wise), ReferenceError is raised
//         // let number = 6
//         console.log(a * b * number)
//     }
//     multiply()
// }
// add(1, 2)

// callback functions, higher order functions, functions as first class objects

// functions are first class objects: stored in a variable (expression), passed as an argument to another function, return from the function (closure)
// higher order function: accepts another function as an argument or returns function as a result
// callback functions: passed to a another function as an argument and executed inside thet function

// function greetMorning(namee) {
//     const myName = "John"
//     console.log(`Goog Morning, ${namee}. My name is ${myName}`)
// }
// function greetAfternoon(namee) {
//     const myName = "John"
//     console.log(`Goog Afternoon, ${namee}. My name is ${myName}`)
// }
// greetMorning("mike")
// greetAfternoon("adam")

// call back functions
// function morning(name) {
//     return `Goog Morning, ${name.toUpperCase()}`
// }

// // call back functions
// function afternoon(name) {
//     return `Good Afternoon, ${name}`
// }

// // higher order function
// function greet(name, func) {
//     const greeter = "John"
//     console.log(`${func(name)}. My name is ${greeter}`)
// }

// greet("Mike", morning)
// greet("Adam", afternoon)

// array iterators
// forEach, map, filter, find, reduce
// iterate over array: no for loop required
// accept CALLBACK function as an argument, calls callback against each item in a array. Reference Item in the callback parameter

// const friends = ["mike", "alex", "bob", "corey", "joe", "henry"]
// for (let i = 0; i < friends.length - 1; i++) {
//     console.log(friends[i])
// }

// forEach: does not return a new array (unlike other array methods)

// const people = [
//     {name: "peter", age: 20},
//     {name: "charlie", age: 33},
//     {name: "mike", age: 45},
//     {name: "john", age: 73}
// ]

// function show(person) {
//     // does not return anything
//     console.log(`Name: ${person.name.toUpperCase()}, Age: ${person.age}`)
// }
// // people.forEach(show)
// people.forEach(
//     // anonymous function
//     function(person) {
//         console.log(`Name: ${person.name.toUpperCase()}, Age: ${person.age}`)
//     }
// )

// map:
// does return new array
// does not change size of original array
// uses values from original array when making new one

// const people = [
//     {name: "peter", age: 20},
//     {name: "charlie", age: 33},
//     {name: "mike", age: 45},
//     {name: "john", age: 73}
// ]

// console.log(
//     people.map(
//         // modify people
//         function(person) {
//             // return something
//             if (person.age > 60) {
//                 person["seniorCitizen"] = true
//             }
//             return person
//         }
//     )
// )
// const names = people.map(
//     function(person) {
//         return `<h1>${person.name}</h1>`
//     }
// )
// document.body.innerHTML = names.join("")

// filter:
// does return a new array
// can manipulate the size of a new array
// returns based on condition

// const people = [
//     {name: "peter", age: 20},
//     {name: "charlie", age: 33},
//     {name: "mike", age: 45},
//     {name: "john", age: 73}
// ]

// console.log(people.filter(
//     function (person) {
//         // return boolean
//         if (person.age > 30) {
//             return true
//         }
//     }
// ))

// find
// returns single instance (string, object, ...)
// returns first match, if no match then, undefined
// great for getting unique value

// const people = [
//     {id: 1, name: "peter", age: 20},
//     {id: 2, name: "charlie", age: 33},
//     {id: 3, name: "mike", age: 45},
//     {id: 4, name: "john", age: 73}
// ]
// console.log(people.find(
//     // find on unique constraint
//     function(person) {
//         return person.id === 3
//     }
// ))

// filter: return array of instances
// find: return an instance

// reduce:
// iterated, callback function
// reduces to a single value: number, array, object
// 1st parameter ("acc") - total of all calculations
// 2nd parameter ("curr") - current iteration/value

// const people = [
//     {name: "peter", age: 20, salary: 2000},
//     {name: "charlie", age: 33, salary: 5000},
//     {name: "mike", age: 45, salary: 6000},
//     {name: "john", age: 73, salary: 7000}
// ]
// console.log(`Total Salary: ${
//     people.reduce(function(total, curr) {
//         // return the accumulator
//         console.log(`${curr.name.toUpperCase()}'s salary: ${curr.salary}`)
//         total += curr.salary
//         return total
//     }, 0)
// }`)

// Math object
// standard built-in object - always available

// const number = 3.14159265359
// console.log(Math.floor(number))
// console.log(Math.ceil(number))
// console.log(Math.sqrt(25))
// console.log(Math.PI)
// console.log(Math.min(1 ,2 ,3 ,4 ,0))
// console.log(Math.max(1 ,2 ,3 ,4 ,0))
// console.log(Math.random()) // always between 0-0.99999999999...
// console.log(Math.floor(Math.random() * 10) + 1) // random number between 1-10
// console.log(Math.ceil(Math.random() * 10)) // random number between 1-10

// Date object
// const date = new Date()
// console.log(date)
// console.log(date.getMonth()) // 0 indexed Month names
// console.log(date.getDay()); // 0 indexed starting from Sunday

// console.log(new Date("1/12/2004"))

// HTML DOM

// document
// - html
// -- head
// --- title: text
// -- body
// --- h1: text
// --- a: attribute, text

// similar to css
// select the element or group of elements that you want to affect
// decide the effect you want to apply to the selection

// document.body.style.backgroundColor = "green"
// document.body.style.color = "yellow"
// button = document.getElementById("btn") // node object
// button.style.backgroundColor = "pink"

// console.log(window) // global window object

// returns a node object or node list: array like object
// console.log(button);
// console.log(button.nodeName)
// console.log(button.style)

// window object: browser api (access the browser and work with it) (JS will look for function in the window object if it is not found)
// document: html structure (access the HTML elements (contained in the window object))
// console.dir: properties and methods
// console.dir(document)

// get element by id
// select element or group of elements that we want
// decide the effect we want to apply to the selection

// let button = document.getElementById("btn")
// button.style.backgroundColor = "pink"
// button.style.color = "red"

// get element by tag name
// returns node-list: array-like object
// index, length property but not array methods

// buttons = document.getElementsByTagName("button") // node-list
// console.log(buttons)

// const buttons_arr = [...buttons] // array
// buttons_arr.forEach(
//     function (element) {
//         element.style.backgroundColor = "pink"
//     }
// )

// get elements by class name
// returns node-list

// buttons = document.getElementsByClassName("btn")
// const buttons_arr = [...buttons]
// buttons_arr.forEach(
//     function (button) {
//         button.style.backgroundColor = "orange"
//         button.style.color = "black"
//     }
// )

// query selector
// query selector all

// querySelector("any css"): single select
// querySelectorAll("any css"): selects all

// buttons = document.querySelectorAll(".btn") // .class-name, #id-name
// buttons_arr = [...buttons]
// buttons_arr.forEach(
//     function(button) {
//         button.style.backgroundColor = "pink"
//     }
// )

// navigate the dom

// childnodes: returns all childnodes including whitespaces which is treated as a text node

// children
// firstChild
// lastChild

// const ul = document.querySelector("#dishes")
// // console.log(ul.childNodes); // returns all childnodes including whitespaces which is treated as a text node
// const li = ul.children
// const li_1 = ul.firstChild // text ie. whitespace

// parentElement: access parent from child node

// street = document.querySelector("#street")
// // console.log(street.parentElement.parentElement)
// street.parentElement.style.color = "green"

// previousSibling, nextSibling: return with whitespace

// const first_li = document.querySelector("#first")
// first_li.nextSibling.nextSibling.style.color = "green"
// // previousSibling

// nextElementSibling, previousElementSibling: return actual elements by skipping whitespace

// const first_li = document.querySelector("#first")
// first_li.nextElementSibling.style.color = "pink"

// textContent and nodeValue

// const special = document.querySelector("#special")
// console.log(special.childNodes[0].nodeValue)
// console.log(special.textContent)

// getAttribute and setAttribute
