# To the developer who is going to review this app

Choices I made while preparing the solution:

- Minimum styling: the focus was on showing the code and the requirements
- When parsing the log file, I assumed a 100% match for a path uniqueness ("/path" and "path" as two different paths)
- The requirements for the table were minimum (always sorted by the second column), therefore I created the table fully myself. If I had to build a complex table, I would use a ready-made library, like `react-table`.

If I had some more time, I think would:

- Improve UX (loading, success, error boundaries)
- Cover the user flows with a bunch of E2E tests
- Add some styles to that 90s-looking table grid. :))

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test -- --coverage`

Launches the test runner in the interactive watch mode with the coverage report.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
