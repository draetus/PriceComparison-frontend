import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonContained, Typography } from '../../../components';
import { Navigation } from "../../../navigation";
import {Theme} from '../../../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class HomePresentation extends Component {

    render() {
        const {globalLogout} = this.props;
        return (
        <>
        <View style={styles.homeGroup}>
            <View style={styles.homeSubGroup} >
                <ButtonContained style={styles.homeButton} onPress={Navigation.toShoppingList}>
                    <MaterialCommunityIcons
                        style={styles.homeButtonChildren}
                        color={Theme.light.colors.buttonText}
                        name={"basket"}
                        size={70}
                    />
                     {/* <Typography style={styles.homeButtonChildren} >LISTAS DE COMPRAS</Typography> */}
                </ButtonContained>
                <ButtonContained style={styles.homeButton} onPress={Navigation.toRegisterProduct}>
                    <MaterialCommunityIcons
                        style={styles.homeButtonChildren}
                        color={Theme.light.colors.buttonText}
                        name={"registered-trademark"}
                        size={70}
                    />
                     {/* <Typography style={styles.homeButtonChildren} >REGISTRAR PRODUTO</Typography> */}
                </ButtonContained>
            </View>
            <View style={styles.homeSubGroup} >
                <ButtonContained style={styles.homeButton} onPress={Navigation.toSearchProduct}>
                    <MaterialCommunityIcons
                        style={styles.homeButtonChildren}
                        color={Theme.light.colors.buttonText}
                        name={"magnify"}
                        size={70}
                    />
                     {/* <Typography style={styles.homeButtonChildren} >PESQUISAR PRODUTO</Typography> */}
                </ButtonContained>
                <ButtonContained style={styles.homeButton} onPress={Navigation.toShoppingCart}>
                    <MaterialCommunityIcons
                        style={styles.homeButtonChildren}
                        color={Theme.light.colors.buttonText}
                        name={"cart-outline"}
                        size={70}
                    />
                     {/* <Typography style={styles.homeButtonChildren} >CARRINHO DE COMPRAS</Typography> */}
                </ButtonContained>
            </View>
            <View style={styles.homeSubGroup} >
                <ButtonContained disabled={true} style={styles.homeButton} > 
                    <MaterialCommunityIcons
                        style={styles.homeButtonChildren}
                        color={Theme.light.colors.buttonText}
                        name={"account-hard-hat"}
                        size={70}
                    />
                    {/* <Typography style={styles.homeButtonChildren} >EDIÇÃO DE PERFIL - EM BREVE</Typography> */}
                </ButtonContained>
                <ButtonContained disabled={true} style={styles.homeButton} >
                    <MaterialCommunityIcons
                        style={styles.homeButtonChildren}
                        color={Theme.light.colors.buttonText}
                        name={"account-hard-hat"}
                        size={70}
                    />
                    {/* <Typography style={styles.homeButtonChildren} >CONFIGURAÇÕES - EM BREVE</Typography> */}
                </ButtonContained>
            </View>
            <ButtonContained style={styles.exitButton} onPress={globalLogout} >
                    <MaterialCommunityIcons
                        style={styles.homeButtonChildren}
                        color={Theme.light.colors.buttonText}
                        name={"exit-run"}
                        size={70}
                    />
                 {/* <Typography style={styles.homeButtonChildren} >SAIR</Typography> */}
                 </ButtonContained>
        </View>
        </>
        )
    }

}

const styles = StyleSheet.create({
    homeButton: {
      display: "flex",
      flexWrap: "wrap",
      width: "50%",
      height: 150,
      borderColor: "#a10013",
      borderWidth: 2
    },
    homeButtonChildren: {
        alignContent: "center"
    },
    exitButton: {
      display: "flex",
      flexWrap: "wrap",
      height: 150,
      borderColor: "#a10013",
      borderWidth: 2,
    },
    homeGroup: {
        display: "flex",
    },
    homeSubGroup: {
        display: "flex",
        flexDirection: "row"
    }
  });

export default HomePresentation;