# Meraki E2E with Cypress

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/endqwerty/meraki-e2e/End-to-end%20tests)](https://github.com/endqwerty/meraki-e2e)

# Overview

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
