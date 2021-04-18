const { LoginScreen } = require("./loginScreen");

class WelcomeScreen {
    goToLogin() {
        const signUpBtn = $('android=new UiSelector().text("Sign-up Now")');
        signUpBtn.waitUntil(() => {
            const size = signUpBtn.getSize();

            return size.height > 0;
        });
        signUpBtn.click();

        const logInBtn = $('android=new UiSelector().textContains("Log-in")');
        logInBtn.waitForExist();
        logInBtn.waitForDisplayed();
        logInBtn.click();

        return new LoginScreen();
    }
}

module.exports = {
    WelcomeScreen,
};
