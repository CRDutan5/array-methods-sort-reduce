const moviesData = require('./movies.json')
const productsData = require('./products.json')



// map() takes an array, and returns a new array based on the logic that you provide
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// If you do not save the mehtod called on your function then it will run and disappear.
// YOU MUST save it to a variable for it to persist
// Line below uses implicit return -- meaning the arrow function was written on one line, and the return keyword can be omitted
const mappedProducts1 = productsData.map( (item) => item.units_sold += 100 )
// console.log(mappedProducts1)

// Iterate over the productsData and create a new array where each element in the new array will be item.total_sales divided by 12 representing monthly sales
const averageMonthlySales = productsData.map((item) => { 
    return item.total_sales / 12
})
// console.log(averageMonthlySales)


// W no logic in the curly brackets, each callback function returns undefined.
// newArr is an array that has undefined as each element
const newArr = productsData.map((item) => {
    // No logic written
    // Functions return undefined by default unless you tell it to return something else
})

// console.log(newArr)

// Can daisy chain methods together
// productsData
//     .map(() => {

//     })
//     .sort(() => {

//     })

// Returns an array of strings representing interpolated sales_year and product_name
const yearProductNames = productsData.map((item) => {
    return `${item.sales_year} ${item.product_name}`
})

// console.log(yearProductNames)


// Return an array of objects w an updated product_name
const yearProductObjects = productsData.map((item) => {
    // Makes a copy of the item object that is stored in memory, so we can update a new object
    const copiedItem = {...item}
    copiedItem.product_name = `${item.sales_year} ${item.product_name}`
    return copiedItem
})

// console.log(yearProductObjects)




// reduce() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// reduce() returns a single value that is the product of iterating over an array an adding elements into a single value
//
// reduce takes two arguments:
// first: a callback function which has two params:
//      first callback param: accumulator -- our running total
//      second callback param: current -- our iterator representing the element in the array that we are currently on
// second: initialValue -- our starting point for our accumulator (usually 0 or an "")
const allProductTotalSales = productsData.reduce((acc, current) => {
    const newVal = acc -= current.total_sales
    return newVal
}, 1_000_000_000_000)

// Implicit return
const allProductTotalSales2 = productsData.reduce((acc, current) => acc + current.total_sales, 0)


// console.log(allProductTotalSales)


const allProductNames = productsData.reduce((acc, current) => {
    // console.log(current.product_name)
    return acc + current.product_name
}, '')

// console.log(allProductNames)


// sort() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// localeCompare()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

// Callback function will return one of three values
// -1:	sort a after b, e.g. [b, a]
//  1:	sort a before b, e.g. [a, b]
//  0:	keep original order of a and b
const sortProductsByName = productsData.sort((a, b) => {
    if(a.product_name < b.product_name){
        return -1
    } else if(b.product_name < a.product_name){
        return 1
    } else {
        return 0
    }

    // does not work, cannot subtact a string from a string
    // return a.product_name - b.product_name
})
// console.log(sortProductsByName)


const sortProductsByUnitsSold = productsData.sort((a, b) => {
    if(a.units_sold < b.units_sold){
        return -1
    } else if(a.units_sold > b.units_sold){
        return 1
    } else {
        return 0
    }

    // Alternative way for numbers
    // if a is 100 and is 99: 100 - 99 = 1 positive number
    // if a is 99 and b is 100: 99 - 100 = -1 negative number
    // return a.units_sold - b.units_sold
})

// console.log(sortProductsByUnitsSold)