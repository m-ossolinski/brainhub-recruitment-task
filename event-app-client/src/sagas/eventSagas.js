import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SEND_EVENT_DATA, sendEventDataSuccess,
	sendEventDataFailed } from "../actions/eventActions";

export function* sendEventDataSaga(eventFormData) {
	try {
		console.log(eventFormData, 'eventFormData')
		yield put(sendEventDataSuccess());
	} catch (err) {
		yield put(sendEventDataFailed(err));
	}
}

export function* watchForSendEventDataSaga() {
	yield takeLatest(
		SEND_EVENT_DATA,
		sendEventDataSaga
	);
}

export default function* rootSaga() {
	yield all([
		watchForSendEventDataSaga(),
	])
}