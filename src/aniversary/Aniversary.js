import { Kisses } from './components/Kisses';
import { Roses } from './components/Roses';

import './aniversary.css';

export const Aniversary = () => {
    return (
        <>
        <h1> Feliiiiiz Aniversario Miiii Mapachitaaaaaaaaa Mimilonshitaaaaaaaaaaaaaa!!! </h1>
        <div className="aniversary__container">
            <Kisses />
            <Roses />
        </div>
        </>
    );
};
