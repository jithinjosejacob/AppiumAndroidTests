const { PastChechUpsScreen } = require("./pastChechUpsScreen");

class CheckUpModal {
    get pastCheckUpsBtn() {
        return $(
            'android=new UiSelector().className("android.widget.Button").text("PAST CHECK-UPS")'
        );
    }

    goToPastCheckUps() {
        this.pastCheckUpsBtn.click();

        return new PastChechUpsScreen();
    }

    isOpened() {
        try {
            this.waitLoaded();
        } catch (error) {}

        return this.pastCheckUpsBtn.isDisplayed();
    }

    waitLoaded() {
        return driver
            .$(
                'android=new UiSelector().className("android.widget.Button").text("PAST CHECK-UPS")'
            )
            .waitForDisplayed();
    }
}

module.exports = {
    CheckUpModal,
};
