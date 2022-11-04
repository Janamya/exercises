describe.skip('Login flow', () => {
    before(async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
    })
    it('Should not login with invalid username and password', async () => {
        //Load homepage
        //Click on sign in button
        //fill the form
        //submit the form
        //verify error message

        //For sign in we can use wait and click customm command on config, becacuse the home page needs tp be displayed before we click on the sign in form
        //await browser.waitAndClick('#signin_button')
        
        await $('#signin_button').waitForDisplayed()
        await $('#signin_button').click()
        

        await $('#login_form').waitForExist()
        await $('#user_login').setValue('test')
        await $('#user_password').setValue('test')
        await $('input[type="submit"]').click()
        //verify error message
        const errorMessage = await $('.alert-error')
        await expect(errorMessage).toHaveTextContaining('are wrong') 
      })

      //Click on reset button
      it('Reset account password', async () => {
        const email = 'test@test.com'
        await browser.waitAndClick('*=Forgot')
        
        //Fill the form
      await $('#send_password_form').waitForDisplayed()
        await $('#user_email').setValue(email)
        //Submit the form
        await $('input[type="submit"]').click()
        
    //Verify the message
        const message = await $('.span6')
        await expect(message).toHaveTextContaining(`email: ${email}`)
      })

      })

