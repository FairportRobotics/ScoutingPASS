// ScoutingPASS.js
//
// The guts of the ScountingPASS application
// Written by Team 2451 - PWNAGE

document.addEventListener("touchstart", startTouch, false);
//document.addEventListener("touchend", moveTouch, false);

// Prevent the default action associated with the double-click
let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (event) {
    let now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      // 300ms threshold for double-tap
      event.preventDefault(); // Prevent zoom
    }
    lastTouchEnd = now;
  },
  false
);


// Swipe Up / Down / Left / Right
var initialX = null;
var xThreshold = 0.3;
var slide = 0;
var enableGoogleSheets = false;
var pitScouting = false;
var checkboxAs = "YN";

// Options
var options = {
  correctLevel: QRCode.CorrectLevel.L,
  quietZone: 15,
  quietZoneColor: "#FFFFFF",
};

const pins = {
    "0446": "Abyss Mortimer",
    "1665": "Alex Phillip",
    "7789": "Amanah Obaji",
    "1587": "Andrew McCadden",
    "6938": "Ariana Toner",
    "9792": "Asher Stuckey",
    "1893": "Autumn Schoenfeld",
    "5798": "Brandon Bates",
    "2718": "Carter Silva",
    "3741": "Celton Norter",
    "0203": "Colby Jackson",
    "4792": "Colden Stubbe",
    "0722": "Connor Toper",
    "9519": "Dean Blanchard",
    "0686": "Domenic Giammusso",
    "2033": "Greydon Jones-Dulisse",
    "4370": "Hamza Keles",
    "6563": "Jacob LeBlanc",
    "1853": "Jacob Wyrozebski",
    "4527": "Jesse White",
    "8423": "Jonah Woika",
    "4232": "Jonathan Brouillard",
    "4621": "Jordan Fenton",
    "1224": "Kai Hurrell",
    "4930": "Kai Wilbur",
    "4511": "Maddie DeCicca",
    "1307": "Mason Silva",
    "2106": "Matthew Mazzota",
    "7144": "Nanson Chen",
    "4205": "Nicholas Munier",
    "2194": "Ruthie Christensen",
    "0910": "Shawn Estrich",
    "5679": "Siena Reeve",
    "9960": "Simon Stuckey",
    "1033": "TJ Blake",
    "8822": "Tyler Hignett"
}

