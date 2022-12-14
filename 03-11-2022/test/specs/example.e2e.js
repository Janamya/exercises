describe.skip('My first test suite', () => {
    it('my first wdio test', async () => {
        let myUrl = 'https://www.example.com'
        await browser.url(myUrl)

        let smallPause = 2000;
        let bigPause = 5000;
        await browser.pause(smallPause);
       
        //Old way - Selenium
       /*  let pageTitle = await browser.getTitle();
        let pageUrl = await browser.getUrl();
        expect(pageTitle).toContain('Example Domain')
        expect(pageUrl).toContain('example.com') */

        //Modern way
        expect(browser).toHaveTitleContaining('Example Domain')
        expect(browser).toHaveUrlContaining('example.com')

        let pageElement = await $('h1')
        await expect(pageElement).toExist()
       /*  await expect(pageElement).notToBeDisplayed() */
        await expect(pageElement).toHaveTextContaining('Example')

    })

    it('Automate Forms & Inputs', async () => {
        await browser.url('https://saucedemo.com')
        let usernameInput = await $('#user-name')
        let passwordInput = await $('#password')
        let loginButton = await $('#login-button')

        await usernameInput.setValue('standard_user')
        await passwordInput.setValue('secret_sauce')
        await loginButton.click()

     //Add value - will not clear the input, only add the texyt
        //Set value - it clears the input ans sets the walue
        //Clear value functions

        let inventoryContainer = await $('#inventory_container')
        await expect(inventoryContainer).toBeDisplayed();
    })

    it("Automate Select & Check boxes", async () =>{
        await browser.url('https://devexpress.github.io/testcafe/example/')

        //we can select from the drop-down menu with selectByVisibleText
        //selectByIndex, selectByAttribute
        let selectbox = await $('#preferred-interface')
        await selectbox.selectByVisibleText('Both')

        let option = await $("option=Both") //ovo option=both je ustvari kao xpath, target elementa
        await expect(option).toBeSelected()

    })

    it('Set Browser Window Size', async () => {
        let width = 800
        let height = 600
        await browser.setWindowSize(width, height)
        await browser.url('https://www.example.com')
        await browser.pause(3000)

        //Dynamic waiting:
        //waitForClickable - za buttons ako je button disabled at the moment, waitForDisplayed,waitForEnabled, waitForExist,waitUntil
        let selector = await $('h1')
        await selector.waitForExist()
        await selector.waitForDisplayed()
    })

    it('Devices Emulation - sizes of devices', async () => {
        
        let mobile = [375, 812]
        let tablet = [1024, 768]
        let desktop = [1650, 1050]
        
        //Mobile Device
        await browser.setWindowSize(mobile[0], mobile[1])
        await browser.url('https://www.example.com')
        await browser.pause(3000)

        //Tablet Device
        await browser.setWindowSize[tablet[0], tablet[1]]
        await browser.url('https://www.example.com')
        await browser.pause(2000)

        //Desktop Device
        await browser.setWindowSize[desktop[0], desktop[1]]
        await browser.url('https://www.example.com')
        await browser.pause(2000)
    })

    it('Screenshots', async () => {
        await browser.url('https://www.example.com')
        await browser.saveScreenshot('my-screenshot.png')

        let title = await $('h1')
        await title.saveScreenshot('title-screenshot.png')

    })

   
})

//visit webdriver.io/docs/selectors - for target selectors



