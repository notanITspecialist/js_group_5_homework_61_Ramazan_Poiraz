import React from 'react';
import './findCountrie.css'

const FindCountrie = props => {
    const countrie = props.countrie;
    let borders = null;
    if(countrie.name){
        borders = countrie.borders.map(elem => <li key={elem}>{elem}</li>);
    }
    return (
        <div className="find-countrie">
            <ul>
                {borders}
            </ul>
        </div>
    );
};

export default FindCountrie;