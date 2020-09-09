import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import logoML from '../assets/images/logo_ml.png';
import iconSearch from '../assets/images/ic_search.png';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function SerachBox() {
    const history = useHistory();

    const [item, setItem] = useState('');
    
    let query = useQuery();
    let searchQuery = query.get("search");
    if (searchQuery && !item) {
        setItem(searchQuery);
    }
    
    const handleChange = (e) => {
        setItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item) {
            history.push(`/items?search=${item}`);
        }
    }

    return (
        <header className='header'>
            <div>
                <img
                    src={logoML}
                    alt="logo_ml"
                    title="Mercado Libre - Donde comprar y vender de todo"
                    className='meli-logo'
                />
                <form onSubmit={e => handleSubmit(e)} >
                    <input
                        type="text"
                        id="serach_input"
                        name="search"
                        value={item}
                        placeholder="Nunca dejes de buscar"
                        onChange={e => handleChange(e)}
                    />
                    <button>
                        <img src={iconSearch} alt="ic_search" title="Buscar" />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default SerachBox;