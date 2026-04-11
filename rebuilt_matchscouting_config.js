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
            "defaultValue": "2026nytr",
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
            "name": "Robot moved in auto",
            "code": "a-moved",
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
            "code": "a-fuel",
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
            "code": "t=shootspeed",
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
            "code": "t-shootaccuracy",
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
            "code": "t-scoringamt",
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
            "name": "Did the robot collect Fuel from the Neutral Zone?",
            "code": "t-collectneutral",
            "type": "checkbox"
        },
        {
            "name": "Did the robot collect Fuel from the opposing Alliance Zone?",
            "code": "t-collectopposingalliance",
            "type": "checkbox"
        },        
        {
            "name": "Did the robot relay Fuel?",
            "code": "t-relay",
            "type": "checkbox"
        },
        {
            "name": "Did the robot bulldoze Fuel?",
            "code": "t-bulldozw",
            "type": "checkbox"
        },
        {    
            "name": "Was the robot's intake good?",
            "code": "t-intake",
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
            "name": "Was the Robot playing defense the entire game?",
            "code": "e-defense",
            "type": "checkbox"
        },
        {
            "name": "Did robot shoot from approximately the same position during the match?",
            "code": "e-shootposition",
            "type": "checkbox"
        },
        {
            "name": "Grade the robot's performance",
            "code": "e-performance",
            "type": "radio",
            "choices": {
                "1": "Bad<br>",
                "2": "Decent<br>",
                "3": "Mediocre<br>",
                "4": "Good<br>",
                "5": "Amazing"
            },
            "defaultValue": "3"
        }
    ],

    "postmatch": [
        {    
            "name": "What was the result of the match?",
            "code": "p-result",
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
            "code": "p-energized",
            "type": "checkbox"
        },
        {
            "name": "Supercharged Ranking Point",
            "code": "p-supercharged",
            "type": "checkbox"
        },
        {
            "name": "Traversal Ranking Point",
            "code": "p-traversal",
            "type": "checkbox"
        },
        { 
            "name": "Team Points Scored Total",
            "code": "p-totalpts",
            "type": "text",
            "size": 20,
            "maxSize": 4
        },
        { 
            "name": "Comments (mandatory key points)",
            "code": "p-comments",
            "type": "textarea",
            "rows": 10,
            "cols": 40,
            "maxSize": 1024
        }
    ]
}`;
