import { actionType } from "./actionType";

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_FOODS:
            return {
                ...state,
                users: action.payload,
            }

        default:
            return state;
    }
}

export default usersReducer;