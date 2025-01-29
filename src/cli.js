/* eslint-disable no-use-before-define */
import readlineSync from 'readline-sync';

export const game = () => {
    const name = readlineSync.question('Welcome to the Brain Games!\n May I have your name?');

    //  Ожидаем ответа пользователя.
    const userName = readlineSync.question(`Hello, ${name}!`);
}
