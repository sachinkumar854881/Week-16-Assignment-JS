// using Number
let num = 85432;
let rem=0;
let reverseNum = 0;
while(num>0){
    rem = num%10;
    reverseNum = reverseNum*10+rem;
    num = Math.floor(num/10)
}
console.log("reverse number is: ",reverseNum)