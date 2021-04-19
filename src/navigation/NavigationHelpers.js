import NavigationService from './NavigationService';

export function menuNavigation(link, params) {
  NavigationService.navigate(link, params);
}

const navigation = {
  toLogin: (params) => menuNavigation('Login', params),
  toHome: (params) => menuNavigation('Home', params),
  toRegisterProduct: (params) => menuNavigation('RegisterProduct', params),
  toSearchProduct: (params) => menuNavigation('SearchProduct', params),
  toShoppingList: (params) => menuNavigation('ShoppingList', params),
};

export default navigation;

export const toggleDrawer = () => NavigationService.toggleDrawer();

export const goBack = () => {
  NavigationService.goBack();
};

export const popToTop = () => {
  NavigationService.popToTop();
};
