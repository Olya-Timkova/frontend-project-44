import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

//  Ожидаем ответа пользователя.
export const userName = readlineSync.question(`Hello, ${name}!
Answer "yes" if the number is even, otherwise answer "no".`)

export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
};

export const evenNumber = (num) => {
    num = getRandomIntInclusive(0, 100)
    if (num % 2 === 0 && userName === 'yes' || num % 2 === 1 && userName === 'no') {
        console.log('Corect')
    } else if (num % 2 === 0 && userName === 'no') {
        console(`'no' is wrong answer ;(. Correct answer was 'yes'.
         Let's try again, ${name}`)
    } else if (num % 2 === 1 && userName === 'yes') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
         Let's try again, ${name}`)
    }
};

export const question = readlineSync.question(`Question: ${getRandomIntInclusive(0, 100)}
${evenNumber()}Your answer: `);

export const questionTwo = readlineSync.question(`Question: ${getRandomIntInclusive(0, 100)}
${evenNumber()}Your answer: `)

export const questionThree = readlineSync.question(`Question: ${getRandomIntInclusive(0, 100)}
${evenNumber()}Your answer: `);
export const congratulations = readlineSync.question(`Congratulations, ${name}!`)

