import * as actionTypes from "../actions/index";

export const addTodo = (data) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),
            data: data,

        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        id,
    }
}


export const updateTodo = (updatedId, updatedData) => {
    return {
        type: actionTypes.UPDATE_TODO,
        payload: {
            Uid: updatedId,
            Udata: updatedData,
        },
    };
};