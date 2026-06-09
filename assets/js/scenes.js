const scenes = {
    room1: {
        title: "Room 1",
        panorama: "assets/panoramas/room1.jpg",
        hotSpots: [
            {
                pitch: -2,
                yaw: 180,
                type: "scene",
                text: "Go to Room 2",
                sceneId: "room2"
            }
        ]
    },

    room1b: {
        title: "Room 1",
        panorama: "assets/panoramas/room1.jpg",
        hotSpots: [
            {
                pitch: -2,
                yaw: 180,
                type: "scene",
                text: "Go to Room 2",
                sceneId: "room2"
            }
        ],

        pitch: -2,
        yaw: 0,
    },

    room2: {
        title: "Room 2",
        panorama: "assets/panoramas/room2.jpg",
        hotSpots: [
            {
                pitch: -2,
                yaw: 110,
                type: "scene",
                text: "Back to Room 1",
                sceneId: "room1b"
            },
            {
                pitch: -2,
                yaw: 180,
                type: "scene",
                text: "Go to Room 3",
                sceneId: "room3"
            }
        ],
        pitch: -2,
        yaw: -100,
    },

      room2b: {
        title: "Room 2",
        panorama: "assets/panoramas/room2.jpg",
        hotSpots: [
            {
                pitch: -2,
                yaw: 110,
                type: "scene",
                text: "Back to Room 1",
                sceneId: "room1b"
            },
            {
                pitch: -2,
                yaw: 180,
                type: "scene",
                text: "Go to Room 3",
                sceneId: "room3"
            }
        ],

        pitch: -2,
        yaw: 0,
    },

    room3: {
        title: "Room 3",
        panorama: "assets/panoramas/room3.jpg",
        hotSpots: [
            {
                pitch: -2,
                yaw: 0,
                type: "scene",
                text: "Back to Room 2",
                sceneId: "room2b"
            },
            {
                pitch: -2,
                yaw: 180,
                type: "scene",
                text: "Go to Room 4",
                sceneId: "room4"
            }
        ]
    },

    room3b: {
        title: "Room 3",
        panorama: "assets/panoramas/room3.jpg",
        hotSpots: [
            {
                pitch: -2,
                yaw: 0,
                type: "scene",
                text: "Back to Room 2",
                sceneId: "room2b"
            },
            {
                pitch: -2,
                yaw: 180,
                type: "scene",
                text: "Go to Room 4",
                sceneId: "room4"
            }
        ],

        pitch: -2,
        yaw: 0,
        
    },

     room4: {
        title: "Room 4",
        panorama: "assets/panoramas/room4.jpg",
        hotSpots: [
            {
                pitch: -2,
                yaw: -10,
                type: "scene",
                text: "Back to Room 3",
                sceneId: "room3b"
            }
        ]
    }
};