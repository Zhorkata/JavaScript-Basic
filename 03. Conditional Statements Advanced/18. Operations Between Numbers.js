function operators(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOdd = '';
    
    if (operator === '+'){
        result = num1 + num2;
        if(result % 2 === 0){
            evenOdd = 'even'
        }else {
            evenOdd = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
    }
    else if(operator === '-'){
        result = num1 - num2;
        if(result % 2 === 0){
            evenOdd = 'even'
        }else {
            evenOdd = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
    }
    else if(operator === '*'){
        result = num1 * num2;
        if(result % 2 === 0){
            evenOdd = 'even'
        }else {
            evenOdd = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
    }
    else if(operator === '/'){
        result = (num1 / num2).toFixed(2);
        if(num2 === 0){
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            console.log(`${num1} / ${num2} = ${result}`)
        }
    }
    else if(operator === '%'){
        result = num1 % num2;
        if(num2 === 0){
            console.log(`Cannot divide ${num1} by zero`)
        }else {
            console.log(`${num1} % ${num2} = ${result}`)
        }
    }
}
operators(["10",
"0",
"%"])


