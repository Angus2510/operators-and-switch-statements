
// prompt screen to enter a number to see if it can be divided by 7 or 11 
let number = Number( prompt("enter a number to see if it is divisible by 7 or 11"))

switch(true){
    case (number % 7=== 0 && number % 11===0):
    alert(`${number} is divisible by 7 and 11`)
    break
    case (number % 7===0):
    alert( `${number} is divisible by 7`)
    break
    case (number % 11===0):
    alert( `${number} is divisible by 11`)
    default:
    case alert(`${number} is divisible by neither 7 nor 11`):


}



