const scenes = {

/// FRONT ///

    room1: {
        title: "Front",
        panorama: "assets/panoramas/room1.jpg",
        hotSpots: [
            {
                pitch: -31,
                yaw: 25,
                type: "scene",
                // text: "Go to Room 2",
                sceneId: "room2",
            },
            // LEFT ROOM
            {
                pitch: -25,
                yaw: -63,
                type: "scene",
                // text: "Go to LR1",
                sceneId: "LR1",
            },
             // RIGHT ROOM
            {
                pitch: -25,
                yaw: -262,
                type: "scene",
                // text: "Go to Room 2",
                sceneId: "room2",
            }

        ],
        
    },

    room1b: {
        title: "Front",
        panorama: "assets/panoramas/room1.jpg",
        hotSpots: [
            {
                pitch: -31,
                yaw: 25,
                type: "scene",
                // text: "Go to Room 2",
                sceneId: "room2"
            },
            // LEFT ROOM
            {
                pitch: -25,
                yaw: -63,
                type: "scene",
                // text: "Go to LR1",
                sceneId: "LR1",
            },
             // RIGHT ROOM
            {
                pitch: -25,
                yaw: -262,
                type: "scene",
                // text: "Go to Room 2",
                sceneId: "room2",
            }
            
        ],

        pitch: 0,
        yaw: 190,
    },

    room1l: {
        title: "Front",
        panorama: "assets/panoramas/room1.jpg",
        hotSpots: [
            {
                pitch: -31,
                yaw: 25,
                type: "scene",
                // text: "Go to Room 2",
                sceneId: "room2"
            },
            // LEFT ROOM
            {
                pitch: -25,
                yaw: -63,
                type: "scene",
                // text: "Go to LR1",
                sceneId: "LR1",
            },
             // RIGHT ROOM
            {
                pitch: -25,
                yaw: -262,
                type: "scene",
                // text: "Go to Room 2",
                sceneId: "room2",
            }
            
        ],

        pitch: 0,
        yaw: 120,
    },

    room2: {
        title: "Back",
        panorama: "assets/panoramas/room2.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 200,
                type: "scene",
                // text: "Back to Room 1",
                sceneId: "room1b"
            },
            {
                pitch: -25,
                yaw: 298,
                type: "scene",
                // text: "Back to Room 1",
                sceneId: "P9B"
            },
        ],
        pitch: 0,
        yaw: 15,
    },   

    room2l: {
        title: "Back",
        panorama: "assets/panoramas/room2.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 200,
                type: "scene",
                // text: "Back to Room 1",
                sceneId: "room1b"
            },
            {
                pitch: -25,
                yaw: 298,
                type: "scene",
                // text: "Back to Room 1",
                sceneId: "P9B"
            },
        ],
        pitch: 0,
        yaw: 120,
    }, 

 /// LEFT ROOM /// 

    LR1: {
        title: "Paintings",
        panorama: "assets/panoramas/LR1.jpg",
        hotSpots: [
            {
                pitch: -25,
                yaw: -5,
                type: "scene",
                // text: "Go to P1",
                sceneId: "P1"
            },
            {
                pitch: -25,
                yaw: 30,
                type: "scene",
                // text: "Go to P2",
                sceneId: "P2"
            },
            {
                pitch: -25,
                yaw: 110,
                type: "scene",
                // text: "Go to P3",
                sceneId: "P3"
            },
            {
                pitch: -25,
                yaw: 190,
                type: "scene",
                // text: "Back to Front",
                sceneId: "room1l"
            },
         
         
        ]
    },

     LR1B: {
        title: "Paintings",
        panorama: "assets/panoramas/LR1.jpg",
        hotSpots: [
            {
                pitch: -25,
                yaw: -5,
                type: "scene",
                // text: "Go to P1",
                sceneId: "P1"
            },
            {
                pitch: -25,
                yaw: 30,
                type: "scene",
                // text: "Go to P2",
                sceneId: "P2"
            },
            {
                pitch: -25,
                yaw: 110,
                type: "scene",
                // text: "Go to P3",
                sceneId: "P3"
            },
            {
                pitch: -25,
                yaw: 190,
                type: "scene",
                // text: "Back to Front",
                sceneId: "room1l"
            },  
         
        ],
        pitch: 0,
        yaw: 200,
    },

 /// PAINTINGS ///    

      P1: {
        title: "Paintings",
        panorama: "assets/panoramas/P1.jpg",
        hotSpots: [
            {
                pitch: -16,
                yaw: 7,
                type: "scene",
                // text: "Back to Front",
                sceneId: "LR1B"
            },         
         
        ],
        pitch: 0,
        yaw: 200,
    },

    P2: {
        title: "Paintings",
        panorama: "assets/panoramas/P2.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 20,
                type: "scene",
                // text: "Back to Front",
                sceneId: "LR1B"
            },         
         
        ],
        pitch: 10,
        yaw: 200,
    },

    P3: {
        title: "Paintings",
        panorama: "assets/panoramas/P3.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 200,
                type: "scene",
                // text: "Back to Front",
                sceneId: "LR1B"
            },    
            {
                pitch: -28,
                yaw: -30,
                type: "scene",
                // text: "Go to P4",
                sceneId: "P4"
            },   
            {
                pitch: -28,
                yaw: -300,
                type: "scene",
                // text: "Go to P5",
                sceneId: "P5"
            },   
            {
                pitch: -20,
                yaw: 0,
                type: "scene",
                // text: "Go to P6",
                sceneId: "P6"
            },       
            
         
        ],
        pitch: 10,
        yaw: 110,
    },

    P3B: {
        title: "Paintings",
        panorama: "assets/panoramas/P3.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 200,
                type: "scene",
                // text: "Back to Front",
                sceneId: "LR1B"
            },    
            {
                pitch: -28,
                yaw: -30,
                type: "scene",
                // text: "Go to P4",
                sceneId: "P4"
            },   
            {
                pitch: -28,
                yaw: -300,
                type: "scene",
                // text: "Go to P5",
                sceneId: "P5"
            },   
            {
                pitch: -20,
                yaw: 0,
                type: "scene",
                // text: "Go to P6",
                sceneId: "P6"
            },       
            
         
        ],
        pitch: 10,
        yaw: 178,
    },

    P4: {
        title: "Paintings",
        panorama: "assets/panoramas/P4.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 195,
                type: "scene",
                // text: "Back to P3",
                sceneId: "P3"
            },
            {
                pitch: -15,
                yaw: 165,
                type: "scene",
                // text: "Go to P5",
                sceneId: "P5"
            },          
         
        ],
        pitch: 10,
        yaw: 30,
    },

    P5: {
        title: "Paintings",
        panorama: "assets/panoramas/P5.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 208,
                type: "scene",
                // text: "Back to P3",
                sceneId: "P7"
            },   
            {
                pitch: -15,
                yaw: 75,
                type: "scene",
                // text: "Back to 4",
                sceneId: "P4"
            },   
            {
                pitch: -20,
                yaw: 105,
                type: "scene",
                // text: "Back to 4",
                sceneId: "P6"
            },     
         
        ],
        pitch: 10,
        yaw: -200,
    },
    P5B: {
        title: "Paintings",
        panorama: "assets/panoramas/P5.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 208,
                type: "scene",
                // text: "Back to P3",
                sceneId: "P7"
            },   
            {
                pitch: -15,
                yaw: 75,
                type: "scene",
                // text: "Back to 4",
                sceneId: "P4"
            },     
            {
                pitch: -20,
                yaw: 105,
                type: "scene",
                // text: "Back to 4",
                sceneId: "P6"
            },   
         
        ],
        pitch: 10,
        yaw: -80,
    },
    P5B2: {
        title: "Paintings",
        panorama: "assets/panoramas/P5.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 208,
                type: "scene",
                // text: "Back to P3",
                sceneId: "P7"
            },   
            {
                pitch: -15,
                yaw: 75,
                type: "scene",
                // text: "Back to 4",
                sceneId: "P4"
            },     
            {
                pitch: -20,
                yaw: 105,
                type: "scene",
                // text: "Back to 4",
                sceneId: "P6"
            },   
         
        ],
        pitch: 10,
        yaw: 20,
    },
    P6: {
        title: "Paintings",
        panorama: "assets/panoramas/P6.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 200,
                type: "scene",
                // text: "Back to P3",
                sceneId: "P5B"
            },   
            {
                pitch: -17,
                yaw: 230,
                type: "scene",
                // text: "Back to 4",
                sceneId: "P3B"
            },       
         
        ],
        pitch: 10,
        yaw: 20,
    },
    P7: {
        title: "Paintings",
        panorama: "assets/panoramas/P7.jpg",
        hotSpots: [
            {
                pitch: -15,
                yaw: 95,
                type: "scene",
                // text: "Go to P8",
                sceneId: "P8"
            },    
            {
                pitch: -15,
                yaw: 5,
                type: "scene",
                // text: "Go to P8",
                sceneId: "P5B2"
            },     
         
        ],
        pitch: 0,
        yaw: 220,
    },
    P7B: {
        title: "Paintings",
        panorama: "assets/panoramas/P7.jpg",
        hotSpots: [
            {
                pitch: -15,
                yaw: 95,
                type: "scene",
                // text: "Go to P8",
                sceneId: "P8"
            },    
            {
                pitch: -15,
                yaw: 5,
                type: "scene",
                // text: "Go to P8",
                sceneId: "P5B2"
            },     
         
        ],
        pitch: 0,
        yaw: 250,
    },
    P8: {
        title: "Paintings",
        panorama: "assets/panoramas/P8.jpg",
        hotSpots: [
            {
                pitch: -25,
                yaw: 190,
                type: "scene",
                // text: "Go to P8",
                sceneId: "P7B"
            },    
            {
                pitch: -15,
                yaw: 147,
                type: "scene",
                // text: "Go to P9",
                sceneId: "P9"
            },      
         
        ],
        pitch: 0,
        yaw: 30,
    },
    P8B: {
        title: "Paintings",
        panorama: "assets/panoramas/P8.jpg",
        hotSpots: [
            {
                pitch: -25,
                yaw: 190,
                type: "scene",
                // text: "Go to P8",
                sceneId: "P7B"
            },    
            {
                pitch: -15,
                yaw: 147,
                type: "scene",
                // text: "Go to P9",
                sceneId: "P9"
            },      
         
        ],
        pitch: 0,
        yaw: -10,
    },

    P9: {
        title: "Paintings",
        panorama: "assets/panoramas/P9.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 197,
                type: "scene",
                // text: "Go to P8",
                sceneId: "room2l"
            },    
            {
                pitch: -23,
                yaw: 35,
                type: "scene",
                // text: "Go to P9",
                sceneId: "P10"
            },   
            {
                pitch: -20,
                yaw: -45,
                type: "scene",
                // text: "Go to P9",
                sceneId: "P8B"
            },    
         
        ],
        pitch: 0,
        yaw: 190,
    },

    P9B: {
        title: "Paintings",
        panorama: "assets/panoramas/P9.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 197,
                type: "scene",
                // text: "Go to P8",
                sceneId: "room2l"
            },    
            {
                pitch: -23,
                yaw: 35,
                type: "scene",
                // text: "Go to P9",
                sceneId: "P10"
            },   
            {
                pitch: -20,
                yaw: -45,
                type: "scene",
                // text: "Go to P9",
                sceneId: "P8B"
            },    
         
        ],
        pitch: 0,
        yaw: 20,
    },

    P10: {
        title: "Paintings",
        panorama: "assets/panoramas/P10.jpg",
        hotSpots: [
            {
                pitch: -20,
                yaw: 165,
                type: "scene",
                // text: "Go to P8",
                sceneId: "P9"
            },    
        ],
        pitch: 0,
        yaw: 70,
    },
  
};