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
            "name": "Width(In)",
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
            "code":"ch",
            "type":"checkbox"

            
        },
        {
            "name": "L3",
            "code":"ch",
            "type":"checkbox"

            
        },
        {
            "name": "L4",
            "code":"ch",
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
                "None": "Neither",
                "Shallow": "Shallow Cage",
                "Deep": "Deep Cage",
                "Both": "Both"
            }
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