import { useState } from 'react';

import './roses.css';

export const Roses = () => {

    const [ roses, setRoses ] = useState( parseInt( localStorage.getItem( 'roses' ) ) || 0 );


    const addRose = () => {
        setRoses( roses + 1 );
        localStorage.setItem( 'roses', roses + 1 );
    }

    return (

        <>
        <div className="rose__container" onClick={ addRose }>
            <div class="glass"></div>
            <div class="thorns">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="glow"></div>
            <div class="rose-leaves">
                <div></div>
                <div></div>
            </div>
            <div class="rose-petals">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="sparkles">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="counter">
            <p> Numero de rosas que te debo: { roses } </p>
        </div>
        </>
    );
};
