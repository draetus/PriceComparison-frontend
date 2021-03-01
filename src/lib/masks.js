function clearStringOnlyNumbers(value) {
  return String(value).replace(/\D/g, '');
}

function inputMaskCPF(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 11) {
    mask = mask.substring(0, 11);
  }

  if (mask.length <= 11) {
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }
  return mask;
}

function inputMaskCNPJ(value) {
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 14) {
    mask = mask.substring(0, 14);
  }
  if (mask.length <= 14) {
    mask = mask.replace(/(\d{2})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1/$2');
    mask = mask.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
  return mask;
}

function inputMaskCPFCNPJ(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 14) {
    mask = mask.substring(0, 14);
  } else if (mask.length <= 11) {
    mask = mask.substring(0, 11);
  }

  if (mask.length <= 11) {
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else if (mask.length <= 14) {
    mask = mask.replace(/(\d{2})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1/$2');
    mask = mask.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
  return mask;
}

function inputMaskForIssuingAgencyUF(inputValue) {
  if (!inputValue) {
    return '';
  }

  let mask = inputValue.replace(/[^A-Za-z]/g, '');

  if (mask.length > 5) {
    mask = mask.substring(0, 5);
  }
  mask = mask.replace(/(\w{3})(\w{2})/, '$1/$2');

  return mask;
}

function inputMaskTEL(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 9) {
    mask = mask.substring(0, 9);
  }

  if (mask.length <= 8) {
    mask = mask.replace(/(\d{4})(\d)/, '$1-$2');
  } else if (mask.length <= 9) {
    mask = mask.replace(/(\d{1})(\d)/, '$1 $2');
    mask = mask.replace(/(\d{4})(\d{4})$/, '$1-$2');
  }
  return mask;
}

function inputMaskTELWithDDD(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 15) {
    mask = mask.substring(0, 15);
  }

  mask = mask.replace(/(\d{2})(\d)/, '($1) $2');
  mask = mask.replace(/(\d)(\d{4})$/, '$1-$2');

  return mask;
}

function inputMaskTELNineNumber(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 9) {
    mask = mask.substring(0, 9);
  }

  mask = mask.replace(/(\d{1})(\d)/, '$1 $2');
  mask = mask.replace(/(\d{4})(\d{4})$/, '$1-$2');

  return mask;
}

function inputMaskTextAndNumber(value) {
  if (!value) {
    return value;
  }
  const mask = value.replace(
    /[^a-zA-Z0-9çÇàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s]/gi,
    '',
  );

  return mask;
}

function inputMaskDATE(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 8) {
    mask = mask.substring(0, 8);
  }

  if (mask.length <= 8) {
    mask = mask.replace(/(\d{2})(\d)/, '$1/$2');
    mask = mask.replace(/(\d{2})(\d{4})$/, '$1/$2');
  }
  return mask;
}

function inputMaskDATEMonthYear(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 6) {
    mask = mask.substring(0, 6);
  }

  if (mask.length <= 6) {
    mask = mask.replace(/(\d{2})(\d)/, '$1/$2');
    mask = mask.replace(/(\d{2})(\d{4})$/, '$1/$2');
  }
  return mask;
}

function inputMaskCEP(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 8) {
    mask = mask.substring(0, 8);
  }
  if (mask.length === 8) {
    mask = mask.replace(/(\d{5})(\d{3})$/, '$1-$2');
  }
  return mask;
}

function taxMask(value) {
  if (value) {
    const stringOnlyNumbers = `${Number(value).toFixed(2)}`.replace(/\D/g, '');
    if (!stringOnlyNumbers) {
      return '0,00%';
    }

    const {length} = stringOnlyNumbers;
    if (length === 1) {
      return value >= 0
        ? `0,0${stringOnlyNumbers}%`
        : `-0,0${stringOnlyNumbers}%`;
    }
    if (length === 2) {
      return value >= 0
        ? `0,${stringOnlyNumbers}%`
        : `-0,${stringOnlyNumbers}%`;
    }
    let resultMask = '';

    for (let i = length - 1; i >= 0; i -= 1) {
      if (i === length - 2) {
        resultMask = `,${stringOnlyNumbers[i]}${resultMask}`;
      } else if (i < length - 5 && (i - length - 3) % 3 === 0) {
        resultMask = `${stringOnlyNumbers[i]}.${resultMask}`;
      } else {
        resultMask = `${stringOnlyNumbers[i]}${resultMask}`;
      }
    }

    return value >= 0 ? `${resultMask}%` : `-${resultMask}%`;
  }
  return '0,00%';
}

function convertMoneyMask(value) {
  return convertNumberMask(value, true, true);
}

