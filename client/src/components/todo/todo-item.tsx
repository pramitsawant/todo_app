import { Todo } from "@/hooks/useTodo"
import { useTodoStore } from "@/store/todo"
import { FormEvent, useState } from "react"
import { TodoItemAction } from "./todo-item-action"
import { TodoItemActionMenu } from "./todo-action-item-menu"
import { STATUSES, Status } from "./todo-board"
import { TodoItemActionEdit } from "./todo-action-item-edit"
import { EditableSpan } from "../input/editable-span"


interface TodoItemProps {
    todo: Todo,
}

export function TodoItem({ todo }: TodoItemProps) {

    const [progress, setProgress] = useState(false)
    const [editing, setEditing] = useState(false)

    const [edit_todo, setTodo] = useState<Todo>(todo);

    const update = useTodoStore((state) => state.update)

    const updateStatus = async (status: string) => {
        setProgress(true)
        await update(todo.id as number, { title: todo.title, description: todo.description, status: status })
        setProgress(false)
        setEditing(false)
    }

    const updateTodo = async () => {
        setProgress(true)
        await update(todo.id as number, { ...edit_todo })
        setProgress(false)
        setEditing(false)
    }

    const updated = (value: string, key: string) => {
        const _todo = {...edit_todo}
        _todo[key] = value
        setTodo({..._todo})
    }
    const cancel = () => {
        setTodo({...todo })
        setEditing(false)
    }

    const save = async () => {
        setEditing(false)
        await updateTodo()
    }

    return (

        <div className="hover:bg-gray-200 flex justify-start cursor-pointer  bg-white shadow p-2 items-center my-2 rounded-lg">
            <div className="flex text-sm font-normal text-gray-500">
                <TodoItemAction onClick={() => { updateStatus(todo.status) }} loading={progress} status={todo.status} />
            </div>
            <div>
                <div className="pl-2" onDoubleClick={() => setEditing(true)}>
                    <EditableSpan className="capitalize block text-gray-800 w-64" value={editing ? edit_todo.title : todo.title} onInput={(value)=>{ updated(value, "title") }} editing={editing} />
                    <EditableSpan className="text-sm block text-gray-600 w-64" value={editing ? edit_todo.description : todo.description} onInput={(value)=>{ updated(value, "description") }} editing={editing} />
                </div>
            </div>
            <div>
                {(editing) ? <TodoItemActionEdit save={() => { save() }} cancel={() => { cancel() }} status={todo.status} /> : <TodoItemActionMenu updateStatus={updateStatus} status={todo.status} />}
            </div>
        </div>
    )
}