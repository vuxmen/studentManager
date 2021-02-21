import { actionType } from '../action/actionType';
import studentData from '../studentData';

export const pagination = (state = {
    total: calculateTotalPage(),
    currentPage: 1,
    sub: 0,
    studentIndex: [0, 1, 2, 3, 4, 5].filter(index => index < studentData.length),
    pagesNumber: [1, 2, 3, 4, 5]
}, action) => {
    switch(action.type) {
        case actionType.MOVE_TO_NEXTPAGE: {
            if (state.currentPage + 1 <= state.total)
            return {
                ...state,
                currentPage = state.currentPage + 1,
                sub = 1
            }
        } 
        case actionType.MOVE_TO_PREVIOUS_PAGE: {
            if (state.currentPage - 1 >= 0)
            return {
                ...state,
                currentPage = state.currentPage - 1,
                sub = -1
            }
        } 
        case actionType.MOVE_EXACTLY_TO_PAGE: {
            if (action.payload.page <= state.total && action.payload.page !== state.currenPage)
            return {
                ...state,
                currentPage = action.payload.page,
                sub = action.payload.page - state.currentPage
            }
        }
    }
}

const calculateTotalPage = () => {
    const itemPerPage = 6;
    switch(studentData().length % itemPerPage) {
        case 0: {
            return studentData().length/itemPerPage;
        }
        default: 
            return studentData().length/itemPerPage + 1;
        }
    }
}