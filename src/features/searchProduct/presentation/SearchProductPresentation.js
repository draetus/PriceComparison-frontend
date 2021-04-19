import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class SearchProductPresentation extends Component {

    render() {
        const {openSearchProductModalRequest} = this.props;
        return (
        <>
            <Typography>BUSCA DE PRODUTOS MANUAL</Typography>
            <FormHolder
            onSubmit={(data) => {
                openSearchProductModalRequest({barcode: data.barcode});
            }}
            >

            <Input name="barcode" inputLabel="CÓDIGO DE BARRAS" />

            <ButtonContained type="submit"> PESQUISAR </ButtonContained>
        </FormHolder>
        </>
        )
    }

}

export default SearchProductPresentation;