const eventMatches = [
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8243",
          "frc1518",
          "frc340"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8140",
          "frc1511",
          "frc1559"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm1",
    "match_number": 1,
    "post_result_time": null,
    "predicted_time": 1741956600,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741956600,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6621",
          "frc1518",
          "frc3181"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3003",
          "frc3171",
          "frc271"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm10",
    "match_number": 10,
    "post_result_time": null,
    "predicted_time": 1741960920,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741960920,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3004",
          "frc1591",
          "frc3173"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc4930",
          "frc7903",
          "frc8243"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm11",
    "match_number": 11,
    "post_result_time": null,
    "predicted_time": 1741961400,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741961400,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2614",
          "frc1559",
          "frc3044"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc9643",
          "frc533",
          "frc3951"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm12",
    "match_number": 12,
    "post_result_time": null,
    "predicted_time": 1741961880,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741961880,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc424",
          "frc20",
          "frc2010"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2340",
          "frc3015",
          "frc1585"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm13",
    "match_number": 13,
    "post_result_time": null,
    "predicted_time": 1741962360,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741962360,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc695",
          "frc229",
          "frc8140"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2228",
          "frc639",
          "frc1787"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm14",
    "match_number": 14,
    "post_result_time": null,
    "predicted_time": 1741962840,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741962840,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc10223",
          "frc8393",
          "frc191"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1308",
          "frc9622",
          "frc6911"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm15",
    "match_number": 15,
    "post_result_time": null,
    "predicted_time": 1741963320,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741963320,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1511",
          "frc7165",
          "frc5881"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3799",
          "frc4611",
          "frc564"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm16",
    "match_number": 16,
    "post_result_time": null,
    "predicted_time": 1741963800,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741963800,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3838",
          "frc1405",
          "frc1507"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc250",
          "frc2252",
          "frc340"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm17",
    "match_number": 17,
    "post_result_time": null,
    "predicted_time": 1741964280,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741964280,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6868",
          "frc1126",
          "frc578"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc378",
          "frc5590",
          "frc2791"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm18",
    "match_number": 18,
    "post_result_time": null,
    "predicted_time": 1741964760,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741964760,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3003",
          "frc3951",
          "frc424"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2010",
          "frc271",
          "frc7903"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm19",
    "match_number": 19,
    "post_result_time": null,
    "predicted_time": 1741965240,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741965240,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3181",
          "frc20",
          "frc533"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3004",
          "frc4930",
          "frc6621"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm2",
    "match_number": 2,
    "post_result_time": null,
    "predicted_time": 1741957080,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741957080,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3015",
          "frc639",
          "frc229"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1559",
          "frc3171",
          "frc3173"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm20",
    "match_number": 20,
    "post_result_time": null,
    "predicted_time": 1741965720,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741965720,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8393",
          "frc2228",
          "frc2614"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1787",
          "frc6621",
          "frc2340"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm21",
    "match_number": 21,
    "post_result_time": null,
    "predicted_time": 1741966200,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741966200,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1591",
          "frc9643",
          "frc9622"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc4611",
          "frc3181",
          "frc1511"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm22",
    "match_number": 22,
    "post_result_time": null,
    "predicted_time": 1741966680,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741966680,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc695",
          "frc1308",
          "frc1518"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3838",
          "frc564",
          "frc20"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm23",
    "match_number": 23,
    "post_result_time": null,
    "predicted_time": 1741967160,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741967160,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc5590",
          "frc6911",
          "frc10223"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1405",
          "frc3004",
          "frc3044"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm24",
    "match_number": 24,
    "post_result_time": null,
    "predicted_time": 1741967640,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741967640,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc533",
          "frc8243",
          "frc2791"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc7165",
          "frc378",
          "frc2252"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm25",
    "match_number": 25,
    "post_result_time": null,
    "predicted_time": 1741971600,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741971600,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc578",
          "frc4930",
          "frc250"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8140",
          "frc1585",
          "frc6868"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm26",
    "match_number": 26,
    "post_result_time": null,
    "predicted_time": 1741972080,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741972080,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc5881",
          "frc1126",
          "frc3799"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1507",
          "frc340",
          "frc191"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm27",
    "match_number": 27,
    "post_result_time": null,
    "predicted_time": 1741972560,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741972560,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1559",
          "frc229",
          "frc7903"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2010",
          "frc6621",
          "frc4611"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm28",
    "match_number": 28,
    "post_result_time": null,
    "predicted_time": 1741973040,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741973040,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8393",
          "frc1308",
          "frc9643"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc271",
          "frc3173",
          "frc639"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm29",
    "match_number": 29,
    "post_result_time": null,
    "predicted_time": 1741973520,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741973520,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2340",
          "frc3173",
          "frc9622"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc250",
          "frc271",
          "frc695"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm3",
    "match_number": 3,
    "post_result_time": null,
    "predicted_time": 1741957560,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741957560,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2340",
          "frc2228",
          "frc3838"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3951",
          "frc1511",
          "frc3004"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm30",
    "match_number": 30,
    "post_result_time": null,
    "predicted_time": 1741974000,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741974000,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6911",
          "frc533",
          "frc1787"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3015",
          "frc5590",
          "frc1518"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm31",
    "match_number": 31,
    "post_result_time": null,
    "predicted_time": 1741974480,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741974480,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3171",
          "frc8243",
          "frc2252"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc20",
          "frc250",
          "frc1585"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm32",
    "match_number": 32,
    "post_result_time": null,
    "predicted_time": 1741974960,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741974960,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc9622",
          "frc5881",
          "frc340"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc4930",
          "frc6868",
          "frc378"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm33",
    "match_number": 33,
    "post_result_time": null,
    "predicted_time": 1741975440,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741975440,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc7165",
          "frc3003",
          "frc564"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc10223",
          "frc8140",
          "frc1591"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm34",
    "match_number": 34,
    "post_result_time": null,
    "predicted_time": 1741975920,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741975920,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1405",
          "frc191",
          "frc695"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2614",
          "frc2791",
          "frc1507"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm35",
    "match_number": 35,
    "post_result_time": null,
    "predicted_time": 1741976400,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741976400,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc578",
          "frc3799",
          "frc3181"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1126",
          "frc3044",
          "frc424"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm36",
    "match_number": 36,
    "post_result_time": null,
    "predicted_time": 1741976880,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741976880,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc639",
          "frc9643",
          "frc2340"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1518",
          "frc7903",
          "frc533"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm37",
    "match_number": 37,
    "post_result_time": null,
    "predicted_time": 1741977360,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741977360,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2010",
          "frc2228",
          "frc3951"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc250",
          "frc4611",
          "frc1308"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm38",
    "match_number": 38,
    "post_result_time": null,
    "predicted_time": 1741977840,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741977840,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6621",
          "frc1559",
          "frc8243"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc4930",
          "frc5590",
          "frc5881"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm39",
    "match_number": 39,
    "post_result_time": null,
    "predicted_time": 1741978320,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741978320,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2791",
          "frc7903",
          "frc3003"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3044",
          "frc5881",
          "frc3171"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm4",
    "match_number": 4,
    "post_result_time": null,
    "predicted_time": 1741958040,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741958040,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1787",
          "frc378",
          "frc271"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2252",
          "frc564",
          "frc1591"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm40",
    "match_number": 40,
    "post_result_time": null,
    "predicted_time": 1741978800,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741978800,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1507",
          "frc8140",
          "frc3004"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2791",
          "frc8393",
          "frc3015"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm41",
    "match_number": 41,
    "post_result_time": null,
    "predicted_time": 1741979280,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741979280,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6911",
          "frc3181",
          "frc229"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc578",
          "frc340",
          "frc3838"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm42",
    "match_number": 42,
    "post_result_time": null,
    "predicted_time": 1741979760,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741979760,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3171",
          "frc424",
          "frc3799"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2614",
          "frc10223",
          "frc9622"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm43",
    "match_number": 43,
    "post_result_time": null,
    "predicted_time": 1741980240,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741980240,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1585",
          "frc3044",
          "frc1511"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3173",
          "frc6868",
          "frc695"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm44",
    "match_number": 44,
    "post_result_time": null,
    "predicted_time": 1741980720,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741980720,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc191",
          "frc1126",
          "frc7165"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc20",
          "frc1405",
          "frc3003"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm45",
    "match_number": 45,
    "post_result_time": null,
    "predicted_time": 1741981200,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741981200,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc5590",
          "frc1559",
          "frc4611"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc271",
          "frc2252",
          "frc2340"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm46",
    "match_number": 46,
    "post_result_time": null,
    "predicted_time": 1741981680,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741981680,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3015",
          "frc3951",
          "frc4930"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2791",
          "frc1308",
          "frc6621"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm47",
    "match_number": 47,
    "post_result_time": null,
    "predicted_time": 1741982160,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741982160,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc7903",
          "frc3181",
          "frc250"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc564",
          "frc6911",
          "frc8393"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm48",
    "match_number": 48,
    "post_result_time": null,
    "predicted_time": 1741982640,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741982640,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc5881",
          "frc578",
          "frc2614"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc9622",
          "frc3838",
          "frc1518"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm49",
    "match_number": 49,
    "post_result_time": null,
    "predicted_time": 1741983120,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741983120,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3951",
          "frc2614",
          "frc1126"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1591",
          "frc6911",
          "frc1585"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm5",
    "match_number": 5,
    "post_result_time": null,
    "predicted_time": 1741958520,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741958520,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3799",
          "frc340",
          "frc1591"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc424",
          "frc695",
          "frc533"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm50",
    "match_number": 50,
    "post_result_time": null,
    "predicted_time": 1741983600,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741983600,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3003",
          "frc6868",
          "frc10223"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8243",
          "frc1787",
          "frc9643"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm51",
    "match_number": 51,
    "post_result_time": null,
    "predicted_time": 1741984080,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741984080,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3004",
          "frc1585",
          "frc7165"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc191",
          "frc1511",
          "frc639"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm52",
    "match_number": 52,
    "post_result_time": null,
    "predicted_time": 1741984560,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741984560,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3173",
          "frc2010",
          "frc8140"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1126",
          "frc1405",
          "frc3171"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm53",
    "match_number": 53,
    "post_result_time": null,
    "predicted_time": 1741985040,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741985040,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3044",
          "frc378",
          "frc20"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc229",
          "frc1507",
          "frc2228"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm54",
    "match_number": 54,
    "post_result_time": null,
    "predicted_time": 1741985520,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741985520,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc7903",
          "frc3951",
          "frc1308"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3181",
          "frc2252",
          "frc5590"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm55",
    "match_number": 55,
    "post_result_time": null,
    "predicted_time": 1741986000,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741986000,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc424",
          "frc1591",
          "frc2791"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1559",
          "frc3838",
          "frc3799"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm56",
    "match_number": 56,
    "post_result_time": null,
    "predicted_time": 1741986480,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741986480,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc533",
          "frc250",
          "frc3015"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc695",
          "frc10223",
          "frc5881"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm57",
    "match_number": 57,
    "post_result_time": null,
    "predicted_time": 1741986960,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741986960,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc4611",
          "frc3003",
          "frc2614"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc340",
          "frc3004",
          "frc639"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm58",
    "match_number": 58,
    "post_result_time": null,
    "predicted_time": 1741987440,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741987440,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1787",
          "frc3171",
          "frc8393"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1511",
          "frc578",
          "frc1405"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm59",
    "match_number": 59,
    "post_result_time": null,
    "predicted_time": 1741987920,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741987920,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc9643",
          "frc191",
          "frc2252"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2228",
          "frc424",
          "frc3015"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm6",
    "match_number": 6,
    "post_result_time": null,
    "predicted_time": 1741959000,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741959000,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8140",
          "frc191",
          "frc6621"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc378",
          "frc9643",
          "frc3173"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm60",
    "match_number": 60,
    "post_result_time": null,
    "predicted_time": 1742043000,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742043000,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6868",
          "frc271",
          "frc6911"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1507",
          "frc7165",
          "frc20"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm61",
    "match_number": 61,
    "post_result_time": null,
    "predicted_time": 1742043480,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742043480,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1518",
          "frc2010",
          "frc564"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3044",
          "frc4930",
          "frc2228"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm62",
    "match_number": 62,
    "post_result_time": null,
    "predicted_time": 1742043960,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742043960,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8243",
          "frc2340",
          "frc229"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1585",
          "frc9622",
          "frc1126"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm63",
    "match_number": 63,
    "post_result_time": null,
    "predicted_time": 1742044440,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742044440,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc7903",
          "frc10223",
          "frc3004"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc340",
          "frc695",
          "frc1559"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm64",
    "match_number": 64,
    "post_result_time": null,
    "predicted_time": 1742044920,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742044920,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc639",
          "frc2791",
          "frc250"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc5590",
          "frc424",
          "frc1511"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm65",
    "match_number": 65,
    "post_result_time": null,
    "predicted_time": 1742045400,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742045400,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3173",
          "frc3015",
          "frc4611"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3181",
          "frc2614",
          "frc378"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm66",
    "match_number": 66,
    "post_result_time": null,
    "predicted_time": 1742045880,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742045880,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc5881",
          "frc20",
          "frc9643"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3951",
          "frc1787",
          "frc578"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm67",
    "match_number": 67,
    "post_result_time": null,
    "predicted_time": 1742046360,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742046360,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6911",
          "frc1518",
          "frc1507"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1591",
          "frc2010",
          "frc1308"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm68",
    "match_number": 68,
    "post_result_time": null,
    "predicted_time": 1742046840,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742046840,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2252",
          "frc8393",
          "frc4930"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1126",
          "frc229",
          "frc3003"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm69",
    "match_number": 69,
    "post_result_time": null,
    "predicted_time": 1742047320,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742047320,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc378",
          "frc639",
          "frc2010"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc10223",
          "frc1787",
          "frc3838"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm7",
    "match_number": 7,
    "post_result_time": null,
    "predicted_time": 1741959480,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741959480,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc271",
          "frc1585",
          "frc2228"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc533",
          "frc3799",
          "frc1405"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm70",
    "match_number": 70,
    "post_result_time": null,
    "predicted_time": 1742047800,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742047800,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc564",
          "frc2340",
          "frc3171"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc191",
          "frc8243",
          "frc6868"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm71",
    "match_number": 71,
    "post_result_time": null,
    "predicted_time": 1742048280,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742048280,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6621",
          "frc3838",
          "frc3044"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc7165",
          "frc9622",
          "frc8140"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm72",
    "match_number": 72,
    "post_result_time": null,
    "predicted_time": 1742048760,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742048760,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1511",
          "frc250",
          "frc378"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc20",
          "frc2614",
          "frc7903"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm73",
    "match_number": 73,
    "post_result_time": null,
    "predicted_time": 1742049240,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742049240,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc340",
          "frc3173",
          "frc10223"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1518",
          "frc2791",
          "frc3951"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm74",
    "match_number": 74,
    "post_result_time": null,
    "predicted_time": 1742049720,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742049720,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1308",
          "frc3004",
          "frc424"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc229",
          "frc5881",
          "frc1787"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm75",
    "match_number": 75,
    "post_result_time": null,
    "predicted_time": 1742050200,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742050200,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1585",
          "frc1507",
          "frc1559"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2228",
          "frc3003",
          "frc3181"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm76",
    "match_number": 76,
    "post_result_time": null,
    "predicted_time": 1742050680,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742050680,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc4611",
          "frc533",
          "frc191"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc8393",
          "frc578",
          "frc8243"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm77",
    "match_number": 77,
    "post_result_time": null,
    "predicted_time": 1742051160,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742051160,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc2252",
          "frc6621",
          "frc1405"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc639",
          "frc1591",
          "frc6868"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm78",
    "match_number": 78,
    "post_result_time": null,
    "predicted_time": 1742051640,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742051640,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc9622",
          "frc695",
          "frc5590"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc9643",
          "frc7165",
          "frc2010"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm79",
    "match_number": 79,
    "post_result_time": null,
    "predicted_time": 1742052120,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742052120,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc6868",
          "frc564",
          "frc5590"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc229",
          "frc3799",
          "frc8393"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm8",
    "match_number": 8,
    "post_result_time": null,
    "predicted_time": 1741959960,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741959960,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3171",
          "frc8140",
          "frc4930"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3799",
          "frc2340",
          "frc6911"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm80",
    "match_number": 80,
    "post_result_time": null,
    "predicted_time": 1742052600,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742052600,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc3838",
          "frc3015",
          "frc1126"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc564",
          "frc3044",
          "frc271"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm81",
    "match_number": 81,
    "post_result_time": null,
    "predicted_time": 1742053080,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1742053080,
    "videos": [],
    "winning_alliance": ""
  },
  {
    "actual_time": null,
    "alliances": {
      "blue": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1405",
          "frc4611",
          "frc7165"
        ]
      },
      "red": {
        "dq_team_keys": [],
        "score": -1,
        "surrogate_team_keys": [],
        "team_keys": [
          "frc1308",
          "frc1507",
          "frc578"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "2025nyro",
    "key": "2025nyro_qm9",
    "match_number": 9,
    "post_result_time": null,
    "predicted_time": 1741960440,
    "score_breakdown": null,
    "set_number": 1,
    "time": 1741960440,
    "videos": [],
    "winning_alliance": ""
  }
]



