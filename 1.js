// 1. Необходимо создать html-страницу с названием 1.html, в которой подключить файл 1.js (его тоже необходимо создать рядом с html-файлом).
//  В js-файле необходимо создать следующий скрипт:
// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую
//  температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после расчетов, так как в некоторых случаях может получиться "длинная дробь".

function getTemperCelsius() {
    const numCelsius = +prompt("Введите температуру в градусах по Цельсию");
    return numCelsius > 0 ? numCelsius : getTemperCelsius();
}

function conversionToFahrenheit(tempCelsius) {
    //   return +((9 / 5) * tempCelsius + 32).toFixed(1); // так тоже работает.
    return Math.floor(((9 / 5) * tempCelsius + 32) * 10) / 10;
}

function showMessage(numFahrenheit, numCelsius) {
    alert(`Задано градусов по Цельсию: ${numCelsius} по Фаренгейту: ${numFahrenheit}`);
}

const temperatureCelsius = getTemperCelsius();
const temperatureFahrenheit = conversionToFahrenheit(temperatureCelsius);

showMessage(temperatureFahrenheit, temperatureCelsius);