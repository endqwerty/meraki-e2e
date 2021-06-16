# Meraki E2E with Cypress

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/endqwerty/meraki-e2e/End-to-end%20tests)](https://github.com/endqwerty/meraki-e2e)

# Overview

## Task

1. Write a black box test(s) for the web-app or attached app ( runs in a simulator ) and
share the code
2. Think about what framework you would use if you have to do the same test for the
Mobile/Android version of the app?
3. Turnaround time is 2 business days but we don't expect you to spend more than 2 hours
on this

### Choice of testing framework

* The biggest limitation is the 2hr limitaion. I needed a framework I could start and get running instantly without needing to spend time setting up or configuring.
* I have a repo for Cypress testing ready in github with basic CI/CD which helps provide me higher confidence in delivering working tests, so I selected Cypress.
* The notes about mobile testing concern me that Cypress may not be the ideal solution if native mobile testing is a concern. However, given the simplicity of the app, I would say that this specific version of the app can be tested using Cypress and confidently deployed for mobile use. Basic HTML and limited Javascript reduces risk of mobile devices functioning unexpectedly, so the biggest risk is with the UI transforming into something unusable.
### Mobile testing for the app

* This would probably need to be rewritten using Selenium for testing on real devices
* Potentially, the locators used can be consolidated into exportable objects and shared across all testing environments

### Imagine if this was a large app serving 100s of thousands of customers.

* In black-box testing, there are limited areas where the user can influence the app.
  * A critical portion of testing would be in performance testing to ensure the server can handle lots of users at scale
* However, with white-box testing, there are many variables which can be modified to ensure the app works as intended for the end-user
  * Variations in data come from variations in the data sent by the API
  * Guaranteeing that the data is fetched in an efficient manner is critical.
  * The data needs to be parsed and edge cases such as null/empty values accounted for.
  * If the number of devices exceeds payload limits, then lazy loading or other data retrival methods are required.
    * Tests needs to verify the maximum data sets that can be processed by the webpages, specifically the maximum number of devices capable of being processed at the same time.
* Finally, regardless of black or white-box testing, there should be security validations against the endpoints for the API
## Tools Used

* Cypress
* Prettier
* Eslint
* Husky
* Lint-staged

# Instructions

## Requirements

* Node 16.x
* NPM 6.x


## Setup

`npm install`

Create a file called `cypress.env.json` in the project root.

Follow the example in `cypress.env.json.example` and add a json object with a key/value for `MERAKI_API_KEY`

## Run Tests

`npm run test`

note: this will send test information/recordings the cypress dashboard. Disable this by removing the projectId in `cypress.json`


## CI/CD

Github action:

* set to Node 16.x
* set to NPM 6.x
* executes and stores results in junit format
* reports to a private cypress dashboard

## Future Improvements

* verify mouse hover state
* verify that the devices shown matches the list of devices available from the api
* verify that the device data shown fails gracefully if device data is not fetchable
* verify that the device details is for the selected device (same name, IP, etc)
* verify that the device details change over time
* Check network logs for additional testing possiblities
