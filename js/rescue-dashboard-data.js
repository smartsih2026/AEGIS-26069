/*
 * AEGIS National Weather Big Data Analytics Platform - MoES / SIH26069
 * Multi-Source Ingestion Telemetry, AI Verification Matrix & City Nodes
 * Primary Live Demo: Hyderabad, Telangana (Deccan / Musi River Basin)
 */

const assamStateDistrictData = {
  "Hyderabad": {
    district: "Hyderabad, Telangana (Active Demo Center)",
    division: "Telangana / Musi River Basin",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [17.3850, 78.4867],
    activeSos: 16,
    ongoingRescues: 8,
    peopleRescuedToday: 142,
    teamsDeployed: 12,
    river: "Musi River: High Level (4.2m) • Osman Sagar Gates 2 & 4 Open",
    rainfall: "128 mm (Intense Cloudburst / Downpour)",
    status: "Severe Urban Inundation Active",
    weatherCategory: "Flooding & Cloudburst",
    activeSosList: [
      { id: "IMD-HYD-901", priority: "HIGH", priorityClass: "red", countBadge: "4", title: "Khairatabad Underpass Submerged", headcount: "6 Commuters Trapped", location: "Khairatabad Junction", coordinates: [17.4125, 78.4682], time: "10:25 AM", assignedTeam: "GHMC DRF Unit 1", statusBadge: "On the way", eta: "8 min" },
      { id: "IMD-HYD-902", priority: "HIGH", priorityClass: "red", countBadge: "3", title: "Musi River Causeway Inundation", headcount: "Family of 5", location: "Moosarambagh Old Bridge", coordinates: [17.3712, 78.5089], time: "10:18 AM", assignedTeam: "NDRF 10th Bn Boat", statusBadge: "Active Rescue", eta: "Reached" },
      { id: "IMD-HYD-903", priority: "MEDIUM", priorityClass: "orange", countBadge: "2", title: "Begumpet Nala Overflow Hazard", headcount: "8 Shop Owners", location: "Balanagar Main Road", coordinates: [17.4483, 78.4744], time: "10:30 AM", assignedTeam: "Telangana Fire Unit", statusBadge: "Enroute", eta: "12 min" },
      { id: "IMD-HYD-904", priority: "LOW", priorityClass: "blue", countBadge: "1", title: "Hitec City Waterlogged Road (FLAGGED FAKE)", headcount: "Citizen Post", location: "Cyber Towers Inorbit Rd", coordinates: [17.4399, 78.3808], time: "10:35 AM", assignedTeam: "AI Quarantined", statusBadge: "Fake Post", eta: "Blocked" }
    ],
    teams: [
      { team: "GHMC DRF Unit 1", type: "Inundation Dewatering Unit", location: "Khairatabad Flyover", eta: "ETA: 8 min", statusColor: "#38bdf8" },
      { team: "NDRF 10th Bn Boat", type: "Inflatable Zodiac Boat", location: "Moosarambagh Musi", eta: "Active Rescue", statusColor: "#ef4444" },
      { team: "Telangana Fire & Rescue", type: "Emergency Response Tender", location: "Begumpet / Balanagar", eta: "ETA: 12 min", statusColor: "#f59e0b" },
      { team: "Traffic Taskforce", type: "Diversion Team", location: "Somajiguda Circle", eta: "Patrolling", statusColor: "#10b981" }
    ]
  },
  "Mumbai": {
    district: "Mumbai, Maharashtra",
    division: "West Coast / Konkan",
    riskLevel: "High",
    riskColor: "#f59e0b",
    coordinates: [19.0760, 72.8777],
    activeSos: 14,
    ongoingRescues: 6,
    peopleRescuedToday: 110,
    teamsDeployed: 9,
    river: "Mithi River: Water Level 3.4m (Approaching Warning)",
    rainfall: "185 mm (Heavy Monsoonal Squall)",
    status: "High Alert",
    weatherCategory: "Rainfall & Thunderstorm",
    activeSosList: [
      { id: "IMD-BOM-101", priority: "HIGH", priorityClass: "red", countBadge: "3", title: "Hindmata Waterlogging", headcount: "Transit Commuters", location: "Hindmata Flyover Underpass", coordinates: [19.0118, 72.8423], time: "10:12 AM", assignedTeam: "MCGM DRF-2", statusBadge: "Pumps Active", eta: "10 min" }
    ],
    teams: [
      { team: "MCGM DRF-2", type: "High-Capacity Dewatering Pump", location: "Hindmata Underpass", eta: "Pumping", statusColor: "#10b981" }
    ]
  },
  "Delhi": {
    district: "Delhi NCR",
    division: "Northern Plains",
    riskLevel: "Moderate",
    riskColor: "#38bdf8",
    coordinates: [28.6139, 77.2090],
    activeSos: 7,
    ongoingRescues: 3,
    peopleRescuedToday: 55,
    teamsDeployed: 6,
    river: "Yamuna River: 204.8m (Below Warning Mark)",
    rainfall: "82 mm (Thunderstorm & Gusty Winds)",
    status: "Thunderstorm Warning Active",
    weatherCategory: "Thunderstorm",
    activeSosList: [
      { id: "IMD-DEL-201", priority: "MEDIUM", priorityClass: "orange", countBadge: "2", title: "Fallen Tree & Power Line", headcount: "Local Residents", location: "Minto Bridge", coordinates: [28.6340, 77.2240], time: "10:05 AM", assignedTeam: "NDMC Squad", statusBadge: "Clearing", eta: "15 min" }
    ],
    teams: [
      { team: "NDMC Squad", type: "Tree Cutter & Generator", location: "Minto Bridge", eta: "Clearing", statusColor: "#38bdf8" }
    ]
  },
  "Rajasthan": {
    district: "Jodhpur & Thar Region, Rajasthan",
    division: "North-Western Arid Zone",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [26.2389, 73.0243],
    activeSos: 5,
    ongoingRescues: 2,
    peopleRescuedToday: 32,
    teamsDeployed: 4,
    river: "Luni River Basin: Dry",
    rainfall: "0 mm (Severe Dust Storm & 68 km/h Gale Winds)",
    status: "Dust Storm Red Alert",
    weatherCategory: "Dust Storm",
    activeSosList: [
      { id: "IMD-RAJ-301", priority: "HIGH", priorityClass: "red", countBadge: "1", title: "Highway Zero Visibility Dust Storm", headcount: "Vehicles on NH-62", location: "NH-62 Jodhpur Bypass", coordinates: [26.2700, 73.0500], time: "10:20 AM", assignedTeam: "Highway Patrol 9", statusBadge: "Convoy Escort", eta: "Active" }
    ],
    teams: [
      { team: "Highway Patrol 9", type: "Dust Storm Escort Convoy", location: "NH-62 Jodhpur", eta: "Patrolling", statusColor: "#ef4444" }
    ]
  },
  "Golaghat": {
    district: "Golaghat, Assam",
    division: "Upper Assam",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [26.4049, 94.0321],
    activeSos: 12,
    ongoingRescues: 7,
    peopleRescuedToday: 86,
    teamsDeployed: 8,
    river: "Dhansiri River: Rising (4.8m)",
    rainfall: "186 mm (Heavy Rain)",
    status: "High Alert",
    activeSosList: [
      { id: "SOS-1087", priority: "HIGH", priorityClass: "red", countBadge: "3", title: "Trapped in Water", headcount: "Family of 4", location: "Near Kabori Pul", coordinates: [26.4020, 94.0190], time: "10:25 AM", assignedTeam: "NDRF Team-4", statusBadge: "On the way", eta: "18 min" },
      { id: "SOS-1088", priority: "MEDIUM", priorityClass: "orange", countBadge: "1", title: "Elderly Person Emergency", headcount: "1 Senior Citizen", location: "Dergaon Area", coordinates: [26.4180, 94.0320], time: "10:30 AM", assignedTeam: "SDRF Team-2", statusBadge: "Rescue in Progress", eta: "Reached" },
      { id: "SOS-1089", priority: "HIGH", priorityClass: "red", countBadge: "3", title: "Trapped on Roof", headcount: "Family of 5", location: "Dimoria Village", coordinates: [26.4290, 94.0480], time: "10:35 AM", assignedTeam: "NDRF Team-5", statusBadge: "On the way", eta: "22 min" }
    ],
    teams: [
      { team: "NDRF Team-4", type: "Rescue Boat", location: "Enroute to Kabori Pul", eta: "ETA: 18 min", statusColor: "#38bdf8" },
      { team: "SDRF Team-2", type: "Rescue Boat", location: "Dergaon Area", eta: "ETA: 12 min", statusColor: "#f59e0b" },
      { team: "NDRF Team-5", type: "Rescue Boat", location: "Dimoria Village", eta: "ETA: 22 min", statusColor: "#38bdf8" },
      { team: "NDRF Team-6", type: "Rescue Vehicle", location: "Rangajan Area", eta: "Patrolling", statusColor: "#10b981" },
      { team: "SDRF Team-1", type: "Rescue Vehicle", location: "Near Titabor", eta: "Standby", statusColor: "#a78bfa" }
    ]
  },
  "Jorhat": {
    district: "Jorhat, Assam",
    division: "Upper Assam",
    riskLevel: "High",
    riskColor: "#f59e0b",
    coordinates: [26.7578, 94.2080],
    activeSos: 8,
    ongoingRescues: 4,
    peopleRescuedToday: 64,
    teamsDeployed: 5,
    river: "Bhogdoi River: High Level (3.9m)",
    rainfall: "142 mm (Moderate-Heavy Rain)",
    status: "Severe Risk",
    activeSosList: [
      { id: "SOS-1092", priority: "HIGH", priorityClass: "red", countBadge: "2", title: "Embankment Breach Hazard", headcount: "Family of 6", location: "Tarajan River Bank", coordinates: [26.7650, 94.2010], time: "10:15 AM", assignedTeam: "SDRF Team-3", statusBadge: "Enroute", eta: "14 min" },
      { id: "SOS-1094", priority: "MEDIUM", priorityClass: "orange", countBadge: "1", title: "Medical Evacuation Needed", headcount: "Pregnant Woman", location: "Rowriah Bypass", coordinates: [26.7320, 94.1750], time: "10:28 AM", assignedTeam: "108 Boat EMS", statusBadge: "Dispatched", eta: "10 min" }
    ],
    teams: [
      { team: "SDRF Team-3", type: "Rescue Boat", location: "Tarajan Bank", eta: "ETA: 14 min", statusColor: "#38bdf8" },
      { team: "108 Boat EMS", type: "Ambulance Boat", location: "Rowriah Bypass", eta: "ETA: 10 min", statusColor: "#10b981" }
    ]
  },
  "Dibrugarh": {
    district: "Dibrugarh, Assam",
    division: "Upper Assam",
    riskLevel: "High",
    riskColor: "#f59e0b",
    coordinates: [27.4845, 94.9019],
    activeSos: 9,
    ongoingRescues: 5,
    peopleRescuedToday: 72,
    teamsDeployed: 6,
    river: "Brahmaputra River: Above Danger Mark (105.4m)",
    rainfall: "165 mm (Heavy Rain)",
    status: "High Alert",
    activeSosList: [
      { id: "SOS-1101", priority: "HIGH", priorityClass: "red", countBadge: "4", title: "Urban Waterlogging Isolation", headcount: "8 Citizens", location: "Chowkidinghee", coordinates: [27.4990, 94.9210], time: "09:50 AM", assignedTeam: "NDRF 1st Bn", statusBadge: "Rescuing", eta: "Active" }
    ],
    teams: [
      { team: "NDRF 1st Bn", type: "Motorboat Unit", location: "Chowkidinghee", eta: "Active", statusColor: "#10b981" }
    ]
  },
  "Sivasagar": {
    district: "Sivasagar, Assam",
    division: "Upper Assam",
    riskLevel: "High",
    riskColor: "#f59e0b",
    coordinates: [26.9826, 94.6425],
    activeSos: 6,
    ongoingRescues: 3,
    peopleRescuedToday: 48,
    teamsDeployed: 4,
    river: "Dikhow River: Rising (2.8m)",
    rainfall: "128 mm",
    status: "Alert",
    activeSosList: [
      { id: "SOS-1108", priority: "MEDIUM", priorityClass: "orange", countBadge: "1", title: "Low-Lying Inundation", headcount: "Family of 3", location: "Joysagar Tank", coordinates: [26.9650, 94.6290], time: "10:05 AM", assignedTeam: "SDRF Unit 4", statusBadge: "On the way", eta: "15 min" }
    ],
    teams: [
      { team: "SDRF Unit 4", type: "Rescue Vehicle", location: "Joysagar", eta: "ETA: 15 min", statusColor: "#38bdf8" }
    ]
  },
  "Dhemaji": {
    district: "Dhemaji, Assam",
    division: "Upper Assam",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [27.4844, 94.5949],
    activeSos: 14,
    ongoingRescues: 9,
    peopleRescuedToday: 110,
    teamsDeployed: 9,
    river: "Jiadhal & Subansiri Rivers: Flash Flood",
    rainfall: "210 mm (Torrential Rain)",
    status: "CRITICAL EMERGENCY",
    activeSosList: [
      { id: "SOS-1115", priority: "HIGH", priorityClass: "red", countBadge: "5", title: "Flash Surge Cut-off", headcount: "14 Villagers", location: "Silapathar Bank", coordinates: [27.6110, 94.7310], time: "09:30 AM", assignedTeam: "NDRF Air-Drop & Boat", statusBadge: "In Progress", eta: "Reached" }
    ],
    teams: [
      { team: "NDRF Air-Drop", type: "Helicopter & Boat", location: "Silapathar", eta: "Active Rescue", statusColor: "#ef4444" }
    ]
  },
  "Lakhimpur": {
    district: "Lakhimpur, Assam",
    division: "Upper Assam",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [27.2374, 94.0954],
    activeSos: 11,
    ongoingRescues: 6,
    peopleRescuedToday: 95,
    teamsDeployed: 7,
    river: "Ranganadi River: Gate Release Overflow",
    rainfall: "195 mm",
    status: "High Alert",
    activeSosList: [
      { id: "SOS-1120", priority: "HIGH", priorityClass: "red", countBadge: "4", title: "Dam Release Water Surge", headcount: "10 Citizens", location: "North Lakhimpur", coordinates: [27.2550, 94.1190], time: "10:00 AM", assignedTeam: "SDRF Team 5", statusBadge: "On the way", eta: "12 min" }
    ],
    teams: [
      { team: "SDRF Team 5", type: "Motorboat", location: "North Lakhimpur", eta: "ETA: 12 min", statusColor: "#38bdf8" }
    ]
  },
  "Nagaon": {
    district: "Nagaon, Assam",
    division: "Central Assam",
    riskLevel: "Moderate",
    riskColor: "#f59e0b",
    coordinates: [26.3471, 92.6841],
    activeSos: 5,
    ongoingRescues: 2,
    peopleRescuedToday: 42,
    teamsDeployed: 4,
    river: "Kolong River: Stable (2.1m)",
    rainfall: "98 mm",
    status: "Moderate Risk",
    activeSosList: [],
    teams: []
  },
  "Kamrup Metropolitan": {
    district: "Kamrup Metropolitan (Guwahati), Assam",
    division: "Lower Assam",
    riskLevel: "Moderate",
    riskColor: "#38bdf8",
    coordinates: [26.1445, 91.7362],
    activeSos: 4,
    ongoingRescues: 2,
    peopleRescuedToday: 38,
    teamsDeployed: 5,
    river: "Brahmaputra (Guwahati Port): 48.2m",
    rainfall: "112 mm",
    status: "Urban Drainage Alert",
    activeSosList: [],
    teams: []
  },
  "Cachar": {
    district: "Cachar (Silchar), Assam",
    division: "Barak Valley",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [24.8333, 92.7789],
    activeSos: 15,
    ongoingRescues: 10,
    peopleRescuedToday: 130,
    teamsDeployed: 11,
    river: "Barak River: Above Danger Mark (20.5m)",
    rainfall: "230 mm (Torrential Downpour)",
    status: "CRITICAL FLOOD SURGE",
    activeSosList: [],
    teams: []
  }
};

// National Weather Big Data Metrics (MoES / SIH26069)
const nationalWeatherTotalMetrics = {
  ingestionRate: "312 / sec",
  totalPosts: "184,290",
  verifiedRate: "94.2%",
  misinfoBlocked: "1,248",
  duplicatesMerged: "18,430",
  activeSensors: "4,120",
  totalActiveSos: 94,
  totalOngoingRescues: 48,
  totalPeopleRescuedToday: 842,
  totalTeamsDeployed: 68,
  totalRescueAssets: 142,
  averageFuelStatus: "76%"
};

window.assamStateDistrictData = assamStateDistrictData;
window.assamStateTotalMetrics = assamStateTotalMetrics;
window.nationalWeatherTotalMetrics = nationalWeatherTotalMetrics;
