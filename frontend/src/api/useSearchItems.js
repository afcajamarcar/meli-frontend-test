import axios from 'axios';
import { useEffect, useState } from 'react';

const useSerachItems = query => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        let isSubscribed = true;
        const fetchData = async () => {
            try {
                let options = { 
                    'Content-Type': 'application/json',
                    params: {
                        q: query
                    }
                }
                const res = await axios.get(
                    `http://localhost:5000/api/items`,
                    options
                );
                const data = await res.data;
                if (isSubscribed) setResponse(data);
            } catch (error) {
                console.error('something happened', error);
                setError(error);
            }
        }
        if (isSubscribed) fetchData().then();
        return () => (isSubscribed = false);
    }, [query]);
    return { response, error };
}

export default useSerachItems;