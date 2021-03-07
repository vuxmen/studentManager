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

export const increasePageNumber = () => (
    {
        type: actionType.INCREASE_PAGENUMBER,
        payload: {}
    }
)

export const decreasePageNumber = () => (
    {
        type: actionType.DECREASE_PAGENUMBER,
        payload: {}
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

export const searchStudent = () => (
    {
        type: actionType.SEARCH_STUDENT,
        payload: {}
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







