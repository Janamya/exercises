const { Given, When, Then} = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/LoginPage');
const HomePage = require('../pageobjects/HomePage');

Given(/^I am on the login page$/, async () => {
    await LoginPage.visit()
});
When(/^I login with email and "([^"]*)"$/, async (password) => {
    await LoginPage.login(password)
});

When(/^I login with invalid email and password$/, async () => {
    await LoginPage.invalidLogin()
});

Then(/^I should see error message$/, async () => {
    await LoginPage.errorMessage()
});
Then(/^I should see Trello homepage$/, async () => {
    await LoginPage.assertLogin()
});

Given(/^I am on the homepage$/, async () => {
    await HomePage.visit()
});
When(/^I fill the workspace form$/, async () => {
    await HomePage.assertWorkspaceForm()
});
Then(/^I should see workspace board$/, async () => {
    await HomePage.assertWorkspaceCreated()
});