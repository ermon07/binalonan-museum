function scene(title, panorama, hotSpots, yaw = 0, pitch = 0) {
    return { title, panorama, hotSpots, yaw, pitch };
}

// FRONT
const frontHotspots = [
    { pitch: -31, yaw: 25, type: "scene", sceneId: "room2" },
    { pitch: -25, yaw: -63, type: "scene", sceneId: "LR1" },
    { pitch: -25, yaw: -262, type: "scene", sceneId: "RR1" }
];

// BACK
const backHotspots = [
    { pitch: -20, yaw: 200, type: "scene", sceneId: "room1b" },
    { pitch: -25, yaw: 298, type: "scene", sceneId: "P9B" },
    { pitch: -23, yaw: 91, type: "scene", sceneId: "EX6B" }
];

// LEFT ROOM
const lr1Hotspots = [
    { pitch: -25, yaw: -5, type: "scene", sceneId: "P1" },
    { pitch: -25, yaw: 30, type: "scene", sceneId: "P2" },
    { pitch: -25, yaw: 110, type: "scene", sceneId: "P3" },
    { pitch: -25, yaw: 190, type: "scene", sceneId: "room1l" }
];

// P3
const p3Hotspots = [
    { pitch: -20, yaw: 200, type: "scene", sceneId: "LR1B" },
    { pitch: -28, yaw: -30, type: "scene", sceneId: "P4" },
    { pitch: -28, yaw: -300, type: "scene", sceneId: "P5" },
    { pitch: -20, yaw: 0, type: "scene", sceneId: "P6" }
];

// P5
const p5Hotspots = [
    { pitch: -20, yaw: 208, type: "scene", sceneId: "P7" },
    { pitch: -15, yaw: 75, type: "scene", sceneId: "P4" },
    { pitch: -20, yaw: 105, type: "scene", sceneId: "P6" }
];

// P7
const p7Hotspots = [
    { pitch: -15, yaw: 95, type: "scene", sceneId: "P8" },
    { pitch: -15, yaw: 5, type: "scene", sceneId: "P5B2" }
];

// P8
const p8Hotspots = [
    { pitch: -25, yaw: 190, type: "scene", sceneId: "P7B" },
    { pitch: -15, yaw: 147, type: "scene", sceneId: "P9" }
];

// P9
const p9Hotspots = [
    { pitch: -20, yaw: 197, type: "scene", sceneId: "room2l" },
    { pitch: -23, yaw: 35, type: "scene", sceneId: "P10" },
    { pitch: -20, yaw: -45, type: "scene", sceneId: "P8B" }
];

// RR1
const rr1Hotspots = [
    { pitch: -25, yaw: 102, type: "scene", sceneId: "room1r" },
    { pitch: -25, yaw: -105, type: "scene", sceneId: "EX1" }
];

// EX1
const ex1Hotspots = [
    { pitch: -25, yaw: 195, type: "scene", sceneId: "RR1B" },
    { pitch: -25, yaw: -87, type: "scene", sceneId: "EX2" }
];

// EX2
const ex2Hotspots = [
    { pitch: -25, yaw: 195, type: "scene", sceneId: "EX3" },
    { pitch: -25, yaw: 13, type: "scene", sceneId: "EX1B" }
];

// EX3
const ex3Hotspots = [
    { pitch: -25, yaw: 205, type: "scene", sceneId: "EX4" },
    { pitch: -25, yaw: 13, type: "scene", sceneId: "EX2B" }
];

// EX4
const ex4Hotspots = [
    { pitch: -15, yaw: 190, type: "scene", sceneId: "EX5" },
    { pitch: -10, yaw: 35, type: "scene", sceneId: "EX3B" }
];

// EX5
const ex5Hotspots = [
    { pitch: -25, yaw: 215, type: "scene", sceneId: "EX4B" },
    { pitch: -20, yaw: -60, type: "scene", sceneId: "EX6" }
];

// EX6
const ex6Hotspots = [
    { pitch: -20, yaw: 23, type: "scene", sceneId: "EX5B" },
    { pitch: -20, yaw: -163, type: "scene", sceneId: "room2r" }
];

