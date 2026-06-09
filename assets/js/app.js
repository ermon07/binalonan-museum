let viewer;

viewer = pannellum.viewer('panorama', {
    
    default: {
        firstScene: "room1",
        autoLoad: true,
        sceneFadeDuration: 1000,

        // Dito pwedeng i-adjust ang initial view ng panorama
        yaw: 180,
        pitch: 0,
        hfov: 100
    },
    compass: false,
    showZoomCtrl: false,
    showFullscreenCtrl: false,

    scenes: scenes
});