import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useSearchItems from '../../src/api/useSearchItems';
import iconShipping from '../assets/images/ic_shipping.png';
import { formatCurrency } from '../utils/misc/formatter';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Results() {
    const [results, setResults] = useState([]);
    const history = useHistory();

    let query = useQuery();
    let searchQuery = query.get("search");

    const searchItems = useSearchItems(searchQuery);

    useEffect(() => {
        if (searchItems.response) {
            setResults(searchItems.response);
        }
    }, [searchItems.response]);

    const renderItem = (itemId) => {
        history.push({
            pathname: `/items/${itemId}`,
            state: {categories: results.categories.join(' > ')}
        });
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
                        <div key={item.id} className='item-card' onClick={() => renderItem(item.id)}>
                            <div className='left-side-card'>
                                <img src={item.picture} alt={item.title} />
                            </div>
                            <div className='right-side-card'>
                                <div className='price-container'>
                                    {`$ ${formatCurrency(item.price.amount, item.price.decimals)}`}
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