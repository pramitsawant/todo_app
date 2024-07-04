import { Status, Todo } from '@/hooks/useTodo'
import { create } from 'zustand'



interface TodoState {
    todos: Todo[]
    status: Status[]
    add: (todo: Todo) => Promise<void>
    remove: (id: number) => Promise<void>
    update: (id: number, todo: Todo) => Promise<void>
    fetch: () => void
    init: () => Promise<void>
}


export const useTodoStore = create<TodoState>()((set) => ({
    todos: [],
    status: [],
    add: async (todo: Todo) => {
        const response = await fetch("http://127.0.0.1:8000/api/todos/", { method: "POST", body: JSON.stringify(todo), headers: { 'Content-Type': 'application/json', } })
        let new_todo = await response.json()
        set((state) => ({ todos: [...state.todos, new_todo] }))
    },
    remove: async (id: number) => {
        await fetch(`http://127.0.0.1:8000/api/todos/${id}/`, { method: "DELETE", headers: { 'Content-Type': 'application/json', } })
        const response = await fetch("http://127.0.0.1:8000/api/todos/", { method: "GET" })
        let _todos = await response.json()
        set((state) => ({ todos: _todos }))
    },
    update: async (id: number, todo: Todo) => {
        const response = await fetch(`http://127.0.0.1:8000/api/todos/${id}/`, { method: "PUT", body: JSON.stringify(todo), headers: { 'Content-Type': 'application/json', } })
        let new_todo = await response.json()
        set((state) => ({ todos: [...state.todos.map((todo) => (todo.id == new_todo.id) ? new_todo : todo)] })
        )
    },
    fetch: () => { },
    init: async () => {
        const response = await fetch("http://127.0.0.1:8000/api/todos/", { method: "GET" })
        let _todos = await response.json()
        set((state) => ({ todos: _todos }))
    },
}))


interface CounterState {
    count: number
    incr: () => void
    decr: () => void
}

export const useCounterStore = create<CounterState>()((set) => ({
    count: 0,
    incr: () => {
        set((state) => ({ count: state.count + 1 }))
    },
    decr: () => {
        set((state) => ({ count: state.count - 1 }))

    }

}))

