var config_data = `
{
    "dataFormat": "tsv",
    "title": "Ra Cha Cha Ruckus",
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
            "defaultValue": "u"
        },
        {
            "name": "Total fuel scored",
            "code": "fuel",
            "type": "radio",
            "choices": {
                "1": "1 (poor effectiveness)<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5 (high effectiveness)"
            },
            "defaultValue": "1"
        },
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
            "name": "Did the robot dismount level 1 successfully?",
            "code": "dismount",
            "type": "radio",
            "choices": {
                "y": "Yes<br>",
                "n": "No"
            },
            "defaultValue": "n"
        }
    ],  
        
    "teleop": [
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
            "name": "During Inactive Hub shifts, did the robot defend?",
            "code": "behaviorrr",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot collect fuel from the Alliance zone?",
            "code": "zonefuelcollect",
            "type": "checkbox"
        },
        {    
            "name": "Did the robot collect fuel from the Opponent's zone?",
            "code": "zonefuelcollectt",
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
            "defaultValue": "y"
        },
        {    
            "name": "Did the robot collect fuel from the outpost chute?",
            "code": "fuelcollectt",
            "type": "checkbox"
        },
        {    
            "name": "How well did the robot's intake operate?",
            "code": "efficiency",
            "type": "radio",
            "choices": {
                "1": "1 (slow)<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5 (fast)"
            },
            "defaultValue": "1"
        },
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
                "3": "3<br>",
                "4": "4<br>",
                "5": "5(fast)"
            },
            "defaultValue": "1"
        },
        {    
            "name": "How accurate are the robot's shots?",
            "code": "shootaccuracy",
            "type": "radio",
            "choices": {
                "1": "1 (less than 20%)<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5 (more than 90%)"
            },
            "defaultValue": "1"
        },
        {    
            "name": "Does the robot shoot while moving or does it need to be stationary?",
            "code": "mobileshooting",
            "type": "radio",
            "choices": {
                "m": "Mobile<br>",
                "s": "Stationary<br>",
                "n": "Neither (broken down)<br>",
                "d": "Neither (defense)"
            },
            "defaultValue": "m"
        },
        {    
            "name": "How many fuel did the robot score?",
            "code": "scoringamt",
            "type": "radio",
            "choices": {
                "1": "1 (less than 5)<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5 (more than 50)"
            },
            "defaultValue": "1"
        }
        
    ],
    "endgame": [
        {    
            "name": "Did the robot attempt to climb?",
            "code": "climbattempt",
            "type": "radio",
            "choices": {
                "y": "Yes<br>",
                "n": "No"
            },
            "defaultValue": "n"
        },
        {    
            "name": "Was the robot successful at climbing, and if so, which level?",
            "code": "climbsuccess",
            "type": "radio",
            "choices": {
                "n": "Not attempted<br>",
                "a": "Attempted (but failed)<br>",
                "q": "Level 1<br>",
                "w": "Level 2<br>",
                "e": "Level 3"
            },
            "defaultValue": "n"
        }
        { 
            "name": "Comments",
            "code": "pco",
            "type": "text",
            "size": 20,
            "maxSize": 250
        }
    ]
}`;
