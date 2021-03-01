// import Mask from './inputMasks';

// function removeMask(value) {
//   return value ? `${value}`.replace(/[^\d]/g, '') : value;
// }

const isCPF = cpf => {
  if (!cpf) {
    return {isValid: false, errorMessage: 'Insira um número de CPF'};
  }

  let clearCpf = '';
  let errorMessage = 'CPF inválido';
  if (cpf) {
    clearCpf = cpf.replace(/[^\d]/g, '');
  } else {
    return {isValid: false, errorMessage: 'Insira um número de CPF'};
  }

  let sum = 0;
  let rest;
  if (
    clearCpf.length !== 11 ||
    clearCpf === '00000000000' ||
    clearCpf === '11111111111' ||
    clearCpf === '22222222222' ||
    clearCpf === '33333333333' ||
    clearCpf === '44444444444' ||
    clearCpf === '55555555555' ||
    clearCpf === '66666666666' ||
    clearCpf === '77777777777' ||
    clearCpf === '88888888888' ||
    clearCpf === '99999999999'
  ) {
    return {isValid: false, errorMessage};
  }

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(clearCpf.substring(i - 1, i), 10) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(clearCpf.substring(9, 10), 10)) {
    return {isValid: false, errorMessage};
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += parseInt(clearCpf.substring(i - 1, i), 10) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(clearCpf.substring(10, 11), 10)) {
    return {isValid: false, errorMessage};
  }

  return {isValid: true, errorMessage};
};

// const isCNPJ = cnpj => {
//   let clearCnpj = '';
//   let errorMessage = 'CNPJ inválido';
//   if (cnpj) {
//     clearCnpj = cnpj.replace(/[^\d]/g, '');
//   } else {
//     return {isValid: false, errorMessage: 'Insira um número de CNPJ'};
//   }

//   if (clearCnpj === '') {
//     return {isValid: false, errorMessage: 'Insira um número de CNPJ'};
//   }

//   if (clearCnpj.length !== 14) {
//     return {isValid: false, errorMessage};
//   }

//   if (
//     clearCnpj === '00000000000000' ||
//     clearCnpj === '11111111111111' ||
//     clearCnpj === '22222222222222' ||
//     clearCnpj === '33333333333333' ||
//     clearCnpj === '44444444444444' ||
//     clearCnpj === '55555555555555' ||
//     clearCnpj === '66666666666666' ||
//     clearCnpj === '77777777777777' ||
//     clearCnpj === '88888888888888' ||
//     clearCnpj === '99999999999999'
//   ) {
//     return {isValid: false, errorMessage};
//   }

//   let size = clearCnpj.length - 2;
//   let numbers = clearCnpj.substring(0, size);
//   const digits = clearCnpj.substring(size);

//   let sum = 0;
//   let position = size - 7;

//   for (let i = size; i >= 1; i--) {
//     sum += parseInt(numbers.charAt(size - i), 10) * position--;
//     if (position < 2) {
//       position = 9;
//     }
//   }

//   let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
//   if (result !== parseInt(digits.charAt(0), 10)) {
//     return {isValid: false, errorMessage};
//   }

//   size += 1;
//   numbers = clearCnpj.substring(0, size);
//   sum = 0;
//   position = size - 7;
//   for (let i = size; i >= 1; i--) {
//     sum += parseInt(numbers.charAt(size - i), 10) * position--;
//     if (position < 2) {
//       position = 9;
//     }
//   }

//   result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
//   if (result !== parseInt(digits.charAt(1), 10)) {
//     return {isValid: false, errorMessage};
//   }

//   return {isValid: true, errorMessage};
// };

// function isDDD(ddd) {
//   errorMessage = 'DDD inválido';
//   if (!ddd) {
//     return {isValid: false, errorMessage: 'Insira um DDD'};
//   }
//   return ddd.length === 2
//     ? {isValid: true, errorMessage}
//     : {isValid: false, errorMessage};
// }
// const isTEL = tel => {
//   let errorMessage = 'Número de telefone inválido';
//   if (!tel) {
//     return {isValid: false, errorMessage: 'Insira um número de telefone'};
//   }
//   const withoutMask = removeMask(tel);
//   if (withoutMask) {
//     if (withoutMask.length === 8 || withoutMask.length === 9) {
//       return {isValid: true, errorMessage};
//     }
//   }
//   return {isValid: false, errorMessage};
// };

