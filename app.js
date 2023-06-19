/* // ----- variables, constants and comments

var a = "this is a"
var a = "this is a" // redeclare
a = "this is b" // reassign
// var not used now

let b = "this is b"
// let b = "this is b" // redeclare: not allowed
b = "this is c" // reassign

const c = "this is c"
// const c = "this is c" // redeclare: not allowed
// c = "this is d" // reassign: not allowed

// const d; // not able to declare constant without initialization

// order of usage const > let > var

// ----- datatypes
// 7 datatypes: number (integer, decimal), string, boolean, null (intentionally absent value: user choice), undefined (JS way to tell absence of value), object (complex data structure), symbol (looks like object)

let str = "this is sample string"
console.log(str)

let fname = "John"
let lname = "Doe"

// string concat
console.log(fname + " " + lname)
console.log(`${fname} ${lname}`) // template literals

console.log(str[0])
console.log(str[100]) // undefined

// string methods
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.indexOf("i"))
console.log(str.indexOf("z")) // -1 if not found
console.log(str.trim()) // strip spaces in front and back
console.log(str.indexOf("is"))
console.log(str.lastIndexOf("is"))
console.log(str.includes("abcd"))
console.log(str.slice(0, 10)) // 0-9 chars: does not mutate string
console.log(str.split(" ")) // return array

// JS strings are immutable

str = "hello"
str[0] = "n" // not possible
console.log(str);

str += " world" // new memory allocated and point to the location

let score = 50
console.log(score, typeof score); // typeof: datatype of variable

// mathematical operators: +, -, *, /, %, **

console.log(`My total score is: ${score}`) // score (int) converted to string

// ----- loose equality (==), strict equality (===)
// use strict >> loose
let age = 22
console.log(age == "22") // true: check the value but not type
console.log(age === "22") // false: check the value and the type

console.log(age != "22") // false: check the value but not type
console.log(age !== "22") // true: check the value and the type

// ----- type conversion
let string = "54"
console.log(Number(string))
console.log(Number("hello")) // NaN: Not a Number

console.log(String(123))

console.log(Boolean(32)) // true
console.log(Boolean(0)) // false
console.log(Boolean("32")) // true
console.log(Boolean("")) // false
console.log(Boolean(" ")) // true

// ----- arrays
let dishes = ["biryani", "dosa", "momos", "burger"]
dishes[100] = "chat"
console.log(dishes)
console.log(dishes.join(", "))
console.log(dishes.indexOf("dosa"))
console.log(dishes.indexOf("thai")) // -1

let newDishes = ["thai", "mexican"]
console.log(dishes.concat(newDishes)) // concat arrays (does not mutate original array, returns new array)
console.log(dishes.length)

newDishes.push("italian")
console.log(newDishes)
console.log(newDishes.pop()) // remove last element

// ----- boolean values and comparision operators
// >, <, >=, <=, ==, ===, !=, !==, &&, ||, !

// ----- type coercion
console.log(6 + "5") // 6 converted to string: 65
console.log(6 - "5") // 1
console.log(6 * "5") // 30

console.log(6 + "hello") // 6 converted to string: 6hello
console.log(6 - "hello") // NaN
console.log(6 * "hello") // NaN

// -----
// "var" only provides new scope to function
// "let" provides new scope to function, conditions and code blocks
// "const" allows changing attributes of object (object, array) but redeclaration and reassigning

// ----- control flow
// ----- for loop

for (let i = 0; i < 5; i++) {
    console.log("This is test", i)
}

const foods = ["biryani", "chaat", "pani-puri", "dosa"]
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i])
}

// ----- while loop
let j = 0
while (j < foods.length) {
    console.log(foods[j])
    j++
}

// ----- do-while loop
// run atleast 1 time
let k = -1
do {
    console.log(foods[k])
    k ++
} while (k < foods.length)

// ----- if, else if, else statements
let budget = 5000

if (budget > 6000) {
    console.log("Over the budget")
} else if (budget > 4000) {
    console.log("Stop spending")
} else {
    console.log("Have some money to spend")
}

console.log("I am out of condition")

// ----- nested if
let ag = 23
let isMale = true

if (ag > 22) {
    console.log("Allowed to participate")
    if (isMale) {
        console.log("4 people per group")
    } else {
        console.log("2 people per group")
    }
} else {
    console.log("Not allowed to participate")
}

// ----- break and continue: jump statements
// break: break the loop
// continue: skip the current iteration

for (let i = 0; i < 10; i++) {
    // skip the even numbers
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}
console.log("this is test")

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break
    }
    console.log(i)
}
console.log("this is test")

// ----- logical operators
// and (&&), or (||), not (!)

let dummy_password = "this is test password"

if (dummy_password.length > 8 && dummy_password.includes("@")) {
    console.log("Pasword allowed")
} else {
    console.log("Change the password")
}

console.log(!true) // false

// checking precendence of the operator: ! > (&&, || (left to right))
let result = true && true || false && !false
// true && true || false && true
// true || false && true
// true && true
// true
console.log(result)

// ----- variables and block scope (where the variable is accessible)
let score1 = 90 // global scope

if (true) {
    // if a variable is not in the local scope, the JS will look for it in the global scope
    // if it is not found in the global scope, ReferenceError is raised

    let score2 = 50 // block scope
    console.log(score1)
    console.log(score2)

    score1 = 91 // changed score1
}
console.log(score1) // 91
// console.log(score2) // reference error: not accessible

// ----- ternary operator
// shorthand of if, else (nested as well)

let agee = 17
let isMalee = false

agee > 18 ? isMalee ? console.log("4 people per group") : console.log("2 people per group") : console.log("not allowed")

// ----- switch statements
let ageee = 19

switch (ageee) {
    case 15:
    case 16:
    case 17:
        console.log("Wait for some time")
        break
    case 18:
    case 19:
        console.log("Allowed")
        break
    default:
        console.log("Not allowed")
}

// -----
// true: true, 10, "a", "0", [], {}
// false: false, 0, "", undefined, null

// ----- functions
function sayHi(name = "World") { // default value
    console.log(`Hie ${name}`)
}
sayHi("John")
sayHi("Mike")
sayHi()

sayHello = function (name = "World") { // anonymous function: store in variable
    console.log(`Hello ${name}`)
}
sayHello("Alex")
sayHello("Charlie")
sayHello()

// ----- return value from function
function calculateAge(birthYear, currentYear = 2023) {
    return `Your age is: ${currentYear - birthYear}`
    console.log("this is test") // not executed
}

console.log(calculateAge(2001))
console.log(calculateAge(2001, 2024))

// ----- arrow function (ES6)
let temp = () => `Hello World`
console.log(temp())

let calculateAgee = (birthYear, currentYear = 2023) => {
    return `Your age is: ${currentYear - birthYear}`
}
console.log(calculateAgee(2005))

// ----- higher order function: passing function as an argument
let upper = function(name) {
    return name.toUpperCase()
}

let lower = function(name) {
    return name.toLowerCase()
}

function greet(name, func = lower) { // higher order function
    console.log(`Hello ${func(name)}, Welcome my friend!!!`)
}

greet("Mike", upper)
greet("Alex", lower)
greet("Bob")

// ----- higher order function: returning function
function greet(message) { // higher order function
    return function (name) {
        return `Hey there ${name}! I am using WhatsApp. ${message}`
    }
}

console.log(greet("Welcome my friend...")) // inner function definition (function not called)
console.log(greet("Welcome my friend...")("Ashok")) // inner function called

let welcome = greet("You are welcome") // higher order function
console.log(welcome("Mike"))
console.log(welcome("John"))

let notWelcome = greet("You are not welcomed :(")
console.log(notWelcome("Bob"));

// ----- immediate invoked function expression (IIFE)
// executed only once

(function() {
    console.log("Hello World")
})();

(function(name) {
    console.log(`Hello ${name}`)
})("Kate")

// ----- setTimeOut and setInterval: async functions
// setTimeOut: run once after some interval
// setInterval: run and repeat after some interval

// setTimeout(func, interval, args...)
// setInterval(func, interval, args...)

let greett = function (name = "world") {
    console.log(`hello ${name}`)
}
setTimeout(greett, 5000)
setTimeout(greett, 5000, "Alex")
// will logged at same time as it is async

setInterval(greett, 5000, "Bob") // infinitely run

// ----- hoisting
// "var" are hoisted on the top
test = 10 // reassign
console.log(test)
var test = 5 // declaration (on the top)

// normal functions are hoisted on top as well
hello()
function hello() {
    console.log("hello")
}

// expression function: are not hoisted on top
// hey() // not accessible: error
let hey = function() {
    console.log("hey")
}
hey() // accessible

// -----
// normal function creates "this" context
// arrow function does not create "this" context

// ----- objects in JS
let car = {
    // label: value
    color: "black",
    model: 2022,
    companu: "Honda"
}
console.log(car)
// read properties
console.log(car.model)
console.log(car["model"])

let propName = "color"
console.log(car[propName]) // black
console.log(car.propName) // undefined: propName label not found in the object

// modify the value
car.color = "red"
console.log(car.color)
car["color"] = "black"
console.log(car.color)

// delete property: "delete" always return "true"
delete car.color
console.log(car.color) // undefined

// function vs methods
// function: functions in the scope
// methods: functions of objects key

let human = {
    name: "John",
    birthYear: 2022,
    age: function () {
        return 2023 - this.birthYear
    }
}
console.log(human.age()) // age: method

// "this" keyword: for method
// represents the object who has called the method

let person = {
    name: "John",
    birthYear: 2001,
    city: "Mumbai",
    getSummary: function () {
        // "this": current object
        return `${this.name} is ${2023 - this.birthYear} years old, he lives in ${this.city}.`
    }
}
console.log(person.getSummary())

// the value of "this" gets changes in certain scenarios: based on owner of the object

// ----- for-each method
let foodItems = ["dosa", "vadapaav", "momos", "paani-puri"]
foodItems.forEach(
    function(dish) {
        console.log(dish)
    }
)

// objects inside array
let blockList = [
    {name: "John", reason: "Abusive content"},
    {name: "Mike", reason: "Copyright issue"}
]
blockList.forEach(
    function (element) {
        console.log(`${element.name} was blocked due to ${element.reason}`)
    }
)

// ----- Math object
const number = 7.6
console.log(Math.PI)
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.trunc(number)) // remove decimal: useful for negative numbers
console.log(Math.random()) // 0-0.99999999...
console.log(Math.ceil(Math.random() * 10)) // 1-10 random numbers

// ----- call and apply methods
// changes "this" reference
// we can manually set the value of "this" keyword
"use strict"

let mainPlane = {
    airline: "Fly India",
    iatacode: "FI",
    bookings: [],
    book: function(flightNum, name) {
        console.log(`${name} booked flight "${this.airline}" with "${flightNum}".`)
        this.bookings.push({fightNum: `${this.iatacode}${flightNum}`, name: name})
    }
}
mainPlane.book(553, "John")
mainPlane.book(723, "Mike")
console.log(mainPlane)

let childPlane = {
    airline: "Child Plane",
    iatacode: "CP",
    bookings: [],
    // re-using "book" method (but it contains "this" keyword)
}
let book = mainPlane.book
// book(665, "Adam") // Cannot read properties of "undefined" (this) (reading 'airline')

// solution using call
// changing the context of "book" method: owner is childPlane object (this)
book.call(childPlane, 665, "Adam")
console.log(childPlane)

book.call(mainPlane, 181, "Urie")
console.log(mainPlane)

// same is "apply" method, but the args are to passed in the array
// book.apply(childPlane, [111, "Peter"])

// ----- bind method
function greettt() {
    console.log(`Hello ${this.fname} ${this.lname}, you are welcomed...`)
}
greettt() // this.fname and this.lname will be undefined as method is not linked to the object

let user = {
    fname: "Peter",
    lname: "Lynch"
}
let greets = greet.bind(user)
greets()

// bind is same as (call and apply) but it just binds the object with the method and we can call the method in the future

// ----- pass by value and reference
// (object and arrays) how reference are passed to a variable

let arr = [1, 2, 3, 4, 5]
let newArr = arr // pass by reference: same memory
let newArrCopy = [...arr] // value is same but not memory
console.log(arr)
console.log(newArr)
console.log(newArrCopy)

newArr.push(6) // arr also gets changed as memory is same of both arrays
newArrCopy.push(6) // no change to original array
console.log(arr)
console.log(newArr)
console.log(newArrCopy)

// ----- for-in loop (used on object)
let carr = {
    model: 2022,
    color: "black",
    company: "Honda"
}
for (let key in carr) {
    console.log(key, carr[key])
}

// ----- for-of loop (ES6)

// ----- HTML DOM: tree like structure of html elements
// DOM Tree: element, text, sttribute

console.log(document)
console.log(document.URL)

// querySelector and querySelectorAll (array)

let element = document.querySelector("p") // tag, #: id, .: class
console.log(element);

const p = document.querySelectorAll("p") // NodeList type: kind of array
console.log(p)

const usingClass = document.querySelector(".text")
console.log(usingClass)

const usingId = document.querySelector("#test")
console.log(usingId)

// ----- other methods to get elements
// getElementsByTagName, getElementsById, getElementsByClassName

// ----- updating and changing content
const div = document.querySelector("#my-div")

// innerText: only text (no white space, and tags)
console.log(div.innerText)

// innerHTML: text as it is (does not ignore spaces and tags)
console.log(div.innerHTML)

const h1 = document.querySelector("h1")

// innerText: only text (no white space, and tags)
// h1.innerText = `<p>${h1.innerHTML}</p>` // text will be contain <p> on the page
// h1.innerText += `<p>${h1.innerHTML}</p>` // text will be contain <p> on the page

// innerHTML: text as it is (does not ignore spaces and tags)
// h1.innerText = `<p>${h1.innerHTML}</p>` // text will be contain <p> on the page
// h1.innerHTML += `<p>${h1.innerHTML}</p>` // tags will be parsed

// ----- getting and setting attributes

const link = document.querySelector("a")
console.log(link.getAttribute("href"))
link.setAttribute("href", "https://www.youtube.com")
console.log(link.getAttribute("href"))
link.innerHTML = "Hello World (Youtube)"

// ----- adding style

h1.style.color = "green"
h1.style.backgroundColor = "pink"

// adding, removing and replacing class

const textClass = document.querySelector(".text")
console.log(textClass.classList)
textClass.classList.add("newClass")
console.log(textClass.classList)

textClass.classList.remove("newClass") // if the class is not present, no error will be raised

textClass.classList.replace("text", "textClass") // if the class is not present, the operation is not performed

// ----- parent, child and sibling elements
const parent = document.querySelector("#my-div")
console.log(parent)

const children = parent.children // HTMLCollection: not for-each loop
const children_arr = Array.from(children)
children_arr.forEach(
    function (element) {
        element.classList.add("text")
        console.log(element.innerHTML)
    }
)

const child = document.querySelector("h1")
console.log(child.parentElement)

console.log(child.nextElementSibling)
console.log(child.nextElementSibling.previousElementSibling)

// ----- events basics
const button = document.querySelector(".btn")
// console.log(button)

// button.addEventListener("click", function(e) { // "e" is the event
//     console.log(e)
//     console.log("I am clicked")
// })

const ul = document.querySelector("#fruits")
const elements = ul.querySelectorAll("li")
// console.log(elements)

// elements.forEach(
//     function(element) {
//         element.addEventListener("mouseover", function(e) {
//             e.target.style.color = "green"
//             e.target.style.textDecoration = "line-through"
//         })
//     }
// )

// ----- create and remove element
// adding
button.addEventListener("click", function(e) {
    let li = document.createElement("li")
    li.textContent = "Pineapple"
    ul.append(li)
})

// removing
// Pineapple will not contain this event listener as
// elements.forEach(function (element) {
//     element.addEventListener("click", function(e) {
//         ul.removeChild(element) // remove "li" from "ul" on click
//         // element.remove() // same as above
//     })
// })

// ----- bubbling and delegation
// bubbling: event going towards top of the hierarchy
// elements.forEach(
//     function(element) {
//         element.addEventListener("click", function(e) {
//             console.log("LI clicked")
//         })
//     }
// )
// ul.addEventListener("click", function(e) {
//     console.log("UL clicked")
// })
// document.body.addEventListener("click", function(e) {
//     console.log("Body clicked")
//     console.log(e.target) // li: target of click event
// })

// using bubbling for dynamic elements removal
ul.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        // ul.remove(e.target) // not working...
        e.target.remove()
    }
})

// more events: copy, mousemove

// ----- forms event

const form = document.querySelector(".sign-up")
const userName = document.querySelector("#userName")
const password = document.querySelector("#password")
const submit = document.querySelector("#submit")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    // console.log("Form submitted")
    console.log(form.userName.value, form.password.value)
})

// ----- regex
// password validation
// atleast 8, alteast 1 upper, lower case and 0-9 digit

// const pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

password.addEventListener("input", function(e) {
    // let compiled = e.target.value.match(pattern)
    let compiled = pattern.test(e.target.value)
    if (compiled) {
        password.style.backgroundColor = "rgba(0, 255, 0, 0.4)"
        submit.disabled = false
    } else {
        password.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
    }
})

// same pattern matching for userName

// ----- BOM: browser object model

// ----- array methods
let letters = ["abc", "def", "ghi", "jkl"]
console.log(letters.reverse()) // mutating method

let numbers = [1, 2, 3, 4, 5, 6]
let conc = letters.concat(numbers) // ...nums, ...letters
console.log(conc)

console.log(letters.join(" "))

// slice
console.log(letters.slice(1, 3)) // 1, 2 index
console.log(letters.slice(1)) // 1st index to end

// splice: mutating method (add and delete values in the array)
// returns deleted values
// used to replace elements
let numbers_up = numbers.splice(1, 3, ...[0, 0]) // starting from 1st index, 3 elements will be deleted and [0, 0] will be inserted from 1st index
console.log(numbers)
console.log(numbers_up)

// at
console.log(numbers.at(0)) // number at 0th index
// same as index[0]: (works with negative index as well)
console.log(numbers.at(-2)) // last to 2nd element
// used with string too
console.log("this is test".at(-3))

// map: transform every element in the array
// new array length same as the original array
const salaries = [1000, 2000, 6000, 4000]
let updated_salaries = salaries.map(
    function(salary) {
        // 15% increase in salary
        // returned transformed value
        return salary + salary * 0.15
    }
)
console.log(salaries)
console.log(updated_salaries)

// filter: filter the values from the array based on the condition
// length of new array may differ than original array
const average_salary = 3000
let above_average_salaries = salaries.filter(
    function(salary) {
        // return a boolean value
        return salary > average_salary
})
console.log(salaries)
console.log(above_average_salaries)

// reduce: accumulate a value from all the elements
// returns a single value
let total_salary = salaries.reduce(
    function(salary, currentValueOfAccumulator) {
        // return the updated value of the accumulator
        return currentValueOfAccumulator += salary
    }, 0 // initial value of the accumulator
)
console.log(salaries)
console.log(total_salary)

// find: returns the first instance of the element that satisfies the condition
const students = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Carrey"},
    {id: 4, name: "Emily"},
    {id: 5, name: "Frank"},
    {id: 6, name: "Groot"},
]
const student_id = 5
let student = students.find(function(student) {
    // return boolean value
    return student.id === student_id
}) // if the value is not found, "undefined"
console.log(students)
console.log(student)

// findIndex: returns the index of the first instance of the element that satisfies the condition
const student_name = "Emily"
let student_index = students.findIndex(function(student) {
    return student.name === student_name
}) // -1 if the index is not found
console.log(students)
console.log(student_index)

// some and every method
// some: returns "true" if atleast 1 element pass the condition
// every: returns "true" all the elements pass the condition
console.log(salaries)
console.log(salaries.some(
    function(salary) {
        // return boolean value
        return salary > 5000
    }
))
console.log(salaries.every(
    function(salary) {
        // return boolean value
        return salary > 1000
    }
))

// flat method: flattens the nested array
let nested_arr = [1, 2, 3, 4, [5, 6, [7]]]
console.log(nested_arr.flat()) // default depth: 1

// flatMap: map and flat method
const cart = [
    {name: "Mobile Phone", qualtity: 2, proce: 100},
    {name: "Washing Machine", qualtity: 4, proce: 500},
    {name: "Fan", qualtity: 2, proce: 300},
]
const complementary_item = {name: "Microwave", qualtity: 1, price: 0}
const purchased = "Washing Machine"
console.log(cart.flatMap( // apply "map" and compare the results
    function(item) {
        // add free item in the final "cart"
        if (item.name === purchased) {
            return [item, complementary_item]
        }
        return item
    }
))

// sorting array: "sort"
// first convert every element to string and then sort the array
let chars = ["a", "b", "c", "g", "f"]
console.log(chars.sort()) // ascending

let nums = [1, 2, -1, -2]
// console.log(nums.sort()) // unexpected: [-1, -2, 1, 2] (convert to string before sorting)

console.log(nums.sort(function(a, b) {
    console.log(a, b, nums)
    return a - b
}))

// chaining methods: keep in mind the return type of the previous method

// ----- date and time
let currentDate = new Date()
console.log(currentDate)

// 2 digit year will be converted to 19XX
console.log(new Date(20, 11, 0)) // year, month (0 based indexing), date, hour, minute, seconds, milliseconds
console.log(new Date(2022, 1, 1))

let currentDateMS = new Date().getTime() // in milliseconds
console.log(currentDateMS)

console.log(`Full Year: ${currentDate.getFullYear()}`)
console.log(`Month: ${currentDate.getMonth()}`) // 0 based index of month
console.log(`Day: ${currentDate.getDay()}`) // 0 based day of week starting from Sunday
console.log(`Date: ${currentDate.getDate()}`)
console.log(`Hours: ${currentDate.getHours()}`)

let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let seconds = document.querySelector("#seconds")

function ticking() {
    let nowDate = new Date()

    hour.textContent = nowDate.getHours()
    minute.textContent = nowDate.getMinutes()
    seconds.textContent = nowDate.getSeconds()
}

setInterval(ticking, 1000) // run every second

// ----- local storage: API is used
console.dir(window.localStorage)

// set item
localStorage.setItem("hello", "world")
console.log(localStorage)

// get item
console.log(localStorage.getItem("hello"))

// update item
localStorage.setItem("hello", "world updated")
console.log(localStorage.getItem("hello"))

// remove item
localStorage.removeItem("hello")
console.log(localStorage.getItem("hello")) // null

// clean local storage
// localStorage.clear()

// ----- storing complex datastructure in local storage
let vehicles = [
    {company: "honda", model: 2009},
    {company: "suzuki", model: 2011}
]

// stringify the object
let vehiclesString = JSON.stringify(vehicles)
console.log(vehiclesString);
localStorage.setItem("vehicles", vehiclesString)

// get stored item
let vehiclesObj = JSON.parse(localStorage.getItem("vehicles")) // parse the string into object
console.log(vehiclesObj)

// storage is separate for every domain

// ----- OOP
// we cannot use arrow function as the constructor

// constructor and new keyword

// function as objects
// same as function by, will call the function using new keyword
// thus, constructor will be called
// default empty constructor
let Car = function (company, model) {
    // set instance properties
    this.company = company
    this.model = model

    // // bad practice: use prototype
    // this.drive = function () {
    //     console.log(`${this.company} ${this.model} is driving...`)
    // }
}

// console.log(new Car()) // returns Car object
let car = new Car("Honda", 2009)
console.log(car)
// car.drive()
console.log(car instanceof Car) // boolean

// ----- prototypes: special property
// each object created using constructor function has access to all the methods present inside that constructor prototype

console.log(Car.prototype)

Car.prototype.drive = function () {
    console.log(`${this.company} ${this.model} is driving...`)
}

// every object of Car has access to "drive" method
car.drive()
console.log(Car.prototype) // on function
console.log(car.__proto__) // same as above: on instance

// we can also set properties in prototype
// fixed for all the objects created using this constructor
Car.prototype.door = 4

// Car.prototype is prototype of all objects created through Car constructor

console.log(car.__proto__)

let dummyArr = [1, 2, 3] // [] is same as new Array([])
console.log(dummyArr.__proto__, Array.prototype) // methods for all Arrays like: forEach, filter, ....

// Object prototype

// ----- ES6 classes: they still implement prototypical inheritance behind the scene (same as above by more easy way)

class NewCar {
    constructor(company, model) {
        this.company = company
        this.model = model
    }

    // drive will be added in the prototype automatically
    drive() {
        console.log(`${this.company} ${this.model} is driving...`)
    }
}

NewCar.prototype.horn = function () {
    console.log(`${this.company} ${this.model} is honking...`)
}

let newCar = new NewCar("Honda", 2022)
console.log(newCar)
console.log(newCar.drive())
console.log(newCar.horn())

// classes are not hoisted
// classes are first class citizens like function (pass as an argument or return)
// classes are executed in strict mode

// ----- getter and setters: object accessor (computed properties)

class MyCar {
    // private attrs
    #model = null
    #company = null

    set company(company) {
        this.#company = company
    }

    set model(model) {
        this.#model = model
    }

    get company() {
        return this.#company
    }

    get model() {
        return this.#model
    }

    get fullCar() {
        return `${this.#company} ${this.#model}`
    }

    drive() {
        console.log(`${this.#company} ${this.#model} is driving...`)
    }

    // private method
    #honk() {
        console.log(`${this.#company} ${this.#model} is honking...`)
    }

    get honk() {
        // getter should return a value (but for demonstration the function is called)
        this.#honk()
    }
}

let myCar = new MyCar()
myCar.company = "Honda" // access as class properties
myCar.model = 2022

console.log(myCar)
console.log(myCar.company) // access as class properties
console.log(myCar.model)
console.log(myCar.fullCar)
myCar.drive() // access function
myCar.honk

// ----- static method
// method which is not present in the prototype, it is common on the class rather than the instance
// "this" does not work on this method as it does not work on instance

// prototype methods are instance methods

MyCar.break = function () {
    console.log(`breaking...`)
}
MyCar.break()
// myCar.break() // error as "break" is not on class instance

class DummyClass {
    static getInstance() {
        return new DummyClass()
    }
}
dummyClass = DummyClass.getInstance()
console.log(dummyClass)

// real examples
// Arrays.from()
// Number.parseInt()

// ----- inheritance

// using class
class Vehice {
    constructor(model, company) {
        this.company = company
        this.model = model
    }

    honk() {
        console.log("Honkkkk")
    }
    drive() {
        console.log("Drive...")
    }
    static dummyStaticMethod() {
        console.log("this is static method")
    }
}
class Car extends Vehice {
    constructor(model, company) {
        super(model, company)
        this.tyres = 4
    }
}
class Bike extends Vehice {
    constructor(model, company) {
        super(model, company)
        this.tyres = 2
    }
}
car = new Car("Honda", 2022)
bike = new Bike("Yamaha", 2021)
console.log(car)
console.log(bike)

Car.dummyStaticMethod() // can access prent class' static method

// prototypal inheritance
function Parent(a, b) {
    this.a = a
    this.b = b
}
Parent.prototype.hello = function() {
    console.log("hello from parent")
}

function Child(a, b, c) {
    this.c = c
    Parent.call(this, a, b) // bind parent constructor with child's instance
}

// inheritance from parent class
Child.prototype = Object.create(Parent.prototype)

// child class method
Child.prototype.hey = function() {
    console.log("hey from child")
}

let child = new Child(1, 2, 3)
console.log(child)

// ----- chaining of method
// return type of methods should be kept in mind
class BankAccount {
    constructor(balance) {
        this.balance = balance
        this.transactions = []
    }

    deposit(sum) {
        this.balance += sum
        this.transactions.push(sum)
        // can call another method of the class using the returned value "this"
        // helps to chain the methods of the class
        return this
    }

    withdraw(sum) {
        return this.deposit(-sum)
    }

    getTransactions() {
        return this.transactions
    }
}
account1 = new BankAccount(1000)
account1.deposit(100).withdraw(200)
console.log(account1.balance)
console.log(account1.getTransactions())

// ----- asynchronous JS
// AJAX
setTimeout(function() {
    console.log("1")
}, 3000) // the code is not blocked for 3 seconds
console.log("2")

// ----- Making HTTP request
// let request = new XMLHttpRequest()

// state of request
// 0: unsent: client has been created, open() has not been called
// 1: opened: open() has been called
// 2: headers_received: send() has been called
// 3: loading: partial data
// 4: done: operation completed

// status codes
// 100-199: informational response
// 200-299: successful response
// 300-399: redirection message
// 400-499: client error
// 500-599: server error

// let todos = function(callback) {
//     let request = new XMLHttpRequest()

//     request.addEventListener("readystatechange", function() {
//         // console.log(request, request.readyState)
//         if (request.readyState === 4) {
//             if (request.status === 200) {
//                 callback(JSON.parse(request.responseText), undefined)
//             } else {
//                 callback(undefined, "Data could not be fetched")
//             }
//         }
//     })
    
//     // setup the request
//     // request.open("GET", "https://jsonplaceholder.typicode.com/todos") // get JSON response
//     request.open("GET", "./data.json") // get JSON data from local file
    
//     // send the request
//     request.send()
// }

// console.log("1")

// // async
// todos(function(data, err) {
//     if (data) {
//         console.log(data)
//     } else if (err) {
//         console.log(err)
//     }
// })

// console.log("2")

// ----- callback hell
// chaining callback function inside one another
let todos = function(resource, callback) {
    let request = new XMLHttpRequest()

    request.addEventListener("readystatechange", function() {
        // console.log(request, request.readyState)
        if (request.readyState === 4) {
            if (request.status === 200) {
                callback(JSON.parse(request.responseText), undefined)
            } else {
                callback(undefined, "Data could not be fetched")
            }
        }
    })
    
    // setup the request
    request.open("GET", resource) // get JSON data
    
    // send the request
    request.send()
}

console.log("1")

// async
// chain of function callbacks: callback hell
todos("./data.json", function(data, err) {
    if (data) {
        console.log(data)
    } else if (err) {
        console.log(err)
    }

    todos("./data1.json", function(data, err) {
        if (data) {
            console.log(data)
        } else if (err) {
            console.log(err)
        }
    
        todos("./data2.json", function(data, err) {
            if (data) {
                console.log(data)
            } else if (err) {
                console.log(err)
            }
        })
    })
})

console.log("2")

// ----- promise
console.log("1")

// let getSomeThing = function() {
//     return new Promise(function(resolve, reject) {
//         let random = Math.ceil((Math.random() * 2))
//         if (random === 1) {
//             resolve("This is dummy resolve value")
//         } else {
//             reject("Rejected")
//         }
//     })
// }

// getSomeThing().then(function(data) {
//     console.log(data)
// }).catch(function(err) {
//     console.log(err)
// })

let todos = function(resource) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest()

        request.addEventListener("readystatechange", function() {
            // console.log(request, request.readyState)
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(JSON.parse(request.responseText))
                } else {
                    reject("Data could not be fetched")
                }
            }
        })
        
        // setup the request
        request.open("GET", resource) // get JSON data
        
        // send the request
        request.send()
    })
}

// todos("./data.json").then(function(data) {
//     console.log(data)
// }).catch(function(err) {
//     console.log(err)
// })

// chaining of promise
todos("./data.json").then(function(data) {
    console.log(data)
    return todos("./data1.json")
}).then(function(data) {
    console.log(data)
    return todos("./data2.json")
}).then(function(data) {
    console.log(data)
}).catch(function(err) { // only one catch enough to catch error
    console.log(err)
})

console.log("2")

// ----- fetch API
// alternatrive to XMLHttpRequest
// returns promise

fetch("./data.json").then(function(resp) {
    console.log(resp)
    return resp.json() // returning promise
}).then(function(data) {
    console.log(data)
}).catch(function(err) {
    console.log(err)
})

// ----- async-await
// non-blocking
let getTodos = async function() { // async returns promise
    let response = await fetch("./data.json") // await same as .then()

    // if (response.status !== 200) {
    //     throw new Error("Custom: Error in fetching data")
    // }

    let data = await response.json()

    let response2 = await fetch("./data1.json")
    let data2 = await response2.json()

    return data.concat(data2)
}
// console.log(getTodos())

getTodos().then(function(data) {
    console.log(data)
}).catch(function(err) {
    console.log(err)
})
 */
