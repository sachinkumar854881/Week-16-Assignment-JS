// Find largest number in array
const getlargestNum = (arr =[]) => {
    let largestNum = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] > largestNum){
            largestNum = arr[i]
        }
    }
    return largestNum
}
console.log("Find Largest number---------")
const arr = [23,45,87,21,65]
const largestNum  = getlargestNum(arr)
console.log(arr)
console.log("largest number is: ",largestNum)

// Find Second Largest Number
const getseclargestNum = (arr1 =[]) => {
    let largestNum1 = arr1[0];
    let secLargest = arr1[0];/*make one more variable for second largest */
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] > largestNum1){
            secLargest =  largestNum1;
            largestNum1 = arr1[i]
        }else if(arr1[i > secLargest]){
            secLargest = arr1[i]
        }
    }
    return secLargest
}
console.log("Find Second Largest number---------")
const arr1 = [55,34,12,76,89]
const secLargest  = getseclargestNum(arr1)
console.log(arr1)
console.log("second largest number is: ",secLargest)