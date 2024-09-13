let ul = document.querySelector('ul');
let input =document.querySelector('input');
let taskBtn = document.querySelector('#taskBtn');
let tasks = [{
    name: 'Task1',
    date: new String(new Date(Date.now())).slice(4, 25),
    isDone: false
}];
showTasks();
function showTasks(){
    ul.innerHTML = "";
    tasks.forEach((task,index)=>{
        ul.innerHTML +=`
        <li class="text-primary col-12 d-flex justify-content-between border p-3">
            <div class='taskData col-10 d-flex flex-column'>
                <h3 class='col-3'>${task.name}</h3>
                <p class='col-5 text-warning'>${task.date}</p>
            </div>
            <button onclick="DeleteTask()" class='btn btn-danger text-white col-2 m-2'>Delete</button>
        </li>`;
    })
}
let addTask = function(){
    input.classList.replace('d-none','d-flex');
    let newTask = input.value;
    let taskDate = new String(new Date(Date.now())).slice(4, 25);
    let taskObj = {
        name: newTask,
        date: taskDate,
        isDone:false
    }
    tasks.push(taskObj);
    // ul.innerHTML +=`<li class="text-white d-flex flex-column">${taskObj.taskName} </li>`;
    showTasks();
}

function DeleteTask(){

}