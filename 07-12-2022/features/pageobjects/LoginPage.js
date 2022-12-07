const AbstractPage = require("./AbstractPage");

class LoginPage extends AbstractPage{
    get inputEmail() {
        return $('#user')
    }
    get continueBtn() {
        return $('//*[@value="Continue"]')
    }
    get inputPassword() {
        return $('#password')
    }
    get loginSubmit() {
        return $('#login-submit')
    }
    get trelloHomepage( ){
        return $('#popover-boundary')
    }

    async visit() {
        await browser.url("https://trello.com/login")
    } 
    async login() {
        await (await this.inputEmail).setValue('lamija.pehilj@gmail.com')
        await browser.pause(3000)
        //await (await this.continueBtn).waitForClickable()
        await browser.pause(3000)
        await (await this.continueBtn).click()
        await browser.pause(7000)

        await (await this.inputPassword).setValue('Avirad23_')
        await browser.pause(7000)

        return (await this.loginSubmit).click()

    }
    async assertLogin() {
        await browser.pause(7000)

        await expect(this.trelloHomepage).toBeDisplayed()
    }
}


module.exports = new LoginPage()