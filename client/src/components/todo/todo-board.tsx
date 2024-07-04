"use client"
import { Todo } from "@/hooks/useTodo"
import { useTodoStore } from "@/store/todo"
import { FormEvent, useEffect, useMemo, useRef, useState } from "react"
import { AddTodoDialog } from "./add-todo-dialog"
import { TodoItem } from "./todo-item"


export enum Status {
    TODO = "todo",
    PROGRESS = "in_progress",
    DONE = "done",
    ARCHIVED = "archived"
}




export enum Filter {
    ALL = "all",
    TODO = "todo",
    PROGRESS = "in_progress",
    DONE = "done",
    ARCHIVED = "archived"
}

export const STATUSES = [
    { title: "To Do", value: "todo" },
    { title: "In Progress", value: "in_progress" },
    { title: "Done ", value: "done" },
    { title: "Archived", value: "archived" }
]


export default function TodoBoard() {
    const [tab, setFilter] = useState<Filter>(Filter.TODO)
    const [open, setOpen] = useState(false)
    const init = useTodoStore((state) => state.init)
    const todos = useTodoStore((state) => state.todos)
    const add = useTodoStore((state) => state.add)


    const [new_todo, setTodoData] = useState<Todo>({
        title: '',
        description: '',
        status: "todo",
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(e)
        await add(new_todo)
        setOpen(false)
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setTodoData({
            ...new_todo,
            [name]: value,
        });
    };

    const filterByStatus = (filter: Filter) => {
        return (Filter.ALL == filter) ? todos : todos.filter((todo: Todo) => todo.status == filter)
    }
    useEffect(() => {
        init().then(() => {
            setFilter(Filter.ALL)
        }).catch()

    }, [])


    return (
        <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                
                <div className=" text-gray-700 text-lg font-semibold py-2 px-2 flex justify-between">
                    Todos
                    <button onClick={() => { setOpen(true) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        <span className="sr-only">Icon description</span>
                    </button>
                </div>
                <div className="flex items-center bg-gray-200 rounded-md">
                    <div className="pl-2">
                        <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </div>
                    <input
                        className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                        id="search" type="text" placeholder="Search todos" />
                </div>

                <ul className="flex justify-center items-center my-4">
                    <li onClick={() => setFilter(Filter.ALL)} className={"cursor-pointer rounded-sm py-2 px-4  border-b-8 " + (tab == Filter.ALL ? "text-green-500 border-green-500" : "text-gray-500")}>All</li>
                    <li onClick={() => setFilter(Filter.TODO)} className={"cursor-pointer rounded-sm py-2 px-4  border-b-8 " + (tab == Filter.TODO ? "text-green-500 border-green-500" : "text-gray-500")}>Todo</li>
                    <li onClick={() => setFilter(Filter.PROGRESS)} className={"cursor-pointer rounded-sm py-2 px-4  border-b-8 " + (tab == Filter.PROGRESS ? "text-green-500 border-green-500" : "text-gray-500")}>In Progress</li>
                    <li onClick={() => setFilter(Filter.DONE)} className={"cursor-pointer rounded-sm py-2 px-4  border-b-8 " + (tab == Filter.DONE ? "text-green-500 border-green-500" : "text-gray-500")}>Done</li>
                    <li onClick={() => setFilter(Filter.ARCHIVED)} className={"cursor-pointer rounded-sm py-2 px-4  border-b-8 " + (tab == Filter.ARCHIVED ? "text-green-500 border-green-500" : "text-gray-500")}>Archived</li>
                </ul>
                <div className="overflow-y-auto h-[550px]" key={tab}>
                    { filterByStatus(tab).map((todo: Todo, index) => { return <TodoItem key={index} todo={todo} /> })}

                    {
                        (filterByStatus(tab).length == 0) ? 
                        <div className="text-center">
                            No todos
                        </div> : <></>
                    }
                </div>
                <AddTodoDialog open={open} onSubmit={handleSubmit} onClose={() => setOpen(false)} >
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                        <input onChange={handleChange} type="text" name="title" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <input onChange={handleChange} type="text" name="description" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-50  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <select onChange={handleChange} name="status" className=" border text-sm w-full  rounded-lg  block  p-2.5  border-gray-600 text-gray-900 ">                        
                            {STATUSES.map((o) => { return <option key={o.value}  value={o.value}>{o.title}</option> })}
                        </select>
                    </div>
                </AddTodoDialog>
            </div>
        </div>
    )
}