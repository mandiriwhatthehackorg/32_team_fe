export const TYPE_FETCH_MANDIRI = 'TYPE_FETCH_MANDIRI';
export const actionGetMandiri = value => {
    return { type: TYPE_FETCH_MANDIRI, payload: { value } };
};

export const TYPE_SET_MANDIRI = 'TYPE_SET_MANDIRI';
export const actionSetMandiri = value => {
    return { type: TYPE_SET_MANDIRI, payload: { value } };
};
