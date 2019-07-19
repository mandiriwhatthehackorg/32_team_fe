export const TYPE_GET_CHATS = 'TYPE_GET_CHATS';
export const actionGetChats = value => {
    return { type: TYPE_GET_CHATS, payload: { value } };
};

export const TYPE_SET_CHATS = 'TYPE_SET_CHATS';
export const actionSetChats = value => {
    return { type: TYPE_SET_CHATS, payload: { value } };
};
