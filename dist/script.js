let to_Dos = [];


function getInput() {
  let inputField = document.getElementById("inputField");
  if(inputField.value.trim()=== "") return
  let inputValue = inputField.value;
  //  clear input field after getting value
  inputField.value = "";

  //   calling inserted function
  addTask(inputValue);
}

// putting task into task container

function addTask(inputValue) {
  if (inputValue.length < 1) return;
    
    let todoInfo = {
      id: crypto.randomUUID(),
      todoContent: inputValue,
      completed: false,
    };
    to_Dos.push(todoInfo);
    document.getElementById("totalTasks").innerText=to_Dos.length
   
    displayTask(todoInfo)

}

function displayTask(task){
  
    let todoConatiner = document.getElementById("todos-conatiner");
    const listItem = document.createElement("li");
    listItem.className ="flex flex-row items-center justify-between border-b border-gray-300 py-2";
    listItem.id = task.id;
    listItem.innerHTML = ` <p class="flex-grow text-red-500 ">${task.todoContent}</p>
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
      document.getElementById("totalTasks").innerText=to_Dos.length
    }
}
// function for checking and unchecking task
function completed(box){
  let completedTask=0
  let El=box.closest("li").querySelector("p");
  let id=box.parentElement.parentElement.id;

  let index=to_Dos.findIndex(task => task.id == id);
 


  if(box.checked){
    El.classList.add("line-through")
    to_Dos[index].completed=true
    console.log(to_Dos)
  }else{
    El.classList.remove("line-through")
    to_Dos[index].completed=false;
    console.log(to_Dos)
  }

  // running through the whole array of todos to checked if the task has been completed.

  for(i=0; i< to_Dos.length; i++){

    if(to_Dos[i].completed == true){
       completedTask += 1
    }
  }
  document.getElementById("completed").innerText=completedTask
  

}