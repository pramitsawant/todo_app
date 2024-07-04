"use client"
import { FormEvent, ReactNode, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";
interface AddTodoDialogProps {
    open: boolean
    onClose: () => void
    onSubmit: (e:FormEvent) => Promise<void>
    children: ReactNode// string | JSX.Element | JSX.Element[]
}

export function AddTodoDialog({ children, open, onClose, onSubmit }: AddTodoDialogProps) {

    const ref = useRef<HTMLDivElement>(null);
 
    useClickOutside(ref,  onClose);
    // const [domReady, setDomReady] = useState(false)

    // useEffect(() => {
    //     setDomReady(true)
    // }, [])

    // return domReady
    //     ? ReactDOM.createPortal(modalContent, document.getElementById('portal') as HTMLElement)
    //     : null
    if (!open) return <></>

    const modalContent = (
        <div ref={ref}
            className=" fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
            <div
                className="relative m-4 w-[500px]  rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
                <div
                    className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                    Add New Todo
                </div>
                <form onSubmit={ (e) => onSubmit(e) }>


                    <div
                        className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                        {children}
                    </div>
                    <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                        <button onClick={onClose}
                            className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Cancel
                        </button>
                        <button type="submit"
                            className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    return (
        <>
            {ReactDOM.createPortal(
                modalContent,
                document.getElementById('portal') as HTMLElement
            )}
        </>
    );
}