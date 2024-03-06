const addBtn = document.querySelector('.js-btn');
const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
const dueDate = document.querySelector('.js-due-date');

let todoList = [
  {
    name: 'Buy Gas',
    date: '10-02-2024'
  },
  {
    name: 'Go to the Cinema',
    date: '10-07-2024'
  },
  {
    name: 'Medical Check-up',
    date: '10-07-2024'
  }
];

function displayTodoList() {
  let todoTotal = '';
  for (let i = 0; i < todoList.length; i++) {
    let name = todoList[i].name;
    let date = todoList[i].date;
    console.log(name);
    console.log(date);
    const html = `
        <div>
          ${name}
        </div>
        <div>
          ${date}
        </div>
        <button onclick="
          todoList.splice(${i}, 1);
          displayTodoList();
        " >
          Delete
        </button>
    `;
    todoTotal += html;
  }
  output.innerHTML = todoTotal;
}
displayTodoList();

addBtn.addEventListener('click', () => {
  const name = input.value;
  const date = dueDate.value;

  todoList.push({
    name: name,
    date: date
  });

  input.value = '';
  dueDate.value = '';

  displayTodoList();
});

