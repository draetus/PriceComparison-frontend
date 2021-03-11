function clearStringOnlyNumbers(value) {
    return String(value).replace(/\D/g, "");
}

export default {
    clearStringOnlyNumbers
}