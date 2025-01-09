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
            "name": "Width",
            "code": "wid",
            "type": "number",
            "defaultValue": "0"
        },
        {   
            "name": "Weight",
            "code": "wei",
            "type": "number",
            "defaultValue": "0"
        },
        {   "name": "Drivetrain",
            "code": "drv",
            "type": "radio",
            "choices": {
                "s": "Swerve<br>",
                "w": "West Coast/Tank<br>",
                "b": "Butterfly/Grashopper<br>",
                "m": "Mechanum<br>",
                "o": "Other"
            },
            "defaultValue": "o"
        },
        {   
            "name": "Swerve Ratio",
            "code": "sr",
            "type": "radio",
            "choices": {
                "1": "L1 (8.14:1)<br>",
                "2": "L2 (6.75:1)<br>",
                "3": "L3 (6.12:1)<br>",
                "4": "L4 (5.14:1)<br>",
                "o": "Other ratio (put in comments)<br>",
                "x": "Not Swerve"
            },
            "defaultValue":"x"
        },
        { 
            "name": "Floor pickup Notes",
            "code": "fpu",
            "type": "bool"
        },
        { 
            "name": "Autos",
            "code": "aut",
            "type": "text",
            "size": 20,
            "maxSize": 250
        },
        { 
            "name": "Comments",
            "code": "co",
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