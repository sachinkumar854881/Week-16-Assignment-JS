// using String
let word = "apple"
// word=word.toString();
let letter = word.split("");
let reverseletter = letter.reverse();
let reverseword = reverseletter.join("")

if(word.toLowerCase() == reverseword.toLowerCase())
{
    console.log("it is palindrome")
}
else
{
    console.log("not palindrome")
}