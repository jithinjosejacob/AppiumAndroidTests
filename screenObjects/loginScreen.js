class LoginScreen {
    get loginField() {
        return $("(.//android.widget.EditText)[1]");
    }

    get passwordField() {
        return $("(.//android.widget.EditText)[2]");
    }

    get loginBtn() {
        return $(
            'android=new UiSelector().className("android.widget.Button").textContains("Log-in")'
        );
    }

    login(email, password) {
        this.loginField.waitForDisplayed();
        this.loginField.setValue(email);
        this.passwordField.setValue(password);

        return this.loginBtn.click();
    }
}

module.exports = {
    LoginScreen,
};
