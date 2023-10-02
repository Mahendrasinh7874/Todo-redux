import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./index"

export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data,

        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id,
    }
}


export const updateTodo = (updatedId, updatedData) => {
    return {
        type: UPDATE_TODO,
        payload: {
            Uid: updatedId,
            Udata: updatedData,
        },
    };
};