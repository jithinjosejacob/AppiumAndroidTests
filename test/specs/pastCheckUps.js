const { HomeScreen } = require("../../screenObjects/homeScreen");
const { CheckUpModal } = require("../../screenObjects/checkUpModal");
const { WelcomeScreen } = require("../../screenObjects/welcomeScreen");
const { CheckUpScreen } = require("../../screenObjects/checkUpScreen");

describe("CheckUpModal > clicking PAST CHECK-UPS button", () => {
    it("should navigate to past check ups screen", () => {
        const welcome = new WelcomeScreen();
        const loginScreen = welcome.goToLogin();

        loginScreen.login("pearlii@mailinator.com", "A123456a");

        const homeScreen = new HomeScreen();
        homeScreen.skipIntro();
        homeScreen.waitLoaded();
        homeScreen.checkUp();

        const checkUpModal = new CheckUpModal();
        const isPastCheckUpsBtnExisting = checkUpModal.isOpened();
        if (!isPastCheckUpsBtnExisting) {
            const checkUpScreen = new CheckUpScreen();
            checkUpScreen.back();
            homeScreen.waitLoaded();
            homeScreen.checkUp();
        }

        const pastChechUpsScreen = checkUpModal.goToPastCheckUps();
        pastChechUpsScreen.waitLoaded();
        expect(pastChechUpsScreen.title.getText()).toBe("Your Timeline");
    });
});
