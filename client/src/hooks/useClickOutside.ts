import { RefObject, useEffect } from "react";

function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T>,
    onClickOutside: () => void
) {
    useEffect(() => {
        /**
         * Invoke function onClick outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside();
            }
        }

        // Bind
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Dispose
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClickOutside]);
}

export default useClickOutside;