// Must be filled in: e=event, m=match#, l=level(q,qf,sf,f), t=team#, r=robot(r1,r2,b1..), s=scouter
//var requiredFields = ["e", "m", "l", "t", "r", "s", "as"];
var requiredFields = ["e", "m", "r", "s"];

function addTimer(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.setAttribute("colspan", 2);
  cell1.setAttribute("style", "text-align: center;");
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  cell1.innerHTML = name;
  if (data.hasOwnProperty('tooltip')) {
    cell1.setAttribute("title", data.tooltip);
  }

  idx += 1
  row = table.insertRow(idx);
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");

  if (data.type == 'cycle') {
    var ct = document.createElement('input');
    ct.setAttribute("type", "hidden");
    ct.setAttribute("id", "cycletime_" + data.code);
    if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
      ct.setAttribute("name", data.gsCol);
    } else {
      ct.setAttribute("name", data.code);
    }
    ct.setAttribute("value", "[]");
    cell.appendChild(ct);
    ct = document.createElement('input');
    ct.setAttribute("type", "text");
    ct.setAttribute("id", "display_" + data.code);
    ct.setAttribute("value", "");
    ct.setAttribute("disabled", "");
    cell.appendChild(ct);
    var lineBreak = document.createElement("br");
    cell.appendChild(lineBreak);
  }
  var button1 = document.createElement("input");
  button1.setAttribute("id", "start_" + data.code);
  button1.setAttribute("type", "button");
  button1.setAttribute("onclick", "timer(this.parentElement)");
  button1.setAttribute("value", "Start");
  cell.appendChild(button1);

  var inp = document.createElement("input");
  if (data.type == 'timer') {
    inp.classList.add("timer");
  } else {
    inp.classList.add("cycle");
  }
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "text");
  if (data.type != 'cycle') {
    if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
      inp.setAttribute("name", data.gsCol);
    } else {
      inp.setAttribute("name", data.code);
    }
  }
  inp.setAttribute("style", "border: none; text-align: center;");
  inp.setAttribute("disabled", "");
  inp.setAttribute("value", 0);
  inp.setAttribute("size", 7);
  inp.setAttribute("maxLength", 7);
  cell.appendChild(inp);

  var button2 = document.createElement("input");
  button2.setAttribute("id", "clear_" + data.code);
  button2.setAttribute("type", "button");
  button2.setAttribute("onclick", "resetTimer(this.parentElement)");
  button2.setAttribute("value", "Reset");
  cell.appendChild(button2);
  var lineBreak = document.createElement("br");
  cell.appendChild(lineBreak);

  if (data.type == 'cycle') {
    var button3 = document.createElement("input");
    button3.setAttribute("id", "cycle_" + data.code);
    button3.setAttribute("type", "button");
    button3.setAttribute("onclick", "newCycle(this.parentElement)");
    button3.setAttribute("value", "New Cycle");
    cell.appendChild(button3);
    var button4 = document.createElement("input");
    button4.setAttribute("id", "undo_" + data.code);
    button4.setAttribute("type", "button");
    button4.setAttribute("onclick", "undoCycle(this.parentElement)");
    button4.setAttribute("value", "Undo");
    button4.setAttribute('style', "margin-left: 20px;");
    cell.appendChild(button4);
  }

  idx += 1
  row = table.insertRow(idx);
  row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  var inp = document.createElement('input');
  inp.setAttribute("type", "hidden");
  inp.setAttribute("id", "status_" + data.code);
  inp.setAttribute("value", "stopped");
  cell.appendChild(inp);
  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "intervalId_" + data.code);
  inp.setAttribute("value", "");
  cell.appendChild(inp);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1;
}

function addCounter(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + '&nbsp;';
  if (data.hasOwnProperty('tooltip')) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");

  var button1 = document.createElement("input");
  button1.setAttribute("type", "button");
  button1.setAttribute("id", "minus_" + data.code);
  button1.setAttribute("onclick", "counter(this.parentElement, -1)");
  button1.setAttribute("value", "-");
  cell2.appendChild(button1);

  var inp = document.createElement("input");
  inp.classList.add("counter");
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "text");
  if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  inp.setAttribute("style", "border: none; text-align: center;");
  inp.setAttribute("disabled", "");
  inp.setAttribute("value", 0);
  inp.setAttribute("size", 2);
  inp.setAttribute("maxLength", 2);
  cell2.appendChild(inp);

  var button2 = document.createElement("input");
  button2.setAttribute("type", "button");
  button2.setAttribute("id", "plus_" + data.code);
  button2.setAttribute("onclick", "counter(this.parentElement, 1)");
  button2.setAttribute("value", "+");
  cell2.appendChild(button2);

  if (data.hasOwnProperty('cycleTimer')) {
    if (data.cycleTimer != "") {
      inp = document.createElement('input');
      inp.setAttribute("hidden", "");
      inp.setAttribute("id", "cycleTimer_" + data.code);
      inp.setAttribute("value", data.cycleTimer);
      cell.appendChild(inp);
    }
  }

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1;
}

