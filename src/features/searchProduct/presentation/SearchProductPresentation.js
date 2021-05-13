import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import GetLocation from 'react-native-get-location';
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
                GetLocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 15000,
                  })
                  .then(location => {
                    openSearchProductModalRequest({
                        lat: location.latitude,
                        lon: location.longitude,
                        barcode: data.barcode
                    });
                  })
                  .catch(error => {
                      const { code, message } = error;
                      console.warn(code, message);
                  })
            }}
            >

            <Input name="barcode" inputLabel="CÓDIGO DE BARRAS" />

            <ButtonContained style={styles.submitButton} type="submit"> PESQUISAR </ButtonContained>
        </FormHolder>
        </>
        )
    }

}

const styles = StyleSheet.create({
    submitButton: {
        display: "flex",
        flexWrap: "wrap",
        borderColor: "#a10013",
        borderWidth: 2,
        marginLeft: 50,
        marginRight: 50
    }
  });

export default SearchProductPresentation;