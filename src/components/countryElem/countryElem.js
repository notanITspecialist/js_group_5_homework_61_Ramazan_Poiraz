import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const CountryElem = props => {
    return (
        <ListGroupItem onClick={props.onClick}>{props.text}</ListGroupItem>
    );
};

export default CountryElem;