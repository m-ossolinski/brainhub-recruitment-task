import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker/es';
import { eventFormConfiguration, validateFormValues } from './eventFormUtils';
import { sendEventData } from '../actions/eventActions';

export const EventFormComponent = (props) => {
	const {
		eventFormState: {
			sendingEventData,
			sendingEventDataFailed,
		},
		dispatch,
	} = props;

	const [eventFormValues, setEventFormValues] = useState({
		firstName: 'testowy',
		lastName: 'request',
		email: 'testowy@ma.il',
	});
	const [eventFormErrors, setEventFormErrors] = useState({});
	const [eventDate, setEventDate] = useState(new Date());

	const handleInputChange = e => {
		const { name, value } = e.target;

		setEventFormValues({
			...eventFormValues,
			[name]: value,
		})
	}

	const handleFormSubmit = (ev) => {
		ev.preventDefault();

		setEventFormErrors(validateFormValues({ ...eventFormValues, eventDate }));
	}

	useEffect(() => {
		if (Object.keys(eventFormErrors).length === 0) {
			dispatch(sendEventData({ ...eventFormValues, eventDate }));
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

			<div>
				<DatePicker
					selected={eventDate}
					onChange={date => setEventDate(date)}
					dateFormat="dd/MM/yyyy"
				/>
				{eventFormErrors.eventDate ? 'Event date is required' : null}
			</div>

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