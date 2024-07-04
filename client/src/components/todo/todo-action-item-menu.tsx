import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { STATUSES } from "./todo-board";


interface TodoItemActionMenuProps {
    status: string,
    updateStatus : (status: string) => Promise<void>
}

export function TodoItemActionMenu({ status, updateStatus }: TodoItemActionMenuProps) {
    const [menu, updateMenu] = useState(false)

    const ref = useRef<HTMLUListElement>(null);

    const handleClickOutside = () => {
        updateMenu(false)
    };

    useClickOutside(ref, handleClickOutside);


    return (
        <>
     
            <button onClick={() => { updateMenu(!menu) }}
                className="select-none min-w-[100px] capitalize rounded-lg bg-gray-900 py-2 px-2 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                {status}
            </button>
            <ul ref={ref} className={"absolute z-10 min-w-[100px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-2 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none transition-opacity duration-300 " + (menu ? "opacity-1" : "pointer-events-none opacity-0")}>
                {STATUSES.map((o) => {
                    return <li
                        onClick={ ()  => {updateStatus(o.value) }}
                        role="menuitem"
                        key={o.value}
                        className="flex justify-between items-center cursor-pointer select-none rounded-md px-3 pt-2 pb-2  leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        {o.title}
                        
                        {
                            (status == o.value) ? <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 6 9 17l-5-5"/></svg> : <></>
                        }



                    </li>
                })}
            </ul>


        </>
    )

}
