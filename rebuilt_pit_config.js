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
            "code": "width",
            "type": "number"
        },
        {
            "name": "Height (Inch)",
            "code": "height",
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
            "name": "Is your robot able to go under the trench or over the bump?",
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
            "name": "Does the robot shoot while moving or does it need to be stationary?",
            "code": "mobileshooting",
            "type": "radio",
            "choices": 
            {
                "m": "Mobile<br>",
                "s": "Stationary<br>",
                "n": "Neither (defense)"
            },
            "defaultValue": "s"
        },
        { 
            "name": "Does your robot have a large, medium or small payload capacity?",
            "code": "payloadcapacity",
            "type": "radio",
            "choices": 
            {
                "sm": "less than 15 (small)",
                "med": "Between 15 and 30 (medium)",  
                "lar": "More than 30 (large)"
            },
            "defaultValue": "sm"
        },
        {
            "name": "If your robot had a favorite color, what would it be?",
            "code": "colorquest",
            "type": "text",
            "size": 20,
            "maxSize": 250
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
