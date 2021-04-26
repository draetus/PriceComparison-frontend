import React, { Component } from 'react';
import { ShoppingListDetailsContainer } from '../features';

class ShoppingListDetails extends Component {

    render() {
        const {id, name} = this.props.route.params;
        return (
            <ShoppingListDetailsContainer 
            id={id}
            name={name}
            />
        )
    }
}

export default ShoppingListDetails;