import { useEffect, useRef, useState } from "react";

export const useFetch = (url, _options) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const options = useRef(_options).current;

    useEffect(() => {
        console.log(options);

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

    }, [url, options]);
    

    return { data, isPending, error }
}
