"use-strict";
//задание №1
//пример 1.
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
//Префиксный инкремент возвращает новое значение (после увеличения на 1). Переменная "а" теперь имеет значение 2.

//пример 2
d = b++;
alert(d); //ответ: 1
//Постфиксный инкремент возвращает старое значение (перед увеличением на 1). Переменая "b" при этом теперь равна 2.

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5
//После первого примера в переменной "а" записано значение 2.
//В данном примере префиксный инкремент возвращает значение а = 3. Результат 2 + 3 = 5

//пример 4
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
//После второго примера в переменной "b" записано значение 2.
//В данном примере постфиксный инкремент возвращает значение b = 2, и только потом присваивает переменной b значение 3. Результат 2 + 2 = 4


//задание №2
let a = 2;
let x = 1 + (a *= 2);
//По уровню приоритета сначала выполняется операция в скобках, сложение и присвоение переменной "а" нового значения. a = a + 2
//В результате "а" равно 4. Прибавляем 1 и полученый результат 5 присваиваем переменной x.


//задание №3
let a = 5, b = 3;
if(a >= 0 && b >= 0){
    alert(a - b);
} else if(a < 0 && b <0){
    alert(a * b);
} else {
    alert(a + b);
}


//задание №4
/**
 * Функция сложения чисел
 * @param {number} a 1-й операнд
 * @param {number} b 2-й операнд
 */
function sumNumbers(a, b){
    return a + b;
}

/**
 * Функция вычитания чисел
 * @param {number} a 1-й операнд
 * @param {number} b 2-й операнд
 */
function difNumbers(a, b){
    return a - b;
}

/**
 * Функция умножения чисел
 * @param {number} a 1-й операнд
 * @param {number} b 2-й операнд
 */
function multNumbers(a, b){
    return a * b;
}

/**
 * Функция деления чисел
 * @param {number} a 1-й операнд
 * @param {number} b 2-й операнд
 */
function divNumbers(a, b){
    return a / b;
}

//задание №5
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "+":
            sumNumbers(arg1, arg2);
            break;
        case "-":
            difNumbers(arg1, arg2);
            break;
        case "*":
            multNumbers(arg1, arg2);
            break;
        case "/":
            divNumbers(arg1, arg2);
            break;
    }
}

//задание №6
let money = prompt("Введите сумму:", "0");

/**
 * Функция, в зависимости от полученного числа,
 * возвращает строку "рубль" в необходимом падеже
 * @param {*} num число в числовом или строковом формате
 */
function caseCheck(num){
    if(typeof num != "string") num = String(num);
    let lastChar = num.charAt(num.length - 1);
    switch(lastChar){
        case "0":
        case "5":
        case "6":
        case "7":
        case "8":   
        case "9":
            return " рублей";
            break;
        case "1":
        case "2":
        case "3":
        case "4":
            return " рубля";
            break;
    }
}

if(Number(money) != NaN) alert("На ваш стчёт зачислено " + money + caseCheck(money));
else alert("Вы ввели не число!");