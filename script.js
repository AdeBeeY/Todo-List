const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');

let names = ['John', 'Gift', 'James'];

function displayTodoList() {
  let nameList = '';
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const html = `<p>${name}</p>`;
    nameList += html;
  }
  output.innerHTML = nameList;
}

displayTodoList();


btn.addEventListener('click', () => {
  const item = input.value;
  names.push(item);
  console.log(names);

  input.value = '';

  displayTodoList();
});

