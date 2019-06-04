import axios from 'axios';
import * as config from '../constans/config';
export const callAPI = async (endpoint, method = "GET", data, type) => {
    let dataAPI = null;
    try{
        dataAPI = await axios({
            method,
            url: `${config.Url}/${endpoint}`,
            data,
            headers: {
              'content-type': type || 'application/json',
            }
        });
    }catch (e) {
        console.log(e);
        dataAPI = e.response
    }finally {
        return dataAPI;
    }
  }