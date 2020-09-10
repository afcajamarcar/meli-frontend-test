import dotenv from 'dotenv';
dotenv.config();

export const formatSearchResult = (data) => {
    const categoryFilter = data.filters.length && data.filters[0].id === 'category' 
        ? data.filters[0]
        : data.available_filters.length && data.available_filters[0].id === 'category' 
        ? data.available_filters[0]
        : [];

    const categoriesNames = (categoryFilter && categoryFilter.values[0] && 
        categoryFilter.values[0].path_from_root &&
        categoryFilter.values[0].path_from_root.map(value => value.name)) 
        || categoryFilter.values[0] && [categoryFilter.values[0].name];

    
    const items = [];
    data.results.slice(0, 4).forEach(item => {
        const itemCategory = categoryFilter.values.find(
            category => category.id == item.category_id
        );
        items.push ({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: parseInt(item.price),
                decimals: parseFloat((item.price % 1).toFixed(4))
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            category: itemCategory && itemCategory.name || '',
            location: item.address.state_name
        });
    });
    const formattedRes = {
        author: {
            name: process.env.AUTHOR_NAME || 'Andres',
            lastname: process.env.AUTHOR_LASTNAME || 'Cajamarca'
        },
        categories: categoriesNames,
        items: items
    }
    return formattedRes;
}


export const formatItemSearchResult = (itemData, descData) => {
    const formattedRes = {
        author: {
            name: process.env.AUTHOR_NAME || 'Andres',
            lastname: process.env.AUTHOR_LASTNAME || 'Cajamarca'
        },
        item: {
            id: itemData.id,
            title: itemData.title,
            price: {
                currency: itemData.currency_id,
                amount: parseInt(itemData.price),
                decimals: parseFloat((itemData.price % 1).toFixed(4))
            }
        },
        picture: itemData.thumbnail,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: descData.plain_text
    }
    return formattedRes;
};