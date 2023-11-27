import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos";
import React from "react";

export const NewTodo = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
    let filterData = todos;
    const [searchParams] = useSearchParams();
    const todosData = searchParams.get("todos");
    console.log(todosData, "todosData");

    if (todosData === "active") {
        filterData = filterData.filter((task) => !task.completed)
    }
    if (todosData === "completed") {
        filterData = filterData.filter((task) => task.completed)
    }

    return (
        <ul>
            {
                filterData.map((todo) => {
                    return <li key={todo.id}>
                        <input type="checkbox" id={`todo-${todo.id}`}
                            checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            )
                        }
                    </li>

                })
            }
        </ul >
    )
}
