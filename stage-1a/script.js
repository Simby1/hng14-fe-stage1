// data model
let taskData = {
    title: "Study for Pediatrics",
    desc: "Focus on neonatal jaundice and respiratory distress syndrome.",
    priority: "High",
    status: "In Progress",
    dueDate: "2026-04-18T23:59"
};

// DOM elements
const taskCard = document.getElementById('task-card');
const viewContainer = document.getElementById('view-mode');
const editContainer = document.getElementById('form-editor');
const mainCheck = document.getElementById('check-done');
const statusDropdown = document.getElementById('select-status');

function updateUI() {
    // text content sync
    document.getElementById('view-title').textContent = taskData.title;
    document.getElementById('view-desc-text').textContent = taskData.desc;
    document.getElementById('view-priority-text').textContent = taskData.priority;
    document.getElementById('display-status-label').textContent = taskData.status;
    document.getElementById('display-date-val').textContent = new Date(taskData.dueDate).toLocaleString();

    // card sty;e sync
    taskCard.className = "todo-card priority-" + taskData.priority.toLowerCase();
    document.getElementById('view-indicator-dot').style.backgroundColor = `var(--color-${taskData.priority.toLowerCase()})`;

    // status logic
    if (taskData.status === "Done") {
        mainCheck.checked = true;
        taskCard.classList.add('is-completed');
        document.getElementById('view-title').classList.add('title-strike');
    } else {
        mainCheck.checked = false;
        taskCard.classList.remove('is-completed');
        document.getElementById('view-title').classList.remove('title-strike');
    }
    statusDropdown.value = taskData.status;

    // form
    document.getElementById('f-title').value = taskData.title;
    document.getElementById('f-desc').value = taskData.desc;
    document.getElementById('f-priority').value = taskData.priority;
    document.getElementById('f-date').value = taskData.dueDate;

    handleClock();
}

function handleClock() {
    const timeSpan = document.getElementById('label-time-left');
    const overdueSection = document.getElementById('box-overdue');

    if (taskData.status === "Done") {
        timeSpan.textContent = "Task Completed";
        overdueSection.classList.add('display-none');
        return;
    }

    const diff = new Date(taskData.dueDate) - new Date();
    if (diff <= 0) {
        overdueSection.classList.remove('display-none');
        timeSpan.textContent = "Time is up!";
    } else {
        overdueSection.classList.add('display-none');
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        timeSpan.textContent = `Expires in ${hours}h ${minutes}m`;
    }
}

// event listeners
mainCheck.onchange = () => {
    taskData.status = mainCheck.checked ? "Done" : "Pending";
    updateUI();
};

statusDropdown.onchange = (e) => {
    taskData.status = e.target.value;
    updateUI();
};

document.getElementById('btn-trigger-edit').onclick = () => {
    viewContainer.classList.add('display-none');
    editContainer.classList.remove('display-none');
    document.getElementById('f-title').focus();
};

document.getElementById('btn-cancel-edit').onclick = () => {
    editContainer.classList.add('display-none');
    viewContainer.classList.remove('display-none');
    document.getElementById('btn-trigger-edit').focus();
};

editContainer.onsubmit = (e) => {
    e.preventDefault();
    taskData.title = document.getElementById('f-title').value;
    taskData.desc = document.getElementById('f-desc').value;
    taskData.priority = document.getElementById('f-priority').value;
    taskData.dueDate = document.getElementById('f-date').value;
    updateUI();
    editContainer.classList.add('display-none');
    viewContainer.classList.remove('display-none');
};

document.getElementById('btn-toggle-desc').onclick = function() {
    const box = document.getElementById('section-desc');
    const hidden = box.classList.contains('display-none');
    box.classList.toggle('display-none');
    this.textContent = hidden ? "Hide Details" : "Show Details";
    this.setAttribute('aria-expanded', !hidden);
};

// start up
updateUI();
setInterval(handleClock, 60000);