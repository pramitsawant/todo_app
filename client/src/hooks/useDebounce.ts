import { useState, useEffect } from 'react';

function useDebounce<T>(cb: T, delay: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(cb);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(cb);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [cb, delay]);

    return debounceValue;
}

export default useDebounce;