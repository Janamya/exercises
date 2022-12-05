const Abstractpage = require("./Abstractpage");

class LoginPage extends Abstractpage {
    get inputEmail() {
        return $('#email')
    }

    get inputPassword() {
        return $('#password')
    }

    get loginButton() {
        return $('[data-testid="login-button"]')
    }

    get loginAssertion() {
        return $('#mask0')
    }

    get errorMessage() {
        return $('#fb7910hem20eqhq9')
    }


    async visit() {
        await browser.url("https://qa-task-web.ministryofprogramming.com/login")
    }

    async login(email, password) {
        await (await this.inputEmail).setValue(email)
        await (await this.inputPassword).setValue(password)
        await (await this.loginButton).click()
    }

    async assertLogin() {
        await expect(this.loginAssertion).toBeDisplayed()
    }
    
}

module.exports = new LoginPage()
