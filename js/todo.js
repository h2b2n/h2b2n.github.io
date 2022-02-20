const todoForm = document.querySelector("#todo-form");
const todoInput =todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos =[];


function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(todos));
}


function deleteToDo(event){
    const li = event.target.parentElement ;
    li.remove();
    todos = todos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}
function showToDos(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText =newToDo.text;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
function todoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value ="";
    const newToDoObj ={
        text:newToDo ,
        id : Date.now(),
    }
    todos.push(newToDoObj);
    saveToDos();
    showToDos(newToDoObj);
}
todoForm.addEventListener("submit", todoSubmit);

const savedToDos = localStorage.getItem("toDos");
if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    todos = parsedTodos ;
    
    parsedTodos.forEach(showToDos);
}