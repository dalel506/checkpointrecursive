// Decision making(if-else)
function TicketPricing(){
    let age = parseInt(prompt("please enter your age"))
    if( age <= 12){
        return "your ticket price is $10"
    }
    else if (age >=13 && age <= 17){
        return  "your ticket price is $15"
    }
    else {
        return "your ticket price is $20"
    }

}
console.log(TicketPricing())
 

function WeatherClothing(){
    let temperature = parseInt(prompt("what is current temperature in degrees celsius?"))
    if ( temperature <= 0){
        return "It's freezing! Wear a heavy winter coat, gloves, and a hat."
    }
    else if (temperature >= 5 && temperature <=10){
        return "It's quite cold. Wear a warm jacket and layers."
    }
    else if ( temperature >= 12 && temperature <= 20){
        return "The weather is cool. A light jacket or sweater should be enough."
    }
    else {
        return "It's hot outside. Wear comfortable, breathable clothes like a tank top and shorts."
    }
}
console.log(WeatherClothing())

// Recursion
function FibonacciSequence(n){
    if( n <= 1){
        return n
    }
        return FibonacciSequence(n-1) + FibonacciSequence(n-2)
}
console.log(FibonacciSequence(8))


function PowerFunction(n,x){
    
    if (n == 0) {
        return 1}
        return x * PowerFunction(n-1, x);
    }
console.log(PowerFunction(2,4))