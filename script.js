let total= 0;

let a= parseFloat(prompt("Enter the first number:"));
let b= parseFloat(prompt("Enter the second number:"));

let valid= true

let operation = parseInt(prompt(' \n1. + \n2. - \n3. * \n4. /'));

switch (operation){
    case 1: 
        total= a + b;
        operation='+';
        document.getElementById("displayTotal").innerHTML = `${a} ${operation} ${b} = ${total}`
        break;
    case 2:
        total= a - b;
        operation='-';
        document.getElementById("displayTotal").innerHTML = `${a} ${operation} ${b} = ${total}`
        break;
    case 3: 
        total= a * b;
        operation='*';
        document.getElementById("displayTotal").innerHTML = `${a} ${operation} ${b} = ${total}`
        break;
    case 4:
        if (b !== 0){
            total= a / b;
            operation= '/';
            document.getElementById("displayTotal").innerHTML = `${a} ${operation} ${b} = ${total}`
        }else {
            document.getElementById("displayTotal").innerHTML = "Error! Cannot divide by zero.";
            valid= false;
        }
        break;
    default: 
        document.getElementById("displayTotal").innerHTML = "Invalid Input. Try again.";

}