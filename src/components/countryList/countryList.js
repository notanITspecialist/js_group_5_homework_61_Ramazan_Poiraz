import React from 'react';
import CountryElem from "../countryElem/countryElem";
import ListGroup from "reactstrap/es/ListGroup";
import './countryList.css'

const CountryList = props => {
    const list = props.countries;
    const countriesList = list.map(elem => <CountryElem onClick={() => props.onClick(elem.alpha3Code)} key={elem.name} text={elem.name}/>);
    return (
        <ListGroup className='country-list'>
            {countriesList}
        </ListGroup>
    );
};

export default CountryList;