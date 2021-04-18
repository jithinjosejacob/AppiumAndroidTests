class PastChechUpsScreen {
    get title() {
        return $('android=new UiSelector().text("Your Timeline")');
    }

    waitLoaded() {
        return driver
            .$('android=new UiSelector().text("Your Timeline")')
            .waitForDisplayed();
    }
}

module.exports = {
    PastChechUpsScreen,
};
