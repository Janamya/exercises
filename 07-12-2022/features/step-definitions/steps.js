const { Given, When, Then, defineStep } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/LoginPage');

defineStep(/^I am on the login page$/, async () => {
    await LoginPage.visit()
});

defineStep(/^I login with email and password$/, async () => {
    await LoginPage.login()
});

defineStep(/^I should see Trello homepage$/, async () => {
    await LoginPage.assertLogin()
});

