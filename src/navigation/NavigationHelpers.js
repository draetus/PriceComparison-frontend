import NavigationService from './NavigationService';

export function menuNavigation(link, params) {
  NavigationService.navigate(link, params);
}

const navigation = {
  toLogin: (params) => menuNavigation('Login', params),
  toHome: (params) => menuNavigation('Home', params),
};

export default navigation;

export const toggleDrawer = () => NavigationService.toggleDrawer();

export const goBack = () => {
  NavigationService.goBack();
};

export const popToTop = () => {
  NavigationService.popToTop();
};
