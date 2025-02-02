import { print } from "./../index.js";
import { greetings } from "./../index.js";

const floorRandom = (number) => Math.floor(Math.random() * number);

const getRandomExamples = () => {
    let a = floorRandom(30); // константа с рандом числам а
    let b = floorRandom(30); // константа с рандом числам b
    return { a, b }
}

const nod = (num1, num2) => { // НОД
    num1 = Math.abs(num1)
    num2 = Math.abs(num2)

    while (num2 !== 0) {
        let temp = num2
        num2 = num1 % num2
        num1 = temp
    }
    return num1
}

const checkUserAnswer = (userAnswer, a, b) => {
    const exampleAnswer = nod(a, b);
    if (Number(userAnswer) === Number(exampleAnswer)) {
        return true;
    }
    return false;
}

let counter = 0;

export const gameGcd = () => {
    
    let userName = '';

    if (counter === 0) {
        userName = greetings()
        print(`Hello, ${userName}!\nFind the greatest common divisor of given numbers.`)   //  Ожидаем ответа пользователя.
    }

    const { a, b } = getRandomExamples();

    const userAnswer = print(`Question: ${a} ${b} \nYour answer: `);

    const isWin = checkUserAnswer(userAnswer, a, b);

    if (isWin) {
        print('Correct!');
        counter++;
        if (counter === 3) {
            print(`Congratulations, ${userName}!`);
            return;
        } else {
            gameGcd();
        }
    } else {
        print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${nod(a, b)}'.\nLet's try again, Sam! ${userName}`)
    }

}
