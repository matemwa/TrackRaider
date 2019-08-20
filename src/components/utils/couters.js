function countBikeModules(gameConfig) {
    if (gameConfig.bike === "Raider") return 3;
    if (gameConfig.bike === "Speedster") return 1;
    if (gameConfig.bike === "Tank") return 2;
}

function countObstacles(gameConfig) {
    if (gameConfig.track === "Track1") return 3;
    if (gameConfig.track === "Track2") return [5, 10];
}

module.exports = {
    countBikeModules,
    countObstacles
}