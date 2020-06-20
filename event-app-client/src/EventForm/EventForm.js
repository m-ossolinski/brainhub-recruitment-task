import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker/es';
import { eventFormConfiguration, validateFormValues } from './eventFormUtils';
import { sendEventData } from '../actions/eventActions';
import './eventForm.scss';

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
		if (ev) {
			ev.preventDefault();
		}

		setEventFormErrors(validateFormValues({ ...eventFormValues, eventDate }));
	}

	useEffect(() => {
		if (Object.keys(eventFormErrors).length === 0) {
			dispatch(sendEventData({ ...eventFormValues, eventDate }));
		}
	}, [eventFormValues])

	return (
		<div className="event-form">

			{eventFormConfiguration.map(({ name, id, type, placeholder }) => (
				<div key={id}>
					<input
						name={name}
						id={id}
						type={type}
						value={eventFormValues[name]}
						onChange={handleInputChange}
						className="event-form__input"
						placeholder={placeholder}
					/>
					<span className="event-form__input-error-msg">
						{eventFormErrors[name]}
					</span>
				</div>
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
				className="event-form__submit-btn"
			>
				{sendingEventData ? 'Sending...' : 'Send'}
			</button>

			{sendingEventDataFailed ? 'An error occurred while submitting the form!' : null}

		</div>
	)
}

const mapStateToProps = state => ({
	eventFormState: state.event,
})

export const EventForm = connect(mapStateToProps)(EventFormComponent);