const AbstractPage = require('./AbstractPage')

class FeedbackPage extends AbstractPage {
  get nameInput() {
    return $('#name')
  }

  get emailInput() {
    return $('#email')
  }

  get subjectInput() {
    return $('#subject')
  }

  get messageInput() {
    return $('#comment')
  }

  get submitButton() {
    return $('.btn-primary')
  }

  async visit() {
    await browser.url('http://zero.webappsecurity.com/feedback.html')
  }

  async submitFeedback() {
    await (await this.nameInput).setValue('My Name')
    await (await this.emailInput).setValue('email@email.com')
    await (await this.subjectInput).setValue('Subject')
    await (await this.messageInput).setValue('My awesome message')
    await (await this.submitButton).click()
  }
}

module.exports = new FeedbackPage()