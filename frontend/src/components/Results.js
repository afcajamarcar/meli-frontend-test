import React, { useState, useEffect } from 'react';
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
            {results && results.items && results.items.length
                ?
                <div className='results-container'>
                    {results && results.categories &&
                        <div className='categories-container'>
                            {results && results.categories &&
                                results.categories.join(' > ')
                            }
                        </div>
                    }
                    {results && results.items && results.items.map(item => (
                        <div key={item.id} className='item-card'>
                            <div className='left-side-card'>
                                <img src={item.picture} alt={item.title} />
                            </div>
                            <div className='right-side-card'>
                                <div className='price-container'>
                                    {`$ ${formatPrice(item.price.decimals)}`}
                                </div>
                                {item.free_shipping &&
                                    <img src={iconShipping} alt="free_shipping" title="Envío gratis" />
                                }
                                <div className='title-container'>
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div></div>
            }

        </div>
    );
}

export default Results;