import React, { useEffect, useState } from 'react';
import useSearchItems from '../api/useGetItem';

function Product(props) {
    const itemId = props.match.params.id;

    const [fetchedItem, setFetchedItem] = useState({});

    const getItem = useSearchItems(itemId);

    useEffect(() => {
        if (getItem.response) {
            setFetchedItem(getItem.response);
        }
    }, [getItem.response]);

    console.log('fetching item...', fetchedItem);

    return (
        <div>
            <h3>prodcuto!</h3>
        </div>
    );
}

export default Product;