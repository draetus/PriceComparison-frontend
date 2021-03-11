import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonContained } from '../../../components';
import { HomePresentation } from '../presentation';

class HomeContainer extends Component {

    render() {
        return <HomePresentation />
    }

}

export default HomeContainer;