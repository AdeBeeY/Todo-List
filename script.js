const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');

let todoList = [
  'Buy Gas',
 'Go to the Cinema', 
 'Medical Check-up'
];

function displayTodoList() {
  let todoTotal = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoTotal += html;
  }
  output.innerHTML = todoTotal;
}

displayTodoList();

btn.addEventListener('click', () => {
  const item = input.value;
  todoList.push(item);

  input.value = '';

  displayTodoList();
});