// ----- error-handling in try-catch method
// let getTodos = async function() { // async returns promise
//     try {
//         // wait until the promise(await) is resolved
//         let response = await fetch("./data.json") // await same as .then()
//         let data = await response.json()

//         let response2 = await fetch("./data1.json")
//         let data2 = await response2.json()

//         return data.concat(data2)
//     } catch (err) {
//         return err.message
//     }
// }
// console.log(getTodos())

// getTodos().then(function(data) {
//     console.log(data)
// }).catch(function(err) {
//     console.log(err)
// })

// console.log(getTodos())

// ********** Aync JS

// JS is synchronous, blocking and single-threaded language

/*
If we have two functions which log messages to the console, code executes top-down, with only 1 line executing at a time

No matter how long a previous process takes, the subsequent processes won't kick off until the former process is completed

Each thread can only do one task at a time. JS has only 1 thread called the main thread for executing any code
*/

// setTimeout
// clearTimeout(timeoutId)
// setInterval
// clearInterval(intervalId)
// recusive setTimeout == setInterval

// callbacks: functions are first class objects
// synchronous callbacks and async callbacks

// async callback
// setTimeout, eventLiteners
// nesting of function becomes deep: callback hell

// promises
// states of promise
// - pending: initial state
// - fulfilled: operation has been completed
// - rejected: operation failed

