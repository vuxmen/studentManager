import { actionType } from "../action/actionType";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  isLoading: false,
  isError: false,
  studentList: [],
  totalItem: 0
};

export const students = (state = initialState, action) => {
  switch (action.type) {
    case actionType.MODIFY_STUDENT.SAVE: {
      const modifiedStudent = action.payload.modifiedStudent;

      const newStudentList = state.studentList.map((s) =>
        s.id === modifiedStudent.id ? modifiedStudent : s
      );
      localStorage.setItem("updatedList", JSON.stringify(newStudentList));
      return {
        ...state,
        studentList: newStudentList,
      };
    }
    case actionType.ADD_STUDENT.SAVE: {
      const newStudent = { ...action.payload.newStudent, id: uuidv4() };

      const newStudentList = [...state.studentList, newStudent];
      localStorage.setItem("updatedList", JSON.stringify(newStudentList));
      return {
        ...state,
        studentList: newStudentList,
      };
    }
    case actionType.START_REFRESH_STUDENT_LIST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        studentList: [],
      };
    }
    case actionType.REFRESH_STUDENT_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        studentList: action.payload.students,
        totalItem: action.payload.totalItem
      };
    }
    case actionType.REFRESH_STUDENT_LIST_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
