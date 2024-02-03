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

    function createDeleteButton(li, actions) {
        var deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete"
        deleteButton.type = "button";
        deleteButton.onclick = function (event) {
            li.parentNode.removeChild(li);
            actions.appendChild(deleteButton);
        }

        actions.replaceChildren(deleteButton);
    };

    function createEditButton(li, actions, taskValue) {
        var editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.type = "button";
        editButton.onclick = function(event) {
            editTask(li, taskValue);
            console.log("Edit Engaged");
        }
        actions.appendChild(editButton);
    }

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
        var actions = document.createElement('div');
        actions.classList.add("task-actions");

        createDeleteButton(li, actions);

            console.log("Abortion");


    // Add Edit Button  
         createEditButton(li, actions, taskValue);

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

        if (li.classList.contains('completed')) {
            console.log("completed task toggled on")

        if (!li.querySelector('.checkmark')) {
            var animation = document.createElement('div');
            animation.classList.add("checkmark");
            animation.innerHTML = "&#10003;";
            li.appendChild(animation);

            var actions = li.querySelector('.task-actions');

            if (actions) {
                actions.style.display = 'none';
            }
        }
        } else {
            console.log("completed task toggled off");

            var animation = li.querySelector('.checkmark');
                if (animation) {
                    li.removeChild(animation);
                }

            var actions = li.querySelector('.task-actions');
                if (actions) {
                    actions.style.display = 'block';
                }
        }

    }

    function saveTask(li, newTaskValue) {
        console.log("Saving");
        var label = li.querySelector('.task-label');

        label.textContent = newTaskValue

        var actions = li.querySelector(".task-actions");

        // Add Delete Button
        createDeleteButton(li, actions);

        // Add Edit Button
        createEditButton(li, actions, newTaskValue);
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
            var newTaskValue = editInput.value;
            saveTask(li, newTaskValue);
        };
        actions.replaceChildren(saveButton);

        // Add Cancel Button
        var cancelButton = document.createElement('button');
        cancelButton.textContent = "Cancel";
        cancelButton.type = "button";
        cancelButton.onclick = function(event) {
           cancelTask(li, taskValue)

        }
        
        actions.appendChild(cancelButton);
    }
    

    function cancelTask(li, taskValue) {

        var label = li.querySelector(".task-label");
        label.textContent = taskValue;

        var actions = li.querySelector(".task-actions");

        // Add Delete Button
        createDeleteButton(li, actions);

        // Add Edit Button
        createEditButton(li, actions, taskValue);

    }

    
});

