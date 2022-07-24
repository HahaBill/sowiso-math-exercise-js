// Math operators
const operators = ['+', '-', '/', '*'];

// Expected answer 
let expected_answer = -1

// Button for generating random equation
let buttonGenerate = document.getElementById("equation-block")

// Button for submitting an answer
let buttonSubmit = document.getElementById("submitAnswer")

// Display equation
let displayEq = document.getElementById("eq")


/*
 Compute an equation with different type of operators such as
 addition, multiplication, subtraction and division.

 Input : an operator + 2 numbers
 Output : a number
*/
var compute_equation = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y }
}

/*
 Randomly changes an equation and computes the equation and
 save it in the variable called "expected_answer"
*/
buttonGenerate.addEventListener("click", function() {
    let num1 = Math.floor(Math.random() * 99) + 1
    let num2 = Math.floor(Math.random() * 99) + 1
    let random_operator = operators[Math.floor(Math.random() * operators.length)]
    buttonGenerate.style.backgroundColor = 'white';
    displayEq.style.color = '#2F3E53'

    expected_answer = compute_equation[random_operator](num1, num2)
    expected_answer = Math.round(expected_answer * 100) / 100

    displayEq.textContent = num1 + " " + random_operator + " " +num2
});

/*
 Submitting an answer to the equation shown on the web page
 and the feedback
*/
buttonSubmit.addEventListener("click", function() {
    let userInput = document.getElementById("userInput").value;
    if(expected_answer == userInput) {
        displayEq.textContent = "CORRECT"
        buttonGenerate.style.backgroundColor = '#64FF87'
        displayEq.style.color = 'white'
    } else {
        displayEq.textContent = "INCORRECT"
        buttonGenerate.style.backgroundColor = '#FE4318'
        displayEq.style.color = 'white'
    }
});