import React from 'react';

// todos: [
//     {id: 1, content: "buy some milk"},
//     {id: 2, content: "play mario kart"}
//   ]

const Todos = (props) => {
    const todoList = props.todos.length ? (
        props.todos.map((todo) => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => props.deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    )
    // console.log(todoList);
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;