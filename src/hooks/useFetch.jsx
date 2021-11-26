import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        const controller = new AbortController();

        const fetchData = async () => {

            try {
                const res = await fetch(url, {
                    signal: controller.signal
                });
                if(!res.ok) {
                    throw Error(res.statusText)                    
                }
                
                const json = await res.json();
                
                setIsPending(false);
                setData(json);
                setError(null);

                // catch - works only when no internet connection
            } catch (err) {
                if(err.name === "AbortError") {
                    console.log('the fetch was aborted');
                } else {
                    setIsPending(false);
                    setError('Could not fetch the data');
                    console.log(err.message);
                }
            }
            
        }
        fetchData();
        
        return () => {
            controller.abort();
        }

    }, [url]);
    

    return { data, isPending, error }
}
