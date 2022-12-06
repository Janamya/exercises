const AbstractPage = require("./AbstractPage")

class FeedbackPage extends AbstractPage {
 get inputName() {
    return $('#name')
 }
 get inputEmail() {
    return $('#email')
}
get inputSubject() {
    return $('#subject')
}
get inputComment() {
    return $('#comment')
}
get sendButton() {
    return $('.btn-primary')
}
get feedbackMessage() {
    return $('h3')
}

async visit() {
    await browser.url("http://zero.webappsecurity.com/feedback.html")
}
async submitFeedback() {
    await (await this.inputName).setValue("some name")
    await (await this.inputEmail).setValue("email@gmail.com")
    await (await this.inputSubject).setValue("some subject")
    await (await this.inputComment).setValue("some comment")
    await (await this.sendButton).click()
}

async assertFeedbackSubmit() {
    await expect(this.feedbackMessage).toHaveTextContaining('Feedback')
} 
}

module.exports = new FeedbackPage()