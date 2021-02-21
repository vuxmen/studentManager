import { actionType } from '../action/actionType';

export const userInteract = (state = {
    searching: false,
    creating: false,
    modifying: false
} , action) => {
    switch(action.type) {
        case actionType.ADDING_STUDENT: {
            return {
                ...state,
                creating: action.payload
            }
        }
        case actionType.SEARCHING_STUDENT: {
            return {
                ...state,
                searching: action.payload,
            }
        }
        case actionType.MODIFYING_STUDENT: {
            return {
                ...state,
                modifying: action.payload,
            }
        }
     
    }
}