const tasks = [
    {
        id: 1,
        character: "Jack",
        description: "Gather 10 pieces of wood from the forest.",
        details: "The town elder, Jack, needs wood to repair the town hall. Head to the forest and gather 10 pieces of wood.",
        reward: { copper: 50 },
        completed: false
    },
    // Add more tasks here
];

function showTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.description} - Reward: ${JSON.stringify(task.reward)}`;
        listItem.onclick = () => showTaskDetails(task);
        taskList.appendChild(listItem);
    });
}

function showTaskDetails(task) {
    alert(`Task: ${task.description}\nDetails: ${task.details}\nReward: ${JSON.stringify(task.reward)}`);
}

function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`Task completed: ${task.description}`);
        earnCurrency('copper', task.reward.copper || 0); // Example of earning copper
    }
}
