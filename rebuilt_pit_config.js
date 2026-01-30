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
        },
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
        },
        {   "name": "Estimated Payload Capacity",
            "code": "payload",
            "type": "radio",
            "choices": 
            {
                "≤15 is small": "≤15 is small",
                "15<x<30 medium": "15<x<30 medium",  
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