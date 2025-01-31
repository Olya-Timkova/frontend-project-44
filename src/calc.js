import readlineSync from 'readline-sync';


// 1. знакомство, юзер вписывает имя.  name1 - тут храниться имя пользов. вопрос задается спом функц question

// 2. вывести имя пользователя и указать правила игры. задатся спом функц.  userName

// 3. функция startGameAnswer которая задает вопрос и получает ответ. вопрос и ответ answer - задается спом question 
//    + функция хранит в себе расчет примера , сам пример + цикл

// 4. в функцию startGameAnswer входит функция, которая с матем выражением randomMathExpression, кот сост из:
//    функц. getRandomeOperators - выводит ранодомн. оператор
//    перемен с радомными числами a и b 
//    функц calc- берет функц getRandomeOperators и перемен a и b и решает пример б т.е выводит число

// 5. созд. функцию, которая берет числа из функции startGameAnswer и выводит их в question

// 6. после ответа пользователя идет функция с определением правильного ответа if else, ответа 3:
//    1й Correct!
//    2й '(записывается ответ пользователя answer)' is wrong answer ;(. Correct answer was '(сюда ответ функции calc)' Let's try again, Sam!

// 7. цикл, который повторяет все дейсвия 3 раза

// 8. игра завершается после выпольнения 3х раз, спом фунции question.


export const gameCalc = () => {

    const name1 = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

    //  Ожидаем ответа пользователя.
    const userName = readlineSync.question(`Hello, ${name1}!
What is the result of the expression?`)

    let counter = 1;

    const startGameAnswer = () => { // функция которая задает вопрос и получает ответ

        const getRandomeOperators = () => { // функция которая выдает рандомный арифметический оператор
            const array = ['+', '-', '*']
            return array[Math.floor(Math.random() * array.length)]
        }
        const operatorRandom = getRandomeOperators()


        let a = Math.floor(Math.random() * 30); // константа с рандом числам а
        let b = Math.floor(Math.random() * 30); // константа с рандом числам b


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
        const resultCalc = calc(a, operatorRandom, b) // вызов функции с математическим примером

        const test = `${a} ${operatorRandom} ${b}`; // константа, которая выводит на экран пример 

        const questionAnswer = readlineSync.question(`Question: ${test} 
Your answer: `);
        function compareAnswer() { // функция, которая, берет ответ пользователя и ответ фунции calc сравнивает их вы водит ответ

            if (Number(questionAnswer) === resultCalc) {
                console.log('Correct!')
                
            } else if (Number(questionAnswer) !== resultCalc) {
                console.log(`'${questionAnswer}' is wrong answer ;(. Correct answer was '${resultCalc}'.
Let's try again, Sam! ${name1}`)
                return
            }
            return;
        };

        compareAnswer()
    };
    const startGame = startGameAnswer()

    while (counter < 3) { // цикл который запускает функцию startGameAnswer 3 раза
        startGameAnswer();
        counter++;
    }

    const congratulations = readlineSync.question(`Congratulations, ${name1}!`);
}
