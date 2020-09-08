import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

import { formatSearchResult } from '../services/formatterService';

export const handleSearchAction = (req, res) => {
    const query = req.query.q;
    if (query) {
        (async () => {
            try {
              const response = 
                await axios.get(`http://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}`);
              
              const formattedRes = formatSearchResult(response.data);
              return res.status(200).json(formattedRes);
            } catch (error) {
              console.log(error);
              return res.status(500).json({ message: 'Oops... Something bad happened!'});
            }
          })();
    }
};