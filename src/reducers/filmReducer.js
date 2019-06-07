import * as types from '../constans/action-type';

let initdata = {
    films : [],
    faculty : null,
    message : ''
}

const myReducer = (state = initdata, action) => {
    switch (action.type) {
        case types.GET_FACULTY:
            return {
                ...state,
                films : [...action.faculties]
            };
        case types.ADD_SUCCES :
            return {
                ...state, faculty : action.faculty
            }
        case types.ADD_FAIL :
            return {
                ...state, message : action.message
            }
        default:
            return initdata;
    }
}

export default myReducer;