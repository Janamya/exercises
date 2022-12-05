const Abstractpage = require("./Abstractpage");

class EventsPage extends Abstractpage {
 get searchBox() {
    return $('#search')
 }

 get searchButton() {
    return $('.e1jqfdaz0 css-1yn373i e1n1lbzj0')
 }

 get errorEventsMessage() {
    return $('//p[contains(text()="Something went wrong, please contact our support."]')
 }

 async visit() {
    await browser.url('https://qa-task-web.ministryofprogramming.com/event-list?search=event')
 }

 async searchResult() {
    await (await this.searchButton).click()
 }
}

module.exports new EventsPage();