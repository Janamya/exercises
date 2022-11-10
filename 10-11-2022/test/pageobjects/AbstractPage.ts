export default class AbstractPage {
    public async waitForSeconds(seconds: number) {
        await browser.pause(seconds * 1000)
    }

    public async setResolution(width: number, height: number) {
        await browser.setWindowSize(width, height)
    }

    public async setNetworkSpeedTo3G() {
        await browser.throttle('Regular3G')
    }

    public async takeScreenshot(path) {
        await browser.saveScreenshot(path)
    }
}