import * as types from '../constans/action-type';
let initdata = {
    films : []
}

const myReducer = (state = initdata, action) => {
    switch (action.type) {
        
        case types.GET_FACULTY:
            //console.log(action.faculties);
            return {
                ...state,
                films : [...action.faculties]
            };
        default:
            return initdata;
    }
}

export default myReducer;