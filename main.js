
import {
  Coffee,
  Tea,
  Lemonade,
  HotChocolate
} from "./Drink.js";

import { Cafe } from "./Cafe.js";

const changeColorBtn = document.getElementById("change-color-btn");
const googleBtn = document.getElementById("google-btn");
const registrationBtn = document.getElementById("registration-btn");

let isLavender = false;

// Изменение цвета карточек
if (changeColorBtn) {
  changeColorBtn.addEventListener("click", () => {
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.backgroundColor = isLavender
        ? "#f7f7fa"
        : "#E6E6FA";
    });

    isLavender = !isLavender;
  });
}

// Открытие Google
if (googleBtn) {
  googleBtn.addEventListener("click", () => {
    window.open("https://www.google.com", "_blank");
  });
}

// Открытие окна регистрации
if (registrationBtn) {
  registrationBtn.addEventListener("click", () => {
    const modal = document.getElementById("registration-modal");

    if (modal) {
      modal.classList.add("modal-showed");
    }
  });
}

// Создаём кафе
const cafe = new Cafe(
  "Coffee House",
  "Москва, Тверская улица"
);

// Создаём напитки
const coffee = new Coffee(
  "Капучино",
  "Средний",
  250,
  20,
  "Арабика",
  "Овсяное"
);

const tea = new Tea(
  "Зелёный чай",
  "Большой",
  180,
  20,
  "Зелёный"
);

const lemonade = new Lemonade(
  "Лимонад",
  "Средний",
  200,
  20,
  "Лимон"
);

const chocolate = new HotChocolate(
  "Горячий шоколад",
  "Большой",
  300,
  20,
  "Тёмный"
);

// Добавляем напитки в меню
cafe.addDrink(coffee);
cafe.addDrink(tea);
cafe.addDrink(lemonade);
cafe.addDrink(chocolate);

// Получаем информацию о кафе
console.log("=== ИНФОРМАЦИЯ О КАФЕ ===");
console.log(cafe.getInfo());

// Получаем информацию о напитках
console.log("=== ИНФОРМАЦИЯ О НАПИТКАХ ===");
console.log(coffee.getInfo());
console.log(tea.getInfo());
console.log(lemonade.getInfo());
console.log(chocolate.getInfo());

// Заказываем напитки
console.log("=== ЗАКАЗ КОФЕ ===");
cafe.orderDrink(coffee);

console.log("=== ЗАКАЗ ЛИМОНАДА ===");
cafe.orderDrink(lemonade);

// Проверяем температуру после приготовления
console.log("Температура кофе:", coffee.getTemperature());
console.log("Температура лимонада:", lemonade.getTemperature());
