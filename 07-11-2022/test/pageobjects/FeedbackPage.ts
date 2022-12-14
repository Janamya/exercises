import AbstractPage from "./AbstractPage"

class FeedbackPage extends AbstractPage{
    public get nameInput() {
        return $('#name')
    }
    public get emailInput() {
        return $('#email')
    }
    public get subjectInput() {
        return $('#subject')
    }
    public get messageInput() {
        return $('#comment')
    }
    public get submitButton() {
        return $('input[type="submit"]')
    }
    public get feedbackMessageAssertion() {
        return $('.span6')
    }

//functions
    public async submitFeedback(name: string, email:string, subject: string, message: string) {
        await (await this.nameInput).setValue(name)
        await (await this.emailInput).setValue(email)
        await (await this.subjectInput).setValue(subject)
        await (await this.messageInput).setValue(message)
        await (await this.submitButton).click()
         }

         public async assertionFedbackMessage() {
            await expect(this.feedbackMessageAssertion).toHaveTextContaining('Thank you')
         }
}

export default new FeedbackPage()