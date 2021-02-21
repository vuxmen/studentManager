import { actionType } from './actionType';

export const moveToPreViousPage = () => (
    {
        type: actionType.MOVE_TO_PREVIOUSPAGE,
        payload: {}
    }
)

export const moveToNextPage = () => (
    {
        type: actionType.MOVE_TO_NEXTPAGE,
        payload: {}
    }
)

export const moveExactlyToPage = page => (
    {
        type: actionType.MOVE_EXACTLY_TO_PAGE,
        payload: {
            page,
        }
    }
)

export const addNewStudent = (newStudent) => (
    {
        type: actionType.ADD_NEW_STUDENT,
        payload: {
            newStudent,
        }
    }
)

export const searchStudent = (name, phoneNumber) => (
    {
        type: actionType.SEARCH_STUDENT,
        payload: {
            name,
            phoneNumber
        }
    }
)