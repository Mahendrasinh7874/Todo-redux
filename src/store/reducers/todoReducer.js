const initialstate = {
    data:[],
}

export const todoReducer = (state= initialstate ,action) => {
    switch(action.type){
        case "ADD_TODO" : 
        const {id,data} = action.payload;

        return {
            ...state,
            data:[
                   ...state.data,
                {
                    id:id,
                    data:data,
                }
            ]
        }

        case  "DELETE_TODO" : 
        const data1 = state.data.filter((e) => e.id != action.id);

        return {
            ...state,
            data: data1
        }

        case "UPDATE_TODO" :
            


        default:
            return state
    }
}