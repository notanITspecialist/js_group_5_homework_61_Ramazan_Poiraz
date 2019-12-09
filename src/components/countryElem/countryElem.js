import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const CountryElem = props => {
    return (
        <ListGroupItem>{props.text}</ListGroupItem>
    );
};

export default CountryElem;