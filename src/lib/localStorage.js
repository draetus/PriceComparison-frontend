import AsyncStorage from '@react-native-community/async-storage';

async function setItem(storageKey, value) {
  try {
    const jsonValue = JSON.stringify(value);

    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // TODO tratamento de erro, se necessário
  }
}

async function getItem(storageKey) {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // TODO tratamento de erro, se necessário
  }
}

async function removeItem(storageKey) {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (e) {
    // TODO tratamento de erro, se necessário
  }
}

export default {setItem, getItem, removeItem};
