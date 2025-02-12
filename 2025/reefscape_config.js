var config_data = `
{
    "dataFormat": "tsv",
    "title": "Scouting PASS 2025",
    "checkboxAs": "10",
    "prematch": [
        {
            "name": "Scouter Pin",
            "code": "s",
            "type": "scouter",
            "size": 5,
            "maxSize": 5,
            "required": "true"
        },
        {
            "name": "Event",
            "code": "e",
            "type": "event",
            "defaultValue": "2025nyro",
            "required": "true"
        },
        {
            "name": "Match Level",
            "code": "l",
            "type": "level",
            "choices": {
                "qm": "Quals<br>",
                "sf": "Semifinals<br>",
                "f": "Finals"
            },
            "defaultValue": "qm",
            "required": "true"
        },
        {
            "name": "Match #",
            "code": "m",
            "type": "match",
            "min": 1,
            "max": 150,
            "required": "true"
        },
        {
            "name": "Robot",
            "code": "r",
            "type": "robot",
            "choices": {
                "Red 1": "Red-1",
                "Blue 1": "Blue-1<br>",
                "Red 2": "Red-2",
                "Blue 2": "Blue-2<br>",
                "Red 3": "Red-3",
                "Blue 3": "Blue-3"
            },
            "required": "true"
        },
        {
            "name": "Team #",
            "code": "t",
            "type": "team",
            "min": 1,
            "max": 99999
        },
        {
            "name": "Started With Coral",
            "code": "sc",
            "type": "bool"
        }
    ],
    "auton": [
        {
            "name": "Coral L4 Scores",
            "code": "ac4",
            "type": "counter",
            "tooltip": "Maximum of 12"
        },
        {
            "name": "Coral L3 Scores",
            "code": "ac3",
            "type": "counter",
            "tooltip": "Maximum of 12"
        },
        {
            "name": "Coral L2 Scores",
            "code": "ac2",
            "type": "counter",
            "tooltip": "Maximum of 12"
        },
        {
            "name": "Coral L1 Scores",
            "code": "ac1",
            "type": "counter",
            "tooltip": "Maximum of 24"
        },
        {
            "name": "Algae Scores Processor",
            "code": "aap",
            "type": "counter"
        },
        {
            "name": "Algae Scores Net",
            "code": "aan",
            "type": "counter"
        },
        {
            "name": "Leave Starting Zone",
            "code": "al",
            "type": "bool"
        }
    ],
    "teleop": [
        {
            "name": "Coral L4 Scores",
            "code": "tc4",
            "type": "counter",
            "maxValue": 12
        },
        {
            "name": "Coral L3 Scores",
            "code": "tc3",
            "type": "counter",
            "maxValue": 12
        },
        {
            "name": "Coral L2 Scores",
            "code": "tc2",
            "type": "counter",
            "maxValue": 12
        },
        {
            "name": "Coral L1 Scores",
            "code": "tc1",
            "type": "counter",
            "maxValue": 24
        },
        {
            "name": "Algae Scores Processor",
            "code": "tap",
            "type": "counter"
        },
        {
            "name": "Algae Scores Net",
            "code": "tan",
            "type": "counter"
        },
        {
            "name": "Pickup Coral From",
            "code": "tcu",
            "type": "radio",
            "choices": {
                "s": "Source<br>",
                "f": "Floor<br>",
                "b": "Both<br>",
                "x": "Not Attempted"
            }
        }
    ],
    "endgame": [
        {
            "name": "Final Status",
            "code": "fs",
            "type": "radio",
            "choices": {
                "p": "Parked<br>",
                "s": "Shallow<br>",
                "d": "Deep<br>",
                "x": "Not Attempted"
            },
            "defaultValue": "x"
        }
    ],
    "postmatch": [
        {
            "name": "Win or Lose",
            "code": "wl",
            "type": "radio",
            "choices": {
                "w": "Win<br>",
                "l": "Lose<br>",
                "t": "Tie<br>"
            }
        },
        {
            "name": "Auto Ranking Point",
            "code": "arp",
            "type": "bool"
        },
        {
            "name": "Coral Ranking Point",
            "code": "crp",
            "type": "bool"
        },
        {
            "name": "Barge Ranking Point",
            "code": "brp",
            "type": "bool"
        },
        {
            "name": "Immobilized",
            "code": "i",
            "type": "bool"
        },
        {
            "name": "Dropped Game Pieces",
            "code": "dgp",
            "type": "bool"
        },
        {
            "name": "Make a good<br>alliance partner?",
            "tooltip": "Would you want this robot on your alliance in playoffs?",
            "code": "all",
            "type": "bool"
        },
        {
            "name": "Comments",
            "code": "co",
            "type": "text",
            "size": 15,
            "maxSize": 55
        }
    ]
}`;
