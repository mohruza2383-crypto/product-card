
const user = {
    name: "Малика",
    email: "malika@gmail.com",
    job: "Школьница",
    age: 13,
    country: "Россия",
    city: "Тюмень",
    relationshipStatus: "Не в отношениях",
    hobby: "Рисование",
    favoriteMusic: "Рэп, рок, поп",
    favoriteColors: "Красный, синий, коричневый, голубой"
};

console.log("№3 — Данные пользователя:", user);


const car = {
    brand: "Hyundai",
    model: "Solaris",
    year: 2013,
    color: "Серый",
    transmission: "Механика"
};

car.owner = user;


function addMaxSpeed(car) {
    if (!car.maxSpeed) {
        car.maxSpeed = 190;
    }
}

addMaxSpeed(car);

console.log("№4-5 — Автомобиль:", car);


function showProperty(object, property) {
    console.log(`№6 — ${property}:`, object[property]);
}

showProperty(car, "brand");
showProperty(car, "model");


const products = [
    "Пицца",
    "Шоколад",
    "Яблоко",
    "Мороженое",
    "Чипсы"
];

console.log("№7 — Продукты:", products);


const books = [
    {
        title: "Твоё сердце будет разбито",
        author: "Анна Джейн",
        year: 2022,
        coverColor: "Красный",
        genre: "Романтика"
    },
    {
        title: "По осколкам твоего сердца",
        author: "Анна Джейн",
        year: 2022,
        coverColor: "Синий",
        genre: "Романтика"
    },
    {
        title: "Поклонник",
        author: "Анна Джейн",
        year: 2019,
        coverColor: "Черный",
        genre: "Романтика"
    },
    {
        title: "Влюблённая ведьма",
        author: "Анна Джейн",
        year: 2019,
        coverColor: "Фиолетовый",
        genre: "Фэнтези"
    }
];

books.push({
    title: "Восхитительная ведьма",
    author: "Анна Джейн",
    year: 2019,
    coverColor: "Розовый",
    genre: "Фэнтези"
});

console.log("№8 — Книги:", books);


const otherBooks = [
    {
        title: "Запрети любить",
        author: "Анна Джейн",
        year: 2024,
        coverColor: "Белый",
        genre: "Романтика"
    },
    {
        title: "Белые искры снега",
        author: "Анна Джейн",
        year: 2015,
        coverColor: "Белый",
        genre: "Фэнтези"
    },
    {
        title: "Кошмарных снов, любимая",
        author: "Анна Джейн",
        year: 2017,
        coverColor: "Черный",
        genre: "Романтика"
    }
];

const allBooks = [...books, ...otherBooks];

console.log("№9 — Все книги:", allBooks);


function checkRareBooks(books) {
    return books.map(book => {
        book.isRare = book.year > 2000;
        return book;
    });
}

const updatedBooks = checkRareBooks(allBooks);

console.log("№10 — Книги с isRare:", updatedBooks);