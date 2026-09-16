
const subscribeForm = document.querySelector('#subscribe-form');
const emailInput = document.querySelector('#email');

subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!subscribeForm.checkValidity()) {
        subscribeForm.reportValidity();
        return;
    }

    console.log({
        email: emailInput.value
    });
});


const registrationButton = document.querySelector('#registration-btn');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');

const registrationForm = document.querySelector('#registration-form');

const passwordInput = document.querySelector('#password');
const repeatPasswordInput = document.querySelector('#repeat-password');

let user;

registrationButton.addEventListener('click', function () {
    modal.classList.add('modal-showed');
});

closeButton.addEventListener('click', function () {
    modal.classList.remove('modal-showed');
});

overlay.addEventListener('click', function () {
    modal.classList.remove('modal-showed');
});

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!registrationForm.checkValidity()) {
        registrationForm.reportValidity();

    }

    if (passwordInput.value !== repeatPasswordInput.value) {
        alert('Регистрация отклонена. Пароли не совпадают.');
        return;
    }

    const formData = new FormData(registrationForm);

    user = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        birthDate: formData.get('birthDate'),
        login: formData.get('login'),
        repeatPassword: formData.get('repeatPassword'),
        createdOn: new Date()
    };

    console.log(user);

    modal.classList.remove('modal-showed');

    registrationForm.reset();
});