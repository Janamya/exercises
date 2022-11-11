const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/LoginPage');
const HomePage = require('../pageobjects/HomePage');
const FeedbackPage = require('../pageobjects/FeedbackPage')



Given(/^I am on the login page$/, async () => {
    await LoginPage.visit()
});

Given(/^I am on the home page$/, async () => {
    await HomePage.visit()
});

Given(/^I am on the feedback page$/, async () => {
    await FeedbackPage.visit();
    await FeedbackPage.waitForSeconds(2)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I login with invalid credentials$/, async () => {
    await LoginPage.login("invalid-username", "invalid-password")
});

When(/^I search for "([^"]*)"$/, async (text) => {
    await HomePage.searchValue(text)
});

When(/^I submit the feedback form$/, async () => {
    await FeedbackPage.submitFeedback()
    await FeedbackPage.waitForSeconds(3)

});

Then(/^I should see error message$/, async () => {
    await LoginPage.assertErrorMessage()
    
});

Then(/^I should see results$/, async () => {
    await HomePage.assertResults()
    
});
Then(/^I should see feedback results$/, async () => {
    await FeedbackPage.assertFeedbackIsSent()
    await FeedbackPage.waitForSeconds()
});
