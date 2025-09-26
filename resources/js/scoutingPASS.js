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
  7789: "Amanah Obaji",
  9792: "Asher Stuckey",
  1893: "Autumn Schoenfeld",
  2718: "Carter Silva",
  3741: "Celton Norter",
  1203: "Colby Jackson",
  4792: "Colden Stubbe",
  9519: "Dean Blanchard",
  1686: "Domenic Giammusso",
  6563: "Jacob LeBlanc",
  8423: "Jonah Woika",
  4621: "Jordan Fenton",
  1224: "Kai Hurrell",
  4930: "Kai Wilbur",
  4511: "Maddie DeCicca",
  1307: "Mason Silva",
  2106: "Matthew Mazzota",
  4205: "Nicholas Munier",
  2194: "Ruthie Christensen",
  9960: "Simon Stuckey",
  8822: "Tyler Hignett",
  9876: "Unknown",
};

const eventMatches = [
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc358", "frc6621", "frc3950"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc639", "frc7605", "frc3044"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm1",
    match_number: 1,
    post_result_time: null,
    predicted_time: 1743167100,
    score_breakdown: null,
    set_number: 1,
    time: 1743166800,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc424", "frc7718", "frc639"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1468", "frc3550", "frc2053"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm10",
    match_number: 10,
    post_result_time: null,
    predicted_time: 1743171420,
    score_breakdown: null,
    set_number: 1,
    time: 1743171120,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7605", "frc20", "frc3950"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc191", "frc8067", "frc6401"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm11",
    match_number: 11,
    post_result_time: null,
    predicted_time: 1743171900,
    score_breakdown: null,
    set_number: 1,
    time: 1743171600,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc870", "frc6463", "frc10714"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3173", "frc5149", "frc6648"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm12",
    match_number: 12,
    post_result_time: null,
    predicted_time: 1743172380,
    score_breakdown: null,
    set_number: 1,
    time: 1743172080,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4458", "frc1880", "frc229"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3181", "frc7759", "frc358"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm13",
    match_number: 13,
    post_result_time: null,
    predicted_time: 1743172860,
    score_breakdown: null,
    set_number: 1,
    time: 1743172560,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6300", "frc334", "frc810"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4571", "frc9468", "frc3044"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm14",
    match_number: 14,
    post_result_time: null,
    predicted_time: 1743173340,
    score_breakdown: null,
    set_number: 1,
    time: 1743173040,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3003", "frc7031", "frc6806"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc578", "frc9624", "frc250"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm15",
    match_number: 15,
    post_result_time: null,
    predicted_time: 1743173820,
    score_breakdown: null,
    set_number: 1,
    time: 1743173520,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1796", "frc2875", "frc7030"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2601", "frc7504", "frc2869"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm16",
    match_number: 16,
    post_result_time: null,
    predicted_time: 1743174300,
    score_breakdown: null,
    set_number: 1,
    time: 1743174000,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1591", "frc2791", "frc424"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5528", "frc1126", "frc6911"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm17",
    match_number: 17,
    post_result_time: null,
    predicted_time: 1743174780,
    score_breakdown: null,
    set_number: 1,
    time: 1743174480,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3171", "frc1493", "frc3360"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4122", "frc3117", "frc5881"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm18",
    match_number: 18,
    post_result_time: null,
    predicted_time: 1743175260,
    score_breakdown: null,
    set_number: 1,
    time: 1743174960,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1518", "frc6621", "frc8067"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc229", "frc10352", "frc3550"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm19",
    match_number: 19,
    post_result_time: null,
    predicted_time: 1743175740,
    score_breakdown: null,
    set_number: 1,
    time: 1743175440,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1468", "frc1796", "frc9468"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3173", "frc4458", "frc6401"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm2",
    match_number: 2,
    post_result_time: null,
    predicted_time: 1743167580,
    score_breakdown: null,
    set_number: 1,
    time: 1743167280,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6401", "frc6648", "frc870"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc358", "frc191", "frc4571"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm20",
    match_number: 20,
    post_result_time: null,
    predicted_time: 1743176220,
    score_breakdown: null,
    set_number: 1,
    time: 1743175920,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7718", "frc578", "frc6463"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6300", "frc3181", "frc639"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm21",
    match_number: 21,
    post_result_time: null,
    predicted_time: 1743176700,
    score_breakdown: null,
    set_number: 1,
    time: 1743176400,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7759", "frc3044", "frc250"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3003", "frc1796", "frc2869"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm22",
    match_number: 22,
    post_result_time: null,
    predicted_time: 1743177180,
    score_breakdown: null,
    set_number: 1,
    time: 1743176880,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc9624", "frc9468", "frc1126"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc10714", "frc2601", "frc2875"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm23",
    match_number: 23,
    post_result_time: null,
    predicted_time: 1743177660,
    score_breakdown: null,
    set_number: 1,
    time: 1743177360,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc334", "frc4122", "frc2791"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7605", "frc5149", "frc810"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm24",
    match_number: 24,
    post_result_time: null,
    predicted_time: 1743178140,
    score_breakdown: null,
    set_number: 1,
    time: 1743177840,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1591", "frc5528", "frc7504"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1493", "frc7031", "frc3550"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm25",
    match_number: 25,
    post_result_time: null,
    predicted_time: 1743181200,
    score_breakdown: null,
    set_number: 1,
    time: 1743181200,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3360", "frc424", "frc1518"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4458", "frc6806", "frc3950"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm26",
    match_number: 26,
    post_result_time: null,
    predicted_time: 1743181680,
    score_breakdown: null,
    set_number: 1,
    time: 1743181680,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7030", "frc3173", "frc3117"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1880", "frc6911", "frc2053"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm27",
    match_number: 27,
    post_result_time: null,
    predicted_time: 1743182160,
    score_breakdown: null,
    set_number: 1,
    time: 1743182160,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1468", "frc5881", "frc3171"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc10352", "frc20", "frc6621"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm28",
    match_number: 28,
    post_result_time: null,
    predicted_time: 1743182640,
    score_breakdown: null,
    set_number: 1,
    time: 1743182640,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc8067", "frc2869", "frc4571"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc9624", "frc7718", "frc358"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm29",
    match_number: 29,
    post_result_time: null,
    predicted_time: 1743183120,
    score_breakdown: null,
    set_number: 1,
    time: 1743183120,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7031", "frc191", "frc7718"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6463", "frc3117", "frc3171"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm3",
    match_number: 3,
    post_result_time: null,
    predicted_time: 1743168060,
    score_breakdown: null,
    set_number: 1,
    time: 1743167760,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5149", "frc3181", "frc2601"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6401", "frc3003", "frc6300"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm30",
    match_number: 30,
    post_result_time: null,
    predicted_time: 1743183600,
    score_breakdown: null,
    set_number: 1,
    time: 1743183600,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1126", "frc2875", "frc7605"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3044", "frc229", "frc6463"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm31",
    match_number: 31,
    post_result_time: null,
    predicted_time: 1743184080,
    score_breakdown: null,
    set_number: 1,
    time: 1743184080,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3360", "frc870", "frc5528"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc810", "frc424", "frc1796"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm32",
    match_number: 32,
    post_result_time: null,
    predicted_time: 1743184560,
    score_breakdown: null,
    set_number: 1,
    time: 1743184560,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1518", "frc7030", "frc2791"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7759", "frc334", "frc7031"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm33",
    match_number: 33,
    post_result_time: null,
    predicted_time: 1743185040,
    score_breakdown: null,
    set_number: 1,
    time: 1743185040,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3950", "frc3171", "frc1591"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1880", "frc1468", "frc10714"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm34",
    match_number: 34,
    post_result_time: null,
    predicted_time: 1743185520,
    score_breakdown: null,
    set_number: 1,
    time: 1743185520,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6911", "frc3550", "frc3117"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6648", "frc4458", "frc20"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm35",
    match_number: 35,
    post_result_time: null,
    predicted_time: 1743186000,
    score_breakdown: null,
    set_number: 1,
    time: 1743186000,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc10352", "frc250", "frc3173"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc578", "frc7504", "frc6621"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm36",
    match_number: 36,
    post_result_time: null,
    predicted_time: 1743186480,
    score_breakdown: null,
    set_number: 1,
    time: 1743186480,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2053", "frc639", "frc9468"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6806", "frc1493", "frc191"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm37",
    match_number: 37,
    post_result_time: null,
    predicted_time: 1743186960,
    score_breakdown: null,
    set_number: 1,
    time: 1743186960,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1796", "frc358", "frc4122"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6463", "frc5881", "frc424"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm38",
    match_number: 38,
    post_result_time: null,
    predicted_time: 1743187440,
    score_breakdown: null,
    set_number: 1,
    time: 1743187440,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6401", "frc3360", "frc7031"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc229", "frc7718", "frc334"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm39",
    match_number: 39,
    post_result_time: null,
    predicted_time: 1743187920,
    score_breakdown: null,
    set_number: 1,
    time: 1743187920,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc229", "frc10714", "frc810"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2053", "frc250", "frc20"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm4",
    match_number: 4,
    post_result_time: null,
    predicted_time: 1743168540,
    score_breakdown: null,
    set_number: 1,
    time: 1743168240,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3044", "frc1468", "frc8067"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5149", "frc7030", "frc5528"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm40",
    match_number: 40,
    post_result_time: null,
    predicted_time: 1743188400,
    score_breakdown: null,
    set_number: 1,
    time: 1743188400,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc10714", "frc2869", "frc3171"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3550", "frc6300", "frc2791"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm41",
    match_number: 41,
    post_result_time: null,
    predicted_time: 1743188880,
    score_breakdown: null,
    set_number: 1,
    time: 1743188880,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3950", "frc3181", "frc3117"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6621", "frc1591", "frc870"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm42",
    match_number: 42,
    post_result_time: null,
    predicted_time: 1743189360,
    score_breakdown: null,
    set_number: 1,
    time: 1743189360,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc10352", "frc2601", "frc6648"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4458", "frc2053", "frc7759"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm43",
    match_number: 43,
    post_result_time: null,
    predicted_time: 1743189840,
    score_breakdown: null,
    set_number: 1,
    time: 1743189840,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1518", "frc20", "frc6911"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc9468", "frc578", "frc2875"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm44",
    match_number: 44,
    post_result_time: null,
    predicted_time: 1743190320,
    score_breakdown: null,
    set_number: 1,
    time: 1743190320,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5881", "frc9624", "frc1493"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc810", "frc3173", "frc191"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm45",
    match_number: 45,
    post_result_time: null,
    predicted_time: 1743190800,
    score_breakdown: null,
    set_number: 1,
    time: 1743190800,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7605", "frc7504", "frc1880"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3003", "frc4571", "frc639"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm46",
    match_number: 46,
    post_result_time: null,
    predicted_time: 1743191280,
    score_breakdown: null,
    set_number: 1,
    time: 1743191280,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6806", "frc250", "frc358"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1126", "frc4122", "frc1468"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm47",
    match_number: 47,
    post_result_time: null,
    predicted_time: 1743191760,
    score_breakdown: null,
    set_number: 1,
    time: 1743191760,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2869", "frc3044", "frc3181"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc10714", "frc424", "frc7031"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm48",
    match_number: 48,
    post_result_time: null,
    predicted_time: 1743192240,
    score_breakdown: null,
    set_number: 1,
    time: 1743192240,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6621", "frc6300", "frc6648"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2791", "frc1796", "frc3360"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm49",
    match_number: 49,
    post_result_time: null,
    predicted_time: 1743192720,
    score_breakdown: null,
    set_number: 1,
    time: 1743192720,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7504", "frc8067", "frc7759"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6300", "frc870", "frc1126"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm5",
    match_number: 5,
    post_result_time: null,
    predicted_time: 1743169020,
    score_breakdown: null,
    set_number: 1,
    time: 1743168720,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc578", "frc1591", "frc4458"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2053", "frc8067", "frc334"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm50",
    match_number: 50,
    post_result_time: null,
    predicted_time: 1743193200,
    score_breakdown: null,
    set_number: 1,
    time: 1743193200,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1493", "frc810", "frc7718"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6911", "frc3950", "frc7759"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm51",
    match_number: 51,
    post_result_time: null,
    predicted_time: 1743193680,
    score_breakdown: null,
    set_number: 1,
    time: 1743193680,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5528", "frc3171", "frc4571"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3173", "frc229", "frc3003"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm52",
    match_number: 52,
    post_result_time: null,
    predicted_time: 1743194160,
    score_breakdown: null,
    set_number: 1,
    time: 1743194160,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc250", "frc1126", "frc191"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc639", "frc2875", "frc1518"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm53",
    match_number: 53,
    post_result_time: null,
    predicted_time: 1743194640,
    score_breakdown: null,
    set_number: 1,
    time: 1743194640,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5149", "frc6463", "frc10352"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6806", "frc3117", "frc9468"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm54",
    match_number: 54,
    post_result_time: null,
    predicted_time: 1743195120,
    score_breakdown: null,
    set_number: 1,
    time: 1743195120,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7504", "frc4122", "frc7030"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc20", "frc6401", "frc9624"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm55",
    match_number: 55,
    post_result_time: null,
    predicted_time: 1743195600,
    score_breakdown: null,
    set_number: 1,
    time: 1743195600,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1880", "frc870", "frc3550"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2601", "frc7605", "frc5881"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm56",
    match_number: 56,
    post_result_time: null,
    predicted_time: 1743196080,
    score_breakdown: null,
    set_number: 1,
    time: 1743196080,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1493", "frc6911", "frc1796"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc8067", "frc358", "frc10714"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm57",
    match_number: 57,
    post_result_time: null,
    predicted_time: 1743196560,
    score_breakdown: null,
    set_number: 1,
    time: 1743196560,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2791", "frc2053", "frc578"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3044", "frc3950", "frc3360"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm58",
    match_number: 58,
    post_result_time: null,
    predicted_time: 1743197040,
    score_breakdown: null,
    set_number: 1,
    time: 1743197040,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2869", "frc810", "frc1468"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3181", "frc191", "frc1518"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm59",
    match_number: 59,
    post_result_time: null,
    predicted_time: 1743197520,
    score_breakdown: null,
    set_number: 1,
    time: 1743197520,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6648", "frc1518", "frc9624"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1591", "frc1880", "frc5149"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm6",
    match_number: 6,
    post_result_time: null,
    predicted_time: 1743169500,
    score_breakdown: null,
    set_number: 1,
    time: 1743169200,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1126", "frc10352", "frc4458"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7031", "frc4571", "frc5149"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm60",
    match_number: 60,
    post_result_time: null,
    predicted_time: 1743198000,
    score_breakdown: null,
    set_number: 1,
    time: 1743198000,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc424", "frc3003", "frc7504"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7030", "frc6648", "frc229"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm61",
    match_number: 61,
    post_result_time: null,
    predicted_time: 1743252960,
    score_breakdown: null,
    set_number: 1,
    time: 1743252600,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7759", "frc1591", "frc7605"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3171", "frc9468", "frc250"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm62",
    match_number: 62,
    post_result_time: null,
    predicted_time: 1743253440,
    score_breakdown: null,
    set_number: 1,
    time: 1743253080,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5881", "frc5528", "frc6300"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3117", "frc639", "frc6401"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm63",
    match_number: 63,
    post_result_time: null,
    predicted_time: 1743253920,
    score_breakdown: null,
    set_number: 1,
    time: 1743253560,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2875", "frc6621", "frc7718"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4122", "frc6806", "frc1880"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm64",
    match_number: 64,
    post_result_time: null,
    predicted_time: 1743254400,
    score_breakdown: null,
    set_number: 1,
    time: 1743254040,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc334", "frc3173", "frc6463"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3550", "frc2601", "frc20"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm65",
    match_number: 65,
    post_result_time: null,
    predicted_time: 1743254880,
    score_breakdown: null,
    set_number: 1,
    time: 1743254520,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2791", "frc3044", "frc9624"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc870", "frc4458", "frc1493"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm66",
    match_number: 66,
    post_result_time: null,
    predicted_time: 1743255360,
    score_breakdown: null,
    set_number: 1,
    time: 1743255000,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4571", "frc10714", "frc578"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc191", "frc7030", "frc1468"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm67",
    match_number: 67,
    post_result_time: null,
    predicted_time: 1743255840,
    score_breakdown: null,
    set_number: 1,
    time: 1743255480,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3181", "frc2053", "frc1796"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3171", "frc1518", "frc7605"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm68",
    match_number: 68,
    post_result_time: null,
    predicted_time: 1743256320,
    score_breakdown: null,
    set_number: 1,
    time: 1743255960,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc424", "frc6401", "frc1126"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3117", "frc810", "frc3003"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm69",
    match_number: 69,
    post_result_time: null,
    predicted_time: 1743256800,
    score_breakdown: null,
    set_number: 1,
    time: 1743256440,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4571", "frc6806", "frc7030"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5881", "frc2791", "frc3181"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm7",
    match_number: 7,
    post_result_time: null,
    predicted_time: 1743169980,
    score_breakdown: null,
    set_number: 1,
    time: 1743169680,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7718", "frc5528", "frc6806"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc9468", "frc6648", "frc7504"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm70",
    match_number: 70,
    post_result_time: null,
    predicted_time: 1743257280,
    score_breakdown: null,
    set_number: 1,
    time: 1743256920,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc358", "frc6300", "frc2601"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc20", "frc7031", "frc1591"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm71",
    match_number: 71,
    post_result_time: null,
    predicted_time: 1743257760,
    score_breakdown: null,
    set_number: 1,
    time: 1743257400,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc639", "frc7759", "frc3173"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc8067", "frc3360", "frc4122"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm72",
    match_number: 72,
    post_result_time: null,
    predicted_time: 1743258240,
    score_breakdown: null,
    set_number: 1,
    time: 1743257880,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2869", "frc229", "frc870"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc334", "frc1880", "frc10352"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm73",
    match_number: 73,
    post_result_time: null,
    predicted_time: 1743258720,
    score_breakdown: null,
    set_number: 1,
    time: 1743258360,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3550", "frc5149", "frc5881"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc250", "frc3950", "frc2875"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm74",
    match_number: 74,
    post_result_time: null,
    predicted_time: 1743259200,
    score_breakdown: null,
    set_number: 1,
    time: 1743258840,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6911", "frc6401", "frc6621"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc9624", "frc6463", "frc2053"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm75",
    match_number: 75,
    post_result_time: null,
    predicted_time: 1743259680,
    score_breakdown: null,
    set_number: 1,
    time: 1743259320,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3117", "frc10714", "frc3044"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7504", "frc1518", "frc6806"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm76",
    match_number: 76,
    post_result_time: null,
    predicted_time: 1743260160,
    score_breakdown: null,
    set_number: 1,
    time: 1743259800,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7031", "frc1468", "frc6300"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6648", "frc7605", "frc1493"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm77",
    match_number: 77,
    post_result_time: null,
    predicted_time: 1743260640,
    score_breakdown: null,
    set_number: 1,
    time: 1743260280,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc810", "frc358", "frc4458"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7030", "frc3171", "frc578"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm78",
    match_number: 78,
    post_result_time: null,
    predicted_time: 1743261120,
    score_breakdown: null,
    set_number: 1,
    time: 1743260760,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc191", "frc7759", "frc1880"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc5528", "frc334", "frc424"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm79",
    match_number: 79,
    post_result_time: null,
    predicted_time: 1743261600,
    score_breakdown: null,
    set_number: 1,
    time: 1743261240,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3360", "frc3003", "frc334"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2875", "frc1493", "frc10352"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm8",
    match_number: 8,
    post_result_time: null,
    predicted_time: 1743170460,
    score_breakdown: null,
    set_number: 1,
    time: 1743170160,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc9468", "frc3550", "frc4122"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc870", "frc4571", "frc3181"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm80",
    match_number: 80,
    post_result_time: null,
    predicted_time: 1743262080,
    score_breakdown: null,
    set_number: 1,
    time: 1743261720,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc3950", "frc639", "frc229"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc1796", "frc9624", "frc2601"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm81",
    match_number: 81,
    post_result_time: null,
    predicted_time: 1743262560,
    score_breakdown: null,
    set_number: 1,
    time: 1743262200,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2875", "frc2791", "frc3173"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc7718", "frc10352", "frc1591"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm82",
    match_number: 82,
    post_result_time: null,
    predicted_time: 1743263040,
    score_breakdown: null,
    set_number: 1,
    time: 1743262680,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc20", "frc1126", "frc5149"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6621", "frc3360", "frc2869"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm83",
    match_number: 83,
    post_result_time: null,
    predicted_time: 1743263520,
    score_breakdown: null,
    set_number: 1,
    time: 1743263160,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc250", "frc5881", "frc3003"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc6463", "frc6911", "frc8067"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm84",
    match_number: 84,
    post_result_time: null,
    predicted_time: 1743264000,
    score_breakdown: null,
    set_number: 1,
    time: 1743263640,
    videos: [],
    winning_alliance: "",
  },
  {
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc2601", "frc578", "frc6911"],
      },
      red: {
        dq_team_keys: [],
        score: -1,
        surrogate_team_keys: [],
        team_keys: ["frc4122", "frc2869", "frc5528"],
      },
    },
    comp_level: "qm",
    event_key: "2025nytr",
    key: "2025nytr_qm9",
    match_number: 9,
    post_result_time: null,
    predicted_time: 1743170940,
    score_breakdown: null,
    set_number: 1,
    time: 1743170640,
    videos: [],
    winning_alliance: "",
  },
];

