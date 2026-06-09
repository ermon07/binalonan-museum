const scenes = {
    room1: {
        title: "Stair",
        panorama: "assets/panoramas/room1.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 180,
                type: "scene",
                // text: "Go to Room 2",
                sceneId: "room2"
            }
        ]
    },

    room1b: {
        title: "Stair",
        panorama: "assets/panoramas/room1.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 180,
                type: "scene",
                // text: "Go to Room 2",
                sceneId: "room2"
            }
        ],

        pitch: -2,
        yaw: 0,
    },

    room2: {
        title: "Information Desk",
        panorama: "assets/panoramas/room2.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 110,
                type: "scene",
                // text: "Back to Room 1",
                sceneId: "room1b"
            },
            {
                pitch: -20,
                yaw: 180,
                type: "scene",
                // text: "Go to Room 3",
                sceneId: "room3"
            }
        ],
        pitch: -2,
        yaw: -100,
    },

      room2b: {
        title: "Information Desk",
        panorama: "assets/panoramas/room2.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 110,
                type: "scene",
                // text: "Back to Room 1",
                sceneId: "room1b"
            },
            {
                pitch: -20,
                yaw: 180,
                type: "scene",
                // text: "Go to Room 3",
                sceneId: "room3"
            }
        ],

        pitch: -2,
        yaw: 0,
    },

    room3: {
        title: "Bookshelves",
        panorama: "assets/panoramas/room3.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 0,
                type: "scene",
                // text: "Back to Room 2",
                sceneId: "room2b"
            },
            {
                pitch: -20,
                yaw: 180,
                type: "scene",
                // text: "Go to Room 4",
                sceneId: "room4"
            }
        ]
    },

    room3b: {
        title: "Bookshelves",
        panorama: "assets/panoramas/room3.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 0,
                type: "scene",
                // text: "Back to Room 2",
                sceneId: "room2b"
            },
            {
                pitch: -20,
                yaw: 180,
                type: "scene",
                // text: "Go to Room 4",
                sceneId: "room4"
            }
        ],

        pitch: -2,
        yaw: 0,
        
    },

     room4: {
        title: "Bookshelves",
        panorama: "assets/panoramas/room4.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: -10,
                type: "scene",
                // text: "Back to Room 3",
                sceneId: "room3b"
            }
        ]
    }
};