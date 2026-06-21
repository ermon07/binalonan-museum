const viewer = pannellum.viewer("panorama", {
    default: {
        firstScene: "room1",
        autoLoad: true,
        sceneFadeDuration: 1000,
        yaw: 25,
        pitch: 0,
        minPitch: -25,
        maxPitch: 25
    },

    compass: false,
    showZoomCtrl: false,
    showFullscreenCtrl: false,

    scenes
});