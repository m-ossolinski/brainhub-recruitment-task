import React, {useEffect, useState, useRef} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker/es';
import { eventFormConfiguration, validateFormValues, initialStateValue} from './eventFormUtils';
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

	const [eventFormValues, setEventFormValues] = useState(initialStateValue);
	const [eventFormErrors, setEventFormErrors] = useState({});
	const [eventDate, setEventDate] = useState(new Date());
	const [formStatus, setFormStatus] = useState(false);
	const firstRender = useRef(true);
console.log(eventDate);
console.log(typeof eventDate);
	const handleInputChange = e => {
		setFormStatus(false);
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
		if (firstRender.current) {
			firstRender.current = false
		} else if (Object.keys(eventFormErrors).length === 0) {
			dispatch(sendEventData({ ...eventFormValues, eventDate }));
			setFormStatus(true);
			setEventFormValues(initialStateValue);
		}
	}, [eventFormErrors])

	return (
		<div className="event-form">

			{eventFormConfiguration.map(({ name, id, type, placeholder }) => (
				<div key={id} className="event-form__element">
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
			{formStatus ? 'The form has been sent successfully' : null}
		</div>
	)
}

const mapStateToProps = state => ({
	eventFormState: state.event,
})

export const EventForm = connect(mapStateToProps)(EventFormComponent);