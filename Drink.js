export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error(
        "Нельзя создать объект абстрактного класса Drink"
      );
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  // Получить информацию о напитке
  getInfo() {
    return {
      name: this.name,
      size: this.size,
      price: this.price,
      temperature: this.getTemperature()
    };
  }

  // Получить температуру
  getTemperature() {
    return this.#temperature;
  }

  // Установить температуру
  setTemperature(temperature) {
    this.#temperature = temperature;
    console.log(
      `Температура напитка "${this.name}": ${temperature}°C`
    );
  }

  // Приватный метод приготовления
  #prepare() {
    console.log(`Готовим напиток: ${this.name}`);

    this.setTemperature(
      this.name === "Лимонад" ? 5 : 65
    );

    console.log(`Напиток "${this.name}" приготовлен`);
  }

  // Подать напиток
  serve() {
    this.#prepare();

    console.log(`Напиток "${this.name}" подан!`);
    return this;
  }
}

// Кофе
export class Coffee extends Drink {
  constructor(name, size, price, temperature, beans, milk) {
    super(name, size, price, temperature);
    this.beans = beans;
    this.milk = milk;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      beans: this.beans,
      milk: this.milk
    };
  }
}

// Чай
export class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      teaType: this.teaType
    };
  }
}

// Лимонад
export class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      flavor: this.flavor
    };
  }
}

// Горячий шоколад
export class HotChocolate extends Drink {
  constructor(name, size, price, temperature, chocolateType) {
    super(name, size, price, temperature);
    this.chocolateType = chocolateType;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      chocolateType: this.chocolateType
    };
  }
}
