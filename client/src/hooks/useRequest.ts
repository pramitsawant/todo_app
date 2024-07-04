

// export function useRequest() {

import { useEffect, useState } from "react";

type RequestOptions = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: HeadersInit;
    body?: BodyInit | null;
};

type DataResponse<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
    get: () => Promise<T>
};

function useFetch<T>(url: string, options: RequestOptions): DataResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const get = async () => {
        return await fetch(url, options) as T
    }


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await fetch(url, options);
    //             if (!response.ok) {
    //                 throw new Error(`Error: ${response.statusText}`);
    //             }
    //             const result: T = await response.json();
    //             setData(result);
    //         } catch (err) {
    //             setError((err as Error).message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [url]);

    return { data, loading, error, get };
}

export default useFetch;