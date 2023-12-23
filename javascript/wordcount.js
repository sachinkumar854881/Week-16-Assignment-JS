var stmt = `We are here in javascript world We also do programming 
there are also different programming language`
let word = stmt.split(' ')
console.log("words is: ",word)
const obj = {} /*create empty object */
for(let w of word){
    console.log("w: ",w)

    if(obj.hasOwnProperty(w)){
        obj[w] = obj[w] +1;
    }else{
        obj[w]=1;
    }
}
console.log('obj: ',obj)
console.log('are',obj.hasOwnProperty('are'))