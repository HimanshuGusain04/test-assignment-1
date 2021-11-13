// import {delay} from 'redux-saga'
import {takeLatest, put, call} from 'redux-saga/effects';
import { receiveApiData, REQUEST_API_DATA } from '../actions';
import {getUsers} from '../api'

function* getApiData(){
    try {
        const data = yield call(getUsers);
        yield put(receiveApiData(data));
    } catch (error) {
        console.log(error)
    }
}

export function* mySaga(){
    yield takeLatest(REQUEST_API_DATA, getApiData);
}