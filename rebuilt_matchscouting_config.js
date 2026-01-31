var config_data = `
{
    "dataFormat": "tsv",
    "title": "Fingerlakes Regional",
    "checkboxAs": "10",
    "prematch": [
        {
            "name": "Event",
            "code": "e",
            "type": "event",
            "defaultValue": "2026nyro",
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
        {  "name": "How much fuel did the robot start with?",
            "code": "startfuel",
            "type": "radio",
            "choices": 
            {
                "0": "0",
                "1": "1",  
                "2": "2",
                "3": "3",
                "4": "4",  
                "5": "5",  
                "6": "6",
                "7": "7",  
                "8": "8",    
            },
            "defaultValue": "0"
        
    ],
    "auton": [
        {  "name": "Robot Moved In Auto",
            "code": "auto",
            "type": "radio",
            "choices": 
            {
                "Yes": "Yes",
                "No (if picked, skip rest of auto period questions)": "No",  
            },
            "defaultValue": "Yes"
        
        {  "name": "A-Stop activated",
            "code": "a-stop",
            "type": "radio",
            "choices": 
            {
                "Yes": "Yes",
                "No": "No",  
                "Unsure": "Unsure",  
            },
            "defaultValue": "Unsure"
        
        {  "name": "Total Fuel Scored",
            "code": "fuel",
            "type": "radio",
            "choices": 
            {
                "1 (poor effectiveness)": "1",
                "2": "2",  
                "3": "3",
                "4": "4",  
                "5 (high effectiveness)": "5",
            },
            "defaultValue": "1 (poor effectiveness)"

        {  "name": "Where did the robot attempt to acquire more fuel?",
            "code": "acqfuel",
            "type": "checkbox",
            "choices": 
            {
                "Floor": "Floor",
                "Outpost": "Outpost",  
                "Depot": "Depot",
                "None (broken down)": "None",    
            },
            "defaultValue": "None"

        {  "name": "Climbing Attempted",
            "code": "climb",
            "type": "radio",
            "choices": 
            {
                "Yes": "Yes",
                "No": "No",     
            },
            "defaultValue": "No"
    
       {  "name": "Climbing Success (did the robot achieve Level 1?)",
            "code": "climbsuccess",
            "type": "radio",
            "choices": 
            {
                "Yes": "Yes",
                "No": "No",     
            },
            "defaultValue": "No"
       
        {  "name": "Climbing Dismount (did the robot dismount Level 1 successfully?)",
            "code": "dismount",
            "type": "radio",
            "choices": 
            {
                "Yes": "Yes",
                "No": "No",     
            },
            "defaultValue": "No"

    ],
    "teleop": [

        // find out right order for active/inactive shifts
        
        {   "name": "Are you in an active or inactive shift?",
            "code": "shifttype",
            "type": "radio",
            "choices": 
            {
                "Active": "Active",
                "Inactive": "Inactive",     
            },
            "defaultValue": "Active"

        {   "name": "Inactive Hub Shift Behavior",
            "code": "behavior",
            "type": "checkbox",
            "choices": 
            {
                "Collect": "Collect",
                "Pass": "Pass",
                "Defense": "Defense",
                "None (ineffective or broken down)": "None (ineffective or broken down)",     
            },
            "defaultValue": "None (ineffective or broken down)"
            
        {   "name": "Inactive Hub Fuel Collection Area",
            "code": "fuelcollect",
            "type": "checkbox",
            "choices": 
            {
                "Alliance's": "Alliance's",
                "Neutral": "Neutral",
                "Opponent's": "Opponent's",
                "None (broken down)": "None (broken down)",
                "None (defense)": "None (defense)",     
            },
            "defaultValue": "Alliance's"
        
        {   "name": "Intake Versatility",
            "code": "versatility",
            "type": "checkbox",
            "choices": 
            {
                "Floor": "Floor",
                "Outpost Chute": "Outpost Chute",
                "Both": "Both",
                "Neither": "Neither",  
            },
            "defaultValue": "Neither"
            
        {   "name": "Intake Efficiency",
            "code": "efficiency",
            "type": "radio",
            "choices": 
            {
                "1 (slow)": "1 (slow)",
                "2": "2",
                "3": "3",
                "4": "4", 
                "5 (fast)": "5 (fast)", 
            },
            "defaultValue": "1 (slow)"
        
        
        {   "name": "Cycle Time (time to collect payload and shoot)",
            "code": "cyctime",
            "type": "radio",
            "choices": 
            {
                "1 (slow)": "1 (slow)",
                "2": "2",
                "3": "3",
                "4": "4", 
                "5 (immediate)": "5 (immediate)", 
            },
            "defaultValue": "1 (slow)"
        
        {
            "name": "Dropped Game Pieces",
            "code": "tdp",
            "type": "counter"
        }
        
    ],
    "endgame": [
        {   "name": "Climbing Attempted During Endgame",
            "code": "climbingend",
            "type": "radio",
            "choices": 
            {
                "Yes": "Yes",
                "No": "No",     
            },
            "defaultValue": "No"

        {   "name": "Climbing Success During Endgame",
            "code": "climbsuccess",
            "type": "radio",
            "choices": 
            {
                "Not attempted": "Not attempted",
                "Unsuccessful attempt": "Unsuccessful attempt",
                "Level 1": "Level 1",
                "Level 2": "Level 2", 
                "Level 3": "Level 3", 
            },
            "defaultValue": "Not attempted"
    ],
    
    "postmatch": [
        {
            "name": "Win or Lose",
            "code": "wl",
            "type": "radio",
            "choices": {
                "w": "Win<br>",
                "l": "Lose<br>",
                "t": "Tie<br>"
            },
            "defaultValue": "w"
        },
        {
            "name": "Auto Ranking Point",
            "code": "arp",
            "type": "checkbox"
        },
        {
            "name": "Barge Ranking Point",
            "code": "brp",
            "type": "checkbox"
        },
        {
            "name": "Immobilized",
            "code": "i",
            "type": "checkbox"
        },
        {
            "name": "Make a good<br>alliance partner?",
            "tooltip": "Would you want this robot on your alliance in playoffs?",
            "code": "all",
            "type": "checkbox"
        }
    ]
}`;
