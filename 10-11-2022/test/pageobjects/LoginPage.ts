import AbstractPage from "./AbstractPage"

class LoginPage extends AbstractPage {

    public get loginForm() {
      return $('.form-inputs')  
    }

    public get username() {
        return $('#user_login')
    }
    public get password() {
        return $('#user_password')
    }

    public get submitButton() {
        return $('input[type="submit"]')
    }

    public get errorMessage() {
        return $('.alert-error')
    }

    public async assertLoginForm() {
        await (await this.loginForm).waitForDisplayed()
    }

    public async login(username: string, password: string) {
        await (await this.username).setValue(username)
        await (await this.password).setValue(password)
        await (await this.submitButton).click()
    }

    public async assertErrorOnLoginForm() {
        await expect(this.errorMessage).toHaveTextContaining('are wrong')

}
}

export default new LoginPage()