// resolve(): pending -> fulfilled
// rejected(): pending -> rejected

// .then()
// .catch()

// Promise.all: wait for all promises to resolve and then execute the function
// Prmoise.allSettled: 
// Promise.race: 

// async-await
// async functions: returns promise

// sequential, concurrent, parallel execution
// function hello() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(resolve, 2000, "Hello")
//     })
// }

// function world() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(resolve, 1000, "World")
//     })
// }

// async function sequential() {
//     start = performance.now()
//     const h = await hello() // 2 sec to resolve (execution no longer continues ahead)
//     const w = await world() // start after 2 sec + 1 = 3 sec
//     console.log((performance.now() - start) / 1000)
//     return `${h} ${w}`
// }
// sequential().then(function(data) {
//     console.log(data)
// })

// async function concurrent() {
//     start = performance.now()
//     const h = hello() // 2 sec
//     const w = world() // 1 sec
//     to_return = `${await h} ${await w}` // wait until both promises are fultilled
//     console.log((performance.now() - start) / 1000)
//     return to_return
// }

// concurrent().then(function(data) {
//     console.log(data)
// })

// async function parallel() {
//     await Promise.all([
//         // hello(), // 2 sec
//         // world() // 1 sec

//         async function() {
//             const h = await hello()
//             console.log(h)
//             return h
//         }(), // call the async function
//         async function() {
//             const w = await world()
//             console.log(w)
//             return w
//         }()
//     ]).then(function(values) {
//         console.log(values)
//     })
//     console.log("temp")
// }

