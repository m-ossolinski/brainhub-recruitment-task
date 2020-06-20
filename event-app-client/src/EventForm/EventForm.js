import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { eventFormConfiguration, validateFormValues } from './eventFormUtils';
import {sendEventData} from '../actions/eventActions';

export const EventFormComponent = (props) => {
	const {
		eventFormState: {
			sendingEventData,
			sendingEventDataFailed,
		},
		dispatch,
	} = props;

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
		ev.preventDefault();

		setEventFormErrors(validateFormValues(eventFormValues));
	}

	useEffect(() => {
		if (Object.keys(eventFormErrors).length === 0) {
			dispatch(sendEventData());
		}
	}, [eventFormErrors])

	return (
		<div>
			{eventFormConfiguration.map(({ name, id, type }) => (
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
			<button
				onClick={handleFormSubmit}
				disabled={sendingEventData}
			>
				Click2
			</button>
			{sendingEventDataFailed ? 'An error occurred while submitting the form!' : null}
		</div>
	)
}

const mapStateToProps = state => ({
	eventFormState: state.event,
})

export const EventForm = connect(mapStateToProps)(EventFormComponent);