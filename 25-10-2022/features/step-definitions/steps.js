import { Given, Then, When } from '@wdio/cucumber-framework';

import LoginPage from '../../login';

import ProductsPage from '../../productsPage';


Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^validate that the (.+) page is open$/, async (text) => {
    await ProductsPage.titleCheck(text)
} );

