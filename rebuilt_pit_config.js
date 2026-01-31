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
                "nm":"Next Match<br>",
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
            "name": "What kind of wheels do they use?",
            "code": "drivetrain",
            "type": "radio",
            "choices": 
            {
                "t": "Tank",
                "s": "Swerve",  
                "m": "Mecanum",
                "o": "Other"
            },
            "defaultValue": "t"
        },
        { 
            "name": "Does your robot look able to go under the trench or over the bump?",
            "code": "dimensions",
            "type": "radio",
            "choices": 
            {
                "b": "Bump",
                "tr": "Trench",  
                "both": "Both",
                "n": "Neither (broken down)"
            },
            "defaultValue": "b"
        },
        { 
            "name": "Does your robot have a large, medium or small payload capacity?",
            "code": "payloadcapacity",
            "type": "radio",
            "choices": 
            {
                "sm": "≤ 15 (small)",
                "med": "15<x<30 (medium)",  
                "lar": "≥ 30 (large)",
            },
            "defaultValue": "sm"
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