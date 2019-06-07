import axios from 'axios';
import * as config from '../constans/config';
export const callAPI = async (endpoint, method = "GET", data) => {
    let dataAPI = null;
    console.log("dataAPI",data);
    try{
        dataAPI = await axios({
            method,
            url: `${config.Url}/${endpoint}`,
            data
        });
        console.log(dataAPI)
    }catch (e) {
        console.log("error",e);
        dataAPI = e.response
    }finally {
        return dataAPI;
    }
  }