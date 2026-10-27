
import { Drink } from "./Drink.js";

export class Cafe {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.menu = [];
  }

  // Добавить напиток в меню
  addDrink(drink) {
    if (!(drink instanceof Drink)) {
      throw new Error("В меню можно добавить только напиток");
    }

    this.menu.push(drink);
  }

  // Получить информацию о кафе
  getInfo() {
    return {
      name: this.name,
      address: this.address,
      menu: this.menu.map((drink) => drink.name)
    };
  }

  // Заказать напиток
  orderDrink(drink) {
    if (!this.menu.includes(drink)) {
      throw new Error("Этого напитка нет в меню кафе");
    }

    console.log(
      `Кафе "${this.name}" приняло заказ "${drink.name}"`
    );

    drink.serve();

    console.log(
      `Заказ "${drink.name}" готов. Стоимость: ${drink.price}`
    );

    return drink;
  }
}
