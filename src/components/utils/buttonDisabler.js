function disableConfigButton(name, buttons) {
    if (name === "bike")
        buttons.disableBike = true;
    else if (name === "track")
        buttons.disableTrack = true;

    return buttons;
}

function disablePropertiesButton(name, buttons) {
    if (name === "module") buttons.disableModule = true;
    else if (name === "obstacle") buttons.disableObstacle = true;
    else if (name === "oponentModule") buttons.disableOponentModule = true;

    return buttons;
}

module.exports = {
    disableConfigButton,
    disablePropertiesButton
}