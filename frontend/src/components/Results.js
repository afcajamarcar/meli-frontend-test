import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import useSearchItems from '../../src/api/useSearchItems';

import iconShipping from '../assets/images/ic_shipping.png';

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
			setResults(searchItems.response);
		}
	}, [searchItems.response]);

    const formatPrice = price => {
        return new Intl.NumberFormat("es-ES").format(price);
    };

    return (
        <div>
            {results && results.items && results.items.map(item => (
                <div key={item.id} style={{backgroundColor: 'white', borderBottom: '1px solid'}}>
                    <img style={{width: '180px', height:'180px', borderRadius: '4px', padding: '16px'}} src={item.picture} alt={item.title}/>
                    <div>
                        <div style={{fontSize: '24px'}}>
                            {`$ ${formatPrice(item.price.decimals)}`}
                        </div>
                        {item.free_shipping &&
                            <img src={iconShipping} alt="free_shipping"/>
                        }
                    </div>
                    <div style={{fontSize: '18px'}}>
                        {item.title}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Results;