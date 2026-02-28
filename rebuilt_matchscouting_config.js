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
            "defaultValue": "2025nyrr",
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
            "max": 99999
        }
    ],
    "auton": [
        {    
            "name": "Did the robot attempt to pick up fuel from the floor?",
            "code": "acqfuel",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot attempt to pick up fuel from the outpost?",
            "code": "acqfuell",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot attempt to pick up fuel from the depot?",
            "code": "acqfuelll",
            "type": "checkbox"
        },
        {
            "name": "Was climbing attempted?",
            "code": "climb",
            "type": "radio",
            "choices": {
                "y": "Yes<br>",
                "n": "No"
            },
            "defaultValue": "n"
        },
        {    
            "name": "Did the robot achieve level 1?",
            "code": "climbsuccess",
            "type": "radio",
            "choices": {
                "y": "Yes<br>",
                "n": "No"
            },
            "defaultValue": "n"
        },
        {
            "name": "Robot moved in auto",
            "code": "auto",
            "type": "radio",
            "choices": {
                "y": "Yes<br>",
                "n": "No"
            },
            "defaultValue": "n"
        },
        {
            "name": "A-stop activated",
            "code": "a-stop",
            "type": "radio",
            "choices": {
                "y": "Yes<br>",
                "n": "No<br>",
                "u": "Unsure"
            },
            "defaultValue": "n"
        },
        {
            "name": "Total fuel scored",
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
            "name": "How long does it take for the robot to shoot after intake?",
            "code": "cycletime",
            "type": "radio",
            "choices": {
                "1": "1 (slow)<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5 (immediate)"
            },
            "defaultValue": "1"
        },
        {    
            "name": "Did the robot use the bump and/or trench?",
            "code": "bumptrench",
            "type": "radio",
            "choices": {
                "b": "Bump<br>",
                "t": "Trench<br>",
                "v": "Both<br>",
                "n": "Neither (broken down)"
            },
            "defaultValue": "n"
        },
        {    
            "name": "How fast can the robot shoot fuel?",
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
            "name": "Does the robot shoot while moving or does it need to be stationary?",
            "code": "mobileshooting",
            "type": "radio",
            "choices": {
                "m": "Mobile<br>",
                "s": "Stationary<br>",
                "n": "Neither (defense)"
            },
            "defaultValue": "s"
        },
        {    
            "name": "How many fuel did the robot score?",
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
            "name": "During Inactive Hub shifts, did the robot collect fuel?",
            "code": "behavior",
            "type": "checkbox"
        },
        {
            "name": "During Inactive Hub shifts, did the robot pass fuel?",
            "code": "behaviorr",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot collect fuel from the Alliance zone?",
            "code": "zonefuelcollect",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot collect fuel from the Neutral zone?",
            "code": "zonefuelcollecttt",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot collect fuel from the floor?",
            "code": "fuelcollect",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot collect fuel from the outpost chute?",
            "code": "fuelcollectt",
            "type": "checkbox"
        },
        {    
            "name": "Was the robot's intake good?",
            "code": "efficiency",
            "type": "radio",
            "choices": {
                "y": "Yes<br>",
                "n": "No"
            },
            "defaultValue": "n"
        }
    ],
    "endgame": [
        {    
            "name": "Did the robot attempt to climb? Was it sucessful? What Level?",
            "code": "climbattempt",
            "type": "radio",
            "choices": {
                "nat": "Not attempted<br>",
                "a": "Attempted (but failed)<br>",
                "q": "Level 1<br>",
                "w": "Level 2<br>",
                "e": "Level 3"
            },
            "defaultValue": "nat"
        },
        {
            "name": "Was the Robot defensive the entire game?",
            "code": "deftance",
            "type": "checkbox"
        },
        {
            "name": "Did the robot continue to shoot until the end of the match?",
            "code": "shooteth",
            "type": "checkbox"
        },
        {
            "name": "Grade the robot's performance",
            "code": "grayden",
            "type": "radio",
            "choices": {
                "b": "Bad<br>",
                "m": "Mediocre<br>",
                "g": "Good"
            },
            "defaultValue": "m"
        }

    ],
    "postmatch": [
        {    
            "name": "What was the result of the match?",
            "code": "result",
            "type": "radio",
            "choices": {
                "w": "Win<br>",
                "l": "Lose<br>",
                "tie": "Tie"
            },
            "defaultValue": "tie"
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