// parallel()

// event loop


// **********

// ----- custom error handling

// class CustomError extends Error {

// }

// function CustomError1() {

// }
// CustomError1.prototype = new Error()

// ----- closure
// when we return a function from another function, we are returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which would hold the live data between executions

// function outer() {
//     let counter = 0
//     function inner() {
//         counter += 1
//         console.log(counter);
//     }
//     // inner()
//     return inner
// }

// // outer() // 1
// // outer() // 1: memory is reset

// let inn = outer() // memory is not reset as counter and inner function will be in the scope of outer
// inn() // 1
// inn() // 2

// ----- function currying
// function f(a, b, c) is transformed to f(a)(b)(c)

// function sum(a, b, c) {
//     return a + b + c
// }

// function sumC(func) {
//     return function (a) {
//         return function(b) {
//             return function(c) {
//                 return func(a, b, c)
//             }
//         }
//     }
// }

// console.log(sumC(sum)(1)(2)(3))

// ----- this
// implicit binding

// let person1 = {
//     name: "Jay",
//     sayMyName1: function () {
//         console.log(`My name is ${this.name}`);
//     }
// }

// person1.sayMyName1() // JS automatically set the value of this

// explicit binding

// let person2 = {
//     namee: "Jay"
// }

// function sayMyName2() {
//     console.log(`My name is ${this.namee}`); // explicitly set the value of this
// }

