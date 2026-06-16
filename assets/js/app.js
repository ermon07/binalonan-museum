let viewer;

viewer = pannellum.viewer('panorama', {
    
    default: {
        firstScene: "EX6B",
        autoLoad: true,
        sceneFadeDuration: 1000,

        // Dito pwedeng i-adjust ang initial view ng panorama
        yaw: 25,
        pitch: 0,
       
    //  "haov": 360,  /* Horizontal Angle of View: How wide the panorama is (in degrees) */
    // "vaov": 180.0,   /* Vertical Angle of View: How tall the panorama is (in degrees) */
    // "vOffset": 0.0,  /* Vertical offset alignment */
    
    /* Restrict the movement limits so the user doesn't look at empty black space */
     "minPitch": -25,
     "maxPitch": 25
      
    },
    compass: false,
    showZoomCtrl: false,
    showFullscreenCtrl: false,

    scenes: scenes
});