
const cardsContainer = document.querySelector(`.cards-container`);
const toDoInput = document.querySelector(`#to-do-input`);
const addTaskBtn = document.querySelector(`#add-task-btn`);

const addTask = (taskName) => {
    let card = `                    
    <div class="card">
        <div class="card-body d-flex justify-content-between align-items-center px-2">
                <input type="text" value=${taskName} class="form-control task" readonly>
            <div class="card-btns d-flex justifiy-content-center align-items-center gap-2">
                <ion-icon name="create-outline" onClick='editTask(this)' class="button edit-btn fs-5"></ion-icon>
                <ion-icon name="checkmark-circle-outline" onClick='saveTask(this)' class="button save-btn fs-5 hidden"></ion-icon>
                <ion-icon name="trash-outline" onClick='deleteTask()' class="button delete-btn fs-5"></ion-icon>
            </div>
        </div>
    </div>`
    cardsContainer.innerHTML += card;
    localStorage.setItem(`${taskName}_Card`, card);
}

toDoInput.addEventListener('keyup', (e) => {
    let input = toDoInput.value;
    if (!input && e.key == 'Enter') {
        return;
    } else if (typeof input === 'String') {
        return;
    }

    if (input.length > 0 && e.key == 'Enter') {
        addTask(input);
        toDoInput.value = '';
    }
});

addTaskBtn.addEventListener('click', () => {
    if (toDoInput.value.length > 0) {
        addTask(toDoInput.value);
        toDoInput.value = '';
        document.querySelector('.card').classList.add('finished');
        return
    }
})

const deleteTask = () => {
    let deletedCardVal = document.querySelector('.card .card-body input');
    localStorage.removeItem(`${deletedCardVal.value}_Card`)
    document.querySelector('.card').remove()
}

const editTask = (item) => {
    let taskInput = document.querySelector('.task');

    item.classList.add('hidden');
    document.querySelector('.save-btn').classList.remove('hidden');

    taskInput.removeAttribute('readonly');
    taskInput.classList.add('edit');
    taskInput.focus();
}

const saveTask = (item) => {
    let taskInput = document.querySelector('.task');

    item.classList.add('hidden');
    document.querySelector('.edit-btn').classList.remove('hidden');
    
    taskInput.classList.remove('edit');
    taskInput.setAttribute('readonly','readonly')
}








