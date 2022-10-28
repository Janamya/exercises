



    //Section 2
    //FILE UPLOAD
describe('Advanced testing', () => {

    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/upload')
    })

        it('File upload', async () => {
        
            
        const filePath = './my-screenshot.png'
        await browser.customFileUpload(filePath, '#file-upload','#file-submit')

            await browser.pause(5000)

        })

        it('File upload 2', async () => {
        const filePath = './my-screenshot.png'
           
                await browser.customFileUpload(filePath, '#file-upload','#file-submit')

                await browser.pause(5000)
     })

     it('Display Title and Url', async () => {
        const results = await browser.getTitleAndUrl()
        console.log('TITLE = ' + results.title)
        console.log('URL =' + results.url)

        await browser.waitAndClick('#file-submit')
        await browser.pause(5000)
     })

     it('Change Browser Session', async () => {
        console.log('Session Before Reload' + browser.sessionId)
        await browser.reloadSession()
        console.log('Session After Reload' + browser.sessionId)
     })

     it('Create and Switch New Window', async () => {
        await browser.url('https://google.com')
        await browser.newWindow('https://webdriver.io')
        await browser.pause(3000)
        await browser.switchWindow('google.com')
        await browser.pause(3000)
     })

  
 


