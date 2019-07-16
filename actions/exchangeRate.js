export const TYPE_GET_LATEST_RATE = 'TYPE_GET_LATEST_RATE';
export const actionGetLatestRate = value => {
    return { type: TYPE_GET_LATEST_RATE, payload: { value } };
};

export const TYPE_SET_LATEST_RATE = 'TYPE_SET_LATEST_RATE';
export const actionSetLatestRate = value => {
    return { type: TYPE_SET_LATEST_RATE, payload: { value } };
};

export const TYPE_SET_AMOUNT = 'TYPE_SET_AMOUNT';
export const actionSetAmount = value => {
    return { type: TYPE_SET_AMOUNT, payload: { value } };
};

export const TYPE_ADD_TO_CURRENCIES = 'TYPE_ADD_TO_CURRENCIES';
export const actionAddToCurrencies = value => {
    return { type: TYPE_ADD_TO_CURRENCIES, payload: { value } };
};

export const TYPE_REMOVE_TO_CURRENCIES = 'TYPE_REMOVE_TO_CURRENCIES';
export const actionRemoveToCurrency = value => {
    return { type: TYPE_REMOVE_TO_CURRENCIES, payload: { value } };
};