// // call, apply, bind
// sayMyName2.call(person2)

// // new binding

// function person3(name) { // constructor function
//     // this = {}
//     this.name = name
// }

// const pJay = new person3("Jay")
// console.log(pJay.name);
// const pMeet = new person3("Meet")

// default binding: undefined
// if none of the above rules matched

// this.namee = "SuperMan"
// sayMyName2()
// console.log(name); (Meet)???

// order of precedence
// new > explicit > implicit > default

// ----- prototype
// share properties to all the instances of the object
// also used in inheritance: prototypal inheritance

// function Person(fname,  lname) {
//     this.fname = fname
//     this.lname = lname
// }
// Person.prototype.getFullName = function () {
//     console.log(`${this.fname} ${this.lname}`);
// }

// function SuperHero(fname, lname) {
//     Person.call(this, fname, lname)
// }
// SuperHero.prototype = Object.create(Person.prototype)
// SuperHero.prototype.constructor = SuperHero // ???
// SuperHero.prototype.fightCrime = function () {
//     console.log(`SuperHero is fighting crime.`);
// }
// const superHero = new SuperHero("John", "Doe")
// superHero.fightCrime()

// ----- class

// ----- iterables and iterators
// OLD: str and array FOR loop

// for-of loop
// String and Array class implement iterable protocol

