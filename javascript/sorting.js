// Sorting without use sort()
let arr = [23,4,56,44,76,87,12]
let swap;
for(let i=0; i<arr.length;i++){
    for(let j=i; j<arr.length;j++){
        if(arr[i] > arr[j]){
            swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
    }
}
console.log("Sorting elements is: ",arr)
