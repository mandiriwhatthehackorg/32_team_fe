export const TYPE_GET_USERS = 'TYPE_GET_USERS';
export const actionGetUsers = value => {
    return { type: TYPE_GET_USERS, payload: { value } };
};

export const TYPE_SET_USERS = 'TYPE_SET_USERS';
export const actionSetUsers = value => {
    return { type: TYPE_SET_USERS, payload: { value } };
};
