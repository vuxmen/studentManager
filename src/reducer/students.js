import { studentData } from "../studentData";
import { actionType } from '../action/actionType';

export const students = (state = {
    newStudent: {
        id: '',
        name: '',
        age: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
        dayAdmission: '',
        img: ''
    }, 
    studentisModified: {
        id: '',
        name: '',
        age: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
        dayAdmission: '',
        img: ''
    },
    studentList : studentData;
}, action) => {
    switch(action.type) {
        case (actionType.ADD_NEW_STUDENT): {
            studentData.push(state.newStudent);
            return {
                ...state,
                studentList: ...studentData
            }
        }
        case (actionType.SEARCH_STUDENT): {
            return {
                ...state,
                studentList: studentData.filter(student =>
                    student.name === action.payload.name || 
                    student.phoneNumber === action.payload.phoneNumber);
            }
        }
        case (actionType.MODIFY_STUDENT): {
            return {
                ...state,
                studentList: studentData.map(student =>
                    studentData.find(student => student.id === state.studentisModified.id) || student);
            }
        }

        default: return state;
    }
}
