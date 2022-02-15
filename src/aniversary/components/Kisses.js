import { useState } from 'react';
import './kisses.css';

export const Kisses = () => {

    const [ kisses, setKisses ] = useState( parseInt( localStorage.getItem( 'kisses' ) ) || 0 );


    const addKiss = () => {
        setKisses( kisses + 1 );
        localStorage.setItem( 'kisses', kisses + 1 );
    }

    return (
        <>
            <div class='kisses__container' onClick={ addKiss }>
              <div id='l-ball' class='ball'>
                <div class='face face-l'>
                  <div class='eye eye-l'></div>
                  <div class='eye eye-r'></div>
                  <div class='mouth'></div>
                </div>
              </div><div id='r-ball' class='ball'>
                <div class='face face-r'>
                  <div class='eye eye-l eye-r-p'></div>
                  <div class='eye eye-r eye-r-p'></div>
                  <div class='mouth mouth-r'></div>
                  <div class='kiss-m'>
               
                    <div class='kiss'></div>
                    <div class='kiss'></div>
                  </div>
                </div>
              </div>
            </div>
            <div class='counter'>
                <p> Numero de besitos que te debo: { kisses } </p>
            </div>
        </>
    );
};
