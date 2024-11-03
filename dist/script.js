let to_Dos = [];


function getInput() {
  let inputField = document.getElementById("inputField");
  if(inputField.value.trim()=== "") return
  let inputValue = inputField.value;
  //  clear input field after getting value
  inputField.value = "";

  //   calling inserted function
  insertingTask(inputValue);
}

// putting task into task container

function insertingTask(inputValue) {
  if (inputValue == "") return;
    

    let todoInfo = {
      id: crypto.randomUUID(),
      todoContent: inputValue,
      completed: false,
    };
    to_Dos.push(todoInfo);
   
    displayTask(todoInfo)

}

function displayTask(task){
  
    let todoConatiner = document.getElementById("todos-conatiner");
    const listItem = document.createElement("li");
    listItem.className ="flex flex-row items-center justify-between border-b border-gray-300 py-2";
    listItem.id = task.id;
    listItem.innerHTML = ` <p class="flex-grow" style="text-decoration: line-through;">${task.todoContent}</p>
                <div class="ml-2 flex items-center space-x-2">
                  <input type="checkbox" class="h-4 w-4 text-blue-600 checkBox" />
                  <button class="text-red-500 font-semibold removeTask" id="removeTask">X</button>
                </div>`;

    todoConatiner.append(listItem);

  
  // remove item button

  let removeButton=document.querySelectorAll(".removeTask");

  removeButton.forEach(button => {
    button.addEventListener("click",()=> deleteTask(button))
  })

  //  check task / task completed
  let checkBoxes=document.querySelectorAll(".checkBox");
  checkBoxes.forEach(box => {
    box.addEventListener("change",()=>completed(box))
  })

  
}

// function for deleting task

function deleteTask(button) {
   let parentElId=button.parentElement.parentElement.id

    to_Dos=to_Dos.filter(item => item.id !== parentElId);

    let taskElement=document.getElementById(parentElId)

    if(taskElement){
      taskElement.remove()
    }
}

function completed(box){
  let El=box.closest("li").querySelector("p");
  console.log(box.checked)
  if(box.checked){
    El.className="underline"
  }
    
}