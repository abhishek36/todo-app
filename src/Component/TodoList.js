import React from 'react'

function TodoList({todos ,setTodos , setEditTodos}) {

    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }

    const handleComplete = (todo)=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{...item , completed : !item.completed}
                }
                return item
        }))}
    // const handleEdit = ({id})=>{
    //     const findTodo = todos.find((todo)=>todo.id === id);
    //     setEditTodos(findTodo)
    // }
    return (
        <div>
            {todos.map((todo)=>(
                <li key={todo.id} className="list-item li-display">
                    <input type="text" className={`list ${todo.completed ? "complete":""}` } value={todo.title} onChange={(event)=>event.preventDefault()}/>
                    <div>
                        <button className="button-complete" onClick={()=>handleComplete(todo)}>
                            <i className="fa fa-check-circle" ></i>
                        </button>
                        {/* <button   onClick={()=>handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button> */}
                        <button onClick={()=>handleDelete(todo)} className="button-delete">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodoList
