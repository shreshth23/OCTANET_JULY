let date = new Date()
let d = document.getElementById('date')
let ds = date.toString().split(' ')
d.innerText = ds[0] + ' ' + ds[1] + ' ' + ds[2] + ' ' + ds[3]

function createTask( taskname ){
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let div5 = document.createElement('div')
    let i1 = document.createElement('i')
    let i2 = document.createElement('i')
    div1.classList.add('task')
    div2.classList.add('taskname')
    div2.innerHTML = '<span class="task-time">' + formatAMPM(new Date()) + '</span>  ' +taskname
    div4.classList.add('delete')
    div5.classList.add('completed')
    i1.classList.add('fa-solid')
    i1.classList.add('fa-regular')
    i1.classList.add('fa-circle-minus')
    i2.classList.add('fa-solid')
    i2.classList.add('fa-check')
    div1.appendChild(div2)
    div1.appendChild(div3)
    div3.appendChild(div4)
    div3.appendChild(div5)
    div4.appendChild(i1)
    div5.appendChild(i2)
    i1.addEventListener("click",()=>{
        let comp = document.getElementsByClassName('abort')[0]
        let div = document.createElement('span')
        div.classList.add('task-comp-time')
        div2.appendChild(div)
        div.innerText = formatAMPM(new Date())
        div2.classList.add('comp-task-item')
        comp.appendChild(div2)
        div1.remove()
    })
    i2.addEventListener("click",()=>{
        let comp = document.getElementsByClassName('comp')[0]
        let div = document.createElement('span')
        div.classList.add('task-comp-time')
        div2.appendChild(div)
        div.innerText = formatAMPM(new Date())
        div2.classList.add('comp-task-item')
        comp.appendChild(div2)
        div1.remove()
    })
    const tasks = document.getElementsByClassName('tasks')[0]
    tasks.append(div1)
}

function addTask(){
    const task = document.getElementById('task')
    const taskname = task.value
    if(taskname===''){
        alert('It cant be empty MAN !!!!!')
        return
    }
    createTask(taskname)
    task.value = ''
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function completedtasks() {
    document.getElementsByClassName('comp-tasks')[0].style.animation = 'slidein 0.2s linear 1 normal forwards'
}

function closecompletedtasks() {
    document.getElementsByClassName('comp-tasks')[0].style.animation = 'slideout 0.2s linear 1 normal forwards'
}

function abortedtasks() { 
    document.getElementsByClassName('abort-tasks')[0].style.display = 'flex'
    document.getElementsByClassName('abort-tasks')[0].style.animation = 'slidein-abort 0.2s linear 1 normal forwards'
}

function closeabortedtasks() {
    document.getElementsByClassName('abort-tasks')[0].style.animation = 'slideout-abort 0.2s linear 1 normal forwards'
}