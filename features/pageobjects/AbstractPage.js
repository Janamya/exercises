const { Browser } = require("puppeteer-core")

module.exports = class AbstractPage {
    async visit(url) {
        await browser.url('http://zero.webappsecurity.com/index.html')
    }

    async waitForSeconds(seconds) {
        await browser.pause(seconds * 1000)
    }
   
}
