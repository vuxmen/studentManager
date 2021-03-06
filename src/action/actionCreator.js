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

export const passingID = id => (
    {
        type: actionType.MODIFY_STUDENT.PASSING_ID,
        payload: {
            id
        }
    }
)

export const saveModifiedList = newStudentList => (
    {
        type: actionType.MODIFY_STUDENT.SAVE,
        payload: {
            newStudentList
        }
    }
)


export const saveAddedList = newStudentList => (
    {
        type: actionType.ADD_STUDENT.SAVE,
        payload: {
            newStudentList
        }
    }
)










