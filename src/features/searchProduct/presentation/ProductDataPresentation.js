import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';

class SearchProductPresentation extends Component {

    render() {
        const {clearData, data} = this.props;

        return (
            <>
                <Typography>{"Nome: " + data.name}</Typography>
                <ButtonContained onPress={clearData} loading={false} > LIMPAR BUSCA </ButtonContained>
            </>
        )
    }

}

export default SearchProductPresentation;