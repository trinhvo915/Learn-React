import * as types from '../constans/action-type';
import * as APIs from './../services/call-api';

export const listFaculty = (faculties)=>{
    return {
        type : types.GET_FACULTY,
        faculties : faculties
    }
}

export const getAPIFilms = async (dispatch)=>{
    let faculties = null;
    try {
        faculties = await APIs.callAPI('api/faculty','GET',null);
        console.log(faculties)
    } catch (error) {
        console.log(error);
        faculties = [];
    }
    return dispatch(listFaculty(faculties.data));
}

export const postSucces = (faculty) =>{
    return {
        type : types.ADD_SUCCES,
        faculty : faculty
    }
}

export const postFail = (message) =>{
    return {
        type : types.ADD_FAIL,
        message : message
    }
}

export const postFacultyAPI = async (name, dispatch) =>{
    let faculty = null;
    // console.log("name",name);
    // const formData = new FormData();
    // formData.append('name', name);
    const message = 'Add Fail';
    try {
        const type = 'application/json';
        faculty = await APIs.callAPI('api/faculty','POST', name);
        
    } catch (error) {
        console.log(error);
        faculty = null;
    }

    if(faculty){
        return dispatch(postSucces(faculty));
    }else {
        return dispatch(postFail(message));
    }
}