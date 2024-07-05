interface EditableSpanProps {
    value: string,
    editing: boolean,
    onInput: (val:string) => void
    className: string
}

// bg-gray-200

export function EditableSpan({ value, editing, onInput, className }: EditableSpanProps) {

    return <> {editing ?  <input className={className +" "} type="text" value={value} onChange={(e) => { onInput(e.target.value) }}  /> : <span className={className}>{value}</span> }
        
    </>


}