import React, { Component } from 'react';
import { Typography } from '../components';
import { ShoppingCartInProgressContainer } from '../features';

class ShoppingCartInProgress extends Component {

    render() {
        console.log("SHOPPING CART IN PROGRESS: ", this.props);
        const {id = null, name = null} = this.props.route.params;
        return (
            <ShoppingCartInProgressContainer 
            id={id}
            name={name}
            />
        )
    }
}

export default ShoppingCartInProgress;