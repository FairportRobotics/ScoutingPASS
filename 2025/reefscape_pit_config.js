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
            "name": "Floor Pickup Coral",
            "code": "fpu",
            "type": "bool"
        },
        { 
            "name": "Autos",
            "code": "aut",
            "type": "bool"
        },
        {
            "name": "Can you create new Auto's between matches",
            "code": "nwa",
            "type": "bool"
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