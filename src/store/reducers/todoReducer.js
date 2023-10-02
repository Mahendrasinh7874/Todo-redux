const initialstate = {
    data: [],
}

export const todoReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;

            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: id,
                        data: data,
                    }
                ]
            }

        case "DELETE_TODO":
            const data1 = state.data.filter((e) => e.id != action.id);

            return {
                ...state,
                data: data1
            }

        case "UPDATE_TODO":
            const { Uid, Udata } = action.payload;
            const updatedDataArray = state.data.map((todo) => {
                console.log({ todo });
                console.log(todo.id === Uid);
                if (todo.id === Uid) {
                    return {
                        id: Uid,
                        data: Udata,
                    };
                }
                return todo;
            });

        
            return {
                ...state,
                data: updatedDataArray,
            };
        default:
            return state
    }
}