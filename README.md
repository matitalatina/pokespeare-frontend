# PokéSpeare Frontend

## Getting started

See the available scripts below.

## Notes

- All the business logic is tested using [TDD](https://en.wikipedia.org/wiki/Test-driven_development).
- I created the components using [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/).
- I used [InversifyJS](https://github.com/inversify/InversifyJS) to achieve [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control), this simplified testing and help to build decoupled classes.
- I used only functional components. To manage the state I used [hooks](https://en.reactjs.org/docs/hooks-intro.html).
- In `.env` you can change the backend URL.
- This repo has Continuous Deployment enabled. Every push on master goes straight to [https://pokespeare.mattianatali.dev/](https://pokespeare.mattianatali.dev/). I used [netlify](https://www.netlify.com/) to do that.
- If you want to see the full picture, please see the [docker compose repository](https://github.com/matitalatina/pokespeare-docker).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
