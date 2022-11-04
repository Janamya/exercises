describe('Product Order', () => {
        before(async () => {
            //here goes login - custom command
            await browser.url('https://www.saucedemo.com/')
            await browser.sauceLogin()
        })
        after(async () => {
            //Here goes logut custom command
            await browser.sauceLogout()
        })
        it('Verify that the user can complete product order', async () => {
         await $('#inventory_container').waitForDisplayed
         await $('[data-test="add-to-cart-sauce-labs-backpack"]').click()
         await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

         //Proced to the shopping cart - assert shopping cart
         await $('.shopping_cart_link').click()
         await $('.cart_list').waitForDisplayed()
         await $('[data-test="checkout"]').click()

         //Fill the form and verify that exists
         const firstName = "Lamija"
         const lastName = "Mya"
         const postalCode = '112233'

         await $('.checkout_info').waitForDisplayed
         await $('[data-test="firstName"]').setValue(firstName)
         await $('[data-test="lastName"]').setValue(lastName)
         await $('[data-test="postalCode"]').setValue(postalCode)

         //Submit the form
         await $('[data-test="continue"]').click()

         //Assert shopping cart
         await $('.cart_list').waitForDisplayed
         await $('.summary_info').waitForDisplayed()

         //Submmit the order
         await $('[data-test="finish"]').click()

         //Assert that we have placed the order - final assertion
         const message = $('.complete-header')
         await expect(message).toHaveTextContaining('THANK YOU FOR YOUR ORDER')


        //Open browser
        //Fill out the login form
        //Click on login button
        //Add items to the cart
        //Assert shopping card
        //Fill the custom information
        //Asser the final order

})
})