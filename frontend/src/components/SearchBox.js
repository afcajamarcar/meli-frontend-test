import React from 'react';
import logoML from '../assets/images/logo_ml.png';
import iconSearch from '../assets/images/ic_search.png';

function SerachBox(props) {
    return (
        <header className='header'>
            <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px 10px 20px', justifyContent: 'center' }}>
                <img src={logoML} alt="logo_ml" title="Mercado Libre - " style={{ paddingRight: '20px' }} />
                <form style={{display:'flex', flexDirection: 'row'}}>
                    <input type="text" id="serach_input" name="search" placeholder="Nunca dejes de buscar" style={{ fontSize: '18px', padding: '10px', border: 'none' }} />
                    <button style={{backgroundColor: '#EEEEEE', padding: '11px 10px 10px 10px', cursor: 'pointer'}}>
                        <img src={iconSearch} alt="ic_search" title="Buscar" />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default SerachBox;