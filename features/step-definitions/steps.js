const { Given, When, Then } = require('@wdio/cucumber-framework')
//moze i given, when, then
const LoginPage = require('../pageobjects/LoginPage')
const HomePage = require('../pageobjects/HomePage')
const FeedbackPage = require('../pageobjects/FeedbackPage')

Given(/^I am on the login page$/, async () => {
  await LoginPage.visit()
})

Given(/^I am on the home page$/, async () => {
  await HomePage.visit()
})

Given(/^I am on the feedback page$/, async () => {
  await FeedbackPage.visit()
})

When(/^I submit the feedback form$/, async () => {
  await FeedbackPage.submitFeedback()
})

Then(/^I should see feedback results$/, async () => {
  const selector = await $('h3')
  await expect(selector).toBeDisplayed()
})

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password)
})

When(/^I login with invalid credentials$/, async () => {
  await LoginPage.login('invalid-username', 'invalid-password')
})

Then(/^I should see error message$/, async () => {
  await LoginPage.assertErrorMessage()
})

When(/^I search for "([^"]*)"$/, async (text) => {
  await HomePage.searchFor(text)
})

Then(/^I should see results$/, async () => {
  const selector = await $('h2')
  await expect(selector).toBeDisplayed()
})