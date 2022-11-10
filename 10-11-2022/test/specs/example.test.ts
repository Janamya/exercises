import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import FeedbackPage from '../pageobjects/FeedbackPage'
import Navbar from '../pageobjects/components/Navbar'

describe('Login Test', () => {
    it("Should not login with invalid username and password", async() => {
        await HomePage.visit()
        await HomePage.setResolution(1900,1000)
        await HomePage.takeScreenshot("my-screenshottwo.png")
        await Navbar.clickOnSignIn()
        await LoginPage.assertLoginForm()
        await LoginPage.login("someusername", "somepassword")
        await LoginPage.waitForSeconds(1)
        await LoginPage.assertErrorOnLoginForm()
})

describe('Feedback Test', () => {
    it('Should submit the feedback', async() => {
        await HomePage.visit()
        await FeedbackPage.clickOnFeedback()
        await FeedbackPage.assertFeedbackForm()
        await FeedbackPage.submitTheFeedbackForm("Lamija", "Some email", "Some subject", "Some message")
        await FeedbackPage.waitForSeconds(2)
    })
})
    
})