const scenes = {

    room1:  scene("Front", "assets/panoramas/room1.jpg", frontHotspots, 25),
    room1b: scene("Front", "assets/panoramas/room1.jpg", frontHotspots, 190),
    room1l: scene("Front", "assets/panoramas/room1.jpg", frontHotspots, 120),
    room1r: scene("Front", "assets/panoramas/room1.jpg", frontHotspots, -60),

    room2:  scene("Back", "assets/panoramas/room2.jpg", backHotspots, 15),
    room2l: scene("Back", "assets/panoramas/room2.jpg", backHotspots, 120),
    room2r: scene("Back", "assets/panoramas/room2.jpg", backHotspots, -60),

    LR1:  scene("Paintings", "assets/panoramas/LR1.jpg", lr1Hotspots),
    LR1B: scene("Paintings", "assets/panoramas/LR1.jpg", lr1Hotspots, 200),

    P1: scene("Paintings", "assets/panoramas/P1.jpg", [
        { pitch: -16, yaw: 7, type: "scene", sceneId: "LR1B" }
    ], 200),

    P2: scene("Paintings", "assets/panoramas/P2.jpg", [
        { pitch: -20, yaw: 20, type: "scene", sceneId: "LR1B" }
    ], 200, 10),

    P3: scene("Paintings", "assets/panoramas/P3.jpg", p3Hotspots, 110, 10),
    P3B: scene("Paintings", "assets/panoramas/P3.jpg", p3Hotspots, 178, 10),

    P4: scene("Paintings", "assets/panoramas/P4.jpg", [
        { pitch: -20, yaw: 195, type: "scene", sceneId: "P3" },
        { pitch: -15, yaw: 165, type: "scene", sceneId: "P5" }
    ], 30, 10),

    P5: scene("Paintings", "assets/panoramas/P5.jpg", p5Hotspots, -200, 10),
    P5B: scene("Paintings", "assets/panoramas/P5.jpg", p5Hotspots, -80, 10),
    P5B2: scene("Paintings", "assets/panoramas/P5.jpg", p5Hotspots, 20, 10),

    P6: scene("Paintings", "assets/panoramas/P6.jpg", [
        { pitch: -20, yaw: 200, type: "scene", sceneId: "P5B" },
        { pitch: -17, yaw: 230, type: "scene", sceneId: "P3B" }
    ], 20, 10),

    P7: scene("Paintings", "assets/panoramas/P7.jpg", p7Hotspots, 220),
    P7B: scene("Paintings", "assets/panoramas/P7.jpg", p7Hotspots, 250),

    P8: scene("Paintings", "assets/panoramas/P8.jpg", p8Hotspots, 30),
    P8B: scene("Paintings", "assets/panoramas/P8.jpg", p8Hotspots, -10),

    P9: scene("Paintings", "assets/panoramas/P9.jpg", p9Hotspots, 190),
    P9B: scene("Paintings", "assets/panoramas/P9.jpg", p9Hotspots, 20),

    P10: scene("Paintings", "assets/panoramas/P10.jpg", [
        { pitch: -20, yaw: 165, type: "scene", sceneId: "P9" }
    ], 70),

    RR1: scene("Paintings", "assets/panoramas/RR1.jpg", rr1Hotspots, 190),
    RR1B: scene("Paintings", "assets/panoramas/RR1.jpg", rr1Hotspots, 80),

    EX1: scene("Paintings", "assets/panoramas/EX1.jpg", ex1Hotspots, 10),
    EX1B: scene("Paintings", "assets/panoramas/EX1.jpg", ex1Hotspots, 70),

    EX2: scene("Paintings", "assets/panoramas/EX2.jpg", ex2Hotspots, 190),
    EX2B: scene("Paintings", "assets/panoramas/EX2.jpg", ex2Hotspots, 20),

    EX3: scene("Paintings", "assets/panoramas/EX3.jpg", ex3Hotspots, 190),
    EX3B: scene("Paintings", "assets/panoramas/EX3.jpg", ex3Hotspots, 30),

    EX4: scene("Paintings", "assets/panoramas/EX4.jpg", ex4Hotspots, 210),
    EX4B: scene("Paintings", "assets/panoramas/EX4.jpg", ex4Hotspots, 40),

    EX5: scene("Paintings", "assets/panoramas/EX5.jpg", ex5Hotspots, 40),
    EX5B: scene("Paintings", "assets/panoramas/EX5.jpg", ex5Hotspots, 140),

    EX6: scene("Paintings", "assets/panoramas/EX6.jpg", ex6Hotspots, 190),
    EX6B: scene("Paintings", "assets/panoramas/EX6.jpg", ex6Hotspots, 20)

};