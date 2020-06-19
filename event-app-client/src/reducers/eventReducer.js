import {
	SEND_EVENT_DATA,
	SEND_EVENT_DATA_SUCCESS,
	SEND_EVENT_DATA_FAILED,
} from '../actions/eventActions';

const initialState = {
	eventData: {},
	sendingEventData: false,
	sendingEventDataFailed: false,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SEND_EVENT_DATA:
			return {
				...initialState,
				eventData: action.payload,
				sendingEventData: true,
			}

		case SEND_EVENT_DATA_SUCCESS:
			return {
				...initialState,
				sendingEventData: false,
			}

		case SEND_EVENT_DATA_FAILED:
			return {
				...initialState,
				sendingEventData: false,
				sendingEventDataFailed: true,
			}

		default:
			return state;
	}
}

