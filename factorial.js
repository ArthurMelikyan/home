function factorial(number) {
    if (factorial.arguments.length > 1) {
        console.log("only 1 parametr");
        return false;
    } else if (factorial.arguments.length == 0) {
        console.log("please add parameter on call");
        return false;
    }
    if (number === 0) {
        return 1;
    } else if (number < 0) {
        console.log("dont send negative number");
        return false;
    }
    return number * factorial(number - 1);
}
console.log(factorial(1 , 1 ,2));
console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(8));
console.log(factorial(0.5));