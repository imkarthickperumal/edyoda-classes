console.clear()

/* 
1. var supports hoisting, let and const doesn't
2. We cannot create variables with same name with let and const
3. let and const are block scoped whereas var is function scoped
*/

// let sum = a => a

// console.log(sum(10))

// sum(10,25)
// console.log(sum)
// sum(10,15)

// function sum(a,b){
//   console.log(a+b)
// }

// sum(10,15)

// let greeting = (firstName, lastName) => `Welcome ${firstName} ${lastName}`
// let greeting = (firstName, lastName) => "Welcome " + firstName + " " + lastName

// console.log(greeting('John','Doe'))

// const multiplier = val => val*10

// let a = 20
// console.log('Before function call: ',a)
// console.log(multiplier(a))
// console.log('After function call: ', a)

// const addElement = arr => {arr.push(25) 
//                            return arr}

// let a = [1,2,3,4,5]
// console.log(a)
// console.log(addElement(a))
// console.log(a)

// let arr = [2,4,3,6,5]
// console.log(arr)
// console.log(...arr)
// console.log(Math.max(...arr))

// let sum = (a,b,...restElements) => {
//   console.log(a,b)
//   return restElements
// }

// console.log(sum(1,2,4,3,6))

// let a = [1,2,3,4,5]
// let b = [...a]

// a.push(8)
// b.push(20)
// console.log(a)
// console.log(b)

// var [a, b] = ['Alpha', 'Beta', 'Gamma']
// var { manufacturer, name} = {name: 'Koenigsegg Agera', manufacturer: 'Koenigsegg', topSpeed: '457kmph'}

// console.log(a,b)
// console.log(manufacturer, name)
