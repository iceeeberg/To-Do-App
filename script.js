const todoInput = document.getElementById('task');
const list = document.getElementById('list');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
  console.log('todoInput value: ', todoInput.value)
  var tasks = document.createElement('p')
  tasks.innerText = todoInput.value
  list.appendChild(tasks)
  todoInput.value = ""
  tasks.addEventListener('click', () => {
    tasks.style.textDecoration = "line-through"
  })
  tasks.addEventListener('dblclick', () => {
    list.removeChild(tasks)
     })
});



