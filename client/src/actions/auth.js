import * as api from '../api'
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async(dispatch) => {
    try {
        // User Log In 
        history.push("/")
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        // User Sign up Action 
        history.push("/")
    } catch (error) {
        console.log(error);
    }
}