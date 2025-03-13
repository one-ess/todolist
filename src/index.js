import "./index.html";
import "./index.scss";

const todoAddButton = document.querySelector(".todo__add-button");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const todoSelect = document.querySelector(".todo__select");

//если по ключу tasks что-то есть - достаём и присваиваем в разметку
if (localStorage.getItem("tasks")) {
  todoList.innerHTML = localStorage.getItem("tasks");
}

//каждый раз при изменение select'a его value присваивается в todoList.dataset в качестве состояния списка
todoSelect.addEventListener("change", (e) => {
  const selectState = e.target.value;
  todoList.dataset.listState = selectState;
  if (selectState !== "active") {
    todoInput.disabled = true;
    todoAddButton.disabled = true;
  } else {
    todoInput.disabled = false;
    todoAddButton.disabled = false;
  }
});

//если инпут не пустой добавляем таск в разметку и сохраняем в localstorage
todoAddButton.addEventListener("click", () => {
  if (todoInput.value !== "") {
    const date = new Date().toLocaleString().slice(0, -3);
    const li = document.createElement("li");
    li.classList.add("todo__item");
    li.dataset.todoState = "active";
    li.innerHTML = `
        <p class="todo__task">${todoInput.value}</p>
        <div class="todo__date">
            <span>добавлено: ${date}</span>
        </div>
        <button class="todo__action todo__action_restore" data-todo-action="active"></button>
        <button class="todo__action todo__action_complete" data-todo-action="completed"></button>
        <button class="todo__action todo__action_delete" data-todo-action="deleted"></button>         
    `;
    todoList.insertAdjacentElement("beforeend", li);
    todoInput.value = "";
    localStorage.setItem("tasks", todoList.innerHTML);
  }
});

//каждый раз при удалении/завершении/восстановлении todoItem'a генерируем новую дату и добавляем её в тот todoItem где было выполнено действие
const addDateAction = (todoItem, action) => {
  const date = new Date().toLocaleString().slice(0, -3);
  const span = document.createElement("span");
  span.innerHTML = `${action}: ${date}`;
  todoItem.querySelector(".todo__date").insertAdjacentElement("beforeend", span);
};

//делегируем список, проверяем нажатие кнопок, получаем конкретный todoItem у нажатой кнопки, сохраняем в localstorage
todoList.addEventListener("click", (e) => {
  const todoItem = e.target.closest(".todo__item");
  const todoItemState = e.target.closest(".todo__item").dataset.todoState;

  if (e.target.closest(".todo__action_complete")) {
    addDateAction(todoItem, "завершено");
    todoItem.dataset.todoState = "completed";
  }
  if (e.target.closest(".todo__action_restore")) {
    addDateAction(todoItem, "восстановлено");
    todoItem.dataset.todoState = "active";
  }
  if (e.target.closest(".todo__action_delete")) {
    //если у todoItem'a уже состояние "удаленно", при повторном нажатии на удалить ремуваем этот todoItem из разметки
    if (todoItemState !== "deleted") {
      addDateAction(todoItem, "удалено");
      todoItem.dataset.todoState = "deleted";
    } else {
      todoItem.remove();
    }
  }
  localStorage.setItem("tasks", todoList.innerHTML);
});
