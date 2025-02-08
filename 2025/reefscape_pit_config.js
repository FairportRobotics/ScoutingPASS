var config_data = `
{
    "dataFormat": "tsv",
    "title": "Scouting PASS 2025",
    "page_title": "Reefscape",
    "pitConfig": "true",
    "prematch": [   
        { 
            "name": "Team Number",
            "code": "sc",
            "type": "number"
        },
        { 
            "name": "How many auto methods do you have programmed?",
            "code": "wid",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Can score on - L1",
            "code":"ch",
            "type":"checkbox",
            "choices":
            {
                "L1": "L1"
            }
        },
        {
            "name": "L2",
            "code":"ch",
            "type":"checkbox",
            "choices":
            {
                "L2": "L2"
            }
        },
        {
            "name": "L3",
            "code":"ch",
            "type":"checkbox",
            "choices":
            {
                "L3": "L3"
            }
        },
        {
            "name": "L4",
            "code":"ch",
            "type":"checkbox",
            "choices":
            {
                "L4": "L4"
            }
        },
        {
            "name": "Processor",
            "code":"ch",
            "type":"checkbox",
            "choices":
            {
                "Processor": "Processor"
            }
        },
        {
            "name": "Net",
            "code":"ch",
            "type":"checkbox",
            "choices":
            {
                "Net": "Net"
            }
        },
        { 
            "name": "How fast can your robot move? (MPH)",
            "code": "wid",
            "type": "number",
            "defaultValue": "0"
        },
        { 
            "name": "Can climb on -",
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