alert('Funcionou');
// Buscando no div o ul-Referenciando os elementos
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


// Utilizando JSON parse para fazer o array
var todos=JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos() {
    // Inner serve para alteração no Html,transforma o que queremos o que tá dentro da aspa
    listElement.innerHTML ='';
    
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');
        
        var pos =todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        var linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement
        console.log(todo);

    }

}

renderTodos()



function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();

}


buttonElement.onclick = addTodo;
function deleteTodo(pos){
    todo.splice(pos,1);
    renderTodos();
    saveToStorage();


}
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}