// Must be filled in: e=event, m=match#, l=level(q,qf,sf,f), t=team#, r=robot(r1,r2,b1..), s=scouter
//var requiredFields = ["e", "m", "l", "t", "r", "s", "as"];
var requiredFields = ["e", "m", "r", "s"];

function addTimer(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.setAttribute("colspan", 2);
  cell1.setAttribute("style", "text-align: center;");
  cell1.classList.add("title");
  if (!data.hasOwnProperty("code")) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  cell1.innerHTML = name;
  if (data.hasOwnProperty("tooltip")) {
    cell1.setAttribute("title", data.tooltip);
  }

  idx += 1;
  row = table.insertRow(idx);
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");

  if (data.type == "cycle") {
    var ct = document.createElement("input");
    ct.setAttribute("type", "hidden");
    ct.setAttribute("id", "cycletime_" + data.code);
    if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
      ct.setAttribute("name", data.gsCol);
    } else {
      ct.setAttribute("name", data.code);
    }
    ct.setAttribute("value", "[]");
    cell.appendChild(ct);
    ct = document.createElement("input");
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
  if (data.type == "timer") {
    inp.classList.add("timer");
  } else {
    inp.classList.add("cycle");
  }
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "text");
  if (data.type != "cycle") {
    if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
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

  if (data.type == "cycle") {
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
    button4.setAttribute("style", "margin-left: 20px;");
    cell.appendChild(button4);
  }

  idx += 1;
  row = table.insertRow(idx);
  row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  var inp = document.createElement("input");
  inp.setAttribute("type", "hidden");
  inp.setAttribute("id", "status_" + data.code);
  inp.setAttribute("value", "stopped");
  cell.appendChild(inp);
  inp = document.createElement("input");
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "intervalId_" + data.code);
  inp.setAttribute("value", "");
  cell.appendChild(inp);

  if (data.hasOwnProperty("defaultValue")) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code);
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
  if (!data.hasOwnProperty("code")) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + "&nbsp;";
  if (data.hasOwnProperty("tooltip")) {
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
  if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
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

  if (data.hasOwnProperty("cycleTimer")) {
    if (data.cycleTimer != "") {
      inp = document.createElement("input");
      inp.setAttribute("hidden", "");
      inp.setAttribute("id", "cycleTimer_" + data.code);
      inp.setAttribute("value", data.cycleTimer);
      cell.appendChild(inp);
    }
  }

  if (data.hasOwnProperty("defaultValue")) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code);
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
  if (!data.hasOwnProperty("code")) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  cell.innerHTML = name + "&nbsp;";
  if (data.hasOwnProperty("tooltip")) {
    cell.setAttribute("title", data.tooltip);
  }

  let showFlip = true;
  if (data.hasOwnProperty("showFlip")) {
    if (data.showFlip.toLowerCase() == "false") {
      showFlip = false;
    }
  }

  let showUndo = true;
  if (data.hasOwnProperty("showUndo")) {
    if (data.showUndo.toLowerCase() == "false") {
      showUndo = false;
    }
  }

  if (showFlip || showUndo) {
    idx += 1;
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
        flipButton.setAttribute("margin-left", "8px");
      }
      cell.appendChild(flipButton);
    }
  }

  idx += 1;
  row = table.insertRow(idx);
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  var canvas = document.createElement("canvas");
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
  var inp = document.createElement("input");
  inp.setAttribute("type", "hidden");
  inp.setAttribute("id", "XY_" + data.code);
  inp.setAttribute("value", "[]");
  cell.appendChild(inp);
  inp = document.createElement("input");
  inp.setAttribute("hidden", "");
  if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("value", "[]");
  inp.setAttribute("class", "clickableImage");

  cell.appendChild(inp);

  // TODO: Make these more efficient/elegant
  inp = document.createElement("input");
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "clickRestriction_" + data.code);
  inp.setAttribute("value", "none");
  if (data.hasOwnProperty("clickRestriction")) {
    if (data.clickRestriction == "one" || data.clickRestriction == "onePerBox") {
      inp.setAttribute("value", data.clickRestriction);
    }
  }
  cell.appendChild(inp);

  inp = document.createElement("input");
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "allowableResponses_" + data.code);
  inp.setAttribute("value", "none");
  if (data.hasOwnProperty("allowableResponses")) {
    let responses = data.allowableResponses.split(" ").map(Number);
    console.log(responses);
    inp.setAttribute("value", responses);
  }
  cell.appendChild(inp);

  inp = document.createElement("input");
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "dimensions_" + data.code);
  inp.setAttribute("value", "12 6");
  if (data.hasOwnProperty("dimensions")) {
    if (data.dimensions != "") {
      // TODO: Add validation for "X Y" format
      inp.setAttribute("value", data.dimensions);
    }
  }
  cell.appendChild(inp);

  inp = document.createElement("input");
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "shape_" + data.code);
  // Default shape: white circle of size 5 not filled in
  inp.setAttribute("value", "circle 5 white white true");
  if (data.hasOwnProperty("shape")) {
    if (data.shape != "") {
      // TODO: Add validation for "shape size color fill" format
      inp.setAttribute("value", data.shape);
    }
  }
  cell.appendChild(inp);

  inp = document.createElement("input");
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "toggleClick_" + data.code);
  inp.setAttribute("value", "false");
  if (data.hasOwnProperty("toggleClick")) {
    if (data.toggleClick != "") {
      // TODO: Add validation for true/false format
      inp.setAttribute("value", data.toggleClick);
    }
  }
  cell.appendChild(inp);

  if (data.hasOwnProperty("cycleTimer")) {
    if (data.cycleTimer != "") {
      inp = document.createElement("input");
      inp.setAttribute("hidden", "");
      inp.setAttribute("id", "cycleTimer_" + data.code);
      inp.setAttribute("value", data.cycleTimer);
      cell.appendChild(inp);
    }
  }

  idx += 1;
  row = table.insertRow(idx);
  row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  var img = document.createElement("img");
  img.src = data.filename;
  img.setAttribute("id", "img_" + data.code);
  img.setAttribute("class", "field-image-src");
  img.setAttribute("onload", "drawFields()");
  img.setAttribute("hidden", "");
  cell.appendChild(img);

  return idx + 1;
}

