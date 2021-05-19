import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonContained, Typography } from '../../../components';
import { Navigation } from "../../../navigation";
import {Theme} from '../../../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class HomePresentation extends Component {

    MenuButton = ({onPress, iconName, disabled, children}) => {
        return (
            <ButtonContained disabled ={disabled} style={styles.homeButton} onPress={onPress}>
                    <View style={styles.homeButtonChildrenContainer}>
                        <MaterialCommunityIcons
                            style={styles.homeButtonChildren}
                            color={Theme.light.colors.buttonText}
                            name={iconName}
                            size={70}
                        />
                        <Typography style={styles.homeButtonChildren} >{children}</Typography>
                     </View>
            </ButtonContained>
        )
    }

    render() {
        const {globalLogout} = this.props;
        return (
        <>
        <View style={styles.homeGroup}>
            <View style={styles.homeSubGroup} >
                <this.MenuButton
                    onPress={Navigation.toShoppingList}
                    iconName={"basket"}
                 >
                     LISTAS DE COMPRAS
                 </this.MenuButton>
                 <this.MenuButton
                    onPress={Navigation.toRegisterProduct}
                    iconName={"registered-trademark"}
                 >
                     REGISTRAR PRODUTO
                 </this.MenuButton>
            </View>
            <View style={styles.homeSubGroup} >

                <this.MenuButton
                    onPress={Navigation.toSearchProduct}
                    iconName={"magnify"}
                 >
                     PESQUISAR PRODUTO
                 </this.MenuButton>
                 <this.MenuButton
                    onPress={Navigation.toShoppingCart}
                    iconName={"cart-outline"}
                 >
                     CARRINHO DE COMPRAS
                 </this.MenuButton>
            </View>
            <View style={styles.homeSubGroup} >

                <this.MenuButton
                    onPress={() => {}}
                    iconName={"account-hard-hat"}
                    disabled={true}
                 >
                     EM PROGRESSO
                 </this.MenuButton>

                 <this.MenuButton
                    onPress={() => {}}
                    iconName={"account-hard-hat"}
                    disabled={true}
                 >
                     EM PROGRESSO
                 </this.MenuButton>
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
    homeButtonChildrenContainer: {
        alignItems: "center"
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