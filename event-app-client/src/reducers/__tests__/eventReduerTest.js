import eventReducer from '../eventReducer';
import { FAKE_EVENT_FORM_DATA } from "../../EventForm/__tests__/eventFormUtilsTest";
import {
	SEND_EVENT_DATA,
	SEND_EVENT_DATA_SUCCESS,
	SEND_EVENT_DATA_FAILED,
} from '../../actions/eventActions';

const initialState = {
	eventData: {},
	sendingEventData: false,
	sendingEventDataFailed: false,
}

const sendEventDataState = {
	eventData: {
		...FAKE_EVENT_FORM_DATA,
	},
	sendingEventData: true,
	sendingEventDataFailed: false,
}

describe('event form reducers', () => {
	test('should return initial state', () => {
		expect(eventReducer(initialState, {})).toEqual(initialState)
	});

	test('should handle SEND_EVENT_DATA action type and return proper state', () => {
		const action = { type: 'SEND_EVENT_DATA', payload: { ...FAKE_EVENT_FORM_DATA }}

		expect(eventReducer(initialState, action)).toEqual(sendEventDataState)
	});

	test('should handle SEND_EVENT_DATA_SUCCESS action type and return proper state', () => {
		const action = { type: 'SEND_EVENT_DATA_SUCCESS'};

		expect(eventReducer(initialState, action)).toEqual(initialState)
	});

	test('should handle SEND_EVENT_DATA_FAILED action type and return proper state', () => {
		const action = { type: 'SEND_EVENT_DATA_FAILED'};

		expect(eventReducer(initialState, action)).toEqual({
			...initialState,
			sendingEventDataFailed: true,
		})
	});
})