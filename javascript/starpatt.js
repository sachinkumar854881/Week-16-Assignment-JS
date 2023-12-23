// left triangle star 
let str = "";
for(let i=1; i<=5; i++)
{
    for(let j=1; j<=i; j++)
    {
        str += "*";
    }
    str += '\n';
}
console.log("left triangle star------")
console.log(str)

// right trianle star
let str1 = '';
for(let i=1; i<=5; i++)
{
    for(let j=1; j<=5; j++)
    {
        if(j<=5-i)
        {
            str1 += ' ';
        }else{
            str1 += '*';
        }
    }
    str1 += "\n"
}
console.log("right triangle star------")
console.log(str1)

// pyramid star
let str2 = '';
for(let i =1; i<=5; i++)
{
    let row ='';
    for(let j=1; j<=5-i; j++)
    {
        row += ' ';
    }
    for(let j=1; j<=2*i-1; j++)
    {
        row += '*';
    }
    str2 += row + '\n'
}
console.log("pyramid star------")
console.log(str2)

// reverse pyramid star
let str3 = '';
for(let i=5; i>=1; i--)
{
    let row ='';
    for(let j=1; j<=5-i; j++)
    {
        row += ' ';
    }
    for(let j=1; j<=2*i-1; j++)
    {
        row += '*';
    }
    str3 += row + '\n'
}
console.log("pyramid star------")
console.log(str3)

// half diamond star
let str4 = '';
for(let i=1; i<=5; i++)
{
    let row = ''
    for(let j=1; j<=i; j++)
    {
        row += '*'
    }
    str4 += row + '\n'
}
for(let i=5-1; i>=1; i--)
{
    let row = ''
    for(let j=1; j<=i; j++)
    {
        row += '*'
    }
    str4 += row + '\n'
}
console.log("half diamond star------")
console.log(str4)
