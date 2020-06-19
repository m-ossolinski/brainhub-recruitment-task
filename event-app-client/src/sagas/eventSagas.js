import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SEND_EVENT_DATA } from "../actions/eventActions";

export function* sendEventDataSaga() {
	yield console.log('sendeventdatasaga')
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