let arraynumber=[1,2,3,4,5,6,7,8,9,10,11,12];
//1. print odd number
let oddnumber=(function(arraynumber) {
    return (arraynumber.filter((x) =>{
        return x % 2 !==0;
    }))
})(arraynumber);
console.log("odd numbers in an array: " + oddnumber)

//2.string uppercase

let b=['gokul','praveen','ranjith','ravi','navanith']
let resultstring = (function(b) {
    return (b.map((x) => {
    return x.toUpperCase();
    }))
})(b)
console.log("All string in uppercase: " + resultstring )

//3.sum ofvalues in an array

let sum=(function(arraynumber){
    return(arraynumber.reduce((x,y)=>{
        return x+y;

    }))
})(arraynumber)
console.log("sum of value in an array: " + sum)

//4.prime numbers
let primenumber=(function(arraynumber){
    return (arraynumber.filter((x)=>{
        for(i=2;i<x;i++){
        if(x % i === 0)
        return false
    }
     return true
    }))
})(arraynumber)
console.log("Prime Numbers in an array: " + primenumber)

//5.palindrome
let array=[111,121,133,144,155,171,191,120,130]
let resultPallindromeArray = (function (array) {

    return (array.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(array);

console.log("Pallindrome numbers in an array: " + resultPallindromeArray)
//6.Return median of two sorted arrays of same size
let arr1 = [1, 2, 3, 4, 5, 8, 10]
let arr2 = [8, 9, 10, 12, 16]

let resultMedian = function (arr1, arr2) {

    let result = []

    let lenArr1 = arr1.length

    let lenArr2 = arr2.length

    if (lenArr1 % 2 === 0) {

        console.log("Median of array 1: " + arr1[lenArr1 / 2])

    } else {

        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }

    if (lenArr2 % 2 === 0) {

        console.log("Median of array 2: " + arr2[lenArr2 / 2])

    } else {

        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    }

    return
}(arr1, arr2)

//7.Remove duplicates from an array
let arrayWithDup = [22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]

let resultArrayWoDup = ((arrayWithDup, index) => {

    return [...new Set(arrayWithDup)]

})(arrayWithDup)

console.log("Array without Duplicates " + resultArrayWoDup)

//8.Rotate an array by k times and return the rotated array

let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log("Array roatated k times: " + resultArrayShifted)
 