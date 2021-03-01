import {setModalInfos, closeModal} from '../../modal/utils';
import {menuNavigation} from '../../../navigation/NavigationHelpers';

function ConcludedModal(number) {
  return setModalInfos(
    // title
    'Concluído!',
    // content messages
    [
      'Solicitação para desconto de duplicatas realizada com sucesso, sob o número:',
      '\n' + number + '\n',
      'Aguarde a análise e aprovação dos títulos. Em breve retornaremos com instruções para a continuidade da operação.',
    ],
    // button right definitions
    {
      // TODO onPress: () => {menuNavigation('CreditLimit')},
      onPress: () => {
        menuNavigation('ValidateDiscount');
        closeModal();
      },
      label: 'Finalizar',
    },
  );
}

export default ConcludedModal;
