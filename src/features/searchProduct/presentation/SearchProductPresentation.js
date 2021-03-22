import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class SearchProductPresentation extends Component {

    ProductData = () => {
        const {data} = this.props;

        console.log("PRODUCT DATA: ", this.props);

        if (data) {
            return (
                <>
                    <Typography>{"Nome: " + data.name}</Typography>
                    <ButtonContained type="submit" loading={false} > BUSCAR NOVAMENTE </ButtonContained>
                </>
            )
        }

        return <ButtonContained type="submit" loading={false} > BUSCAR </ButtonContained>
    }

    render() {
        const {searchProductRequest} = this.props;
        return (
        <>
            <Typography>BUSCA DE PRODUTOS</Typography>
            <FormHolder
            onSubmit={(data) => {
                console.log("SUBMIT: ", data)
                searchProductRequest(data);
            }}
            >

            <Input name="barCode" inputLabel="CÓDIGO DE BARRAS" />
            <this.ProductData />
        </FormHolder>
        </>
        )
    }

}

export default SearchProductPresentation;