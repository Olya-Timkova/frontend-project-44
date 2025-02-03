import { print } from "./../index.js";
import { greetings } from "./../index.js";

const getRandom = (number) => Math.floor(Math.random() * number);

const questions = () => {
    const randomNumber = getRandom(100);
    const answer = print(`Question: ${randomNumber}\nYour answer: `);
    return { randomNumber, answer }
}

let counter = 0;

let userName = '';

const isValid = (randomNumber, answer) => ((randomNumber % 2 === 0) && (answer === 'yes')) || ((randomNumber % 2 !== 0) && (answer === 'no'))

export const gameEven = () => {
    if (counter === 0) {
        userName = greetings()
       print(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`)   //  Ожидаем ответа пользователя.
    }

    const { randomNumber, answer } = questions();

    if (isValid(randomNumber, answer)) {
        print('Correct!');
        counter++;
        if (counter === 3) {
            print(`Congratulations, ${userName}!`);
            return;
        } else {
            gameEven();
        }
    } else if (randomNumber % 2 === 0 && answer === 'no') {
        print(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${userName}`)
        return
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
        print(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${userName}`)
        return
    }

};
