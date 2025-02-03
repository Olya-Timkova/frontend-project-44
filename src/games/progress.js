import { print } from "./../index.js";
import { greetings } from "./../index.js";

const getRandome = (min, max) => { // созд рандобное число с параметром min и max
    return Math.floor(Math.random() * (max - min) + min);
}

const generateArithmeticProgression = (length, start, difference) => { // функция принемает на вход длину сроки, начало и разницу и генерирует арифм прогресс
    const progression = [] // массив в котором будет лежать сгенерирован арифм. прогрессия
    for (let i = 0; i < length; i++) {
        progression.push(start + i * difference);
    }
    return progression;
}

const checkUserAnswer = (userAnswer, missingValue) => {
    // const missingValue = generateArithmeticProgression(length, start, difference);
    if (Number(userAnswer) === Number(missingValue)) {
        return true;
    }
    return false;
}

let counter = 0;
let userName = '';

export const gameArithmeticProgression = () => {
    const length = 10; // определяем значение length 10
    const start = getRandome(1, 10); // начальное число от 1 до 10
    const difference = getRandome(1, 4); // разность от 1 до 4
    const progression = generateArithmeticProgression(length, start, difference); //  в созданный массив кладем функцию generateArithmeticProgression, которая им параметр ength, start, difference

    const missingIndex = getRandome(0, length); // переменая которая прячет рандомное число
    const missingValue = progression[missingIndex]; //перемен которая берет массив прогресс и кладет туда спрятанный идекс переменной missingIndex
    progression[missingIndex] = '..'; // заменяем пустое место точками

    const joinProgress = progression.join(' ')

    if (counter === 0) {
        userName = greetings()
        print(`Hello, ${userName}!\nWhat is the result of the expression?`)   //  Ожидаем ответа пользователя.
    }

    const userAnswer = print(`Question: ${joinProgress} \nYour answer: `);

    const isWin = checkUserAnswer(userAnswer, missingValue);

    if (isWin) {
        print('Correct!');
        counter++;
        if (counter === 3) {
            print(`Congratulations, ${userName}!`);
            return;
        } else {
            gameArithmeticProgression();
        }
    } else {
        print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${missingValue}'.\nLet's try again, ${userName}!`)
    }
} 