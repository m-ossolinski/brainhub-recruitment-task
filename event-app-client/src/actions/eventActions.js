export const SEND_EVENT_DATA = 'SEND_EVENT_DATA';
export const SEND_EVENT_DATA_SUCCESS = 'SEND_EVENT_DATA_SUCCESS';
export const SEND_EVENT_DATA_FAILED = 'SEND_EVENT_DATA_FAILED';

export const sendEventData = (eventFormData) => ({
	type: SEND_EVENT_DATA,
	eventFormData,
});

export const sendEventDataSuccess = () => ({
	type: SEND_EVENT_DATA_SUCCESS,
});

export const sendEventDataFailed = (error) => ({
	type: SEND_EVENT_DATA_FAILED,
	error,
})