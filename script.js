document.addEventListener('DOMContentLoaded', function () {
    console.log("Ready Captain");

    document.getElementById('add-task').addEventListener('click', function(element, event) {
    console.log(element);
    console.log(event);
    var taskValue = document.getElementById('new-task').value;

    console.log("TASK VALUE", taskValue)

    if (taskValue) {
        addTask(taskValue);
    }

    });
    // Add Task
    function addTask(taskValue) {
        var li = document.createElement('li');
        console.log(li);
        li.textContent = taskValue;

     // Add Delete Button
        var deleteButton = document.createElement('button')
        deleteButton.textContent = "ABORT"
        deleteButton.onclick = function() {
            li.parentNode.removeChild(li);
            console.log("Child Abortion")
        }
        li.appendChild(deleteButton);

    // Add Edit Button  
        var editButton = document.createElement('button');
        editButton.textContent = "Edit"
        editButton.onclick = function () {
            editTask(li, taskValue);
             console.log("Edit")
        }
        li.appendChild(editButton);
        
        li.addEventListener('click', function () {
            completeTask(li);
        });
        document.getElementById('task-list').appendChild(li);

    }

    function completeTask(li) {
        console.log(li) 

        li.classList.toggle('completed')

    }

    function editTask(li, taskValue) {

        var editDiv = document.createElement("div");
        editDiv.setAttribute("id", "edit-task");

        var editInput = document.createElement('input');
        editInput.value = taskValue;
        editDiv.appendChild(editInput);
        li.appendChild(editInput, li);

    }

});