// const isCellphone = cellphone => {
//   let errorMessage = 'Número de celular inválido';
//   if (!cellphone) {
//     return {isValid: false, errorMessage: 'Insira um número de celular'};
//   }
//   const withoutMask = removeMask(cellphone);
//   if (withoutMask) {
//     if (withoutMask.length === 9) {
//       return {isValid: true, errorMessage};
//     }
//   }
//   return {isValid: false, errorMessage};
// };

// // const isDATE = (date, minDate, maxDate) => {
// //   let errorMessage = 'Data inválida';
// //   if (!date) {
// //     return {isValid: false, errorMessage: 'Insira uma data'};
// //   }

// //   const withoutMask = removeMask(date);
// //   if (withoutMask && withoutMask.length !== 8) {
// //     return {isValid: false, errorMessage};
// //   }
// //   const splits = [
// //     Number(withoutMask.substring(0, 2)),
// //     Number(withoutMask.substring(2, 4)),
// //     Number(withoutMask.substring(4)),
// //   ];
// //   if (
// //     Number(splits[1]) > 12 ||
// //     Number(splits[1]) < 1 ||
// //     Number(splits[0]) < 1 ||
// //     Number(splits[0]) > 31
// //   ) {
// //     return {isValid: false, errorMessage};
// //   }

// //   const dateToCheckStart = Dates.createStartDate(date);
// //   if (minDate instanceof Date) {
// //     if (
// //       minDate.getFullYear() > dateToCheckStart.getFullYear() ||
// //       (minDate.getFullYear() === dateToCheckStart.getFullYear() &&
// //         minDate.getMonth() > dateToCheckStart.getMonth()) ||
// //       (minDate.getFullYear() === dateToCheckStart.getFullYear() &&
// //         minDate.getMonth() === dateToCheckStart.getMonth() &&
// //         minDate.getDate() > dateToCheckStart.getDate())
// //     ) {
// //       return {
// //         isValid: false,
// //         errorMessage: `A data não pode ser inferior a ${Dates.transformDateToDayMonthYear(
// //           minDate,
// //         )}`,
// //       };
// //     }
// //   }
// //   const dateToCheckEnd = Dates.createEndDate(date);
// //   if (maxDate instanceof Date) {
// //     if (
// //       maxDate.getFullYear() < dateToCheckEnd.getFullYear() ||
// //       (maxDate.getFullYear() === dateToCheckEnd.getFullYear() &&
// //         maxDate.getMonth() < dateToCheckEnd.getMonth() - 1) ||
// //       (maxDate.getFullYear() === dateToCheckEnd.getFullYear() &&
// //         maxDate.getMonth() === dateToCheckEnd.getMonth() - 1 &&
// //         maxDate.getDate() < dateToCheckEnd.getDate())
// //     ) {
// //       return {
// //         isValid: false,
// //         errorMessage: `A data não pode ser posterior a ${Dates.transformDateToDayMonthYear(
// //           maxDate,
// //         )}`,
// //       };
// //     }
// //   }

// //   dateToCheckStart.setDate(0);

// //   if (
// //     Number(splits[0]) <= 0 ||
// //     Number(splits[0]) > dateToCheckStart.getDate()
// //   ) {
// //     return {isValid: false, errorMessage};
// //   }
// //   return {isValid: true, errorMessage};
// // };

// // const isDATEMonthYear = (date, minDate, maxDate) => {
// //   let errorMessage = 'Data inválida';
// //   if (!date) {
// //     return {isValid: false, errorMessage: 'Insira uma data'};
// //   }

// //   const withoutMask = removeMask(date);
// //   if (withoutMask && withoutMask.length !== 6) {
// //     return {isValid: false, errorMessage};
// //   }
// //   const splits = [
// //     Number(withoutMask.substring(0, 2)),
// //     Number(withoutMask.substring(2)),
// //   ];
// //   const month = Number(splits[0]);
// //   const year = Number(splits[1]);
// //   if (month > 12 || month < 1) {
// //     return {isValid: false, errorMessage};
// //   }

// //   if (minDate instanceof Date) {
// //     if (
// //       minDate.getFullYear() > year ||
// //       (minDate.getFullYear() === year && minDate.getMonth() > month)
// //     ) {
// //       return {
// //         isValid: false,
// //         errorMessage: `A data não pode ser inferior a ${Dates.transformDateToFullMonthYear(
// //           minDate,
// //         )}`,
// //       };
// //     }
// //   }

