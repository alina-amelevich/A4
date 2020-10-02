'use strict'

function replaceSymbol(text, symb, sub = '') { 
// функции передается текст/фраза/слово, символ который нужно заменить и символ, на который нужно заменить
    while (text.indexOf(symb) !== -1) {
        text.replace(symb, sub);
    }
    return text;
}

function textTransformation(text) {
//функция получиит первончальную фразу, приведет к ниж.регистру, 
//затем через вызов ф-ции replaceSymbol удалит все символы, которые должны игнорироваться, заменит ё на е.
    text = text.toLowerCase();
    text = replaceSymbol(text, ' ');
    text = replaceSymbol(text, '\n');
    text = replaceSymbol(text, '\t');
    text = replaceSymbol(text, '\r');
    text = replaceSymbol(text, '\v');
    text = replaceSymbol(text, 'ё', 'е');
    text = replaceSymbol(text, 'ь');
    text = replaceSymbol(text, 'ъ');
    text = replaceSymbol(text, '.');
    text = replaceSymbol(text, ',');
    text = replaceSymbol(text, '!');
    text = replaceSymbol(text, '?');
    text = replaceSymbol(text, '-');
    text = replaceSymbol(text, ':');
    text = replaceSymbol(text, ';');
    text = replaceSymbol(text, '(');
    text = replaceSymbol(text, ')');
    text = replaceSymbol(text, '"');
    text = replaceSymbol(text, '/');
    text = replaceSymbol(text, '{');
    text = replaceSymbol(text, '}');
    text = replaceSymbol(text, '%');
    text = replaceSymbol(text, '>');
    text = replaceSymbol(text, '<');
}

function isPalindrom(text) {
    let indStart = 0;
    let indEnd = text.length - 1;   //индексы строки идущие от начала и от конца
    let logicValue = true;

    function recursion(indStart, indEnd) {
        while (indStart >= indEnd) {
            if (text[indStart] !== text[indEnd]) {
                logicValue = false;
                return;
            }
            recursion((indStart + 1), (indEnd - 1));
        }
    }
    recursion(indStart, indEnd);
    return logicValue;
}

//ЗАПУСК
function runProgram() {
    let userText = prompt('Введите фразу, которую желаете проверить');
    let changedText = textTransformation(userText);
    let value = (isPalindrom(changedText) == true) ? 'палиндром' : 'не палиндром';  
    //если ф-ция isPalindromRecursion, куда отправили фразу юзера, 
    // возвращает true - в переменную кладется значение "палиндром", если нет (false) - значение "не палиндром"
    alert('Фраза ' + '"' + userText + '"' + ' - это ' + value);
}