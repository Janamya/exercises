describe.skip('Feedback Form', () => {
    it('Should submiut feedback form with all the values', async () => {
        //Define values for the form input
        //Click on feedback button
        //Fill feedback form
        //Submit the form
        //Verify correct URL - this will be assertion (that we are succesfully redirected to that URL)

        const name = 'Lamija'
        const email = 'test@test.com'
        const subject = 'subject'
        const message = 'My very short message for the feedback test'

        await browser.url('http://zero.webappsecurity.com/index.html')
        const feedback = $('#feedback')
        await feedback.waitForDisplayed()
        await feedback.click()

        //OR
        // await browser.waitAndClick(feedback)

        //fill feedback form
        await $('.row').waitForDisplayed
        await $('input[id="name"]').setValue(name)
        await $('#email').setValue(email)
        await $('#subject').setValue(subject)
        await $('#comment').setValue(message)

        await $('input[value="Send Message"]').click()

        //Verify correct URL
        await expect(browser).toHaveUrlContaining('sendFeedback.html')


    })
})