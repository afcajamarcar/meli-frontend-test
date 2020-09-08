import axios from 'axios';

export const handleSearchAction = (req, res) => {
    const query = req.query.q;
    if (query) {
        (async () => {
            try {
              const response = 
                await axios.get(`http://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}`);
              return res.status(200).json(response.data);
            } catch (error) {
              console.log(error);
              return res.status(500).json({ message: 'Oops... Something bad happened!'});
            }
          })();
    }
};