function addClickableImage(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  cell.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  cell.innerHTML = name + '&nbsp;';
  if (data.hasOwnProperty('tooltip')) {
    cell.setAttribute("title", data.tooltip);
  }

  let showFlip = true;
  if (data.hasOwnProperty('showFlip')) {
    if (data.showFlip.toLowerCase() == 'false') {
      showFlip = false;
    }
  }

  let showUndo = true;
  if (data.hasOwnProperty('showUndo')) {
    if (data.showUndo.toLowerCase() == 'false') {
      showUndo = false;
    }
  }

  if (showFlip || showUndo) {
    idx += 1
    row = table.insertRow(idx);
    cell = row.insertCell(0);
    cell.setAttribute("colspan", 2);
    cell.setAttribute("style", "text-align: center;");

    if (showUndo) {
      // Undo button
      let undoButton = document.createElement("input");
      undoButton.setAttribute("type", "button");
      undoButton.setAttribute("onclick", "undo(this.parentElement)");
      undoButton.setAttribute("value", "Undo");
      undoButton.setAttribute("id", "undo_" + data.code);
      undoButton.setAttribute("class", "undoButton");
      cell.appendChild(undoButton);
    }

    if (showFlip) {
      // Flip button
      let flipButton = document.createElement("input");
      flipButton.setAttribute("type", "button");
      flipButton.setAttribute("onclick", "flip(this.parentElement)");
      flipButton.setAttribute("value", "Flip Image");
      flipButton.setAttribute("id", "flip_" + data.code);
      flipButton.setAttribute("class", "flipButton");
      if (showUndo) {
        flipButton.setAttribute("margin-left", '8px');
      }
      cell.appendChild(flipButton);
    }
  }

  idx += 1;
  row = table.insertRow(idx);
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  var canvas = document.createElement('canvas');
  //canvas.onclick = onFieldClick;
  canvas.setAttribute("onclick", "onFieldClick(event)");
  canvas.setAttribute("class", "field-image-src");
  canvas.setAttribute("id", "canvas_" + data.code);
  canvas.innerHTML = "No canvas support";
  cell.appendChild(canvas);

  idx += 1;
  row = table.insertRow(idx);
  row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  var inp = document.createElement('input');
  inp.setAttribute("type", "hidden");
  inp.setAttribute("id", "XY_" + data.code);
  inp.setAttribute("value", "[]");
  cell.appendChild(inp);
  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("value", "[]");
  inp.setAttribute("class", "clickableImage");

  cell.appendChild(inp);

  // TODO: Make these more efficient/elegant
  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "clickRestriction_" + data.code);
  inp.setAttribute("value", "none");
  if (data.hasOwnProperty('clickRestriction')) {
    if ((data.clickRestriction == "one") ||
      (data.clickRestriction == "onePerBox")) {
      inp.setAttribute("value", data.clickRestriction);
    }
  }
  cell.appendChild(inp);

  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "allowableResponses_" + data.code);
  inp.setAttribute("value", "none");
  if (data.hasOwnProperty('allowableResponses')) {
    let responses = data.allowableResponses.split(' ').map(Number)
    console.log(responses)
      inp.setAttribute("value", responses);
  }
  cell.appendChild(inp);

  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "dimensions_" + data.code);
  inp.setAttribute("value", "12 6");
  if (data.hasOwnProperty('dimensions')) {
    if (data.dimensions != "") {
      // TODO: Add validation for "X Y" format
      inp.setAttribute("value", data.dimensions);
    }
  }
  cell.appendChild(inp);

  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "shape_" + data.code);
  // Default shape: white circle of size 5 not filled in
  inp.setAttribute("value", "circle 5 white white true");
  if (data.hasOwnProperty('shape')) {
    if (data.shape != "") {
      // TODO: Add validation for "shape size color fill" format
      inp.setAttribute("value", data.shape);
    }
  }
  cell.appendChild(inp);

  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "toggleClick_" + data.code);
  inp.setAttribute("value", "false");
  if (data.hasOwnProperty('toggleClick')) {
    if (data.toggleClick != "") {
      // TODO: Add validation for true/false format
      inp.setAttribute("value", data.toggleClick);
    }
  }
  cell.appendChild(inp);

  if (data.hasOwnProperty('cycleTimer')) {
    if (data.cycleTimer != "") {
      inp = document.createElement('input');
      inp.setAttribute("hidden", "");
      inp.setAttribute("id", "cycleTimer_" + data.code);
      inp.setAttribute("value", data.cycleTimer);
      cell.appendChild(inp);
    }
  }

  idx += 1
  row = table.insertRow(idx);
  row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  var img = document.createElement('img');
  img.src = data.filename;
  img.setAttribute("id", "img_" + data.code);
  img.setAttribute("class", "field-image-src");
  img.setAttribute("onload", "drawFields()");
  img.setAttribute("hidden", "");
  cell.appendChild(img);

  return idx + 1
}

function addText(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + '&nbsp;';
  if (data.hasOwnProperty('tooltip')) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "text");
  if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  if (data.hasOwnProperty('size')) {
    inp.setAttribute("size", data.size);
  }
  if (data.hasOwnProperty('maxSize')) {
    inp.setAttribute("maxLength", data.maxSize);
  }
  if (data.hasOwnProperty('defaultValue')) {
    if (data.type == 'event') {
      data.defaultValue = data.defaultValue.toLowerCase();
    }
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty('required')) {
    inp.setAttribute("required", "");
  }
  if (data.hasOwnProperty('disabled')) {
    inp.setAttribute("disabled", "");
  }
  cell2.appendChild(inp);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1
}

function addTextArea(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + '&nbsp;';
  if (data.hasOwnProperty('tooltip')) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  var inp = document.createElement("textarea");
  inp.setAttribute("id", "textarea_" + data.code);
  if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  if (data.hasOwnProperty('size')) {
    inp.setAttribute("size", data.size);
  }
  if (data.hasOwnProperty('maxSize')) {
    inp.setAttribute("maxLength", data.maxSize);
  }
  if (data.hasOwnProperty('defaultValue')) {
    if (data.type == 'event') {
      data.defaultValue = data.defaultValue.toLowerCase();
    }
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty('required')) {
    inp.setAttribute("required", "");
  }
  if (data.hasOwnProperty('disabled')) {
    inp.setAttribute("disabled", "");
  }
  if (data.hasOwnProperty('rows')) {
    inp.setAttribute('rows', data.rows)
  }
  cell2.appendChild(inp);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("textarea");
    def.setAttribute("id", "default_" + data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1
}

function addNumber(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + '&nbsp;';
  if (data.hasOwnProperty('tooltip')) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "number");
  if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  if ((data.type == 'team') ||
    (data.type == 'match')) {
    inp.setAttribute("onchange", "updateMatchStart(event)");
  }
  if (data.hasOwnProperty('min')) {
    inp.setAttribute("min", data.min);
  }
  if (data.hasOwnProperty('max')) {
    inp.setAttribute("max", data.max);
  }
  if (data.hasOwnProperty('defaultValue')) {
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty('disabled')) {
    inp.setAttribute("disabled", "");
  }
  if (data.hasOwnProperty('required')) {
    inp.setAttribute("required", "");
  }
  cell2.appendChild(inp);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  if (data.type == 'team') {
    idx += 1
    row = table.insertRow(idx);
    cell1 = row.insertCell(0);
    cell1.setAttribute("id", "teamname-label");
    cell1.setAttribute("colspan", 2);
    cell1.setAttribute("style", "text-align: center;");
  }

  return idx + 1;
}

