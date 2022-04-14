const tasksContainterElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement =
  document.querySelector("#addTaskBtn");

interface Task {
  name: string;
  done: boolean;
}

const taskList: Task[] = [
  {
    name: "wyrzuc smieci",
    done: false,
  },
  {
    name: "pojsc na silke",
    done: false,
  },
  {
    name: "zjesc zupe",
    done: true,
  },
];

const render = () => {
  tasksContainterElement.innerHTML = "";
  taskList.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");

    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainterElement.appendChild(taskElement);
  });
};

const addTask = (task: Task) => {
  taskList.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({ name: taskNameInputElement.value, done: false });
  render();
});

render();
