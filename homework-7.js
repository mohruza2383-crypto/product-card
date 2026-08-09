
function weatherReport(city, temperature){
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

weatherReport("Москва", 25);
weatherReport("Лондон", 18);

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

checkSpeed(150000000);
checkSpeed(299792458);
checkSpeed(500000000);

const productName = "Ноутбук";
const productPrice = 1500;

function purchaseProduct(budget) {
    if (budget >= productPrice) {
        console.log(`${productName} приобретён. Спасибо за покупку!`);
    } else {
        const difference = productPrice - budget;
        console.log(`Вам не хватает ${difference}$, пополните баланс`);
    }
}

purchaseProduct(2000);
purchaseProduct(1200);

function calculateDiscount(price, discountPercent) {
    const discountAmount = (price * discountPercent) / 100;
    const finalPrice = price - discountAmount;
    console.log(`Цена товара: ${price}$`);
    console.log(`Скидка: ${discountPercent}%`);
    console.log(`Цена со скидкой: ${finalPrice}$`);
    return finalPrice;
}

calculateDiscount(100, 20);

const userName = "Алексей";
let userAge = 25;
let isUserActive = true;

console.log("=== Информация о пользователе ===");
console.log(`Имя: ${userName}`);
console.log(`Возраст: ${userAge}`);
console.log(`Активен: ${isUserActive ? "Да" : "Нет"}`);
