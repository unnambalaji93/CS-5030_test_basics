class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        let anothertodo = prompt("Type a todo to add")
        todos.push(anothertodo);
        readtodo();
    }

    delete_todo(id){
        var todoid = prompt('Which todoid you want to change?');
        todos.splice(todoid); 
        alert(todos);
}

    update_todo(id, todo){
    var todoid = prompt('Which todoid you want to change?');
    var updatedtodo = prompt('Enter updated todo');
    todo[todoid] = updatedtodo;
    alert(todos);

    }
}


module.exports= todoservice;
