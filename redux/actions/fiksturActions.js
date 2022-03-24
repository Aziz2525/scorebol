import axios from 'axios'

import {
  ALL_FIKSTURE_SUCCESS,
  ALL_FIKSTURE_FAIL,
  CLEAR_ERROR,
} from '../contants/fiksturConstants'
import absoluteUrl from 'next-absolute-url'
//Get All rooms

export const getFikstur = async (store, req) => {
  try {
    const { origin } = absoluteUrl(req)
    const { data } = await axios.get(`${origin}/api/fikstur`)
    store.dispatch({
      type: ALL_FIKSTURE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    store.dispatch({
      type: ALL_FIKSTURE_FAIL,
      payload: 'error.response.data.message',
    })
  }
}

// Clear Errors

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  })
}
