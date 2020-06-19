import React from 'react';
import { connect } from 'react-redux';
import {sendEventData} from "../actions/eventActions";

export const EventFormComponent = (props) => {
	const { eventFormState, dispatchSendEventData } = props;

	console.log(eventFormState);

	return (
		<div>
			<button onClick={() => dispatchSendEventData()}>Click2</button>
		</div>
	)
}

const mapStateToProps = state => ({
	eventFormState: state.event,
})

const mapDispatchToProps = dispatch => ({
	dispatchSendEventData: () => dispatch(sendEventData()),
});

export const EventForm = connect(mapStateToProps, mapDispatchToProps)(EventFormComponent);