const form =document.getElementById("form")
const input =document.getElementById("input")
const todos =document.getElementById("todos")
const search = document.getElementById("search")

const todoList = JSON.parse(localStorage.getItem('todoList'))

if(todoList){
    todoList.forEach(todo => addTodo(todo))
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addTodo()
})
function addTodo(todoLs){
    const todo =document.createElement('li')
    todo.innerText = todoLs ? todoLs.text :input.value.trim()
    if(todoLs && todoLs.completed){
        todo.classList.add('completed')
    }
    
    todo.addEventListener('click',()=>{
        todo.classList.toggle('completed')
        updateLs()
    })

    todo.addEventListener('contextmenu',(e)=>{
        e.preventDefault()
        todo.remove()
        updateLs()
        })
        todos.appendChild(todo)
        input.value =''
        updateLs()
}

function updateLs(){
    const todos =document.querySelectorAll('li')
    let todoList =[]
    todos.forEach(todo =>{
        todoList.push(
            {text: todo.innerText,
                completed:todo.classList.contains('completed')
            }
        )
    })
    localStorage.setItem('todoList',JSON.stringify(todoList))
}





 search.addEventListener('input', () => {
    const keyword = search.value.trim()
    const todoItems = document.querySelectorAll('li')

    todoItems.forEach(todo => {
        const text = todo.innerText
        if (text.includes(keyword)) {
            todo.style.display = ''          
        } else {
            todo.style.display = 'none'      
        }
    })
})