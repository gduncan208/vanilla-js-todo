document.addEventListener('DOMContentLoaded', function () {
    console.log("Ready Captain");

    document.getElementById('add-task').addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event);
    var taskValue = document.getElementById('new-task').value;

    console.log("TASK VALUE", taskValue)

    if (taskValue) {
        addTask(taskValue);
    }

    });

    var taskNumber = 0;

    // Add Task
    function addTask(taskValue) {
        var li = document.createElement('li');
        li.setAttribute("id", `${taskNumber}`)

        var taskDiv = document.createElement('div');
        taskDiv.textContent = taskValue;
        taskDiv.classList.add("task-label");
        taskDiv.setAttribute("id", `task-label${taskNumber}`)
        li.appendChild(taskDiv);
       
        console.log(li);


     // Add Delete Button
        var actions = document.createElement('div')
        actions.classList.add("task-actions");

        var deleteButton = document.createElement('button')
        deleteButton.textContent = "ABORT"
        deleteButton.type = "button";
        deleteButton.onclick = function(event) {
            li.parentNode.removeChild(li);
            actions.appendChild(deleteButton);

            console.log("Abortion")
        }

        actions.appendChild(deleteButton);

    // Add Edit Button  
        var editButton = document.createElement('button');
        editButton.textContent = "Edit"
        editButton.type = "button"
        editButton.onclick = function (event) {
            editTask(li, taskValue);
             console.log("Edit")
        }

        actions.appendChild(editButton);

        li.appendChild(actions);
        
        li.addEventListener('click', function () {
            completeTask(li);
        });

        document.getElementById('task-list').appendChild(li);
        taskNumber++;
    }

    function completeTask(li) {
        console.log(li) 

        li.classList.toggle('completed')

    }

    function editTask(li, taskValue) {
        var label = li.querySelector(".task-label");
        var actions = li.querySelector(".task-actions");
        var editInput = document.createElement('input');
        editInput.type = "text";
        editInput.value = taskValue;
        label.replaceChildren(editInput);

        // Add Save Button  
        var saveButton = document.createElement('button');
        saveButton.textContent = "Save";
        saveButton.type = "button";
        saveButton.onclick = function(event){

        };
        console.log("Edit Saved")

        // Add Cancel Button
        var cancelButton = document.createElement('button');
        cancelButton.textContent = "Cancel";
        cancelButton.type = "button";
        cancelButton.onclick = function(event) {

        }
        console.log("Edit Cancelled")
        actions.replaceChildren(cancelButton);
        actions.appendChild(saveButton);
    }
});
