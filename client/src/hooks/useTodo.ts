import { useEffect, useState } from "react";
import useFetch from "./useRequest";

export enum TodoStatus {
    TODO = "To Do",
    PROGRESS = "In Progress",
    DONE = "Done"
}

export interface Status {
    id: number
    title: string
}

export interface Todo {
    id?: number,
    title: string,
    description: string,
    status: string
}

export function useTodo() {
    const [todos, updateTodo] = useState<Todo[]>([
    ])






    const addNewTodo = (new_todo: Todo) => {
        updateTodo((old_todos) => [...old_todos, new_todo])
    }

    const statuses = Object.values(TodoStatus)

    const updateTodoStatus = (status: TodoStatus, todo_id: number) => {
        const index = todos.findIndex((todo: Todo) => todo.id == todo_id)
        updateTodo(old_todos => {
            const updatedItems = [...old_todos];
            updatedItems[index] = { ...updatedItems[index], status: status };
            return updatedItems;
        });
    };

    const getTodoByGroup = () => {
        return {
            "todo": todos.filter((todo: Todo) => todo.status == TodoStatus.TODO),
            "progress": todos.filter((todo: Todo) => todo.status == TodoStatus.TODO),
            "Done": todos.filter((todo: Todo) => todo.status == TodoStatus.TODO)
        }
    }
    const filterByStatus = (status: TodoStatus) => {
        return todos.filter((todo: Todo) => todo.status == status)

    }


    const [requestState, setRequestState] = useState({
        data: [],
        loading: true,
        failed: false,
    });



    return {
        todos,
        addNewTodo,
        updateTodoStatus,
        getTodoByGroup,
        statuses,
        filterByStatus
    }

}