import { products } from './product-data.js';

function createProductCard(product) {
    const card = document.createElement('li');
    card.className = 'product-card';
    card.innerHTML = `
        <img class="product-card__image" src="${product.image}" alt="${product.name}" width="290">
        <span class="product-card__type">${product.type}</span>
        <h2 class="product-card__title">${product.name}</h2>
        <p class="product-card__text">${product.description}</p>
        <span class="product-card__compound">Состав:</span>
        <ul class="product-card__composition">
            ${product.composition.map(item => `<li class="product-card__composition-item">${item}</li>`).join('')}
        </ul>
        <div class="product-card__price">
            <span class="product-card__price-title">Цена</span>
            <span class="product-card__price-value">${product.price.toLocaleString()}р</span>
        </div>
    `;
    return card;
}

function getProductDescriptions(products) {
    return products.reduce((acc, product) => {
        acc[product.name] = product.description;
        return acc;
    }, {});
}

function getNumberOfCards() {
    let count;
    let isValid = false;
    while (!isValid) {
        const input = prompt('Сколько карточек отобразить? От 1 до 5');
        if (input === null) return null;
        count = Number(input);
        if (Number.isInteger(count) && count >= 1 && count <= 5 && !isNaN(count)) {
            isValid = true;
        } else {
            alert('Пожалуйста, введите число от 1 до 5!');
        }
    }
    return count;
}

function renderProductCards(productsArray) {
    const catalogList = document.querySelector('.catalog__list');
    if (!catalogList) return;
    catalogList.innerHTML = '';
    productsArray.forEach(product => {
        catalogList.appendChild(createProductCard(product));
    });
}

function initApp() {
    console.log(getProductDescriptions(products));
    const cardCount = getNumberOfCards();
    if (cardCount === null) {
        renderProductCards(products);
    } else {
        renderProductCards(products.slice(0, cardCount));
    }
}

document.addEventListener('DOMContentLoaded', initApp);