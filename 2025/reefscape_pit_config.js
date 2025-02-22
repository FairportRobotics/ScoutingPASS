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
            "name": "Width(inch)",
            "code": "wid",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Can score on - L1",
            "code":"ch",
            "type":"checkbox"
            
        },
        {
            "name": "L2",
            "code":"l2",
            "type":"checkbox"

            
        },
        {
            "name": "L3",
            "code":"l3",
            "type":"checkbox"

            
        },
        {
            "name": "L4",
            "code":"l4",
            "type":"checkbox"
            
        },
        {
            "name": "Processor",
            "code":"ch",
            "type":"checkbox"
        },
        {
            "name": "Net",
            "code":"ch",
            "type":"checkbox"
        },
        { 
            "name": "Can climb on -",
            "code": "fpu",
            "type": "radio",
            "choices": 
            {
                "Shallow": "Shallow Cage",
                "Deep": "Deep Cage"
            },
            "defaultValue": "Shallow Cage"
        },
        {
            "name": "Can you remove algae from the reef",
            "code": "rva",
            "type": "checkbox"
        },
        { 
            "name": "Comments",
            "code": "pco",
            "type": "text",
            "size": 20,
            "maxSize": 250
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