const AbstractPage = require("./Abstractpage");

class HomePage extends AbstractPage{
 get searchBox() {
    return $('#searchTerm')
 }

 get results() {
    return $('h2')
 }


 async visit() {
   await browser.url('http://zero.webappsecurity.com/index.html')
 }

 async searchValue(text) {
    await this.searchBox.setValue(text)
    await browser.keys(['Enter'])
 }

 async assertResults() {
    await expect(this.results).toExist()
 }

}

module.exports = new HomePage()
