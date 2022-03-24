import {
    ALL_FIKSTURE_SUCCESS,
    ALL_FIKSTURE_FAIL,
    CLEAR_ERROR
} from '../contants/fiksturConstants'

// All fikstur reducer

export const allFiksturReducer = (state={ fikstur:[]},action) =>{
    switch(action.type){
        case ALL_FIKSTURE_SUCCESS:
            return {
                fikstur: action.payload
            }
        case ALL_FIKSTURE_FAIL:
            return {
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error:null
            }
        default:
            return state;
    }
}