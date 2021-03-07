import { actionType } from './actionType';

export const moveExactlyToPage = page => (
    {
        type: actionType.MOVE_EXACTLY_TO_PAGE,
        payload: {
            page,
        }
    }
)

export const changeSearchingValue = value => (
    {
        type: actionType.CHANGE_SEARCHING_VALUE,
        payload: {
            value
        }
    }
)

export const editStudent = modifiedStudent => (
    {
        type: actionType.MODIFY_STUDENT.SAVE,
        payload: {
            modifiedStudent
        }
    }
)


export const saveStudent = newStudent => (
    {
        type: actionType.ADD_STUDENT.SAVE,
        payload: {
            newStudent
        }
    }
)







