class CheckUpScreen {
    get backBtn() {
        return $('android=new UiSelector().text("arrow back outline")');
    }

    back() {
        this.backBtn.waitForDisplayed();

        return this.backBtn.click();
    }
}

module.exports = {
    CheckUpScreen,
};