function addRadio(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + '&nbsp;';
  if (data.hasOwnProperty('tooltip')) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  if ((data.type == 'level') ||
    (data.type == 'robot')
  ) {
    cell2.setAttribute("onchange", "updateMatchStart(event)");
  }
  var checked = null
  if (data.hasOwnProperty('defaultValue')) {
    checked = data.defaultValue;
  }
  if (data.hasOwnProperty('choices')) {
    keys = Object.keys(data.choices);
    keys.forEach(c => {
      var inp = document.createElement("input");
      inp.setAttribute("id", "input_" + data.code + "_" + c);
      inp.setAttribute("type", "radio");
      if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
        inp.setAttribute("name", data.gsCol);
      } else {
        inp.setAttribute("name", data.code);
      }
      inp.setAttribute("value", c);
      if (checked == c) {
        inp.setAttribute("checked", "");
      }
      var label = document.createElement("label");
      label.setAttribute("for", "input_" + data.code + "_" + c);
      label.innerHTML = data.choices[c];
      cell2.appendChild(inp);
      cell2.appendChild(label);
      //cell2.innerHTML += data.choices[c];
    });
  }
  var inp = document.createElement("input");
  inp.setAttribute("id", "display_" + data.code);
  inp.setAttribute("hidden", "");
  inp.setAttribute("value", "");
  cell2.appendChild(inp);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1;
}

function addCheckbox(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + '&nbsp;';
  if (data.hasOwnProperty('tooltip')) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "checkbox");
  if (enableGoogleSheets && data.hasOwnProperty('gsCol')) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  cell2.appendChild(inp);

  if (data.type == 'bool') {
    cell2.innerHTML += "";
  }

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1;
}

function addElement(table, idx, data) {
  var type = null;
  var name = 'Default Name';
  if (data.hasOwnProperty('name')) {
    name = data.name
  }
  if (data.hasOwnProperty('type')) {
    type = data.type
  } else {
    console.log("No type specified");
    console.log("Data: ")
    console.log(data);
    err = { code: "err", defaultValue: "No type specified: " + data };
    idx = addText(table, idx, name, err);
    return
  }
  if (type == 'counter') {
    idx = addCounter(table, idx, name, data);
  } else if ((data.type == 'scouter') ||
    (data.type == 'event') ||
    (data.type == 'text')
  ) {
    idx = addText(table, idx, name, data);
  } else if ((data.type == 'level') ||
    (data.type == 'radio') ||
    (data.type == 'robot')
  ) {
    idx = addRadio(table, idx, name, data);
  } else if ((data.type == 'match') ||
    (data.type == 'team') ||
    (data.type == 'number')
  ) {
    idx = addNumber(table, idx, name, data);
  } else if ((data.type == 'field_image') ||
    (data.type == 'clickable_image')) {
    idx = addClickableImage(table, idx, name, data);
  } else if ((data.type == 'bool') ||
    (data.type == 'checkbox') ||
    (data.type == 'pass_fail')
  ) {
    idx = addCheckbox(table, idx, name, data);
  } else if (data.type == 'counter') {
    idx = addCounter(table, idx, name, data);
  } else if ((data.type == 'timer') ||
    (data.type == 'cycle')) {
    idx = addTimer(table, idx, name, data);
  } else if (data.type == 'textarea') {
    idx = addTextArea(table, idx, name, data);
  } else {
    console.log(`Unrecognized type: ${data.type}`);
  }
  return idx
}

function configure() {
  try {
    var mydata = JSON.parse(config_data);
  } catch (err) {
    //console.log(`Error parsing configuration file`)
    //console.log(err.message)
    //console.log('Use a tool like http://jsonlint.com/ to help you debug your config file')
    //var table = document.getElementById("prematch_table")
    //var row = table.insertRow(0);
    //var cell1 = row.insertCell(0);
    //cell1.innerHTML = `Error parsing configuration file: ${err.message}<br><br>Use a tool like <a href="http://jsonlint.com/">http://jsonlint.com/</a> to help you debug your config file`
    return -1
  }

  if(mydata.hasOwnProperty('dataFormat')) {
    dataFormat = mydata.dataFormat;
  }
  
  if (mydata.hasOwnProperty('title')) {
    document.title = mydata.title;
  }

  if (mydata.hasOwnProperty('page_title')) {
    for (pgtitle of document.getElementsByClassName("page_title")) {
      pgtitle.innerHTML = mydata.page_title;
    }
  }

  if (mydata.hasOwnProperty('enable_google_sheets')) {
    if (mydata.enable_google_sheets.toUpperCase() == 'TRUE') {
      enableGoogleSheets = true;
    }
  }

  if (mydata.hasOwnProperty('pitConfig')) {
    if (mydata.pitConfig.toUpperCase() == 'TRUE') {
      pitScouting = true;
    }
  }

  if (mydata.hasOwnProperty('checkboxAs')) {
    // Supported modes
    // YN - Y or N
    // TF - T or F
    // 10 - 1 or 0
    if (['YN','TF','10'].includes(mydata.checkboxAs)) {
      console.log("Setting checkboxAs to " + mydata.checkboxAs);
      checkboxAs = mydata.checkboxAs;
    } else {
      console.log("unrecognized checkboxAs setting.  Defaulting to YN.")
      checkboxAs = 'YN';
    }
  }

  // Configure prematch screen
  var pmc = mydata.prematch;
  var pmt = document.getElementById("prematch_table");
  var idx = 0;
  pmc.forEach(element => {
    idx = addElement(pmt, idx, element);
  });

  // Configure auton screen
  var ac = mydata.auton;
  var at = document.getElementById("auton_table");
  idx = 0;
  ac.forEach(element => {
    idx = addElement(at, idx, element);
  });

  // Configure teleop screen
  var tc = mydata.teleop;
  var tt = document.getElementById("teleop_table");
  idx = 0;
  tc.forEach(element => {
    idx = addElement(tt, idx, element);
  });

  // Configure endgame screen
  var egc = mydata.endgame;
  var egt = document.getElementById("endgame_table");
  idx = 0;
  egc.forEach(element => {
    idx = addElement(egt, idx, element);
  });

  // Configure postmatch screen
  pmc = mydata.postmatch;
  pmt = document.getElementById("postmatch_table");
  var idx = 0;
  pmc.forEach(element => {
    idx = addElement(pmt, idx, element);
  });

  if (!enableGoogleSheets) {
    document.getElementById("submit").style.display = "none";
  }

  return 0
}

function getRobot(){
  return document.forms.scoutingForm.r.value;
}


function resetRobot() {
for ( rb of document.getElementsByName('r')) { rb.checked = false };
}


function validateData() {
  var ret = true;
  var errStr = "";
  for (rf of requiredFields) {
    var thisRF = document.forms.scoutingForm[rf];
    if (thisRF.value == "[]" || thisRF.value.length == 0) {
      if (rf == "as") {
        rftitle = "Auto Start Position"
      } else {
        thisInputEl = thisRF instanceof RadioNodeList ? thisRF[0] : thisRF;
        rftitle = thisInputEl.parentElement.parentElement.children[0].innerHTML.replace("&nbsp;","");
      }
      errStr += rf + ": " + rftitle + "\n";
      ret = false;
    }
  }
  if (ret == false) {
    alert("Enter all required values\n" + errStr);
  }
  return ret
}

