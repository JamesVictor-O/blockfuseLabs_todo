let todoContainer = [];
let deleteButton = document.querySelectorAll("removeTask");

function getInput() {
  let inputField = document.getElementById("inputField");
  let inputValue = inputField.value;
  //  clear input field after getting value
  inputField.value = "";

  //   calling inserted function
  insertingTask(inputValue);
}

// putting task into task container

function insertingTask(inputValue) {
  if (inputValue == "") {
    return;
  } else {
    let todoConatiner = document.getElementById("todos-conatiner");

    let todoInfo = {
      id: crypto.randomUUID(),
      todoContent: inputValue,
      completed: false,
    };
    todoContainer.push(todoInfo);

    const listItem = document.createElement("li");
    listItem.className =
      "flex flex-row items-center justify-between border-b border-gray-300 py-2";
    listItem.id = todoInfo.id;
    listItem.innerHTML = ` <p class="flex-grow">${inputValue}</p>
                <div class="ml-2 flex items-center space-x-2">
                  <input type="checkbox" class="h-4 w-4 text-blue-600" />
                  <button class="text-red-500 font-semibold" id="removeTask">X</button>
                </div>`;

    todoConatiner.append(listItem);
  }
}

// function for deleting task

function deleteTask() {
  let deleteButton = document.getElementById("removeTask");
  let Parent = deleteButton.parentElement.parentNode;
  console.log(Parent);
  //  todoContainer.filter(task => {
  //     return task.id === removeTaskId;
  //  })
}

deleteButton.forEach((button)=>{
    addEventListener("click", deleteTask);
})