import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import TestRenderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import { EventFormComponent } from "../EventForm";
import pretty from "pretty";
import DatePicker from "react-datepicker/es";

jest.mock('react-datepicker', () => <DatePicker />)
const dispatchMock = jest.fn();

let appContainer = null;
beforeEach(() => {
	appContainer = document.createElement("div");
	document.body.appendChild(appContainer);
});

afterEach(() => {
	unmountComponentAtNode(appContainer);
	appContainer.remove();
	appContainer = null;
});

const MOCKED_PROPS = {
	eventFormState: {
		sendingEventDataFailed: false,
		sendingEventData: false,
	},
	dispatch: dispatchMock,
}

describe('EventFormComponent', () => {
	test('should render and generate component tree properly', () => {
		act(() => {
			render(<EventFormComponent {...MOCKED_PROPS} />, appContainer)
		});

		expect(pretty(appContainer.innerHTML)).toMatchSnapshot();
	});
})

// this code also render component tree and create snapshot
// but it has been commented due to DatePicker errors

// describe('EventFormComponent snapshots', () => {
// 	test('should generate component with error about sending form fail', () => {
// 		const eventForm = TestRenderer.create(
// 			<EventFormComponent {...MOCKED_PROPS} />
// 		).toTree();
// 	});
//
// });