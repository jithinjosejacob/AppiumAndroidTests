class HomeScreen {
    get checkUpBtn() {
        return $(
            'android=new UiSelector().className("android.view.View").text("Check-Up")'
        );
    }

    checkUp() {
        this.checkUpBtn.waitForDisplayed();

        return this.checkUpBtn.click();
    }

    skipIntro() {
        const skipIntroBtn = $(
            'android=new UiSelector().className("android.widget.Image").text("chevron down outline")'
        );
        skipIntroBtn.waitForExist();
        skipIntroBtn.waitForDisplayed();

        return skipIntroBtn.click();
    }

    waitLoaded() {
        return driver
            .$('android=new UiSelector().text("BLOG")')
            .waitForDisplayed();
    }
}

module.exports = {
    HomeScreen,
};
