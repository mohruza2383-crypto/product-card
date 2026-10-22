const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter(num => num >= 5);

console.log("Числа от 5 и больше:", numbersFromFive);


const movies = [
    "Аватар",
    "Титаник",
    "Интерстеллар",
    "Джокер",
    "Форсаж",
    "Мстители"
];

console.log("Есть ли фильм «Джокер»:", movies.includes("Джокер"));


function reverseArray(array) {
    return [...array].reverse();
}

console.log("Перевёрнутый массив чисел:", reverseArray(numbersFromFive));
console.log("Перевёрнутый массив фильмов:", reverseArray(movies));