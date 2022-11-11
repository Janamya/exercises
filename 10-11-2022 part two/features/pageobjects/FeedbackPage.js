const AbstractPage = require("./Abstractpage");

class FeedbackPage extends AbstractPage {

    get feedbackForm() {
        return $('.span6')
    }

    get name() {
        return $('#name')
    }

    get email() {
        return $('#email')
    }

    get subject() {
        return $('#subject')
    }

    get message() {
        return $('#comment')
    }

    get sendFeedbackButton() {
        return $('input[type="submit"]')
    }

    get feedbackResult() {
        return $('#feedback-title')
    }


    async visit() {
        await browser.url('http://zero.webappsecurity.com/feedback.html')
    }

    async assertFeedbackFormVisible() {
        await this.feedbackForm.waitForDisplayed()
    }

    async submitFeedback() {
        await this.name.setValue("lamija")
        await this.email.setValue("my@gemail.com")
        await this.subject.setValue("somesubject")
        await this.message.setValue("somemessage")
        await this.sendFeedbackButton.click()
    }

    async assertFeedbackIsSent() {
        await expect(this.feedbackResult).toBeDisplayed()
      
    }

}

module.exports = new FeedbackPage()