// const strLoop = "This is Test"
// for (let char of strLoop) {
//     console.log(char);
// }

// // iterator protocol
// // decides whether an object is an iterator
// // must have next() method: (value, done)

// create obj iterable
function Str(namee) {
    this.namee = namee
}

// Str.prototype[Symbol.iterator] = function() {
//     let ctr = -1
//     const namee = this.namee // ??
//     // closure?
//     return {
//         next: function() {
//             ctr += 1
//             if (ctr === namee.length) {
//                 return {value: undefined, done: true}
//             }
//             return {value: namee.charAt(ctr), done: false}
//         }
//     }
// }

// const strLoopObj = new Str("This is Test")

// for (let char of strLoopObj) {
//     console.log(char);
// }

// https://medium.com/front-end-weekly/thank-u-symbol-iterator-next-aef9f09ff78
// We can write a function like Python’s range and use it to iterate elegantly over a sequence of numbers.

// ----- generators
// function normalFunction() {}

// function* generatorFunction() {
//     yield "Hello"
//     yield "World"
// }

// const generatorObject = generatorFunction()

// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

// // for (let word in generatorObject) {
// //     console.log(word);
// // }

// Str.prototype[Symbol.iterator] = function* () {
//     for (let i = 0; i < this.namee.length; i++) {
//         yield this.namee.charAt(i)
//     }
// }
// const strLoopObj = new Str("This is Test")

