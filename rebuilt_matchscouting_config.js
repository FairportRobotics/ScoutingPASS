var config_data = `
{
    "dataFormat": "tsv",
    "title": "2026 Rebuilt Competition",
    "checkboxAs": "10",
    "prematch": [
        {
            "name": "Event",
            "code": "e",
            "type": "event",
            "defaultValue": "2026ohmv",
            "required": "true"
        },
        {
            "name": "Scouter Pin",
            "code": "s",
            "type": "scouter",
            "size": 5,
            "maxSize": 5,
            "required": "true"
        },
        {
            "name": "Match #",
            "code": "m",
            "type": "match",
            "min": 1,
            "max": 150,
            "required": "true"
        },
        {
            "name": "Robot",
            "code": "r",
            "type": "robot",
            "choices": {
                "Red-1": "Red-1",
                "Blue-1": "Blue-1<br>",
                "Red-2": "Red-2",
                "Blue-2": "Blue-2<br>",
                "Red-3": "Red-3",
                "Blue-3": "Blue-3"
            },
            "required": "true",
            "defaultValue": "Red-1"
        },
        {
            "name": "Team #",
            "code": "t",
            "type": "team",
            "min": 1,
            "max": 99999,
            "required": "true"
        }
    ],
    "auton": [
        {
            "name": "Was climbing attempted?",
            "code": "climb",
            "type": "radio",
            "choices": {
                "1": "Yes<br>",
                "0": "No"
            },
            "defaultValue": "0"
        },
        {
            "name": "Robot moved in auto",
            "code": "auto",
            "type": "radio",
            "choices": {
                "1": "Yes<br>",
                "0": "No"
            },
            "defaultValue": "0"
        },
        {
            "name": "A-stop activated",
            "code": "a-stop",
            "type": "radio",
            "choices": {
                "-1": "Yes<br>",
                "1": "No<br>",
                "0": "Unsure"
            },
            "defaultValue": "0"
        },
        {
            "name": "Total Fuel scored",
            "code": "fuel",
            "type": "radio",
            "choices": {
                "1": "1 (0-1 Fuel)<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5 (15 or more Fuel)"
            },
            "defaultValue": "1"
        }
    ],  
        
    "teleop": [
        {    
            "name": "How fast can the robot shoot Fuel?",
            "code": "shootspeed",
            "type": "radio",
            "choices": {
                "1": "1(slow)<br>",
                "2": "2<br>",
                "3": "3(fast)"
            },
            "defaultValue": "2"
        },
        {    
            "name": "How accurate are the robot's shots?",
            "code": "shootaccuracy",
            "type": "radio",
            "choices": {
                "1": "1 (less than 30%)<br>",
                "2": "2<br>",
                "3": "3 (more than 80%)"
            },
            "defaultValue": "2"
        },
        {    
            "name": "How many Fuel did the robot score?",
            "code": "scoringamt",
            "type": "radio",
            "choices": {
                "1": "1 (Not many)<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5 (A lot!)"
            },
            "defaultValue": "3"
        },
        {
            "name": "During Inactive Hub shifts, did the robot collect Fuel?",
            "code": "behavior",
            "type": "checkbox"
        },
        {
            "name": "During Inactive Hub shifts, did the robot pass Fuel?",
            "code": "behaviorr",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot collect Fuel from the Alliance zone?",
            "code": "zonefuelcollect",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot travel over the Bump?",
            "code": "travbump",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot travel under the Trench?",
            "code": "travtrench",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot collect Fuel from the Neutral zone?",
            "code": "zonefuelcollecttt",
            "type": "checkbox"
        },
        {    
            "name": "Was the robot's intake good?",
            "code": "efficiency",
            "type": "radio",
            "choices": {
                "1": "Yes<br>",
                "0": "No"
            },
            "defaultValue": "0"
        }
    ],
    "endgame": [
        {
            "name": "Was the Robot defensive the entire game?",
            "code": "deftance",
            "type": "checkbox"
        },
        {
            "name": "Did robot shoot from approximately the same position?",
            "code": "shootpos",
            "type": "checkbox"
        },
        {
            "name": "Grade the robot's performance",
            "code": "grayden",
            "type": "radio",
            "choices": {
                "-1": "Bad<br>",
                "1": "Decent<br>",
                "2": "Mediocre<br>",
                "3": "Good<br>",
                "4": "Amazing<br>"
            },
            "defaultValue": "2"
        }

    ],
    "postmatch": [
        {    
            "name": "What was the result of the match?",
            "code": "result",
            "type": "radio",
            "choices": {
                "1": "Win<br>",
                "-1": "Lose<br>",
                "0": "Tie"
            },
            "defaultValue": "0"
        },
        {
            "name": "Energized Ranking Point",
            "code": "energized",
            "type": "checkbox"
        },
        {
            "name": "Supercharged Ranking Point",
            "code": "supercharged",
            "type": "checkbox"
        },
        {
            "name": "Traversal Ranking Point",
            "code": "traversal",
            "type": "checkbox"
        },
        { 
            "name": "Team Points Scored Total",
            "code": "totalpts",
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
    ]
}`;
