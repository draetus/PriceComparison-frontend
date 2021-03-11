import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonContained } from '../../../components';
import { RegisterProductPresentation } from '../presentation';

class RegisterProductContainer extends Component {

    render() {
        return <RegisterProductPresentation />
    }

}

export default RegisterProductContainer;