function addText(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty("code")) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + "&nbsp;";
  if (data.hasOwnProperty("tooltip")) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "text");
  if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  if (data.hasOwnProperty("size")) {
    inp.setAttribute("size", data.size);
  }
  if (data.hasOwnProperty("maxSize")) {
    inp.setAttribute("maxLength", data.maxSize);
  }
  if (data.hasOwnProperty("defaultValue")) {
    if (data.type == "event") {
      data.defaultValue = data.defaultValue.toLowerCase();
    }
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty("required")) {
    inp.setAttribute("required", "");
  }
  if (data.hasOwnProperty("disabled")) {
    inp.setAttribute("disabled", "");
  }
  cell2.appendChild(inp);

  if (data.hasOwnProperty("defaultValue")) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code);
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1;
}

function addTextArea(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty("code")) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + "&nbsp;";
  if (data.hasOwnProperty("tooltip")) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  var inp = document.createElement("textarea");
  inp.setAttribute("id", "textarea_" + data.code);
  if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  if (data.hasOwnProperty("size")) {
    inp.setAttribute("size", data.size);
  }
  if (data.hasOwnProperty("maxSize")) {
    inp.setAttribute("maxLength", data.maxSize);
  }
  if (data.hasOwnProperty("defaultValue")) {
    if (data.type == "event") {
      data.defaultValue = data.defaultValue.toLowerCase();
    }
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty("required")) {
    inp.setAttribute("required", "");
  }
  if (data.hasOwnProperty("disabled")) {
    inp.setAttribute("disabled", "");
  }
  if (data.hasOwnProperty("rows")) {
    inp.setAttribute("rows", data.rows);
  }
  cell2.appendChild(inp);

  if (data.hasOwnProperty("defaultValue")) {
    var def = document.createElement("textarea");
    def.setAttribute("id", "default_" + data.code);
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1;
}

