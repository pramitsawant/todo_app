import { Status } from "./todo-board"

interface TodoItemActionProps {
    loading: boolean,
    status: string
    onClick: () => void
}

function Loading() {
    return <svg className="w-7 h-7  animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
}
function Todo() {
    return <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /></svg>
}
function Done() {
    return <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
}
function Progress() {
    return <svg className="w-7 h-7 animate-pulse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" /><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" /><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" /><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" /><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" /><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" /><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" /><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" /><circle cx="12" cy="12" r="1" /></svg>
}
function Delete() {
    return <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
        <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" />
    </svg>
}

export function TodoItemActionMenu({ loading, status, onClick }: TodoItemActionProps) {
    if (status == Status.DONE) {
        return (
            <button type="button" onClick={onClick} className="text-green-700 bg-transparent hover:text-blue-800 font-medium rounded-lg text-sm p-0 text-center inline-flex items-center me-2 ">
                {loading ? <Loading /> : <Done />}
            </button>)
    }
    else if (status == Status.TODO) {
        return (
            <button type="button" onClick={onClick} className="text-green-700 bg-transparent hover:text-blue-800 font-medium rounded-lg text-sm p-0 text-center inline-flex items-center me-2 ">
                {loading ? <Loading /> : <Todo />}
            </button>)
    }
    else if (status == Status.PROGRESS) {
        return (
            <button type="button" onClick={onClick} className="text-green-700 bg-transparent hover:text-blue-800 font-medium rounded-lg text-sm p-0 text-center inline-flex items-center me-2 ">
                {loading ? <Loading /> : <Progress />}
            </button>)
    }
    else if (status == Status.ARCHIVED) {
        return (
            <button type="button" onClick={onClick} className="text-green-700 bg-transparent hover:text-blue-800 font-medium rounded-lg text-sm p-0 text-center inline-flex items-center me-2 ">
                {loading ? <Loading /> : <Delete />}
            </button>)
    }
    else {
        return (<></>)
    }
}