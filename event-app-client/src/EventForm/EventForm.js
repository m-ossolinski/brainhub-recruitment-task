import React, { useState } from 'react';
import { connect } from 'react-redux';
import { eventFormConfiguration, validateFormValues } from './eventFormUtils';
import {sendEventData} from "../actions/eventActions";

export const EventFormComponent = (props) => {
	const { eventFormState, dispatchSendEventData } = props;

	const [eventFormValues, setEventFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});
	const [eventFormErrors, setEventFormErrors] = useState({})

	const handleInputChange = e => {
		const { name, value } = e.target;

		setEventFormValues({
			...eventFormValues,
			[name]: value,
		})
	}

	const handleFormSubmit = (ev) => {
		if (ev) {
			ev.preventDefault();
		}

		setEventFormErrors(validateFormValues(eventFormValues));

		if (Object.keys(eventFormErrors).length === 0) {
			dispatchSendEventData();
		}
	}

	return (
		<div>
			{eventFormConfiguration.map(({ name, id, type}) => (
				<>
					<input
						name={name}
						id={id}
						key={id}
						type={type}
						value={eventFormValues[name]}
						onChange={handleInputChange}
					/>
					<span>{eventFormErrors[name]}</span>
				</>
			))}
			<button onClick={handleFormSubmit}>Click2</button>
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