function getData(dataFormat) {
  var Form = document.forms.scoutingForm;
  var UniqueFieldNames = [];
  var fd = new FormData();
  var str = [];

  switch(checkboxAs) {
    case 'TF':
      checkedChar = 'T';
      uncheckedChar = 'F';
      break;
    case '10':
      checkedChar = '1';
      uncheckedChar = '0';
      break;
    default:
      var checkedChar = 'Y';
      var uncheckedChar = 'N';
  }

  // collect the names of all the elements in the form
  var fieldnames = Array.from(Form.elements, formElmt => formElmt.name);

  // make sure to add the name attribute only to elements from which you want to collect values.  Radio button groups all share the same name
  // so those element names need to be de-duplicated here as well.
  fieldnames.forEach((fieldname) => { if (fieldname != "" && !UniqueFieldNames.includes(fieldname)) { UniqueFieldNames.push(fieldname) } });

  UniqueFieldNames.forEach((fieldname) => {
    var thisField = Form[fieldname];

    if (thisField.type == 'checkbox') {
      var thisFieldValue = thisField.checked ? checkedChar : uncheckedChar;
    } else {
      var thisFieldValue = thisField.value ? thisField.value.replace(/"/g, '').replace(/;/g,"-") : "";
    }
    fd.append(fieldname, thisFieldValue)
  })

  if (dataFormat == "kvs") {
    Array.from(fd.keys()).forEach(thisKey => {
      str.push(thisKey + "=" + fd.get(thisKey))
    });
    return str.join(";")
  } else if (dataFormat == "tsv") {
    Array.from(fd.keys()).forEach(thisKey => {
      str.push(fd.get(thisKey))
    });
    return str.join("\t")
  } else {
    return "unsupported dataFormat"
  }
}

function updateQRHeader() {
  let str = 'Robot: !ROBOT! Event: !EVENT! Match: !MATCH! Team: !TEAM!';

  if(!pitScouting) {
    str = str
      .replace('!EVENT!', document.getElementById("input_e").value)
      .replace('!MATCH!', document.getElementById("input_m").value)
      .replace('!ROBOT!', document.getElementById("display_r").value)
      .replace('!TEAM!', document.getElementById("input_t").value);
  }else {
    str = 'Pit Scouting - Team !TEAM!'
      .replace('!TEAM!', document.getElementById("input_t").value);
  }

  document.getElementById("display_qr-info").textContent = str;
}

function makeQrCode(data) 
{
  qr.makeCode(data)
}

function qr_regenerate() {
  // Validate required pre-match date (event, match, level, robot, scouter)
  if (!pitScouting) {  
    if (validateData() == false) {
      // Don't allow a swipe until all required data is filled in
      return false
    }
    pinNum = document.getElementById("input_s").value
    if(pins[pinNum] == undefined){
      alert("Invalid Scouter Pin.");
      return false;
    }
  }else if(pitScouting){
    if(document.getElementById("input_t").value == null || document.getElementById("input_t").value == ""){
      alert("Enter all required values:\nTeam Number")
    }
  }

  // Get matchNYROsessionsdata
  data = getData(dataFormat)

  if (!pitScouting) {
    key = document.getElementById("input_m").value + "." + getRobot();
    matchNYRO = localStorage.getItem("matchNYRO");
    pinNum = document.getElementById("input_s").value
    data.replace(pinNum, pins[pinNum])
    if (matchNYRO) {
      const matchNYRODictionary = JSON.parse(matchNYRO);
      matchNYRODictionary[key] = key + "\t" + data;
      matchNYRODictionary[key].replace("r1", "Red", "r2", "Red", "r3", "Red", "b1", "Blue", "b2", "Blue", "b3", "Blue");
      temp = matchNYRODictionary[key].split("\t")
      temp[1] = pins[pinNum]
      matchNYRODictionary[key] = temp.join("\t")
      localStorage.setItem("matchNYRO", JSON.stringify(matchNYRODictionary));
      console.log(matchNYRODictionary);
    } else {
      const matchNYRODictionary = {};
      matchNYRODictionary[key] = key + "\t" + data;
      matchNYRODictionary[key].replace("r1", "Red", "r2", "Red", "r3", "Red", "b1", "Blue", "b2", "Blue", "b3", "Blue");
      temp = matchNYRODictionary[key].split("\t")
      temp[1] = pins[pinNum]
      matchNYRODictionary[key] = temp.join("\t")
      localStorage.setItem("matchNYRO", JSON.stringify(matchNYRODictionary));
    }
  } else {
    key = document.getElementById("input_t").value;
    pitNYRO = localStorage.getItem("pitNYRO");
    if (pitNYRO) {
      const pitDictionary = JSON.parse(pitNYRO);
      pitDictionary[key] = data;
      localStorage.setItem("pitNYRO", JSON.stringify(pitDictionary));
    } else {
      const pitDictionary = {};
      pitDictionary[key] = data;
      localStorage.setItem("pitNYRO", JSON.stringify(pitDictionary));
    }
  }

  clear = false
  if(clear){
    localStorage.clear()
  }

  if(!pitScouting){
    matchNYRO = localStorage.getItem("matchNYRO")
    key = document.getElementById("input_m").value + "." + getRobot()
    const matchNYRODictionary = JSON.parse(matchNYRO)
    qr.makeCode(matchNYRODictionary[key])
  }else{
    pitNYRO = localStorage.getItem("pitNYRO")
    key = document.getElementById("input_t").value
    const pitDictionary = JSON.parse(pitNYRO)
    qr.makeCode(pitDictionary[key])
  }


  updateQRHeader()
  return true
}


function qr_clear() {
  qr.clear()
}

function clearForm() {
  var match = 0;
  var e = 0;
  if (pitScouting){
    swipePage(-1);
  } else {
    swipePage(-5);

    // Increment match
    match = parseInt(document.getElementById("input_m").value)
    if (match == NaN) {
      document.getElementById("input_m").value = ""
    } else {
      document.getElementById("input_m").value = match + 1
    }

    // Robot
    resetRobot()
  }

  // Clear XY coordinates
  inputs = document.querySelectorAll("[id*='XY_']");
  for (e of inputs) {
    code = e.id.substring(3)
    e.value = "[]"
  }

  inputs = document.querySelectorAll("[id*='input_']");
  for (e of inputs) {
    code = e.id.substring(6)

    // Don't clear key fields
    if (code == "m") continue
    if (code.substring(0, 2) == "r_") continue
    if (code == "e") continue

    if (e.className == "clickableImage") {
      e.value = "[]";
      continue;
    }

    radio = code.indexOf("_")
    if (radio > -1) {
      var baseCode = code.substr(0, radio)
      if (e.checked) {
        e.checked = false
        document.getElementById("display_" + baseCode).value = ""
      }
      var defaultValue = document.getElementById("default_" + baseCode).value
      if (defaultValue != "") {
        if (defaultValue == e.value) {
          e.checked = true
          document.getElementById("display_" + baseCode).value = defaultValue
        }
      }
    } else {
      if (e.type == "number" || e.type == "text" || e.type == "hidden") {
        if ((e.className == "counter") ||
          (e.className == "timer") ||
          (e.className == "cycle")) {
          e.value = 0
          if (e.className == "timer" || e.className == "cycle") {
            // Stop interval
            timerStatus = document.getElementById("status_" + code);
            startButton = document.getElementById("start_" + code);
            intervalIdField = document.getElementById("intervalId_" + code);
            var intervalId = intervalIdField.value;
            timerStatus.value = 'stopped';
            startButton.innerHTML = "Start";
            if (intervalId != '') {
              clearInterval(intervalId);
            }
            intervalIdField.value = '';
            if (e.className == "cycle") {
              document.getElementById("cycletime_" + code).value = "[]"
              document.getElementById("display_" + code).value = ""
            }
          }
        } else {
          e.value = ""
        }
      } else if (e.type == "checkbox") {
        e.checked = false
      } else if (e.type == "scouter") {
        e.value = ""
      } else {
        console.log("unsupported input type")
      }
    }
  }
  drawFields()
}

function startTouch(e) {
  initialX = e.touches[0].screenX;
};

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  var currentX = e.changedTouches[0].screenX;
  var diffX = initialX - currentX;

  // sliding horizontally
  if (diffX / screen.width > xThreshold) {
    // swiped left
    swipePage(1);
  } else if (diffX / screen.width < -xThreshold) {
    // swiped right
    swipePage(-1);
  }
  initialX = null;
};

