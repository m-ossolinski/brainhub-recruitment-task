# brainhub-recruitment-task

Application created for the needs of the recruitment task for Brainhub company.
The application is an event form with the help of which data is sent and aggregated in a database.

The data included in the form are validated. Data such as name and surname cannot be sent empty and the email pattern must match.

### frontend

Frontend is built in `react` and has additional libraries such as `redux`, `redux-saga`, `react-datepicker` and `axios`.


### backend

Backend is created with `Node` and `Express` and data it recivies are stored in `mongodb` database with support of `mongoose` ODM.


### quick start

To run the application first we need to clone this repository. 

Navigate to folder and run `npm i` or `npm install` command.

Then navigate to client app and also run `npm i` or `npm install`.

If everything has been installed back to the main folder and run `npm run dev` command.


### tests

Tests have been implemented only on the frontend side because of installing dependencies at backend the frontend tests have stopped working (create-react-app have some problem with installing foreign Jest).

Mocking components such as DatePicker causes errors because the repository doesn't have an environment created using Babel and webpack.
