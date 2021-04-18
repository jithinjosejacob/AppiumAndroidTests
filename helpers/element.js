function swipeLeft() {
    const position = driver.getWindowRect();

    const x = Math.floor(position.width / 2);
    const y = Math.floor(position.y + position.height / 2);

    return swipe(x, y, Math.round(x - 0.9 * x), y);
}

function swipeTo(element) {
    while (!element.isExisting()) {
        swipeUp();
    }

    return;
}

function swipeLeftTillElementPresent(element) {
    while (element.isExisting()) {
        swipeLeft();
    }

    return;
}

function swipeUp() {
    const position = driver.getWindowRect();
    const x = Math.floor(position.width / 2);
    const y = Math.floor(position.height / 2);

    return swipe(x, y, x, Math.round(y - 0.8 * y));
}

function swipe(x, y, deltaX, deltaY) {
    return driver.touchPerform([
        {
            action: "press",
            options: { x, y },
        },
        {
            action: "wait",
            options: { ms: 500 },
        },
        {
            action: "moveTo",
            options: { x: deltaX, y: deltaY },
        },
        {
            action: "release",
        },
    ]);
}

module.exports = {
    swipeLeft,
    swipeTo,
    swipeLeftTillElementPresent,
};