// //   if (maxDate instanceof Date) {
// //     if (
// //       maxDate.getFullYear() < year ||
// //       (maxDate.getFullYear() === year && maxDate.getMonth() < month - 1)
// //     ) {
// //       return {
// //         isValid: false,
// //         errorMessage: `A data não pode ser posterior a ${Mask.transformDateToFullMonthYear(
// //           maxDate,
// //         )}`,
// //       };
// //     }
// //   }
// //   return {isValid: true, errorMessage};
// // };

const isEMAIL = (email) => {
  let errorMessage = 'E-mail inválido';
  if (!email) {
    return {isValid: false, errorMessage: 'Insira um email'};
  }
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return {isValid: true, errorMessage};
  }
  return {isValid: false, errorMessage};
};

// const isCEP = cep => {
//   let errorMessage = 'CEP inválido';
//   if (!cep) {
//     return {isValid: false, errorMessage: 'Insira um número de CEP'};
//   }
//   const withoutMask = removeMask(cep);
//   if (withoutMask) {
//     if (withoutMask.length === 8) {
//       return {isValid: true, errorMessage};
//     }
//   }
//   return {isValid: false, errorMessage};
// };

// function hasSpecialCharacters(password) {
//   return /\W|_/g.test(password) ? 1 : 0;
// }

// function hasUppercase(password) {
//   return /[A-ZÇ]/g.test(password) ? 1 : 0;
// }

// function hasNumber(password) {
//   return /\d/g.test(password) ? 1 : 0;
// }

// function hasLowercase(password) {
//   return /[a-zç]/g.test(password) ? 1 : 0;
// }

// function numbericPasswordLength(value) {
//   let errorMessage = 'A nova senha precisa conter 8 caracteres.';
//   if (value && value.length === 8) {
//     return {isValid: true, errorMessage};
//   }
//   return {isValid: false, errorMessage};
// }

// function validPassword(password) {
//   if (!password) {
//     return {isValid: false, errorMessage: 'Senha inválida'};
//   }
//   if (password.length < 8) {
//     return {
//       isValid: false,
//       errorMessage: 'Senha deve ter no Mínimo 8 caracteres',
//     };
//   }

//   const {length} = password;
//   for (let i = 0; i < length - 3; i++) {
//     const testedChar = password.charCodeAt(i);
//     if (
//       testedChar === password.charCodeAt(i + 1) - 1 &&
//       testedChar === password.charCodeAt(i + 2) - 2 &&
//       testedChar === password.charCodeAt(i + 3) - 3
//     ) {
//       return {
//         isValid: false,
//         errorMessage:
//           'Senha não pode conter sequências de 4 caracteres ou mais. ex: 1234/abcd',
//       };
//     } else if (
//       testedChar === password.charCodeAt(i + 1) + 1 &&
//       testedChar === password.charCodeAt(i + 2) + 2 &&
//       testedChar === password.charCodeAt(i + 3) + 3
//     ) {
//       return {
//         isValid: false,
//         errorMessage:
//           'Senha não pode conter sequências de 4 caracteres ou mais. ex: 4321/dcba',
//       };
//     }
//   }

//   if (
//     hasSpecialCharacters(password) +
//       hasLowercase(password) +
//       hasNumber(password) +
//       hasUppercase(password) <
//     3
//   ) {
//     return {
//       isValid: false,
//       errorMessage:
//         'Senha inválida. A senha deve conter pelo menos 3 das regras a seguir: Letras maiúsculas, minúsculas, números e caracteres especiais',
//     };
//   }

//   return {isValid: true, errorMessage: 'Senha válida'};
// }

// const isCPFCNPJValid = cpfcnpj => {
//   const value = Mask.removeMaskCPFCNPJ(cpfcnpj);
//   if (!value) {
//     return {isValid: false, errorMessage: 'Insira um número de CPF ou CNPJ'};
//   }
//   if (value.length > 11) {
//     return isCNPJ(value);
//   } else {
//     return isCPF(value);
//   }
// };

export default {
    isCPF,
  //   isCNPJ,
  //   isDDD,
  //   isTEL,
  //   isCellphone,
  isEMAIL,
  //   isCEP,
  //   validPassword,
  //   numbericPasswordLength,
  //   isCPFCNPJValid,
};
