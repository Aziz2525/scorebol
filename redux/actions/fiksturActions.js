import axios from "axios";

import {
    ALL_FIKSTURE_SUCCESS,
    ALL_FIKSTURE_FAIL,
    CLEAR_ERROR
} from '../contants/fiksturConstants'

//Get All rooms 

export const getFikstur = async (dispatch) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        dispatch({
            type: ALL_FIKSTURE_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ALL_FIKSTURE_FAIL,
            payload: "error.response.data.message"
        })
    }
}

// Clear Errors

export const clearErrors = () => async(dispatch) =>{
    dispatch({
        type:CLEAR_ERROR
    })
}