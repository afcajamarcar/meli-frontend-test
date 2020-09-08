import dotenv from 'dotenv';
dotenv.config();

export const formatSearchResult = (data) => {
    const categoryFilter = data.available_filters.find(filter => filter.id == 'category') ||
        data.filters.find(filter => filter.id == 'category');
    const categoriesNames = categoryFilter && categoryFilter.values.map(value => value.name);
    const filteredItemsByCategory = categoryFilter.values[0] &&
        data.results.filter(item => item.category_id == categoryFilter.values[0].id);
    const items = filteredItemsByCategory.map(item => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.available_quantity,
                decimals: item.price
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            category: item.category_id
        }
    });
    const formattedRes = {
        author: {
            name: process.env.AUTHOR_NAME || 'Andres',
            lastname: process.env.AUTHOR_LASTNAME || 'Cajamarca'
        },
        categories: categoriesNames,
        items: items.slice(0, 4)
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
                amount: itemData.available_quantity,
                decimals: itemData.price
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