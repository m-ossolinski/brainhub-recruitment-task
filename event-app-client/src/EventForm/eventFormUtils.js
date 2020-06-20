export const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const eventFormConfiguration = [{
	name: 'firstName',
	id: 'firstName',
	type: 'text',
}, {
	name: 'lastName',
	id: 'lastName',
	type: 'text',
}, {
	name: 'email',
	id: 'email',
	type: 'email',
}];

const EVENT_FORM_ERROR_MESSAGES = {
	firstName: 'First name is required!',
	lastName: 'Last name is required!',
	emailRequired: 'Email is required!',
	email: 'Valid email is required!',
	eventDate: 'Event date must be selected!',
}

export const validateFormValues = (values) => {
	let errors = {};
	const {
		firstName,
		lastName,
		email,
		eventDate,
	} = values;

	console.log(values);

	if (!firstName) {
		errors.firstName = EVENT_FORM_ERROR_MESSAGES.firstName;
	}

	if (!lastName) {
		errors.lastName = EVENT_FORM_ERROR_MESSAGES.lastName;
	}

	if (!email) {
		errors.email = EVENT_FORM_ERROR_MESSAGES.emailRequired;
	}

	if (email && !EMAIL_PATTERN.test(email)) {
		errors.email = EVENT_FORM_ERROR_MESSAGES.email;
	}

	if (!eventDate) {
		errors.eventDate = EVENT_FORM_ERROR_MESSAGES.eventDate;
	}

	return errors;
}