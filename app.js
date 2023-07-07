const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);

function addTask() {
  const title = titleInput.value;
  const description = descriptionInput.value;

  if (title === "" || description === "") {
    alert("Please enter a title and description.");
    return;
  }

  const task = {
    title,
    description,
  };

  const li = document.createElement("li");
  li.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <button class="delete-btn">Delete</button>
  `;
  
  // Add delete button functionality
  const deleteButton = li.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);

  titleInput.value = "";
  descriptionInput.value = "";
}

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function() {
  const taskList = document.querySelector('#task-list');
  taskList.innerHTML = '';
});