function formatSmallNumberValues(value, isMoney, floatNumber, negative) {
  const mask = String(
    Number(
      String(value).replace(/\./g, '').replace('R$ ', '').replace(',', ''),
    ),
  );

  if (!mask) {
    return isMoney
      ? `R$ ${negative}0,00`
      : floatNumber
      ? `${negative}0,00`
      : `${negative}0`;
  }
  if (mask.length === 1) {
    return isMoney
      ? `R$ ${negative}0,0` + mask
      : floatNumber
      ? `${negative}0,0${mask}`
      : negative + mask;
  } else if (mask.length === 2) {
    return isMoney
      ? `R$ ${negative}0,` + mask
      : floatNumber
      ? `${negative}0,${mask}`
      : negative + mask;
  } else {
    return mask;
  }
}

function convertNumberMask(value, isMoney, floatNumber = true) {
  const negative = value < 0 ? '-' : '';
  if (value) {
    let mask = `${value}`.replace(/\D/g, '');
    if (!mask) {
      return isMoney
        ? `R$ ${negative}0,00`
        : floatNumber
        ? negative + '0,00'
        : negative + '0';
    }
    mask = formatSmallNumberValues(mask, isMoney, floatNumber, negative);

    if (isMoney && mask.includes('R$ ')) {
      return mask;
    }
    const contador = floatNumber ? (value.length - 5) / 3 : value.length / 3;

    if (floatNumber) {
      mask = mask.replace(/^([.\d]+)(\d{2})$/, '$1,$2');
    }
    for (let i = 0; i < contador; i += 1) {
      mask = mask.replace(/(\d+)(\d{3})([.,\d]+)?$/, '$1.$2$3');
    }
    mask = isMoney ? `R$ ${negative}${mask}` : negative + mask;
    return mask;
  }

  return isMoney
    ? `R$ ${negative}0,00`
    : floatNumber
    ? negative + '0,00'
    : negative + '0';
}
// Fim máscaras valores monetários

// Remove máscara de valores numéricos com decimais.
function removeNumberMask(value) {
  const stringValue = `${value}`.replace(/\D/g, '');
  if (stringValue.length === 1) {
    return parseFloat((value < 0 ? '-' : '') + `0.0${stringValue}`);
  }
  if (stringValue.length === 2) {
    return parseFloat((value < 0 ? '-' : '') + `0.${stringValue}`);
  }

  return parseFloat(stringValue.replace(/(\d+)(\d{2})$/, '$1.$2'));
}

function capitalizeAll(textValue) {
  return textValue
    .split(' ')
    .map((splitText) => {
      return (
        splitText.charAt(0).toUpperCase() + splitText.slice(1).toLowerCase()
      );
    })
    .join(' ');
}

function noCapitalize(word) {
  const prepos = [
    'da',
    'do',
    'das',
    'dos',
    'a',
    'e',
    'é',
    'à',
    'á',
    'o',
    'que',
    'se',
    'de',
    'para',
    'por',
  ];

  return prepos.includes(word.toLowerCase());
}

function getWordsBySeparator(text, separator) {
  return text.split(separator);
}

function capitalizeWord(word, restToLowerCase) {
  if (!noCapitalize(word)) {
    return `${word.charAt(0).toUpperCase()}${
      restToLowerCase ? word.slice(1).toLowerCase() : word.slice(1)
    }`;
  } else {
    return word.toLowerCase();
  }
}

function capitalizeText(splitedText, separators, restToLowerCase) {
  if (splitedText.length > 1) {
    return splitedText
      .map((word) => {
        return capitalizeWord(word, restToLowerCase);
      })
      .join(separators);
  } else {
    return capitalizeWord(splitedText.join(''), restToLowerCase);
  }
}

function capitalizeBySeparators(text, separators) {
  let resultText = text;
  for (let i = 0; i < separators.length; i++) {
    resultText = capitalizeText(
      getWordsBySeparator(resultText, separators[i]),
      separators[i],
      i === 0,
    );
  }

  return resultText;
}

export default {
  inputMaskCPF,
  inputMaskCNPJ,
  inputMaskCPFCNPJ,
  inputMaskTEL,
  inputMaskTELWithDDD,
  inputMaskTELNineNumber,
  inputMaskTextAndNumber,
  inputMaskDATE,
  inputMaskDATEMonthYear,
  inputMaskCEP,
  inputMaskForIssuingAgencyUF,
  capitalizeAll,
  clearStringOnlyNumbers,
  removeNumberMask,
  convertMoneyMask,
  taxMask,
  capitalizeBySeparators,
};
