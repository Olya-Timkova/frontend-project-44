import readlineSync from 'readline-sync';


export const game = () => {

    const name1 = readlineSync.question('Welcome to the Brain Games!\n May I have your name? ');

    //  Ожидаем ответа пользователя.
    const userName = readlineSync.question(`Hello, ${name1}!
What is the result of the expression?`)

    let counter = 0;

    const startGameAnswer = () => { // функция которая задает вопрос и получает ответ

        const randomMathExpression = () => {  // функция с математическим выражением

            const getRandomeOperators = () => { // функция которая выдает рандомный арифметический оператор
                const array = ['+', '-', '*']
                return array[Math.floor(Math.random() * array.length)]
            }
            const operatorRandom = getRandomeOperators()
            ////
            let a = Math.floor(Math.random() * 50);
            let b = Math.floor(Math.random() * 50);
            ////
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
                return calc
            }
            const calc1 = calc(a, operatorRandom, b) // вызов функции с математическим примером
        }
        ////
        const mathExpression = randomMathExpression()



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
