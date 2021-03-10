import { actionType } from "../action/actionType";

export const students = (state = { studentList: [] }, action) => {
  switch (action.type) {
    case actionType.UPDATELIST: {
      return {
        ...state,
        studentList: action.payload.updateList
      }
    }
    
    default: return state;
  }
};
