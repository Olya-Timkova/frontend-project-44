import { print } from "./../index.js";
import { greetings } from "./../index.js";

const floorRandom = (number) => {
    return Math.floor(Math.random() * number);
} // рандомное число


const isprimeNumber = (number) => { // простое или нет
    if (number < 2) {
        return false
    }
    let divider = 2
    while (divider <= number / 2) {
        if (number % divider === 0) {
            return false
        }
        divider += 1;
    }
    return true
}


const randomeNumber = floorRandom(50);

const questions = () => {
    const answer = print(`Question: ${randomeNumber}\nYour answer: `);
    return { answer }
}

const isValid = (valid, answer) => {
    return ((valid === true) && (answer === 'yes')) || ((valid === false) && (answer === 'no'))
}


let counter = 0;
let userName = '';

export const gamePrime = () => {
    if (counter === 0) {
        userName = greetings()
        print(`Hello, ${userName}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`)   //  Ожидаем ответа пользователя.
    }

    const valid = isprimeNumber(randomeNumber);

    const { answer } = questions()
    
    if (isValid(valid, answer)) {
        print('Correct!');
        counter++;
        if (counter === 3) {
            print(`Congratulations, ${userName}!`);
            return;
        } else {
            gamePrime();
        }
    } else if (valid === true && answer === 'no') {
        print(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${userName}`)
        return
    } else if (valid === false && answer === 'yes') {
        print(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${userName}`)
        return
    }
}

