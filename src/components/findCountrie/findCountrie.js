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
            {countrie.name ?
                <span>
                    <img alt={countrie.name} src={countrie.flag?countrie.flag:null}/>
                    <span className="country-name"><b>{countrie.name} </b></span>
                    <span className="country-nativeName"><b>Native name:</b> ({countrie.nativeName})</span>
                    {countrie.capital&&<span className="country-capital"><b>Capital:</b> {countrie.capital}</span>}
                    {countrie.population&&<span className="country-population"><b>Population:</b> {countrie.population}</span>}
                    {countrie.region&&<span className="country-region"><b>Region: </b>{countrie.region}</span>}
                    <ul>
                        {borders[0]&&<b>Borders with</b>}
                        {borders}
                    </ul>
                </span>
                : null
            }

        </div>
    );
};

export default FindCountrie;