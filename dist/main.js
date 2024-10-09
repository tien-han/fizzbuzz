//Arrow function
var fizzbuzz = function (limit) {
    for (var i = 1; i <= limit; i++) {
        // For each number from 1-100, the program prints the number
        console.log(i);
        // If the number is evenly divisible by 3 & 5, it prints "fizzbuzz"
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 == 0) {
            // If the number is evenly divisible by 3, the program also prints "fizz"
            console.log("fizz");
        }
        else if (i % 5 == 0) {
            // If the number is evenly divisible by 5, the program also prints "buzz"
            console.log("buzz");
        }
    }
};
//Call the function with the limit of 100
fizzbuzz(100);
