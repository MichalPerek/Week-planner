var tasksContainterElement = document.querySelector(".tasks");
var taskNameInputElement = document.querySelector("#name");
var addButtonElement = document.querySelector("#addTaskBtn");
var taskList = [
    {
        name: "wyrzuc smieci",
        done: false
    },
    {
        name: "pojsc na silke",
        done: false
    },
    {
        name: "zjesc zupe",
        done: true
    },
];
var render = function () {
    tasksContainterElement.innerHTML = "";
    taskList.forEach(function (task, index) {
        var taskElement = document.createElement("li");
        var id = "task-".concat(index);
        var labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        var checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", function () {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainterElement.appendChild(taskElement);
    });
};
var addTask = function (task) {
    taskList.push(task);
};
addButtonElement.addEventListener("click", function (event) {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false });
    render();
});
render();
