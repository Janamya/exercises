import AbstractPage from "./AbstractPage"

class LoginPage extends AbstractPage {
    //Selectors
    public get loginForm() {
        return $('#login_form')
    }

    public get usernameInput() {
        return $('#user_login')
    }

    public get passwordInput() {
        return $('#user_password')
    }

    public get signInButton() {
        return $('input[type="submit"]')
    }

    public get errorMessage(){
        return $('.alert-error')
    }
//Functions
public async asseertLoginPageIsVisible() {
    await (await this.loginForm).waitForDisplayed()
}

public async login(username: string, password: string) {
    await this.usernameInput.setValue(username)
    await (await this.passwordInput).setValue(password)
    await (await this.signInButton).click()

}

public async assertLoginPageErrorMessage() {
    await expect(this.errorMessage).toHaveTextContaining('wrong')
}
}

export default new LoginPage()