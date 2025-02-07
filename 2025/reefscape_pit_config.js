var config_data = `
{
    "dataFormat": "tsv",
    "title": "Scouting PASS 2025",
    "page_title": "Reefscape",
    "pitConfig": "true",
    "prematch": [
        { 
            "name": "Team Number",
            "code": "t",
            "type": "number"
        },
        { 
            "name": "How many auto methods do you have programmed?",
            "code": "wid",
            "type": "number",
            "defaultValue": "0"
        },
        { 
            "name": "How fast can your robot move? (MPH)",
            "code": "wid",
            "type": "number",
            "defaultValue": "0"
        },
        { 
            "name": "Can score in -",
            "code": "fpu",
            "type": "radio",
            "choices": 
            {
                "L1": "L1",
                "L2": "L2",
                "L3": "L3",
                "L4": "L4",
                "Processor": "Processor  ",
                "Net": "Net  "
            }
        },
        { 
            "name": "Can on -",
            "code": "fpu",
            "type": "radio",
            "choices": 
            {
                "Shallow": "Shallow Cage",
                "Deep": "Deep Cage"
            }
        },
        { 
            "name": "Can set auto speed to -",
            "code": "fpu",
            "type": "radio",
            "choices": 
            {
                "Fast": "Fast",
                "Mid": "Mid",
                "Slow": "Slow"
            }
        },
        { 
            "name": "Comments",
            "code": "co",
            "type": "text",
            "size": 20,
            "maxSize": 256
        },
        {
            "name": "What is teams greatest strength",
            "code": "sn",
            "type": "text",
            "size": 20,
            "maxSize": 256 
        }
    ],
    "auton": [
    ],
    "teleop": [
    ],
    "endgame": [
    ],
    "postmatch": [
    ]
}`;