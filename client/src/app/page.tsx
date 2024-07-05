import TodoBoard from "@/components/todo/todo-board"

export default function TodoPage() {
    return <>
        <div className="w-full mx-auto px-6 relative">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
            <div className="absolute top-10 -right-1 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-32 left-60 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="flex justify-center px-3 pt-10">
                <TodoBoard/>              
            </div>
        </div>
    </>

}