function addNumber(table, idx, name, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty("code")) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + "&nbsp;";
  if (data.hasOwnProperty("tooltip")) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "number");
  if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  if (data.type == "team" || data.type == "match") {
    inp.setAttribute("onchange", "updateMatchStart(event)");
  }
  if (data.hasOwnProperty("min")) {
    inp.setAttribute("min", data.min);
  }
  if (data.hasOwnProperty("max")) {
    inp.setAttribute("max", data.max);
  }
  if (data.hasOwnProperty("defaultValue")) {
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty("disabled")) {
    inp.setAttribute("disabled", "");
  }
  if (data.hasOwnProperty("required")) {
    inp.setAttribute("required", "");
  }
  cell2.appendChild(inp);

  if (data.hasOwnProperty("defaultValue")) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code);
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  if (data.type == "team") {
    idx += 1;
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
  if (!data.hasOwnProperty("code")) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + "&nbsp;";
  if (data.hasOwnProperty("tooltip")) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  if (data.type == "level" || data.type == "robot") {
    cell2.setAttribute("onchange", "updateMatchStart(event)");
  }
  var checked = null;
  if (data.hasOwnProperty("defaultValue")) {
    checked = data.defaultValue;
  }
  if (data.hasOwnProperty("choices")) {
    keys = Object.keys(data.choices);
    keys.forEach((c) => {
      var inp = document.createElement("input");
      inp.setAttribute("id", "input_" + data.code + "_" + c);
      inp.setAttribute("type", "radio");
      if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
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

  if (data.hasOwnProperty("defaultValue")) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code);
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
  if (!data.hasOwnProperty("code")) {
    cell1.innerHTML = `Error: No code specified for ${name}`;
    return idx + 1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name + "&nbsp;";
  if (data.hasOwnProperty("tooltip")) {
    cell1.setAttribute("title", data.tooltip);
  }
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "checkbox");
  if (enableGoogleSheets && data.hasOwnProperty("gsCol")) {
    inp.setAttribute("name", data.gsCol);
  } else {
    inp.setAttribute("name", data.code);
  }
  cell2.appendChild(inp);

  if (data.type == "bool") {
    cell2.innerHTML += "";
  }

  if (data.hasOwnProperty("defaultValue")) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_" + data.code);
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx + 1;
}

function addElement(table, idx, data) {
  var type = null;
  var name = "Default Name";
  if (data.hasOwnProperty("name")) {
    name = data.name;
  }
  if (data.hasOwnProperty("type")) {
    type = data.type;
  } else {
    console.log("No type specified");
    console.log("Data: ");
    console.log(data);
    err = { code: "err", defaultValue: "No type specified: " + data };
    idx = addText(table, idx, name, err);
    return;
  }
  if (type == "counter") {
    idx = addCounter(table, idx, name, data);
  } else if (data.type == "scouter" || data.type == "event" || data.type == "text") {
    idx = addText(table, idx, name, data);
  } else if (data.type == "level" || data.type == "radio" || data.type == "robot") {
    idx = addRadio(table, idx, name, data);
  } else if (data.type == "match" || data.type == "team" || data.type == "number") {
    idx = addNumber(table, idx, name, data);
  } else if (data.type == "field_image" || data.type == "clickable_image") {
    idx = addClickableImage(table, idx, name, data);
  } else if (data.type == "bool" || data.type == "checkbox" || data.type == "pass_fail") {
    idx = addCheckbox(table, idx, name, data);
  } else if (data.type == "counter") {
    idx = addCounter(table, idx, name, data);
  } else if (data.type == "timer" || data.type == "cycle") {
    idx = addTimer(table, idx, name, data);
  } else if (data.type == "textarea") {
    idx = addTextArea(table, idx, name, data);
  } else {
    console.log(`Unrecognized type: ${data.type}`);
  }
  return idx;
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
    return -1;
  }

  if (mydata.hasOwnProperty("dataFormat")) {
    dataFormat = mydata.dataFormat;
  }

  if (mydata.hasOwnProperty("title")) {
    document.title = mydata.title;
  }

  if (mydata.hasOwnProperty("page_title")) {
    for (pgtitle of document.getElementsByClassName("page_title")) {
      pgtitle.innerHTML = mydata.page_title;
    }
  }

  if (mydata.hasOwnProperty("enable_google_sheets")) {
    if (mydata.enable_google_sheets.toUpperCase() == "TRUE") {
      enableGoogleSheets = true;
    }
  }

  if (mydata.hasOwnProperty("pitConfig")) {
    if (mydata.pitConfig.toUpperCase() == "TRUE") {
      pitScouting = true;
    }
  }

  if (mydata.hasOwnProperty("checkboxAs")) {
    // Supported modes
    // YN - Y or N
    // TF - T or F
    // 10 - 1 or 0
    if (["YN", "TF", "10"].includes(mydata.checkboxAs)) {
      console.log("Setting checkboxAs to " + mydata.checkboxAs);
      checkboxAs = mydata.checkboxAs;
    } else {
      console.log("unrecognized checkboxAs setting.  Defaulting to YN.");
      checkboxAs = "YN";
    }
  }

  // Configure prematch screen
  var pmc = mydata.prematch;
  var pmt = document.getElementById("prematch_table");
  var idx = 0;
  pmc.forEach((element) => {
    idx = addElement(pmt, idx, element);
  });

  // Configure auton screen
  var ac = mydata.auton;
  var at = document.getElementById("auton_table");
  idx = 0;
  ac.forEach((element) => {
    idx = addElement(at, idx, element);
  });

  // Configure teleop screen
  var tc = mydata.teleop;
  var tt = document.getElementById("teleop_table");
  idx = 0;
  tc.forEach((element) => {
    idx = addElement(tt, idx, element);
  });

  // Configure endgame screen
  var egc = mydata.endgame;
  var egt = document.getElementById("endgame_table");
  idx = 0;
  egc.forEach((element) => {
    idx = addElement(egt, idx, element);
  });

  // Configure postmatch screen
  pmc = mydata.postmatch;
  pmt = document.getElementById("postmatch_table");
  var idx = 0;
  pmc.forEach((element) => {
    idx = addElement(pmt, idx, element);
  });

  if (!enableGoogleSheets) {
    document.getElementById("submit").style.display = "none";
  }

  return 0;
}

function getRobot() {
  return document.forms.scoutingForm.r.value;
}

function resetRobot() {
  for (rb of document.getElementsByName("r")) {
    rb.checked = false;
  }
}

function validateData() {
  var ret = true;
  var errStr = "";
  for (rf of requiredFields) {
    var thisRF = document.forms.scoutingForm[rf];
    if (thisRF.value == "[]" || thisRF.value.length == 0) {
      if (rf == "as") {
        rftitle = "Auto Start Position";
      } else {
        thisInputEl = thisRF instanceof RadioNodeList ? thisRF[0] : thisRF;
        rftitle = thisInputEl.parentElement.parentElement.children[0].innerHTML.replace("&nbsp;", "");
      }
      errStr += rf + ": " + rftitle + "\n";
      ret = false;
    }
  }
  if (ret == false) {
    alert("Enter all required values\n" + errStr);
  }
  return ret;
}

function getData(dataFormat) {
  var Form = document.forms.scoutingForm;
  var UniqueFieldNames = [];
  var fd = new FormData();
  var str = [];

  switch (checkboxAs) {
    case "TF":
      checkedChar = "T";
      uncheckedChar = "F";
      break;
    case "10":
      checkedChar = "1";
      uncheckedChar = "0";
      break;
    default:
      var checkedChar = "Y";
      var uncheckedChar = "N";
  }

  // collect the names of all the elements in the form
  var fieldnames = Array.from(Form.elements, (formElmt) => formElmt.name);

  // make sure to add the name attribute only to elements from which you want to collect values.  Radio button groups all share the same name
  // so those element names need to be de-duplicated here as well.
  fieldnames.forEach((fieldname) => {
    if (fieldname != "" && !UniqueFieldNames.includes(fieldname)) {
      UniqueFieldNames.push(fieldname);
    }
  });

  UniqueFieldNames.forEach((fieldname) => {
    var thisField = Form[fieldname];

    if (thisField.type == "checkbox") {
      var thisFieldValue = thisField.checked ? checkedChar : uncheckedChar;
    } else {
      var thisFieldValue = thisField.value ? thisField.value.replace(/"/g, "").replace(/;/g, "-") : "";
    }
    fd.append(fieldname, thisFieldValue);
  });

  if (dataFormat == "kvs") {
    Array.from(fd.keys()).forEach((thisKey) => {
      str.push(thisKey + "=" + fd.get(thisKey));
    });
    return str.join(";");
  } else if (dataFormat == "tsv") {
    Array.from(fd.keys()).forEach((thisKey) => {
      str.push(fd.get(thisKey));
    });
    return str.join("\t");
  } else {
    return "unsupported dataFormat";
  }
}

function updateQRHeader() {
  let str = "Robot: !ROBOT! Event: !EVENT! Match: !MATCH! Team: !TEAM!";

  if (!pitScouting) {
    str = str
      .replace("!EVENT!", document.getElementById("input_e").value)
      .replace("!MATCH!", document.getElementById("input_m").value)
      .replace("!ROBOT!", document.getElementById("display_r").value)
      .replace("!TEAM!", document.getElementById("input_t").value);
  } else {
    str = "Pit Scouting - Team !TEAM!".replace("!TEAM!", document.getElementById("input_t").value);
  }

  document.getElementById("display_qr-info").textContent = str;
}

function makeQrCode(data) {
  qr.makeCode(data);
}

function qr_regenerate() {
  // Validate required pre-match date (event, match, level, robot, scouter)
  if (!pitScouting) {
    if (validateData() == false) {
      // Don't allow a swipe until all required data is filled in
      return false;
    }
    pinNum = document.getElementById("input_s").value;
    if (pins[pinNum] == undefined) {
      alert("Invalid Scouter Pin.");
      return false;
    }
  } else if (pitScouting) {
    if (document.getElementById("input_t").value == null || document.getElementById("input_t").value == "") {
      alert("Enter all required values:\nTeam Number");
    }
  }

  // Get matchNYRRsessionsdata
  data = getData(dataFormat);

  if (!pitScouting) {
    key = document.getElementById("input_m").value + "." + getRobot();
    matchNYRR = localStorage.getItem("matchNYRR");
    pinNum = document.getElementById("input_s").value;
    data.replace(pinNum, pins[pinNum]);

    if (matchNYRR) {
      const matchNYRRDictionary = JSON.parse(matchNYRR);
      matchNYRRDictionary[key] = key + "\t" + data;
      matchNYRRDictionary[key].replace("r1", "Red", "r2", "Red", "r3", "Red", "b1", "Blue", "b2", "Blue", "b3", "Blue");
      temp = matchNYRRDictionary[key].split("\t");
      temp[1] = pins[pinNum];
      matchNYRRDictionary[key] = temp.join("\t");
      localStorage.setItem("matchNYRR", JSON.stringify(matchNYRRDictionary));
      console.log(matchNYRRDictionary);
    } else {
      const matchNYRRDictionary = {};
      matchNYRRDictionary[key] = key + "\t" + data;
      matchNYRRDictionary[key].replace("r1", "Red", "r2", "Red", "r3", "Red", "b1", "Blue", "b2", "Blue", "b3", "Blue");
      temp = matchNYRRDictionary[key].split("\t");
      temp[1] = pins[pinNum];
      matchNYRRDictionary[key] = temp.join("\t");
      localStorage.setItem("matchNYRR", JSON.stringify(matchNYRRDictionary));
    }
  } else {
    key = document.getElementById("input_t").value;
    pitNYRR = localStorage.getItem("pitNYRR");
    if (pitNYRR) {
      const pitDictionary = JSON.parse(pitNYRR);
      pitDictionary[key] = data;
      localStorage.setItem("pitNYRR", JSON.stringify(pitDictionary));
    } else {
      const pitDictionary = {};
      pitDictionary[key] = data;
      localStorage.setItem("pitNYRR", JSON.stringify(pitDictionary));
    }
  }

  clear = false;
  if (clear) {
    localStorage.clear();
  }

  if (!pitScouting) {
    matchNYRR = localStorage.getItem("matchNYRR");
    key = document.getElementById("input_m").value + "." + getRobot();
    const matchNYRRDictionary = JSON.parse(matchNYRR);
    qr.makeCode(matchNYRRDictionary[key]);
  } else {
    pitNYRR = localStorage.getItem("pitNYRR");
    key = document.getElementById("input_t").value;
    const pitDictionary = JSON.parse(pitNYRR);
    qr.makeCode(pitDictionary[key]);
  }

  updateQRHeader();
  return true;
}

function qr_clear() {
  qr.clear();
}

function clearForm() {
  var match = 0;
  var e = 0;
  if (pitScouting) {
    swipePage(-1);
  } else {
    swipePage(-5);

    // Increment match
    match = parseInt(document.getElementById("input_m").value);
    if (match == NaN) {
      document.getElementById("input_m").value = "";
    } else {
      document.getElementById("input_m").value = match + 1;
    }

    // Robot
    resetRobot();
  }

  // Clear XY coordinates
  inputs = document.querySelectorAll("[id*='XY_']");
  for (e of inputs) {
    code = e.id.substring(3);
    e.value = "[]";
  }

  inputs = document.querySelectorAll("[id*='input_']");
  for (e of inputs) {
    code = e.id.substring(6);

    // Don't clear key fields
    if (code == "m") continue;
    if (code.substring(0, 2) == "r_") continue;
    if (code == "e") continue;

    if (e.className == "clickableImage") {
      e.value = "[]";
      continue;
    }

    radio = code.indexOf("_");
    if (radio > -1) {
      var baseCode = code.substr(0, radio);
      if (e.checked) {
        e.checked = false;
        document.getElementById("display_" + baseCode).value = "";
      }
      var defaultValue = document.getElementById("default_" + baseCode).value;
      if (defaultValue != "") {
        if (defaultValue == e.value) {
          e.checked = true;
          document.getElementById("display_" + baseCode).value = defaultValue;
        }
      }
    } else {
      if (e.type == "number" || e.type == "text" || e.type == "hidden") {
        if (e.className == "counter" || e.className == "timer" || e.className == "cycle") {
          e.value = 0;
          if (e.className == "timer" || e.className == "cycle") {
            // Stop interval
            timerStatus = document.getElementById("status_" + code);
            startButton = document.getElementById("start_" + code);
            intervalIdField = document.getElementById("intervalId_" + code);
            var intervalId = intervalIdField.value;
            timerStatus.value = "stopped";
            startButton.innerHTML = "Start";
            if (intervalId != "") {
              clearInterval(intervalId);
            }
            intervalIdField.value = "";
            if (e.className == "cycle") {
              document.getElementById("cycletime_" + code).value = "[]";
              document.getElementById("display_" + code).value = "";
            }
          }
        } else {
          e.value = "";
        }
      } else if (e.type == "checkbox") {
        e.checked = false;
      } else if (e.type == "scouter") {
        e.value = "";
      } else {
        console.log("unsupported input type");
      }
    }
  }
  drawFields();
}

function startTouch(e) {
  initialX = e.touches[0].screenX;
}

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
}

function swipePage(increment) {
  if (qr_regenerate() == true) {
    slides = document.getElementById("main-panel-holder").children;
    if (slide + increment < slides.length && slide + increment >= 0) {
      slides[slide].style.display = "none";
      slide += increment;
      window.scrollTo(0, 0);
      slides[slide].style.display = "table";
      document.getElementById("data").innerHTML = "";
      document.getElementById("copyButton").setAttribute("value", "Copy Data");
    }
  }
}

function drawFields(name) {
  var fields = document.querySelectorAll("[id*='canvas_']");

  for (f of fields) {
    code = f.id.substring(7);
    var img = document.getElementById("img_" + code);
    var shape = document.getElementById("shape_" + code);
    let shapeArr = shape.value.split(" ");
    var ctx = f.getContext("2d");
    ctx.clearRect(0, 0, f.width, f.height);
    ctx.drawImage(img, 0, 0, f.width, f.height);

    var xyStr = document.getElementById("XY_" + code).value;
    if (JSON.stringify(xyStr).length > 2) {
      pts = Array.from(JSON.parse(xyStr));
      for (p of pts) {
        var coord = p.split(",");
        var centerX = coord[0];
        var centerY = coord[1];
        var radius = 5;
        ctx.beginPath();
        if (shapeArr[0].toLowerCase() == "circle") {
          ctx.arc(centerX, centerY, shapeArr[1], 0, 2 * Math.PI, false);
        } else {
          ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        }
        ctx.lineWidth = 2;
        if (shapeArr[2] != "") {
          ctx.strokeStyle = shapeArr[2];
        } else {
          ctx.strokeStyle = "#FFFFFF";
        }
        if (shapeArr[4].toLowerCase() == "true") {
          ctx.fillStyle = shapeArr[3];
        }
        ctx.stroke();
        if (shapeArr[4].toLowerCase() == "true") {
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
    let arr = dimensions.value.split(" ");
    resX = arr[0];
    resY = arr[1];
  }

  //Turns coordinates into a numeric box
  let box =
    (Math.ceil((event.offsetY / target.height) * resY) - 1) * resX + Math.ceil((event.offsetX / target.width) * resX);
  let coords = event.offsetX + "," + event.offsetY;

  let allowableResponses = document.getElementById("allowableResponses" + base).value;

  if (allowableResponses != "none") {
    allowableResponsesList = allowableResponses.split(",").map(Number);
    if (allowableResponsesList.indexOf(box) == -1) {
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

  if (toggleClick.toLowerCase() == "true" && boxArr.includes(box)) {
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

  drawFields();
}

function findMiddleOfBox(boxNum, width, height, resX, resY) {
  let boxHeight = height / resY;
  let boxWidth = width / resX;
  let boxX = (boxNum % resX) - 1;
  if (boxX == -1) {
    boxX = resX - 1;
  }
  let boxY = Math.floor((boxNum - boxX + 1) / resX);
  let x = Math.round(boxWidth * boxX + Math.floor(boxWidth / 2));
  let y = Math.round(boxHeight * boxY + Math.floor(boxHeight / 2));
  return x + "," + y;
}

function getIdBase(name) {
  return name.slice(name.indexOf("_"), name.length);
}

function getTeamName(teamNumber) {
  if (teamNumber !== undefined) {
    if (teams) {
      var teamKey = "frc" + teamNumber;
      var ret = "";
      Array.from(teams).forEach((team) => (ret = team.key == teamKey ? team.nickname : ret));
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
      Array.from(schedule).forEach((match) => (ret = match.key == matchKey ? match.alliances : ret));
      return ret;
    }
  }
  return "";
}

function getCurrentTeamNumberFromRobot() {
  if (getRobot() != "" && typeof getRobot() !== "undefined" && getCurrentMatch() != "") {
    if (getRobot().charAt(0) == "r") {
      return getCurrentMatch().red.team_keys[parseInt(getRobot().charAt(1)) - 1];
    } else if (getRobot().charAt(0) == "b") {
      return getCurrentMatch().blue.team_keys[parseInt(getRobot().charAt(1)) - 1];
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
  if (document.getElementById("input_m").value != null && getRobot() != null) {
    alliancePos = getRobot();
    match = document.getElementById("input_m").value;
    alliance = "";
    pos = 0;
    index = 0;
    for (let i = 0; i < eventMatches.length; i++) {
      if (eventMatches[i]["match_number"] == match) {
        index = i;
        break;
      }
    }
    if (alliancePos.substring(0, 1) == "R") {
      alliance = "red";
      pos = alliancePos.substring(4);
    } else if (alliancePos.substring(0, 1) == "B") {
      alliance = "blue";
      pos = alliancePos.substring(5);
    }
    teamNumber = eventMatches[index]["alliances"][alliance]["team_keys"][pos - 1].substring(3);
    document.getElementById("input_t").value = teamNumber;
  }

  if (getCurrentMatch() == "" || !teams) {
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
    teamLabel.innerText =
      getTeamName(newNumber) != ""
        ? "You are scouting " + getTeamName(newNumber)
        : "That team isn't playing this match, please double check to verify correct number";
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

  if (result >= 0 || ctr.hasAttribute("data-negative")) {
    ctr.value = result;
  } else {
    ctr.value = 0;
  }

  // If associated with cycleTimer - send New Cycle EVENT
  if (step >= 0 && cycleTimer != null) {
    document.getElementById("cycle_" + cycleTimer.value).click();
  }
}

function newCycle(event) {
  let timerID = event.firstChild;
  let base = getIdBase(timerID.id);
  let inp = document.getElementById("input" + base);
  let cycleTime = inp.value;
  inp.value = 0;

  if (cycleTime > 0) {
    let cycleInput = document.getElementById("cycletime" + base);
    var tempValue = Array.from(JSON.parse(cycleInput.value));
    tempValue.push(cycleTime);
    cycleInput.value = JSON.stringify(tempValue);
    let d = document.getElementById("display" + base);
    d.value = cycleInput.value.replace(/\"/g, "").replace(/\[/g, "").replace(/\]/g, "").replace(/,/g, ", ");
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
  d.value = cycleInput.value.replace(/\"/g, "").replace(/\[/g, "").replace(/\]/g, "").replace(/,/g, ", ");
}

function resetTimer(event) {
  let timerID = event.firstChild;
  let tId = getIdBase(timerID.id);
  let inp = document.getElementById("input" + tId);
  inp.value = 0;

  // stop timer
  timerStatus = document.getElementById("status" + tId);
  startButton = document.getElementById("start" + tId);
  intervalIdField = document.getElementById("intervalId" + tId);
  var intervalId = intervalIdField.value;
  timerStatus.value = "stopped";
  startButton.setAttribute("value", "Start");
  if (intervalId != "") {
    clearInterval(intervalId);
  }
  intervalIdField.value = "";
}

function timer(event) {
  let timerID = event.firstChild;
  let tId = getIdBase(timerID.id);
  timerStatus = document.getElementById("status" + tId);
  startButton = document.getElementById("start" + tId);
  intervalIdField = document.getElementById("intervalId" + tId);
  var statusValue = timerStatus.value;
  var intervalId = intervalIdField.value;
  if (statusValue == "stopped") {
    timerStatus.value = "started";
    startButton.setAttribute("value", "Stop");

    var intId = setInterval(() => {
      if (document.getElementById("status" + tId).value == "started") {
        inp = document.getElementById("input" + tId);
        var t = parseFloat(inp.value);
        t += 0.1;
        tTrunc = t.toFixed(1);
        inp.value = tTrunc;
      }
    }, 100);
    intervalIdField.value = intId;
  } else {
    timerStatus.value = "stopped";
    startButton.setAttribute("value", "Start");

    clearInterval(intervalId);
    intervalIdField.value = "";
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
    flipImg.style.transform = "rotate(180deg)";
  } else {
    flipImg.style.transform = "";
  }
  drawFields();
}

function displayData() {
  document.getElementById("data").innerHTML = getData(dataFormat);
}

function copyData() {
  navigator.clipboard.writeText(getData(dataFormat));
  document.getElementById("copyButton").setAttribute("value", "Copied");
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

  if (type == "match") {
    // Retrieve scouting matchNYRR from localStorage.
    const matchNYRR = JSON.parse(localStorage.getItem("matchNYRR"));
    for (const [key, value] of Object.entries(matchNYRR)) {
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
  } else if (type == "pit") {
    // Retrieve scouting pitNYRR from localStorage.
    const pitNYRR = JSON.parse(localStorage.getItem("pitNYRR"));
    for (const [key, value] of Object.entries(pitNYRR)) {
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

function saveAndClear() {
  key = document.getElementById("input_sc").value;
  pitNYRR = localStorage.getItem("pitNYRR");
  if (pitNYRR) {
    const pitDictionary = JSON.parse(pitNYRR);
    pitDictionary[key] = data;
    localStorage.setItem("pitNYRR", JSON.stringify(pitDictionary));
  } else {
    const pitDictionary = {};
    pitDictionary[key] = data;
    localStorage.setItem("pitNYRR", JSON.stringify(pitDictionary));
  }
  clearForm();
}
