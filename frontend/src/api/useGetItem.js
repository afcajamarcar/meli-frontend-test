import axios from 'axios';
import { useEffect, useState } from 'react';

const useSerachItems = itemId => {
    console.log('will search specific items');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        let isSubscribed = true;
        const fetchData = async () => {
            try {
                let options = { 
                    'Content-Type': 'application/json'
                }
                const res = await axios.get(
                    `http://localhost:5000/api/items/${itemId}`,
                    options
                );
                const data = await res.data;
                console.log('data', data);
                if (isSubscribed) setResponse(data);
            } catch (error) {
                console.error('something happened', error);
                setError(error);
            }
        }
        if (isSubscribed) fetchData().then();
        return () => (isSubscribed = false);
    }, [itemId]);
    return { response, error };
}

export default useSerachItems;