function swipePage(increment) {
  if (qr_regenerate() == true) {
    slides = document.getElementById("main-panel-holder").children
    if (slide + increment < slides.length && slide + increment >= 0) {
      slides[slide].style.display = "none";
      slide += increment;
      window.scrollTo(0, 0);
      slides[slide].style.display = "table";
      document.getElementById('data').innerHTML = "";
      document.getElementById('copyButton').setAttribute('value','Copy Data');
    }
  }
}

function drawFields(name) {
  var fields = document.querySelectorAll("[id*='canvas_']");

  for (f of fields) {
    code = f.id.substring(7);
    var img = document.getElementById("img_" + code);
    var shape = document.getElementById("shape_" + code);
    let shapeArr = shape.value.split(' ');
    var ctx = f.getContext("2d");
    ctx.clearRect(0, 0, f.width, f.height);
    ctx.drawImage(img, 0, 0, f.width, f.height);

    var xyStr = document.getElementById("XY_" + code).value
    if (JSON.stringify(xyStr).length > 2) {
      pts = Array.from(JSON.parse(xyStr))
      for (p of pts) {
        var coord = p.split(",")
        var centerX = coord[0];
        var centerY = coord[1];
        var radius = 5;
        ctx.beginPath();
        if (shapeArr[0].toLowerCase() == 'circle') {
          ctx.arc(centerX, centerY, shapeArr[1], 0, 2 * Math.PI, false);
        } else {
          ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        }
        ctx.lineWidth = 2;
        if (shapeArr[2] != "") {
          ctx.strokeStyle = shapeArr[2];
        } else {
          ctx.strokeStyle = '#FFFFFF';
        }
        if (shapeArr[4].toLowerCase() == 'true') {
          ctx.fillStyle = shapeArr[3];
        }
        ctx.stroke();
        if (shapeArr[4].toLowerCase() == 'true') {
          ctx.fill();
        }
      }
    }
  }
}

function onFieldClick(event) {
  let target = event.target;
  let base = getIdBase(target.id);

  //Resolution height and width (e.g. 52x26)
  let resX = 12;
  let resY = 6;

  let dimensions = document.getElementById("dimensions" + base);
  if (dimensions.value != "") {
    let arr = dimensions.value.split(' ');
    resX = arr[0];
    resY = arr[1];
  }

  //Turns coordinates into a numeric box
  let box = ((Math.ceil(event.offsetY / target.height * resY) - 1) * resX) + Math.ceil(event.offsetX / target.width * resX);
  let coords = event.offsetX + "," + event.offsetY;

  let allowableResponses = document.getElementById("allowableResponses" + base).value;

  if(allowableResponses != "none"){
    allowableResponsesList = allowableResponses.split(',').map(Number);
    if (allowableResponsesList.indexOf(box)==-1){
      return;
    }
  }

  //Cumulating values
  let changingXY = document.getElementById("XY" + base);
  let changingInput = document.getElementById("input" + base);
  let clickRestriction = document.getElementById("clickRestriction" + base).value;
  let toggleClick = document.getElementById("toggleClick" + base).value;
  let cycleTimer = document.getElementById("cycleTimer" + base);
  let boxArr = Array.from(JSON.parse(changingInput.value));
  let xyArr = Array.from(JSON.parse(changingXY.value));

  if ((toggleClick.toLowerCase() == 'true') &&
    (boxArr.includes(box))) {
    // Remove it
    let idx = boxArr.indexOf(box);
    boxArr.splice(idx, 1);
    xyArr.splice(idx, 1);
    changingInput.value = JSON.stringify(boxArr);
    changingXY.value = JSON.stringify(xyArr);
  } else {
    if (JSON.stringify(changingXY.value).length <= 2) {
      changingXY.value = JSON.stringify([coords]);
      changingInput.value = JSON.stringify([box]);
    } else if (clickRestriction == "one") {
      // Replace box and coords
      changingXY.value = JSON.stringify([coords]);
      changingInput.value = JSON.stringify([box]);
    } else if (clickRestriction == "onePerBox") {
      // Add if box already not in box list/Array
      if (!boxArr.includes(box)) {
        boxArr.push(box);
        changingInput.value = JSON.stringify(boxArr);

        coords = findMiddleOfBox(box, target.width, target.height, resX, resY);
        xyArr.push(coords);
        changingXY.value = JSON.stringify(xyArr);
      }
    } else {
      // No restrictions - add to array
      xyArr.push(coords);
      changingXY.value = JSON.stringify(xyArr);

      boxArr.push(box);
      changingInput.value = JSON.stringify(boxArr);
    }
    // If associated with cycleTimer - send New Cycle EVENT
    if (cycleTimer != null) {
      document.getElementById("cycle_" + cycleTimer.value).click();
    }
  }

  drawFields()
}

function findMiddleOfBox(boxNum, width, height, resX, resY) {
  let boxHeight = height / resY;
  let boxWidth = width / resX;
  let boxX = (boxNum % resX) - 1;
  if (boxX == -1) { boxX = resX - 1 }
  let boxY = Math.floor((boxNum - boxX + 1) / resX);
  let x = Math.round((boxWidth * boxX) + (Math.floor(boxWidth / 2)));
  let y = Math.round((boxHeight * boxY) + (Math.floor(boxHeight / 2)));
  return x+","+y
}

function getIdBase(name) {
  return name.slice(name.indexOf("_"), name.length)
}

function getTeamName(teamNumber) {
  if (teamNumber !== undefined) {
    if (teams) {
      var teamKey = "frc" + teamNumber;
      var ret = "";
      Array.from(teams).forEach(team => ret = team.key == teamKey ? team.nickname : ret);
      return ret;
    }
  }
  return "";
}

function getMatch(matchKey) {
  //This needs to be different than getTeamName() because of how JS stores their data
  if (matchKey !== undefined) {
    if (schedule) {
      var ret = "";
      Array.from(schedule).forEach(match => ret = match.key == matchKey ? match.alliances : ret);
      return ret;
    }
  }
  return "";
}

function getCurrentTeamNumberFromRobot() {
  if (getRobot() != "" && typeof getRobot() !== 'undefined' && getCurrentMatch() != "") {
    if (getRobot().charAt(0) == "r") {
      return getCurrentMatch().red.team_keys[parseInt(getRobot().charAt(1)) - 1]
    } else if (getRobot().charAt(0) == "b") {
      return getCurrentMatch().blue.team_keys[parseInt(getRobot().charAt(1)) - 1]
    }
  }
}

function getCurrentMatchKey() {
  return document.getElementById("input_e").value + "_" + document.getElementById("input_m").value;
}

function getCurrentMatch() {
  return getMatch(getCurrentMatchKey());
}

function updateMatchStart(event) {
  if(document.getElementById("input_m").value != null && getRobot() != null){
    alliancePos = getRobot()
    match = document.getElementById("input_m").value
    alliance = ""
    pos = 0
    index = 0
    for(let i = 0; i < eventMatches.length; i++){
      if (eventMatches[i]['match_number'] == match){
        index = i
        break
      }
    }
    if(alliancePos.substring(0,1) == "R"){
      alliance = "red"
      pos = alliancePos.substring(4)
    }else if(alliancePos.substring(0,1) == "B"){
      alliance = "blue"
      pos = alliancePos.substring(5)
    }
    teamNumber = eventMatches[index]["alliances"][alliance]["team_keys"][pos-1].substring(3)
    document.getElementById("input_t").value = teamNumber
  }
  
  
  if ((getCurrentMatch() == "") ||
    (!teams)) {
    console.log("No match or team data.");
    return;
  }
  if (event.target.id.startsWith("input_r")) {
    document.getElementById("input_t").value = getCurrentTeamNumberFromRobot().replace("frc", "");
    onTeamnameChange();
  }
  if (event.target.id == "input_m") {
    if (getRobot() != "" && typeof getRobot()) {
      document.getElementById("input_t").value = getCurrentTeamNumberFromRobot().replace("frc", "");
      onTeamnameChange();
    }
  }
}

function onTeamnameChange(event) {
  var newNumber = document.getElementById("input_t").value;
  var teamLabel = document.getElementById("teamname-label");
  if (newNumber != "") {
    teamLabel.innerText = getTeamName(newNumber) != "" ? "You are scouting " + getTeamName(newNumber) : "That team isn't playing this match, please double check to verify correct number";
  } else {
    teamLabel.innerText = "";
  }
}

