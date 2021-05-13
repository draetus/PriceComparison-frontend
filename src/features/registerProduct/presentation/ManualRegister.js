import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class ManualRegister extends Component {

    render() {
        return (
        <>
        <Typography> REGISTRO DE PRODUTOS </Typography>
        <FormHolder
            onSubmit={(data) => {
                const { openRegisterProductModalRequest, clear } = this.props;
                openRegisterProductModalRequest({barcode: data.barcode});
                clear();
            }}
        >
            <Input name="barcode" inputLabel="CÓDIGO DE BARRAS" />

            <ButtonContained style={styles.selectorButton} type="submit" loading={false} > VERIFICAR CÓDIGO DE BARRAS </ButtonContained>
        </FormHolder>
        </>
        )
    }

}

const styles = StyleSheet.create({
    selectorButton: {
        display: "flex",
        flexWrap: "wrap",
        borderColor: "#a10013",
        borderWidth: 2,
        marginLeft: 50,
        marginRight: 50
    }
  });

export default ManualRegister;