// for (let char of strLoopObj) {
//     console.log(char);
// }

// ----- closure: return function along with its lexical env/scope
// function Temp(fname) {
//     this.fname = fname
// }

// Temp.prototype.hello = function() {
//     // return function along with its lexical env/scope
//     const localA = 1
//     const localFname = this.fname
//     function a() {
//         console.log(`Local Variable: ${localA}`)
//         console.log(`Local Variable (containing this): ${localFname}`)
//         console.log(`This Variable: ${this.fname}`)
//     }
//     return a
// }

// const tempObj = new Temp("Alex")
// tempA = tempObj.hello()
// tempA()

// uses of closure
// - module design pattern
// - currying
// - functions like once
// - memoize
// - maintaining state in async world
// - setTimeout
// - iterators

// =========================================================================

// ----- destructuring an array
let items = [1, 2, 3, 4]

// let [x1, y1, , a1, b1] = items // skip the 3rd element, b: undefined

// console.log(x1, y1, a1, b1)

// // swapping using destructuring

// // nested array destructuring
// items = [1, 2, [3, 4]]
// let [x2, y2, [z2, a2]] = items
// console.log(x2, y2, z2, a2);

// ----- object destructuring
// let hotel = {
//     namee: "ITC Narmada",
//     place: "Ahmedabad",
//     categories: ["Chineese", "Italian", "English"],
//     mainMenu: ["FoodA", "FoodB", "FoodC"],
//     openingHours: {
//         sunday: {open: "09:00 AM", close: "11:00 PM"},
//         monday: {open: "10:00 AM", close: "10:00 PM"}
//     }
// }

