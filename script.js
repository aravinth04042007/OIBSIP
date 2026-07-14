const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function update(){

pendingList.innerHTML="";
completedList.innerHTML="";

let pending=0;
let completed=0;

tasks.forEach((task,index)=>{

const card=document.createElement("div");

card.className="task";

const left=document.createElement("div");

left.className="left";

const check=document.createElement("input");

check.type="checkbox";

check.checked=task.completed;

check.onchange=()=>{

task.completed=!task.completed;

saveTasks();

update();

};

const text=document.createElement("div");

text.innerHTML=`
<div class="${task.completed?"completed":""}">
${task.name}
</div>

<div class="time">
Added ${task.time}
</div>
`;

left.appendChild(check);

left.appendChild(text);

const del=document.createElement("div");

del.className="delete";

del.innerHTML='<i class="fa-solid fa-trash"></i>';

del.onclick=()=>{

tasks.splice(index,1);

saveTasks();

update();

};

card.appendChild(left);

card.appendChild(del);

if(task.completed){

completed++;

completedList.appendChild(card);

}else{

pending++;

pendingList.appendChild(card);

}

});

if(pending===0){

pendingList.innerHTML=`
<div class="empty">
<i class="fa-regular fa-clipboard"></i>
<p>No pending tasks — great work!</p>
</div>
`;

}

document.getElementById("pendingCount").innerText=pending;

document.getElementById("completedCount").innerText=completed;

document.getElementById("pendingBadge").innerText=pending;

document.getElementById("completedBadge").innerText=completed;

}

addBtn.onclick=()=>{

const value=taskInput.value.trim();

if(value==="") return;

const now=new Date();

tasks.push({

name:value,

completed:false,

time:now.toLocaleString()

});

taskInput.value="";

saveTasks();

update();

};

taskInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

addBtn.click();

}

});

update();