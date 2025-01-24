/* eslint-disable no-use-before-define */
import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');

//  Ожидаем ответа пользователя.
export const userName = readlineSync.question(`Hello, ${name}!`);
// console.log ( ' Hello ' +  userName  + ' ! ' ) ;
