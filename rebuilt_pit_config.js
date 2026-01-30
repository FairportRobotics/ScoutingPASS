var config_data = `
{
    "dataFormat": "tsv",
    "title": "Scouting PASS 2026",
    "page_title": "Rebuilt",
    "pitConfig": "true",
    "prematch": [   
        { 
            "name": "Team Number",
            "code": "t",
            "type": "number"
        },
        {
            "name": "What is your robot's<br>Drag coefficient?",
            "code": "Drag",
            "type": "text"
        },
        {
            "name": "Does robot function?",
            "code": "func",
            "type": "checkbox"
        },
        {
            "name": "If not, when will it?",
            "code": "feta",
            "type":"radio",
            "choices":
            {
                "nm":"Next Match",
                "soon":"1-2 Hours<br>",
                "No":"Never"
            },
            "defaultValue":"Currently"
        },
        { 
            "name": "Width (Inch)",
            "code": "wid",
            "type": "number"
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
            "name": "Drivetrain Type",
            "code": "wheels",
            "type": "radio",
            "choices": 
            {
                "Tank": "Tank",
                "Swerve": "Swerve",  
                "Mecanum": "Mecanum",
                "Other": "Other"
                // Put new text box if "other" is picked
            },
            "defaultValue": "Tank"

        {   "name": "Dimensions",
            "code": "dimensions",
            "type": "radio",
            "choices": 
            {
                "Bump": "Bump",
                "Trench": "Trench",  
                "Both": "Both",
                "Neither": "Neither"
            },
            "defaultValue": "Bump"

        {   "name": "Estimated Payload Capacity",
            "code": "payload",
            "type": "radio",
            "choices": 
            {
                "≤15 is small": "≤15 is small",
                "15<x<30": "15<x<30",  
                "≥30 is large": "≥30 is large",
            },
            "defaultValue": "≤15 is small"
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