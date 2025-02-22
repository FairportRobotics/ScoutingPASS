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
            "code":"L1",
            "type":"checkbox"
            
        },
        {
            "name": "L2",
            "code":"L2",
            "type":"checkbox"

            
        },
        {
            "name": "L3",
            "code":"L3",
            "type":"checkbox"

            
        },
        {
            "name": "L4",
            "code":"L4",
            "type":"checkbox"
            
        },
        {
            "name": "Processor",
            "code":"Pr",
            "type":"checkbox"
        },
        {
            "name": "Net",
            "code":"Net",
            "type":"checkbox"
        },
        { 
            "name": "Can climb on -",
            "code": "fpu",
            "type": "radio",
            "choices": 
            {
                "Shallow": "Shallow",
                "Deep": "Deep",  
                "Both": "Both",
                "None": "None"
            },
            "defaultValue": "None"
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