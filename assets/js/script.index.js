/*     let verificed = false;
    let i = 0;      
    class Task {
        constructor(task) {
            this.task = task;
        }
    
        getNewTask(task) {
            i++;
           document.getElementById("result").innerHTML = `<div id="anotedTask"> <div id="all"> <p> ${task} </p> <button id="verify" onclick="verify()"><i class="fa-solid fa-check" style="color: #ffffff;"></i></button></div></div>`
        }
    }

    function addTask() {
        const task = new Task()
        task.getNewTask(inp.value)
    }

    function verify() {
        if (verificed == false) {
            document.getElementById("verify").style.backgroundColor = 'green';
            verificed = true;
        } else {
            document.getElementById("verify").style.backgroundColor = '#181818';
            verificed = false;
        }
    }

    function trash(params){
        console.log(i)
        i = 0;
        document.getElementById('anotedTask')[params].remove();
    }

  */

    class Task {
        constructor(id, title, status) {
            this.id = id;
            this.title = title;
            this.status =  status;
        }
    }

    class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(param) {
        this.tasks.push(param);
    }

    removeTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }

    markTask(id) {
        this.tasks.forEach(task => {
            if(task.id = id) {
                TaskList.status = !task.status; 
            }
        });

        document.getElementById(id + "-button").classList.toggle("tasDone");
    }
    }

    const veryBigTaskList = new TaskList();

    function createTask() {
        const taskTitle = document.getElementById("inp").value;

        const task = new Task(1, taskTitle, false);  
        
        veryBigTaskList.addTask(task);
        
        renderTasks();
     }

     function generateId() {
        return Mathh.floor(Math.random() * 9999)
     }

     function renderTasks() {
        let element = "";

        veryBigTaskList.tasks.forEach(task => {
            element += `
            <li id="${task.id}">
            <span id="${task.id}--title">${task.title}</span>
            <div>
            <button id="${task.id}--button" class="action"
                onclick="doneTask(${task.id})"><i class="fa-solid fa-check" style="color: #000000;"></i></i>
                </button>
                <button class="action edit" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash" style="color: #000000;"></i></button>
                </div>
                </li>
        `})

        document.getElementById("list").innerHTML = element;
     }

     function deleteTask(id) {
        veryBigTaskList.removeTask(id);
        renderTasks();
     }

     function doneTask(id) {
        veryBigTaskList.markTask(id);
     }