import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { STATUSES, Status } from "./todo-board";


interface TodoItemActionEditProps {
    status: string,
    save: () => void
    cancel: () => void
}


const keyToTitle = (status: string) => {
    const kk = new Map<string, string>();

    STATUSES.forEach((status) => {
        kk.set(status.value, status.title)
    })
    return kk.get(status)
}

export function TodoItemActionEdit({ status, save, cancel }: TodoItemActionEditProps) {
    const [menu, updateMenu] = useState(false)
    const ref = useRef<HTMLUListElement>(null);
    const handleClickOutside = () => {
        updateMenu(false)
    };

    useClickOutside(ref, handleClickOutside);
    return (
        <>
            <button onClick={() => { save() }}
                className="select-none mx-1 capitalize rounded-lg  py-2 px-2 bg-green-500 text-white align-middle font-sans text-xs font-bold  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" /><path d="M7 3v4a1 1 0 0 0 1 1h7" /></svg>
            </button>
            <button onClick={() => { cancel() }}
                className="select-none mx-1 capitalize rounded-lg  py-2 px-2 text-center align-middle font-sans text-xs font-bold text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
        </>
    )

}
