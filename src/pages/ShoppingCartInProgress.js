import React, { Component } from 'react';
import { ShoppingCartInProgressContainer } from '../features';

class ShoppingCartInProgress extends Component {

    render() {
        const {id = null, name = null, noShoppingList=false} = this.props.route.params;
        return (
            <ShoppingCartInProgressContainer 
            id={id}
            name={name}
            noShoppingList={noShoppingList}
            />
        )
    }
}

export default ShoppingCartInProgress;