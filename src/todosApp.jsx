import React from "react";
import { useGetTodoIdQuery, useGetTodosQuery } from "./api/todosApi";

export const TodosApp = () =>{
    const {data = [],isLoading} = useGetTodosQuery();

    return(
        <>
        <h1>TodosApp</h1>
        <hr/>
        <h4 > isLoading: {isLoading ? "true": "false"} </h4>

        <pre>
            {data.map((todo, key)=>{
                return <li key={key}> {todo.tittle} </li>
            })}
        </pre>
        
        </>
    )
}