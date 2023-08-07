document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", () => {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            addTodoItem(todoText);
            todoInput.value = "";
        }
    });

    todoInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const todoText = todoInput.value.trim();
            if (todoText !== "") {
                addTodoItem(todoText);
                todoInput.value = "";
            }
        }
    });

    todoList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-button")) {
            const listItem = event.target.parentNode;
            todoList.removeChild(listItem);
        }
    });

    function addTodoItem(text) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${text}
            <button class="delete-button">Delete</button>
        `;
        todoList.appendChild(listItem);
    }
});
