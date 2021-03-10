import { actionType } from '../action/actionType';
import { appConstants } from '../constants';

export const auth = (state = {
    loading: true,
    error: false,
    reloadTime: 0,
    searchPackage: {
        search: '',
        page: 1,
        pageSize: appConstants.pageSize
    }
}, action) => {
    switch(action.type) {
        case actionType.CHANGE_LOADING_STATUS_OF_STUDENTLIST: {
            return {
                ...state,
                loading: action.payload.status
            }
        }

        case actionType.CHANGE_ERROR_STATUS_OF_STUDENTLIST: {
            return {
                ...state,
                error: action.payload.status
            }
        }

        case actionType.CHANGE_SEARCHING_VALUE: {
            return {
                ...state,
                searchPackage: {
                    ...state.searchPackage,
                    search: action.payload.value
                }
            }
        }

        case actionType.CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                searchPackage: {
                    ...state.searchPackage,
                    page: action.payload.page
                }
            }
        }

        case actionType.RELOAD_PAGE: {
            return {
                ...state,
                reloadTime: state.reloadTime + 1
            }
        }

        default: return state;
    }
}