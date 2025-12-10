// Quiz 1
let num = 100;

for (let i=1; i<=num; i++){
    if (num%i === 0){
        console.log(i);
    }
}

// Quiz 2
function isPrimeNumber(num){
    let count = 0;
    for (let i=1; i<=num; i++){
        if(num%i===0){
            count++;
        }
    }
    if (count>2){
        return false;
    }else{
        return true;
    }

}

console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// Quiz 3
function add(num1, num2){
    return(num1+num2);
}

function subtract(num1, num2){
    return(num1-num2);
}

function calculate(num1, num2, operation){
    console.log(operation(num1,num2));
}

calculate(5, 3, add);
calculate(5, 3, subtract);