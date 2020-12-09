'use strict';

const enter = document.querySelector('.header__btn');
const main = document.querySelector('.main');
const table = document.querySelector('.table');

const btnAdd = document.createElement('button');
const addCourse = document.createElement('button');
const initial = document.createElement('input');
const target = document.createElement('input');
const course = document.createElement('input');
const formCourse = document.createElement('form');

const storageData = [
  {
    'initial': 'EUR',
    'target': 'USD',
    'course': 0.88,
  },

  {
    'initial': 'RUR',
    'target': 'USD',
    'course': 71.69,
  },

  {
    'initial': 'RUR',
    'target': 'UAH',
    'course': 2.62,
  },

  {
    'initial': 'RUR',
    'target': 'ZHV',
    'course': 2.62,
  },
];

const addBtn = () => {
  const block = document.createElement('div');

  btnAdd.className = 'main__btn';
  block.className = 'main__block';

  btnAdd.textContent = 'Добавить';

  block.append(btnAdd);
  main.append(block);
};

const registration = () => {
  const form = document.createElement('form');
  const title = document.createElement('h2');
  const login = document.createElement('input');
  const parol = document.createElement('input');
  const btn = document.createElement('button');

  form.className = 'main__registration registration';
  title.className = 'registration__title';
  login.className = 'registration__login';
  parol.className = 'registration__parol';
  btn.className = 'registration__btn';

  title.textContent = 'Вход';
  login.placeholder = 'Логин';
  parol.placeholder = 'Пароль';
  parol.type = 'password';
  btn.textContent = 'Ok';

  form.append(title);
  form.append(login);
  form.append(parol);
  form.append(btn);
  main.append(form);

  btn.addEventListener('click', (event) => {
    event.preventDefault();

    if (login.value === 'ok' && parol.value === 'ok') {
      addBtn();
      enter.textContent = 'Выйти';
    } else if (login.value !== 'ok' && parol.value === 'ok') {
      alert('Incorrect login');
    } else if (login.value === 'ok' && parol.value !== 'ok') {
      alert('Incorrect parol');
    } else {
      alert('Incorrect data');
    }
    form.style.display = 'none';
  });
};

const newCourse = () => {
  const title = document.createElement('h2');

  formCourse.className = 'main__course course';
  title.className = 'course__title';
  initial.className = 'course__initial';
  target.className = 'course__target';
  course.className = 'course__new';
  addCourse.className = 'course__btn';

  title.textContent = 'Новый курс';
  initial.placeholder = 'Исходная валюта';
  target.placeholder = 'Целевая валюта';
  course.placeholder = 'Курс';
  course.type = 'number';
  addCourse.textContent = 'Ok';

  formCourse.append(title);
  formCourse.append(initial);
  formCourse.append(target);
  formCourse.append(course);
  formCourse.append(addCourse);
  main.append(formCourse);
};

const addNewRow = (initialValue, targetValue, courseValue) => {
  const row = document.createElement('tr');

  const initialData = document.createElement('td');
  const targetData = document.createElement('td');
  const courseData = document.createElement('td');

  row.className = 'table__row';
  initialData.className = 'table__item';
  targetData.className = 'table__item';
  courseData.className = 'table__item';

  initialData.textContent = initialValue;
  targetData.textContent = targetValue;
  courseData.textContent = courseValue;

  row.append(initialData);
  row.append(targetData);
  row.append(courseData);
  table.append(row);
};

const addNewCourse = () => {
  const newCourse = {};

  newCourse.initial = initial.value;
  newCourse.target = target.value;
  newCourse.course = course.value;

  storageData.push(newCourse);

  for (let i = 0; i < storageData.length; i++) {
    localStorage.setItem(`row ${i + 1}`, JSON.stringify(storageData[i]));
  }

  addNewRow(initial.value, target.value, course.value);

  formCourse.style.display = 'none';
};

enter.addEventListener('click', (event) => {
  event.preventDefault();
  registration();
});

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  newCourse();
});

addCourse.addEventListener('click', (event) => {
  event.preventDefault();
  addNewCourse();
});
