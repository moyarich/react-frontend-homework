# Rocketmiles - React Technical Assesment

## Instructions:

See also: instructions.pdf

## Development Frontend server

Run `npm start` for a dev server. Navigate to `http://localhost:1234`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

#### Run a individual unit tests

npm run test src/components/Filters/Filters.spec.js

npm run test src/components/Hotel/Hotel.spec.js

npm run test src/components/HotelCard/HotelCard.spec.js

npm run test src/components/App/App.spec.js

npm run test src/services/hotel-result/hotel-result.spec.js

#### Show console.log output while testing

npm run test src/components/Filters/Filters.spec.js --silent=false
npm run test src/components/Hotel/Hotel.spec.js --silent=false

## Development Backend API server

We've packaged a very simple backend for you in docker to serve up the API for your development. You can find it in [backend-server](./backend-server).

Requires:
Java 11

#### To Run backend API using gradle

```bash
./gradlew clean bootRun
```

#### To Run backend API using Docker

- Install [docker](https://docs.docker.com/docker-for-mac/install/)
- `./boot`

on windows use the sh command to run the boot file
`sh boot`

#### Instructions:

[Checkout instructions.pdf](instructions.pdf)

Give the user the ability to filter the results by hotel name and sort the list by price.

- [x] Add at least 2 components in the application, right now everything lives at the root.
- [x] Implement the ability to filter the result set by hotel name
- [x] Implement the ability to sort the result set by price in ascending order.

Handle all cases where the application might fail or produce no results to the user gracefully.

- [ ] Hotel name is not found in the list
- [x] No data is returned from the REST endpoint
- [ ] Add additional unit tests for core functionality.
