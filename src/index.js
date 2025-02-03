
import readlineSync from 'readline-sync';


export const print = (text) => {
    const answer = readlineSync.question(text);
    return answer;
}


export const greetings = (userName) => {
    userName = print('Welcome to the Brain Games!\nMay I have your name? ');
    return userName;
}

