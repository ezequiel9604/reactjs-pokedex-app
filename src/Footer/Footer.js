
import React from 'react';

import "./scss-styles/styles.scss";

function Footer(props) {

    function selectPrevious(){
        const id = parseInt(props.selectedId);

        if(id > 1)
            props.onChangePokemonById(id-1);
        
    }

    function selectNext(){
    
        const id = parseInt(props.selectedId);

        if(id < props.pokemonsLength)
            props.onChangePokemonById(id+1);

    }

    return (
        <footer className="main_footer">
            <div className="main_footer_ctn">
                <button onClick={selectPrevious}>Previous</button>
                <button onClick={selectNext}>Next</button>
            </div>
        </footer>
    );
}

export default Footer;