import * as types from '../constans/action-type';
import * as APIs from './../services/call-api';

export const listFaculty = (faculties)=>{
    return {
        type : types.GET_FACULTY,
        faculties : faculties
    }
}

export const getAPIFilms = async (dispatch)=>{
    let faculties = [];
    try {
        faculties = await APIs.callAPI('api/faculty','GET',null);
    } catch (error) {
        console.log(error);
        faculties = [];
    }
    return dispatch(listFaculty(faculties.data));
}