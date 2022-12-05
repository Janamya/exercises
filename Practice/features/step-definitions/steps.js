const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/LoginPage');


Given(/^I am on the login page$/, async () => {
    await LoginPage.visit()
});

When(/^I login with ([^"]*) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I should see the Events Website$/, async () => {
    await LoginPage.assertLogin()
});

