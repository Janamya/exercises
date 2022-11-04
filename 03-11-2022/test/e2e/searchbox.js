describe.skip('Search feature', () => {
    it('Should search for values using keyboard press', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')

        await $('#searchTerm').waitForDisplayed()
       
        await $('#searchTerm').setValue('bank')
        //submit the search with enter keyboard
        await browser.keys('Enter')

        const results = await $('h2')
        await expect(results).toBeExisting()
        await expect(results).toHaveTextContaining('Search Results') //two assertions
})
}) 