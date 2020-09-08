import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

export const handleSearchAction = (req, res) => {
    const query = req.query.q;
    if (query) {
        (async () => {
            try {
              const response = 
                await axios.get(`http://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}`);
              
              const categoryFilter = response.data.available_filters.find(filter => filter.id == 'category') || 
              response.data.filters.find(filter => filter.id == 'category');
              const categoriesNames = categoryFilter && categoryFilter.values.map(value => value.name);
              const filteredItemsByCategory = categoryFilter.values[0] && 
                response.data.results.filter(item => item.category_id == categoryFilter.values[0].id);
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
                items: items.slice(0,4)
              }
              return res.status(200).json(formattedRes);
            } catch (error) {
              console.log(error);
              return res.status(500).json({ message: 'Oops... Something bad happened!'});
            }
          })();
    }
};