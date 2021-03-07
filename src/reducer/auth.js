import { actionType } from '../action/actionType';

export const auth = (state = {
    searching: false
}, action) => {
    switch(action.type) {
        case actionType.SEARCH_STUDENT: {
            return {
                ...state,
                searching: action.payload.value
            }
        }
        default: return state;
    }
}