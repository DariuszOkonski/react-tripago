import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);


    useEffect(() => {
        setIsPending(true);
        const fetchData = async () => {

            const res = await fetch(url);
            const json = await res.json();
            
            setIsPending(false);
            setData(json);
        }
        fetchData();

    }, [url]);
    

    return { data, isPending }
}
