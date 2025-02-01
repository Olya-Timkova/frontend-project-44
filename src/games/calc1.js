import { print } from "./../index.js";
import { greetings } from "./../index.js";

const getRandomeOperators = () => { // функция которая выдает рандомный арифметический оператор
    const array = ['+', '-', '*']
    return array[floorRandom(array.length)];
}

const floorRandom = (number) => Math.floor(Math.random() * number);

const getRandomExamples = () => {
    let a = floorRandom(30); // константа с рандом числам а
    let b = floorRandom(30); // константа с рандом числам b
    let operator = getRandomeOperators();
    return { a, b, operator }
}

const calc = (num1, operator, num2) => { // функция с математическим примером 
    if (operator === '-') {
        return num1 - num2
    }
    if (operator === '+') {
        return num1 + num2
    }
    if (operator === '*') {
        return num1 * num2
    }
}

const checkUserAnswer = (userAnswer, a, b, operator) => {
    const exampleAnswer = calc(a, operator, b); // вызов функции с математическим примером
    if (Number(userAnswer) === Number(exampleAnswer)) {
        return true;
    }
    return false;
}

let counter = 0;

export const gameCalc = () => {

    let userName = '';

    if (counter === 0) {
        userName = greetings()
        print(`Hello, ${userName}!\nWhat is the result of the expression?`)   //  Ожидаем ответа пользователя.
    }

    const { a, b, operator } = getRandomExamples();

    const userAnswer = print(`Question: ${a} ${operator} ${b} \nYour answer: `);

    const isWin = checkUserAnswer(userAnswer, a, b, operator);

    if (isWin) {
        print('Correct!');
        counter++;
        if (counter === 3) {
            print(`Congratulations, ${userName}!`);
            return;
        } else {
            gameCalc();
        }
    } else {
        print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calc(a, operator, b)}'.\n Let's try again, Sam! ${userName}`)
    }

}
