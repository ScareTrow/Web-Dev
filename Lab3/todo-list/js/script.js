document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const todoForm = document.getElementById("todo-form");
    const todoList = document.getElementById("todo-list");
    const clearCompletedBtn = document.getElementById("clear-completed");


    const loadTasks = () => {
        todoList.innerHTML = "";
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    };


    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll(".todo-item").forEach(item => {
            tasks.push({
                text: item.querySelector(".task-text").textContent,
                completed: item.classList.contains("completed")
            });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };


    const addTaskToDOM = (text, completed = false) => {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        if (completed) li.classList.add("completed");

        li.innerHTML = `
            <input type="checkbox" ${completed ? "checked" : ""}>
            <span class="task-text">${text}</span>
            <button class="edit-btn">✎</button>
            <button class="delete-btn">×</button>
        `;

        const checkbox = li.querySelector("input[type='checkbox']");
        const taskTextElement = li.querySelector(".task-text");
        const editButton = li.querySelector(".edit-btn");
        const deleteButton = li.querySelector(".delete-btn");


        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed", checkbox.checked);
            saveTasks();
        });


        deleteButton.addEventListener("click", () => {
            li.remove();
            saveTasks();
        });


        editButton.addEventListener("click", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = taskTextElement.textContent;
            input.classList.add("edit-input");


            li.replaceChild(input, taskTextElement);
            input.focus();


            const saveEdit = () => {
                if (input.value.trim() !== "") {
                    taskTextElement.textContent = input.value.trim();
                }
                li.replaceChild(taskTextElement, input);
                saveTasks();
            };

            input.addEventListener("blur", saveEdit);
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") saveEdit();
            });
        });

        todoList.appendChild(li);
        saveTasks();
    };


    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (taskInput.value.trim()) {
            addTaskToDOM(taskInput.value.trim());
            taskInput.value = "";
        }
    });

    // todoForm.addEventListener("reset", () => { taskInput.value = ""; });


    clearCompletedBtn.addEventListener("click", () => {
        document.querySelectorAll(".todo-item.completed").forEach(task => task.remove());
        saveTasks();
    });

    loadTasks();
});
