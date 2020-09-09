import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import useSearchItems from '../../src/api/useSearchItems';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Results() {
    const [results, setResults] = useState([]);

    let query = useQuery();
    let searchQuery = query.get("search");

    const searchItems = useSearchItems(searchQuery);

	useEffect(() => {
		if (searchItems.response) {
			console.log(searchItems.response);
			setResults(searchItems.response);
		}
	}, [searchItems.response]);


    return (
        <div>
            {results && results.items && results.items.map(item => (
                <div>
                    {item.title}
                </div>
            ))}
        </div>
    );
}

export default Results;