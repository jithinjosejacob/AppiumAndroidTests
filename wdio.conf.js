exports.config = {
    runner: "local",
    specs: ["./test/specs/**/*.js"],
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            platformName: "Android",
            "appium:platformVersion": "11.0",
            "appium:automationName": "UIAutomator2",
            "appium:deviceName": "Nexus",
            // "appium:noReset": true,
            "appium:fullReset": true,
            "appium:autoAcceptAlerts": true,
            "appium:autoGrantPermissions": true,
            "appium:app":
                __dirname + "/app/pearlii-free-ai-dental-check-ups_1.5.1.apk",
        },
    ],
    logLevel: "info",
    bail: 0,
    baseUrl: "http://localhost",
    waitforTimeout: parseInt(process.env.TIMEOUT) || 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    port: 4723,
    services: ["appium"],
    framework: "jasmine",
    reporters: ["spec"],
    jasmineOpts: {
        defaultTimeoutInterval: 120000,
        expectationResultHandler: function (passed, assertion) {},
    },
};
