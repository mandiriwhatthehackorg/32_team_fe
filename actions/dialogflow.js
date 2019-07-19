export const TYPE_GET_DIALOGFLOW = 'TYPE_GET_DIALOGFLOW';
export const actionGetDialogflow = value => {
    return { type: TYPE_GET_DIALOGFLOW, payload: { value } };
};

export const TYPE_SET_DIALOGFLOW = 'TYPE_SET_DIALOGFLOW';
export const actionSetDialogflow = value => {
    return { type: TYPE_SET_DIALOGFLOW, payload: { value } };
};
