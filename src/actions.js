export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const LIKE_USER = "LIKE_USER";
export const DELETE_USER = "DELETE_USER"

export const requestApiData = () =>({type: REQUEST_API_DATA});
export const receiveApiData = data => ({type: RECEIVE_API_DATA, value: data})