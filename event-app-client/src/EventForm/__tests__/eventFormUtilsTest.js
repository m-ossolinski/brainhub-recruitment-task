import { validateFormValues, EVENT_FORM_ERROR_MESSAGES } from '../eventFormUtils';

const mockDate = new Date();

export const FAKE_EVENT_FORM_DATA = {
	firstName: 'Bob',
	lastName: 'Bobby',
	email: 'bob@bo.bb',
	eventDate: mockDate,
}

describe('eventFormUtils', () => {

	describe('validateFormValues', () => {
		test('it should contain validateFormValues method', () => {
			expect(() => validateFormValues({})).toBeInstanceOf(Function);
		});

		test('it should return empty errors object which means that the passed data is correct', () => {
			expect(validateFormValues(FAKE_EVENT_FORM_DATA)).toEqual({});
		});

		test('it should return a proper error message when first name is empty', () => {
			expect(validateFormValues({
				...FAKE_EVENT_FORM_DATA,
				firstName: '',
			}))
				.toEqual({
					firstName: EVENT_FORM_ERROR_MESSAGES.firstName,
				});
		});

		test('it should return a proper error message when email is empty', () => {
			expect(validateFormValues({
				...FAKE_EVENT_FORM_DATA,
				email: '',
			}))
				.toEqual({
					email: EVENT_FORM_ERROR_MESSAGES.emailRequired,
				});
		});

		test('it should return a proper error message when email is invalid', () => {
			expect(validateFormValues({
				...FAKE_EVENT_FORM_DATA,
				email: 'bob$bo.bb',
			}))
				.toEqual({
					email: EVENT_FORM_ERROR_MESSAGES.email,
				});
		});
	});
});