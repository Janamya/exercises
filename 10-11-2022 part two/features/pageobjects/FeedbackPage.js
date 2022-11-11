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
// Input name
    async submitFeedback(name, email, subject, message) {
        // if(!name&& !email&&!subject&&!message
        //     ){
        //         console.log("NE RADIIII")
        //     }
        await this.name.setValue(name || "Johny")
        await this.email.setValue(email || "test@test.com")
        await this.subject.setValue(subject || "somesubject")
        await this.message.setValue(message || "somemessage")
        await this.sendFeedbackButton.click()
    }

    async assertFeedbackIsSent() {
        await expect(this.feedbackResult).toBeDisplayed()
      
    }

}

module.exports = new FeedbackPage()