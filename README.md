# Airtable E2E with Cypress

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/endqwerty/airtable-e2e/End-to-end%20tests)](https://github.com/endqwerty/airtable-e2e)


# Overview


## Exercise Instructions

* For this exercise, you will design a test that will successfully create an account and take you through the onboarding process, either as a standalone user or an invited user
* Verify that you have created a new base
* Share the base with a collaborator by using “Invite by email” flow
* Set the permission level as “Editor”
* Verify that the newly collaborated user email is displayed under “Base Collaborators”
* Verify that the collaborator has “Editor” role displayed under “Base Collaborators”


## Tools Used

* Cypress
* Testing-library
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


## Run Tests

`npm run test`


## CI/CD

Github action:

* set to Node 16.x
* set to NPM 6.x
* executes and stores results in junit format
