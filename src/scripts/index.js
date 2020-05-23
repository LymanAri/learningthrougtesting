import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

let importantAndUrgent;
let importantAndNotUrgent;
let notImportantAndUrgent;
let notImportantAndNotUrgent;

importantAndUrgent = document.getElementById("importantAndUrgent");
importantAndNotUrgent = document.getElementById("importantAndNotUrgent");
notImportantAndUrgent = document.getElementById("notImportantAndUrgent");
notImportantAndNotUrgent = document.getElementById("notImportantAndNotUrgent");

const quadrants = [
  importantAndUrgent,
  importantAndNotUrgent,
  notImportantAndUrgent,
  notImportantAndNotUrgent
];

quadrants.forEach(quadrant => {
  const button = quadrant.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    addNewTask(quadrant);
  });

  const listTodo = quadrant.getElementsByClassName("todoList")[0];
  listTodo.addEventListener("click", () => {
    relocation(listDone, listTodo);
  });


  const listDone = quadrant.getElementsByClassName("doneList")[0];
  listDone.addEventListener("click", () => {
    relocation(listDone, listTodo);
    // relocationToTodo(listDone, listTodo);
  });
});

function relocationToDone(listTodo, listDone) {
  const input = listTodo.getElementsByTagName("input");
  input.forEach(checkbox => {
    if (checkbox.checked) {
      listDone.appendChild(checkbox.parentElement);
    }
  });
}

function relocationToTodo(listDone, listTodo) {
  const input = listDone.getElementsByTagName("input");
  input.forEach(checkbox => {
    if (!checkbox.checked) {
      listTodo.appendChild(checkbox.parentElement);
    }
  });
}

function relocation(listDone, listTodo) {
  let input = listTodo.getElementsByTagName("input");
  input.forEach(checkbox => {
    if (checkbox.checked) {
      listDone.appendChild(checkbox.parentElement);
    }
  });
  input = listDone.getElementsByTagName("input");
  input.forEach(checkbox => {
    if (!checkbox.checked) {
      listTodo.appendChild(checkbox.parentElement);
    }
  });
}

function addNewTask(quadrant) {
  const value = getInputValue(quadrant);
  if (value) {
    addNewItem(value, quadrant);
    clearInputField(quadrant);
  } else {
    alert("Please, enter a new task!");
  }
}

function getInputValue(quadrant) {
  return quadrant.getElementsByClassName("new-task-input")[0].value;
}

function addNewItem(value, quadrant) {
  const list = quadrant.getElementsByClassName("todoList")[0];
  const newLi = getLiWithText(value, quadrant);
  list.appendChild(newLi);
}

function clearInputField(quadrant) {
  const clearInput = quadrant.getElementsByClassName("new-task-input")[0];
  clearInput.value = "";
}

function getLiWithText(value, quadrant) {
  const listDone = quadrant.getElementsByClassName("doneList")[0];
  const newListItem = document.createElement("li");
  const checkbox = getCheckBox();
  const text = document.createTextNode(" " + value + " ");
  const spanIcon = getDeleteSpanIcon();
  newListItem.appendChild(checkbox);
  newListItem.appendChild(text);
  newListItem.appendChild(spanIcon);
  newListItem.value = "";
  return newListItem;
}

function getCheckBox() {
  const input = document.createElement("input");
  input.type = "checkbox";
  return input;
}

function removing() {
  const deleteLi = document.getElementsByTagName("li");
  deleteLi.forEach(liItem => {
    const deleteSpan = liItem.getElementsByClassName("trash");
    deleteSpan.forEach(icon => {
      icon.addEventListener("click", () => {
        icon.parentElement.remove();
      });
    });
  });
}

function getDeleteSpanIcon() {
  const span = document.createElement("span");
  const icon = getDeleteIcon();
  span.className = "trash";
  span.appendChild(icon);
  span.addEventListener("click", () => {
    span.parentElement.remove();
  });
  return span;
}

function getDeleteIcon() {
  const i = document.createElement("i");
  i.className = "fas fa-trash";
  return i;
}
removing();