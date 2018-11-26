function onReady() {
  let toDos = JSON.parse( localStorage.getItem('toDos') ) ||
[];
  let id = toDos.length || 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  function createNewToDo() {
  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: ++id
  });
}

function deleteToDo(id) {
  return toDos.filter(toDo => toDo.id !== id);
}

function saveToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos) );
}

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');
  toDoList.textContent = '';

  toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = toDo.complete;

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<span>Delete</span>';

    newLi.innerHTML = toDo.title;

    checkbox.addEventListener('click', function() {
      toDo.complete = checkbox.checked ? true : false;
      saveToDos();
    });

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
      toDos = deleteToDo(toDo.id);
      renderTheUI();
      saveToDos();
    });
  });
}
  ...
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
   newToDoText.value = '';
   renderTheUI();
   saveToDos();
 });

 renderTheUI();
 saveToDos();
}

window.onload = function() {
 onReady();
};

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";
    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    // attach the li to the ul
toDoList.appendChild(newLi);
//empty the input
newToDoText.value = '';
  const toDoList = document.getElementById('toDoList');
      addToDoForm.addEventListener('submit', event => {event.preventDefault();
        // get the text
let title = newToDoText.value;
});
      }

window.onload = function() {
  onReady();
 };
