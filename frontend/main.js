document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task");
    const dateInput = document.getElementById("date");
    const responsibleInput = document.getElementById("responsible");
    const observationsInput = document.getElementById("observations");
    const statusInput = document.getElementById("status");
    const taskList = document.getElementById("list");

    // Evento para adicionar uma nova tarefa
    addButton.addEventListener("click", function() {
        const taskValue = taskInput.value.trim();
        const dateValue = dateInput.value;
        const responsibleValue = responsibleInput.value.trim();
        const observationsValue = observationsInput.value.trim();
        const statusValue = statusInput.value;

        if (taskValue === "" || responsibleValue === "") {
            alert("Fields 'Task' and 'Responsible' are mandatory.");
            return;
        }

        const taskData = {
            task: taskValue,
            date: dateValue,
            responsible: responsibleValue,
            observations: observationsValue,
            status: statusValue
        };

        fetch("http://localhost:3000/add-task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
                loadTasks();
            }
        })
        .catch((error) => console.error("Error:", error));
    });

// Função para carregar todas as tarefas
function loadTasks() {
    fetch("http://localhost:3000/list-tasks")
    .then(response => response.json())
    .then(data => {
        let output = "";
        data.forEach(task => {
            const statusValue = task.status ? task.status : 'N/A';
            const statusClass = task.status ? task.status.replace(' ', '') : 'NA';
            output += `
                <div class="task">
                    <div class="task-field">${task.task ? task.task : 'N/A'}</div>
                    <div class="task-field">${task.date ? task.date : 'N/A'}</div>
                    <div class="task-field">${task.responsible ? task.responsible : 'N/A'}</div>
                    <div class="task-field">${task.observations ? task.observations : 'N/A'}</div>
                    <div class="task-field task-status ${statusClass}">
                        ${statusValue}
                    </div>
                </div>
            `;
        });
        taskList.innerHTML = output;
    })
    .catch((error) => console.error("Error:", error));
}

// Botão para excluir todas as tarefas
const deleteAllButton = document.getElementById("delete-all-tasks");

// Evento para excluir todas as tarefas
deleteAllButton.addEventListener("click", function() {
    fetch("http://localhost:3000/delete-all-tasks", {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
            loadTasks(); // Recarregar a lista de tarefas após a exclusão
        }
    })
    .catch((error) => console.error("Error:", error));
});

    // Carregar tarefas ao inicializar
    loadTasks();
});
