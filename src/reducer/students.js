import studentData  from "../studentData";
import { actionType } from '../action/actionType';

const getStudentList = () => {
    const localList = localStorage.getItem('updatedList');
    if (localList) return JSON.parse(localList);
    else return studentData;
}

const initialState = {
    studentisModified: {
        id: '',
        name: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
        dayAdmission: '',
        img: ''
    },
    studentList : getStudentList(),
    totalStudent: getStudentList().length
    
}

export const students = (state = initialState, action) => {
    switch(action.type) {
        
        case actionType.MODIFY_STUDENT.EDITING_IMG: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    img: action.payload.urlImg
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_NAME: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    name: action.payload.name
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_PHONENUMBER: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    phoneNumber: action.payload.phoneNumber
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_BIRTHDAY: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    birthday: action.payload.birthday
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_DAYADMISSION: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    dayAdmission: action.payload.dayAdmission
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_GENDER: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    gender: action.payload.gender
                }
            }
        }
        case actionType.MODIFY_STUDENT.PASSING_ID: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    id: action.payload.id
                }
            }
        }
        case actionType.MODIFY_STUDENT.SAVE: {
            return {
                ...state,
                studentList: action.payload.newStudentList
            }
        }
        
        case actionType.ADD_STUDENT.SAVE: {
            return {
                ...state,
                studentList: action.payload.newStudentList
            }
        }
        default: return state;
    }
}

