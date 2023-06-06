//Q1. Create one function with zero parameter having a console statement

function noPara() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}

noPara();



//Q2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"


function withPara(a, b) {
    var c = a + b;
    console.log(c);
}
withPara(20, 30);





//Q3 Create one arrow function

const arrowFunction = (num1, num2) =>
    console.log(num1 + num2);
arrowFunction(2, 3);


//Q7 Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
// output : 120