import React from 'react';
import logoML from '../assets/images/logo_ml.png';
import iconSearch from '../assets/images/ic_search.png';

function SerachBox(props) {
    return (
        <header className='header'>
            <div>
                <img src={logoML} alt="logo_ml" title="Mercado Libre - " className='meli-logo'/>
                <form>
                    <input type="text" id="serach_input" name="search" placeholder="Nunca dejes de buscar" />
                    <button>
                        <img src={iconSearch} alt="ic_search" title="Buscar" />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default SerachBox;