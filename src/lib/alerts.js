import {customModal, errorModal} from '../modals/utils';

// const customModal = {
//     setRef: setCustomModalRef,
//     setInfos: setCustomModalInfos,
//     close: closeCustomModal,
//   };

function defaultAlerts(texts, title = 'Aviso') {
  customModal.setInfos(title, texts, {
    onPress: () => customModal.close(),
    label: 'OK',
  });
}

function notImplemented() {
  defaultAlerts(['Não implementado']);
}

function withoutServices() {
  defaultAlerts(['Serviço não existente para a realização desta operação']);
}

function withoutServicesContinue() {
  defaultAlerts([
    'Serviço não existente para esta operação, a operação irá continuar para fins de demonstração',
  ]);
}

function warning(texts, title = 'Aviso') {
  defaultAlerts(title, texts);
}

function defaultErrors(title, texts) {
  errorModal.setInfos(title, texts, {
    onPress: () => errorModal.close(),
    label: 'OK',
  });
}

function error(texts, title = 'Erro') {
  defaultErrors(title, texts);
}

function defaultSuccess(title, texts) {
  errorModal.setInfos(title, texts, {
    onPress: () => customModal.close(),
    label: 'OK',
  });
}

function success(texts, title = 'Sucesso') {
  defaultSuccess(title, texts);
}

function responseError(response) {
  //   let message = 'Servidor indisponível. Confira sua conexão com a internet.';

  //   if (response) {
  //     if (
  //       response.data &&
  //       response.data.errors &&
  //       response.data.errors[0].message
  //     ) {
  //       const messages = response.data.errors.map((error) => error.message);
  //       return alertError(messages, theme);
  //     }

  //     if (response.status >= 500 || !response.status) {
  //       message =
  //         'Algo deu errado ao contactar o servidor, tente novamente mais tarde.';
  //     }

  //     if (response.status === 403) {
  //       navigateToLogin();
  //       return alertError(
  //         'Sua sessão expirou. Logue novamente para continuar utilizando nossos serviços.',
  //         theme,
  //       );
  //     } else if (response.status === 401) {
  //       return alertError('Usuário e/ou senha incorretos.', theme);
  //     } else if (response.data) {
  //       message = JSON.stringify(response.data);
  //       if (response.data.errors) {
  //         message = response.data.errors[0].message;
  //       } else if (response.data.mensagens) {
  //         if (response.data.mensagens.retDsErro) {
  //           message = response.data.mensagens.retDsErro;
  //         }
  //       } else if (response.data.message) {
  //         message = response.data.message;
  //       } else if (response.data[0]) {
  //         if (response.data[0].dsMSG) {
  //           message = response.data[0].dsMSG;
  //         } else if (response.data[0].ds_MSG) {
  //           message = response.data[0].ds_MSG;
  //         }
  //       } else if (response.data.globalMessage) {
  //         message = response.data.globalMessage;
  //       }
  //     }
  //   }
  defaultErrors([JSON.stringify(response)]);
}

export default {
  error,
  notImplemented,
  responseError,
  success,
  warning,
  withoutServices,
  withoutServicesContinue,
};
