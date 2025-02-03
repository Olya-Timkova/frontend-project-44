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

let name = '';

export const gameCalc = () => {
    if (counter === 0) {
        name = greetings()
        print(`Hello, ${name}!\nWhat is the result of the expression?`)   //  Ожидаем ответа пользователя.
    }

    const { a, b, operator } = getRandomExamples();

    const userAnswer = print(`Question: ${a} ${operator} ${b} \nYour answer: `);

    const winUser = checkUserAnswer(userAnswer, a, b, operator);

    if (winUser) {
        print('Correct!');
        counter++;
        if (counter === 3) {
            print(`Congratulations, ${name}!`);
            return;
        } else {
            gameCalc();
        }
    } else {
        print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calc(a, operator, b)}'.\nLet's try again, ${name}!`)
    }

}
