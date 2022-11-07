describe.skip('Advanced Testing', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/upload')
})
//afterEach - it will run after each test, for example, login after each
    it('File Upload 1', async () => {
        const filePath ='./my-screenshot.png'
              await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
                await browser.pause(3000)
    })

        it('File Upload 2', async () => {
            const filePath ='./my-screenshot.png'
              await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
                await browser.pause(3000)

        })

            it('File Upload 3', async () => {
                const filePath ='./my-screenshot.png'
              await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
                await browser.pause(3000)

    })

    it('Display Title and Url', async () => {
        const results = await browser.getTitleAndUrl()
        console.log('Title = ' + results.title)
        console.log('URL = ' + results.url)

        await browser.waitAndClick('#file-submit')
        await browser.pause(2000)
    })


    //Change browser session
    it('Change Browser Session', async () => {
        console.log('Session before upload' + browser.sessionId)
        await browser.reloadSession()
        console.log('Session after reload' + browser.sessionId)
    })

    it('Create and Switch New Window', async () => {
        await browser.url('https://google.com')
        await browser.newWindow('https://webdriver.io.com')
        await browser.pause(3000)
        await browser.switchWindow('google.com') // ovo je da ti switcha na google poslije webdrivera
        await browser.pause(3000)
    })

/*     it('Network Throttle', async () => {
//you can change it to offline as well, but it might get terminate becaouse internet will be lost 
        await browser.throttle('Regular4G')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)
        
    }) */

    it('Execute JavaScript Code', async () => {
        const result = await browser.execute(
            (a, b) => {return a + b},
                5,
                10
            )
            await expect(result).toBe(15)
        })

        it('Execute async Javascript Code', async () => {
            const result = await browser.executeAsync((a, b, done) => {
                setTimeout(() => {
                    done(a + b)
                }, 3000)
                },
                5,
                10
            )
            await expect(result).toBe(15)
            })
        })
