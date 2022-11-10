import AbstractPage from "./AbstractPage"

class Homepage extends AbstractPage{
   

public async visit() {
    await browser.url('http://zero.webappsecurity.com/index.html')
}

}

export default new Homepage()