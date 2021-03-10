import { actionType } from './actionType';

export const changeCurrentPage = page => (
    {
        type: actionType.CHANGE_CURRENT_PAGE,
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

export const changeLoadingStatus = status => (
    {
        type: actionType.CHANGE_LOADING_STATUS_OF_STUDENTLIST,
        payload: {
            status
        }
    }
)

export const changeErrorStatus = status => (
    {
        type: actionType.CHANGE_ERROR_STATUS_OF_STUDENTLIST,
        payload: {
            status
        }
    }
)

export const updateStudentList = updateList => (
    {
        type: actionType.UPDATELIST,
        payload: {
            updateList
        }
    }
)

export const reloadPage = () => (
    {
        type: actionType.RELOAD_PAGE,
        payload: {}
    }
)







