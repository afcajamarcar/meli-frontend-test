import React, { useEffect, useState } from 'react';
import useGetProduct from '../api/useGetProduct';
import { formatCurrency } from '../utils/misc/formatter';

function Product(props) {
    const itemId = props.match.params.id;

    const propsState = props.location.state
    const categories = propsState && propsState.categories;
    const itemCategory = propsState && propsState.itemCategory;

    const [product, setProduct] = useState({});

    const getItem = useGetProduct(itemId);

    useEffect(() => {
        if (getItem.response) setProduct(getItem.response);
    }, [getItem.response]);

    return (
        <div>
            {product && product.item &&
                <div>
                    <div className='item-categories-container'>
                        {itemCategory || categories || ''}
                    </div>
                    <div className='product-container'>
                        <div className='product-card'>
                            <div>
                                <img src={product.picture} alt={product.name} />
                            </div>
                            <div className='product-info'>
                                <div className='product-state'>
                                    {product.condition === 'new' ? 'Nuevo' : 'Usado'}
                                    {' - '}
                                    {`${product.sold_quantity} vendidos`}
                                </div>
                                <div className='product-name'>
                                    {product.item.title}
                                </div>
                                <div className='product-price'>
                                    {`$${formatCurrency(product.item.price.amount, product.item.price.decimals)}`}
                                </div>
                                <div className='buy-button-container'>
                                    <button>Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div className='product-description'>
                            <div className='title'>Descripción del producto</div>
                            <div className='description'>{product.description}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Product;