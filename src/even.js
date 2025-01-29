import readlineSync from 'readline-sync';


export const game = () => {

    const name1 = readlineSync.question('Welcome to the Brain Games!\n May I have your name? ');

    //  Ожидаем ответа пользователя.
    const userName = readlineSync.question(`Hello, ${name1}!
Answer "yes" if the number is even, otherwise answer "no".`)

    let counter = 0;

    const startGameAnswer = () => { // функция которая задает вопрос и получает ответ

        const getRandomIntInclusive = (min, max) => { // функция, которая выдает рандомное число
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
        };

        const number = getRandomIntInclusive(0, 50);

        const answer = readlineSync.question(`Question: ${number} 
Your answer: `);

        function evenNumber(num) { // функция, которая считает ответы четные / нечетные

            if (num % 2 === 0 && answer === 'yes' || num % 2 !== 0 && answer === 'no') {
                console.log('Correct!')
                return
            } else if (num % 2 === 0 && answer === 'no') {
                console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name1}`)
                return
            } else if (num % 2 !== 0 && answer === 'yes') {
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name1}`)
                return
            }
            return;
        };

        evenNumber(number)
    }

    while (counter < 3) { // цикл который запускает функцию startGameAnswer 3 раза
        startGameAnswer();
        counter++;
    }

    const congratulations = readlineSync.question(`Congratulations, ${name1}!`);
}
