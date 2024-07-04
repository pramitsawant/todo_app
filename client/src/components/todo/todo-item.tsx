import { Todo } from "@/hooks/useTodo"
import { useTodoStore } from "@/store/todo"
import { useState } from "react"
import { TodoItemAction } from "./todo-item-action"
import { TodoItemActionMenu } from "./todo-action-item-menu"

interface TodoItemProps {
    todo: Todo,
}


// const keyToTitle = (status: Status) => {
//     switch(status){
//         case Status.
//     }

// }

export function TodoItem({ todo }: TodoItemProps) {

    const [progress, setProgress] = useState(false)
    const update = useTodoStore((state) => state.update)

    const updateStatus = async (status: string) => {
        setProgress(true)
        await update(todo.id as number, { title: todo.title, description: todo.description, status: status })
        setProgress(false)
    }

    return (
        // <div className="w-56">

        <div className="hover:bg-gray-200 flex justify-start cursor-pointer  bg-white shadow p-2 items-center my-2 rounded-lg">
            <div className="flex text-sm font-normal text-gray-500">
                <TodoItemAction onClick={() => { updateStatus(todo.status) }} loading={progress} status={todo.status} />
            </div>
            <div>
                <div className="pl-2">
                    <span className="capitalize block text-gray-800">{todo.title}</span>
                    <p className="text-sm block text-gray-600 w-64">{todo.description}</p>
                </div>
            </div>
            <div>
                <TodoItemActionMenu updateStatus={updateStatus} status={todo.status} />
            </div>
        </div>
        // </div>
    )
}