/**
 * adds to the number in innerHTML of the value tag.
 *
 * @param {element} element the <div> tag element (parent to the value tag).
 * @param {number} step the amount to add to the value tag.
 */
function counter(element, step) {
  let target = event.target;
  let base = getIdBase(target.id);

  var ctr = element.getElementsByClassName("counter")[0];
  let cycleTimer = document.getElementById("cycleTimer" + base);
  var result = parseInt(ctr.value) + step;

  if (isNaN(result)) {
    result = 0;
  }

  if (result >= 0 || ctr.hasAttribute('data-negative')) {
    ctr.value = result;
  } else {
    ctr.value = 0;
  }

  // If associated with cycleTimer - send New Cycle EVENT
  if (step >= 0 && cycleTimer != null) {
    document.getElementById("cycle_" + cycleTimer.value).click();
  }
}

function newCycle(event)
{
  let timerID = event.firstChild;
  let base = getIdBase(timerID.id);
  let inp = document.getElementById("input" + base)
  let cycleTime = inp.value
  inp.value = 0

  if (cycleTime > 0) {
    let cycleInput = document.getElementById("cycletime" + base);
    var tempValue = Array.from(JSON.parse(cycleInput.value));
    tempValue.push(cycleTime);
    cycleInput.value = JSON.stringify(tempValue);
    let d = document.getElementById("display" + base);
    d.value = cycleInput.value.replace(/\"/g,'').replace(/\[/g, '').replace(/\]/g, '').replace(/,/g, ', ');
  }
}

function undoCycle(event) {
  let undoID = event.firstChild;
  let uId = getIdBase(undoID.id);
  //Getting rid of last value
  let cycleInput = document.getElementById("cycletime" + uId);
  var tempValue = Array.from(JSON.parse(cycleInput.value));
  tempValue.pop();
  cycleInput.value = JSON.stringify(tempValue);
  let d = document.getElementById("display" + uId);
  d.value = cycleInput.value.replace(/\"/g,'').replace(/\[/g, '').replace(/\]/g, '').replace(/,/g, ', ');
}

function resetTimer(event) {
  let timerID = event.firstChild;
  let tId = getIdBase(timerID.id);
  let inp = document.getElementById("input" + tId)
  inp.value = 0

  // stop timer
  timerStatus = document.getElementById("status" + tId);
  startButton = document.getElementById("start" + tId);
  intervalIdField = document.getElementById("intervalId" + tId);
  var intervalId = intervalIdField.value;
  timerStatus.value = 'stopped';
  startButton.setAttribute("value", "Start");
  if (intervalId != '') {
    clearInterval(intervalId);
  }
  intervalIdField.value = '';
}

function timer(event) {
  let timerID = event.firstChild;
  let tId = getIdBase(timerID.id)
  timerStatus = document.getElementById("status" + tId);
  startButton = document.getElementById("start" + tId);
  intervalIdField = document.getElementById("intervalId" + tId);
  var statusValue = timerStatus.value;
  var intervalId = intervalIdField.value;
  if (statusValue == 'stopped') {
    timerStatus.value = 'started';
    startButton.setAttribute("value", "Stop");

    var intId = setInterval(() => {
      if (document.getElementById("status" + tId).value == 'started') {
        inp = document.getElementById("input" + tId);
        var t = parseFloat(inp.value);
        t += 0.1;
        tTrunc = t.toFixed(1)
        inp.value = tTrunc;
      }
    }, 100);
    intervalIdField.value = intId;
  } else {
    timerStatus.value = 'stopped';
    startButton.setAttribute("value", "Start");

    clearInterval(intervalId);
    intervalIdField.value = '';
  }
  drawFields();
}

function undo(event) {
  let undoID = event.firstChild;
  //Getting rid of last value
  changingXY = document.getElementById("XY" + getIdBase(undoID.id));
  changingInput = document.getElementById("input" + getIdBase(undoID.id));
  var tempValue = Array.from(JSON.parse(changingXY.value));
  tempValue.pop();
  changingXY.value = JSON.stringify(tempValue);

  tempValue = Array.from(JSON.parse(changingInput.value));
  tempValue.pop();
  changingInput.value = JSON.stringify(tempValue);
  drawFields();
}

function flip(event) {
  let flipID = event.firstChild;
  var flipImg = document.getElementById("canvas" + getIdBase(flipID.id));
  if (flipImg.style.transform == "") {
    flipImg.style.transform = 'rotate(180deg)';
  } else {
    flipImg.style.transform = '';
  }
  drawFields();
}

function displayData(){
  document.getElementById('data').innerHTML = getData(dataFormat);
}

function copyData(){
  navigator.clipboard.writeText(getData(dataFormat));
  document.getElementById('copyButton').setAttribute('value','Copied');
}

window.onload = function () {
  let ret = configure();
  if (ret != -1) {
    let ece = document.getElementById("input_e");
    let ec = null;
    if (ece != null) {
      ec = ece.value;
    }
    if (ec != null) {
      getTeams(ec);
      getSchedule(ec);
    }
    this.drawFields();
    if (enableGoogleSheets) {
      console.log("Enabling Google Sheets.");
      setUpGoogleSheets();
    }
  }
};



function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function showQRCodes(type) {
  // QR Code documentation can be examined at https://github.com/ushelp/EasyQRCodeJS
  const dest = document.getElementById("putHere");
  // Clear out all the QR Codes
  removeAllChildNodes(dest);

  if(type == 'match'){
    // Retrieve scouting matchNYRO from localStorage.
    const matchNYRO = JSON.parse(localStorage.getItem("matchNYRO"));
    for (const [key, value] of Object.entries(matchNYRO)) {
      // Create a div we can use to act as a container for the label and the QR code.
      var qrContainer = document.createElement("div");
      qrContainer.setAttribute("id", "qr-container-" + key);

      // Create the label.
      var label = document.createElement("label");
      label.innerHTML = key;

      // Create the div to receive the QR code.
      const id = "qr-image-" + key;
      var qrDiv = document.createElement("div");
      qrDiv.setAttribute("id", id);
      qrDiv.setAttribute("style", "width: 100%");

      // Append to DOM.
      qrContainer.appendChild(label);
      qrContainer.appendChild(qrDiv);
      dest.appendChild(qrContainer);

      // Add the QR Code.
      var options = { text: value, width: 245 };
      new QRCode(document.getElementById(id), options);
    }
  }else if(type == 'pit'){
    // Retrieve scouting pitNYRO from localStorage.
    const pitNYRO = JSON.parse(localStorage.getItem("pitNYRO"));
    for (const [key, value] of Object.entries(pitNYRO)) {
      // Create a div we can use to act as a container for the label and the QR code.
      var qrContainer = document.createElement("div");
      qrContainer.setAttribute("id", "qr-container-" + key);

      // Create the label.
      var label = document.createElement("label");
      label.innerHTML = key;

      // Create the div to receive the QR code.
      const id = "qr-image-" + key;
      var qrDiv = document.createElement("div");
      qrDiv.setAttribute("id", id);
      qrDiv.setAttribute("style", "width: 100%");

      // Append to DOM.
      qrContainer.appendChild(label);
      qrContainer.appendChild(qrDiv);
      dest.appendChild(qrContainer);

      // Add the QR Code.
      var options = { text: value, width: 245 };
      new QRCode(document.getElementById(id), options);
    }
  }
}

function saveAndClear(){
  key = document.getElementById("input_sc").value;
    pitNYRO = localStorage.getItem("pitNYRO");
    if (pitNYRO) {
      const pitDictionary = JSON.parse(pitNYRO);
      pitDictionary[key] = data;
      localStorage.setItem("pitNYRO", JSON.stringify(pitDictionary));
    } else {
      const pitDictionary = {};
      pitDictionary[key] = data;
      localStorage.setItem("pitNYRO", JSON.stringify(pitDictionary));
    }
    clearForm()
}