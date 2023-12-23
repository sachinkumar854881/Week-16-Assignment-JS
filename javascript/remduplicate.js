let arr = [1,2,3,4,true,false,'hello','hello',4,3,true]
let uniqobj = {};
for(let a of arr)
{
    uniqobj[a] = '';
}
console.log("arr is: ",arr)
console.log(uniqobj)
console.log(Object.keys(uniqobj))