// // same name as the key names of the object (in any order)
// let {namee, place, categories} = hotel
// console.log(namee, place, categories);

// // set customized name of object properties
// let {namee: hotelNamee, place: hotelPlace, categories: hotelCategories} = hotel
// console.log(hotelNamee, hotelPlace, hotelCategories)

// // setting defualt values
// let {value: hotelValue="dummy default value"} = hotel
// console.log(hotelValue);

// // nested objects
// let {openingHours} = hotel
// console.log(openingHours);
// let {monday: {openMonday, closeMonday}, sunday: {openSunday, closeSunday}} = openingHours // ???
// console.log(openMonday, closeMonday, openSunday, closeSunday);

// ----- spread operator (unpacking of array elements)
// creates shallow copy

// console.log(...items)
// let newItems = [9, 10, ...items] // not a reference of items, new memory location
// console.log(newItems)

// console.log(["FoodE", ...hotel.mainMenu])

// let joinedArray = [...items, ...newItems]
// console.log(joinedArray)

// let spreadString = "JavaScript"
// console.log(...spreadString);

// ----- rest pattern and parameter
// opposite of spread

// let [a3, b3, ...remaining] = items
// console.log(a3, b3, remaining);

// let {namee, ...hotelRemaining} = hotel
// console.log(namee, hotelRemaining);

// ----- short circuiting (&&, ||)
// falsy values: false, 0, undefined, null, ""(empty string)

// stop the checking if first condition fails

// console.log(500 && 0); // kind of false
// console.log(500 && 10); // kind of true

// // first true value
// console.log(500 || 0);
// console.log(0 || 500);

// // ----- nullish coalescing operator
// // ??: only null and undefined are falsy values

// console.log(0 ?? 300) // 0 is not nullish value

// ----- for-of loop: in arrays

// for (let [i, elem] of items.entries()) { // index and value of arrays
//     console.log(i, elem);
// }

// ----- enhanced object literal
// computed keys: dynamic property name using [name]: ...

// ----- optional chaining (?.)
// check at what time the hotel is open in saturday

// console.log(hotel.openingHours.saturday.open); // error: undefined has no property "open"

// conventional way
// if (hotel.openingHours.saturday) {
//     console.log(hotel.openingHours.saturday.open)
// } else {
//     console.log("Hotel is not open on saturday");
// }

// // using optional chaining
// console.log(hotel.openingHours.saturday?.open) // check the value before the operator, if not exist: null or undefined

// ----- looping objects: objects are non-iterable, but indirectly, we can loop

// console.log(Object.keys(hotel)) // for-of loop on array of keys
// console.log(Object.values(hotel))

// for (let [key, value] of Object.entries(hotel)) { // get key-value pair
//     console.log(key, value);
// }

// for (let [key, {open, close}] of Object.entries(hotel.openingHours)) { // using destructuring
//     console.log(key, open, close);
// }

// ----- Sets
// collection of unique value
// lookup of object is very fast O(1)

// let itemSet = new Set([...items])
// itemSet.add(1)
// console.log(itemSet, typeof itemSet);
// console.log(itemSet.size);
// console.log(itemSet.has(1));
// console.log(itemSet.has(8));
// itemSet.delete(1)
// console.log(itemSet);
// // not allowed to access values using index
// // allowed to iter on set
// for (let item of itemSet) {
//     console.log(item);
// }

// console.log(new Set("ThisIsTest"));

// ----- Maps
// key-value pairs
// map is similar to object, but map can contain key of any datatype

// let restaurantMap = new Map()
// restaurantMap.set("name", "ITC Narmada")
// restaurantMap.set(1, false).set(true, null)
// // restaurantMap.set([1, 2], [3, 4])
// const key = [1, 2]
// restaurantMap.set(key, [3, 4])

// console.log(restaurantMap);
// console.log(restaurantMap.get(1));
// console.log(restaurantMap.get([1, 2])); // undefined: new ref of [1, 2] is passed
// console.log(restaurantMap.get(key));
// console.log(restaurantMap.size);

// // looping over map
// for (let [key, value] of restaurantMap) {
//     console.log(key, value);
// }

// ----- modern tooling
// exporting and importing ES6 modules

// import { order } from "./export.js" // named import (same name as the export vars)
// import { order as ord } from "./export.js" // change the name with as
// import * as exports from "./export.js" // all the exported in a var and access using "."

// exports.order("Jack", "Phone")
// console.log(exports.myName);

// ----- default export: export only 1 item from the file

// import order from "./export.js" // default import, no need to de-structure
// order("Jack", "Phone")

// ----- top-level await
// use await outside of async function

// blocks the execution of the file: main thread

// let resp = await fetch("https://jsonplaceholder.typicode.com/todos")
// console.log("Between response");
// let data = await resp.json()
// console.log(data);
// console.log("After response");

// ----- module pattern

// IIFE: immediately invoked function expression

// let {orders, addToCart} = (function() {
//     let orders = []
//     let addToCart = function(product, quantity) {
//         orders.push({product, quantity})
//     }
//     return {
//         orders, addToCart
//     }
// }()) // protect the data ???

// addToCart("Test", 1)
// console.log(orders);
