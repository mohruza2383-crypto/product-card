const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numberFromFive = number.filter(num => num >= 5);

console.log(numberFromFive);


const movis = ["Аватар", "Титаник", "Интерстеллар", "Джокер", "Форсаж", "Мстители"];

console.log(movis.includes("Джокер"));
function reverseArray(array) {
    return array.reverse();
}

console.log(reverseArray(numberFromFive));
console.log(reverseArray(movis));