import AbstractPage from "./AbstractPage"

class FeedbackPage extends AbstractPage{
public get feedbackButton() {
    return $('#feedback')
}
public get feedbackForm() {
    return $('h3')
}
public get name() {
    return $('#name')
}
public get email() {
    return $('#email')
}
public get subject() {
    return $('#subject')
}
public get message() {
    return $('#comment')
}
public get sendMessageButton() {
    return $('input[type="submit"]')
}

public async clickOnFeedback() {
    await (await this.feedbackButton).click()
}
public async assertFeedbackForm() {
    await (await this.feedbackForm).waitForExist()
}
public async submitTheFeedbackForm(name: string, email: string, subject: string, message: string) {
    await this.name.setValue(name)
    await this.email.setValue(email)
    await (await this.subject).setValue(subject)
    await (await this.message).setValue(message)
    await browser.pause(2000)
    await (await this.sendMessageButton).click()
}
}

export default new FeedbackPage()