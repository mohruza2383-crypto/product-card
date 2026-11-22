
// Получаем элементы HTML
const infoMessages = document.querySelector(".info-messages");
const userList = document.querySelector(".users-list");
const removeBtn = document.getElementById("btn-remove-all-cards");
const getAllUsersBtn = document.getElementById("btn-get-all-users");

// Название хранилища
const STORAGE_KEY = "users";

// Переменные для контроля загрузки
let isLoading = false;
let requestVersion = 0;


// 1. Функция задержки загрузки
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


// 2. Получаем пользователей из JSON
async function loadUsers() {
  const response = await fetch("./async/users.json");
  if (!response.ok) {
    throw new Error("Ошибка при загрузке данных");
  }

  const data = await response.json();

  if (!Array.isArray(data.users)) {
    throw new Error("Некорректный формат JSON");
  }

  return data.users;
}


// 3. Сохраняем пользователей в localStorage
function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}


// 4. Получаем данные из localStorage
function getSavedUsers() {
  const savedUsers = localStorage.getItem(STORAGE_KEY);

  if (savedUsers === null) {
    return null;
  }

  try {
    const users = JSON.parse(savedUsers);

    if (!Array.isArray(users)) {
      throw new Error("Некорректные данные");
    }

    return users;

  } catch (error) {
    console.error(error);
    localStorage.removeItem(STORAGE_KEY);

    return null;
  }
}


// 5. Отображаем карточки пользователей
function renderUsers(users) {
  userList.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    // Создаём аватарку
    const avatar = document.createElement("img");

    avatar.src = `./async%20images/${user.name.toLowerCase()}.jpg`;
    avatar.alt = user.name;
    avatar.classList.add("user-avatar");

    // Если изображение не найдено
    avatar.onerror = () => {
      avatar.remove();
    };

    // Создаём информацию о пользователе
    const userInfo = document.createElement("p");

    userInfo.textContent = `${user.name} ${user.surname}
Email: ${user.email}
Возраст: ${user.age}`;

    // Создаём кнопку удаления
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Удалить";

    // Добавляем элементы в карточку
    card.append(avatar, userInfo, deleteBtn);

    userList.append(card);

    // Удаляем определённого пользователя
    deleteBtn.addEventListener("click", () => {
      const currentUsers = getSavedUsers() || [];

      const updatedUsers = currentUsers.filter((item) => {
        return item.id !== user.id;
      });

      saveUsers(updatedUsers);

      renderUsers(updatedUsers);

      infoMessages.textContent = "Пользователь удалён";
    });
  });
}


// 6. Первоначальная загрузка страницы
async function init() {
  const savedUsers = getSavedUsers();

  // Если данные уже есть в localStorage
  if (savedUsers !== null) {
    renderUsers(savedUsers);

    infoMessages.textContent = "";
    return;
  }

  // Если данных нет, показываем загрузку
  infoMessages.textContent = "Данные загружаются";

  const currentRequest = ++requestVersion;
  isLoading = true;

  try {
    await delay(2000);

    const users = await loadUsers();

    // Проверяем, не была ли загрузка отменена
    if (currentRequest !== requestVersion) {
      return;
    }

    saveUsers(users);
    renderUsers(users);

    infoMessages.textContent = "";

  } catch (error) {
    if (currentRequest === requestVersion) {
      console.error(error);

      infoMessages.textContent = "Ошибка при загрузке данных";
    }

  } finally {
    if (currentRequest === requestVersion) {
      isLoading = false;
    }
  }
}


// 7. Удаляем все карточки
removeBtn.addEventListener("click", () => {

  // Отменяем предыдущую загрузку, если она ещё выполняется
  requestVersion++;
  isLoading = false;

  saveUsers([]);

  renderUsers([]);

  infoMessages.textContent = "Все пользователи удалены";
});


// 8. Получаем всех пользователей
getAllUsersBtn.addEventListener("click", async () => {

  // Проверяем, не выполняется ли уже загрузка
  if (isLoading) {
    infoMessages.textContent = "Данные уже загружаются";
    return;
  }

  const currentRequest = ++requestVersion;

  isLoading = true;

  infoMessages.textContent = "Данные загружаются";

  try {
    await delay(2000);

    const users = await loadUsers();

    if (currentRequest !== requestVersion) {
      return;
    }

    const savedUsers = getSavedUsers();

    // Проверяем, все ли пользователи уже отображены
    const allUsersDisplayed =
      savedUsers !== null &&
      savedUsers.length === users.length &&
      users.every((user) =>
        savedUsers.some((item) => item.id === user.id)
      );

    if (allUsersDisplayed) {
      renderUsers(savedUsers);

      infoMessages.textContent =
        "Все пользователи уже отображены";

      return;
    }

    // Сохраняем и отображаем всех пользователей
    saveUsers(users);

    renderUsers(users);

    infoMessages.textContent = "Все пользователи загружены";

  } catch (error) {
    if (currentRequest === requestVersion) {
      console.error(error);

      infoMessages.textContent = "Ошибка при загрузке данных";
    }

  } finally {
    if (currentRequest === requestVersion) {
      isLoading = false;
    }
  }
});


// 9. Запускаем приложение
init();