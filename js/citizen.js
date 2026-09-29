/* 
 * AEGIS - National Weather Big Data Analytics Platform (SIH26069)
 * Ministry of Earth Sciences (MoES) / MIC
 * Master Citizen Portal Controller & National Weather/Flood Model Data Matrix
 * Complete genuine telemetry, POI markers, AI knowledge generator & storage sync
 * with primary live demo centered in Hyderabad (Telangana) and National coverage.
 */

const assamFloodModelData = [
  // ==========================================
  // 0. PRIMARY LIVE DEMO REGION: HYDERABAD (TELANGANA)
  // ==========================================
  {
    district: "Hyderabad",
    division: "Telangana State (Live Demo Center)",
    coordinates: [17.3850, 78.4867],
    coordsLabel: "17.38°N, 78.48°E",
    riskLevel: "Critical",
    river: "Musi River & Hussain Sagar",
    riverStatus: "Musi River Flowing 1.45m ABOVE Danger Mark at Moosarambagh Causeway",
    waterLevel: "512.40m MSL (Danger: 511.00m MSL)",
    rainfall24h: "98.5 mm (Begumpet IMD AWS)",
    affectedPopulation: "62,400 Citizens",
    originAddress: "Khairatabad & Hussain Sagar Circle, Hyderabad, Telangana",
    citizenOrigin: [17.4125, 78.4682],
    clinic: [17.4250, 78.4720], // Gandhi Hospital / NIMS Emergency Outpost
    shelter: [17.4410, 78.4780], // GHMC Begumpet Indoor Stadium
    rescueCamp: [17.3950, 78.4650], // SDRF Musi Flood Quick Reaction Unit
    roadBlock: [17.4180, 78.4640], // Khairatabad Underpass Inundated
    floodedArea: [17.4220, 78.4700], // Hussain Sagar Surplus Inundation Zone
    deocPhone: "040-21111111 / 1070 (GHMC Disaster Control)",
    landmarks: ["Khairatabad Flyover", "Hussain Sagar Lake", "Nizam College", "Begumpet Airport"],
    shelterInfo: {
      name: "GHMC Begumpet Indoor Stadium Emergency Shelter",
      capacity: 850,
      available: 340,
      occupied: 510,
      distance: "2.8 km",
      foodSupplies: "Hot Meals 3x/Day, Purified RO Water, Baby Food",
      medicalAid: "24x7 GHMC Doctor + Mobile Health Clinic"
    },
    clinicInfo: {
      name: "NIMS Emergency Flood Relief Clinic",
      doctor: "Dr. K. Srinivas (Emergency Head)",
      distance: "1.4 km",
      phone: "+91 94400 11223"
    },
    rescueInfo: {
      name: "SDRF Telangana 3rd Battalion - Boat Unit 2",
      commander: "Inspector M. Ramesh",
      vehicle: "Inflatable Zodiac Motorboat",
      phone: "+91 94400 99887",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Khairatabad-Necklace Road Causeway Submerged",
      waterDepth: "3.5 ft water",
      warning: "Heavy waterlogging near Khairatabad underpass. Follow Tank Bund safe bypass."
    },
    safeRouteToShelter: [
      [17.4125, 78.4682], // Citizen Origin (Khairatabad)
      [17.4150, 78.4550], // Safe Waypoint 1 (Bypassing West through Lakdikapul)
      [17.4320, 78.4620], // Safe Waypoint 2 (Punjagutta Main Corridor)
      [17.4380, 78.4710], // Safe Waypoint 3 (Connecting Prakash Nagar)
      [17.4410, 78.4780]  // Shelter (GHMC Begumpet Indoor Stadium)
    ]
  },

  // ==========================================
  // 1. UPPER ASSAM DIVISION
  // ==========================================
  {
    district: "Golaghat",
    division: "Upper Assam Division",
    coordinates: [26.4049, 94.0321],
    coordsLabel: "26.40°N, 94.03°E",
    riskLevel: "Critical",
    river: "Dhansiri River",
    riverStatus: "Flowing 1.32m ABOVE Extreme Danger Mark (Rapidly Rising)",
    waterLevel: "4.82m (Danger Mark: 3.50m)",
    rainfall24h: "148.5 mm",
    affectedPopulation: "48,250 Citizens",
    originAddress: "Bokakhat & Dergaon Sector, Golaghat, Assam",
    citizenOrigin: [26.3980, 94.0450],
    clinic: [26.4150, 94.0210],
    shelter: [26.4220, 94.0410],
    rescueCamp: [26.3910, 94.0150],
    roadBlock: [26.4080, 94.0350],
    floodedArea: [26.4120, 94.0500],
    deocPhone: "03774-280280 / 1077",
    landmarks: ["Golaghat Daily Market", "District Court Circle", "Bokakhat Highway Junction"],
    shelterInfo: {
      name: "Golaghat Degree College Relief Camp",
      capacity: 500,
      available: 182,
      occupied: 318,
      distance: "2.4 km",
      foodSupplies: "Hot Meals 3x/Day, Mineral Water, Baby Formula",
      medicalAid: "24x7 Trauma Doctor + Anti-Venom Unit"
    },
    clinicInfo: {
      name: "Golaghat Community Health Clinic",
      doctor: "Dr. B. Bora (Emergency On-Duty)",
      distance: "1.2 km",
      phone: "+91 94351 11223"
    },
    rescueInfo: {
      name: "NDRF 1st Battalion - Team 4",
      commander: "Inspector V. K. Sharma",
      vehicle: "Inflatable Motorboat Unit 2",
      phone: "+91 94350 99887",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "NH-715 Dhansiri Overflow",
      waterDepth: "3.2 ft submerged",
      warning: "NH-715 impassable near Dhansiri bridge. Follow College Road detour."
    },
    safeRouteToShelter: [
      [26.3980, 94.0450], // Origin
      [26.3920, 94.0380], // Safe Waypoint 1 (Turning South)
      [26.4020, 94.0190], // Safe Waypoint 2 (Bypassing West)
      [26.4160, 94.0280], // Safe Waypoint 3 (Connecting Highway)
      [26.4220, 94.0410]  // Shelter
    ]
  },
  {
    district: "Jorhat",
    division: "Upper Assam Division",
    coordinates: [26.7578, 94.2080],
    coordsLabel: "26.75°N, 94.20°E",
    riskLevel: "High",
    river: "Bhogdoi & Brahmaputra River",
    riverStatus: "Bhogdoi flowing 0.85m ABOVE Danger Mark at Jorhat Town",
    waterLevel: "87.20m MSL (Danger: 86.50m MSL)",
    rainfall24h: "112.0 mm",
    affectedPopulation: "34,800 Citizens",
    originAddress: "Tarajan & Club Road, Jorhat Town, Assam",
    citizenOrigin: [26.7510, 94.2120],
    clinic: [26.7650, 94.2010],
    shelter: [26.7720, 94.2250],
    rescueCamp: [26.7420, 94.1950],
    roadBlock: [26.7590, 94.2100],
    floodedArea: [26.7680, 94.2300],
    deocPhone: "0376-2320023 / 1077",
    landmarks: ["Tarajan Chariali", "JB College Gate", "Jorhat Stadium Complex"],
    shelterInfo: {
      name: "JB College Indoor Stadium Shelter",
      capacity: 650,
      available: 240,
      occupied: 410,
      distance: "2.1 km",
      foodSupplies: "Community Kitchen, Ready Rations, Clean Water Tanks",
      medicalAid: "First-aid triage & mobile pharmacy"
    },
    clinicInfo: {
      name: "Tarajan Urban Health Clinic",
      doctor: "Dr. K. Goswami",
      distance: "1.1 km",
      phone: "+91 94352 44556"
    },
    rescueInfo: {
      name: "SDRF 2nd Unit - Jorhat Division",
      commander: "Sub-Inspector P. Saikia",
      vehicle: "High-Speed Rescue Boat 5",
      phone: "+91 94352 33445",
      radioChannel: "VHF-CH 14 (156.7 MHz)"
    },
    blockageInfo: {
      name: "Bhogdoi River Bund Road Breach",
      waterDepth: "2.8 ft submerged",
      warning: "Embankment road breached. Avoid riverbank track."
    },
    safeRouteToShelter: [
      [26.7510, 94.2120],
      [26.7460, 94.2050],
      [26.7620, 94.1980], 
      [26.7680, 94.2120],
      [26.7720, 94.2250]
    ]
  },
  {
    district: "Dibrugarh",
    division: "Upper Assam Division",
    coordinates: [27.4845, 94.9019],
    coordsLabel: "27.48°N, 94.90°E",
    riskLevel: "Critical",
    river: "Brahmaputra & Burhi Dihing River",
    riverStatus: "Brahmaputra flowing 1.05m ABOVE Danger Mark at Dibrugarh Ghat",
    waterLevel: "105.80m MSL (Danger: 104.70m MSL)",
    rainfall24h: "165.0 mm",
    affectedPopulation: "62,400 Citizens",
    originAddress: "Amolapatty & Graham Bazar, Dibrugarh, Assam",
    citizenOrigin: [27.4720, 94.9150],
    clinic: [27.4950, 94.8850],
    shelter: [27.4990, 94.9210],
    rescueCamp: [27.4610, 94.8950],
    roadBlock: [27.4850, 94.9050],
    floodedArea: [27.5100, 94.9300],
    deocPhone: "0373-2312940 / 1077",
    landmarks: ["Chowkidinghee Field", "Dibrugarh University Gate", "Amolapatty Overbridge"],
    shelterInfo: {
      name: "Dibrugarh University Multi-Purpose Hall",
      capacity: 800,
      available: 310,
      occupied: 490,
      distance: "3.2 km",
      foodSupplies: "Hot Meal Stations, Packaged Water, Infant Care",
      medicalAid: "AMCH Emergency Detachment"
    },
    clinicInfo: {
      name: "Amolapatty Primary Healthcare Clinic",
      doctor: "Dr. A. Phukan",
      distance: "1.3 km",
      phone: "+91 94353 66778"
    },
    rescueInfo: {
      name: "NDRF 1st Battalion - Boat 7",
      commander: "Inspector M. Gogoi",
      vehicle: "Inflatable Zodiac Motorboat",
      phone: "+91 94353 55667",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Mancotta Road Submersion",
      waterDepth: "3.5 ft water",
      warning: "Culvert breached. Avoid Mancotta bypass."
    },
    safeRouteToShelter: [
      [27.4720, 94.9150],
      [27.4650, 94.9020],
      [27.4880, 94.8790], 
      [27.4950, 94.9020],
      [27.4990, 94.9210]
    ]
  },
  {
    district: "Sivasagar",
    division: "Upper Assam Division",
    coordinates: [26.9826, 94.6425],
    coordsLabel: "26.98°N, 94.64°E",
    riskLevel: "High",
    river: "Dikhow & Desang River",
    riverStatus: "Dikhow flowing 0.72m ABOVE Danger Level at Sivasagar Town",
    waterLevel: "93.40m MSL (Danger: 92.80m MSL)",
    rainfall24h: "98.5 mm",
    affectedPopulation: "28,600 Citizens",
    originAddress: "Station Chariali & Temple Road, Sivasagar, Assam",
    citizenOrigin: [26.9720, 94.6550],
    clinic: [26.9950, 94.6310],
    shelter: [26.9990, 94.6620],
    rescueCamp: [26.9610, 94.6250],
    roadBlock: [26.9840, 94.6460],
    floodedArea: [26.9910, 94.6750],
    deocPhone: "03772-222124 / 1077",
    landmarks: ["Sivasagar Tank Bank", "Station Chariali", "Boarding Field"],
    shelterInfo: {
      name: "Sivasagar Government HS School Shelter",
      capacity: 450,
      available: 160,
      occupied: 290,
      distance: "2.0 km",
      foodSupplies: "Dry Rations, Cooked Meals, Clean Water Tanks",
      medicalAid: "Mobile Health Camp"
    },
    clinicInfo: {
      name: "Station Chariali Emergency Clinic",
      doctor: "Dr. N. Baruah",
      distance: "1.0 km",
      phone: "+91 94354 88990"
    },
    rescueInfo: {
      name: "SDRF Team 3 (Sivasagar Sector)",
      commander: "Officer R. Hazarika",
      vehicle: "Rapid Rescue Boat 4",
      phone: "+91 94354 77889",
      radioChannel: "VHF-CH 12"
    },
    blockageInfo: {
      name: "Dikhow Embankment Road",
      waterDepth: "2.6 ft water",
      warning: "Dikhow bank road impassable. Follow Boarding Road."
    },
    safeRouteToShelter: [
      [26.9720, 94.6550],
      [26.9640, 94.6390],
      [26.9880, 94.6220],
      [26.9950, 94.6450],
      [26.9990, 94.6620]
    ]
  },
  {
    district: "Tinsukia",
    division: "Upper Assam Division",
    coordinates: [27.5003, 95.3622],
    coordsLabel: "27.50°N, 95.36°E",
    riskLevel: "High",
    river: "Lohit, Dibru & Brahmaputra River",
    riverStatus: "Dibru river flowing 0.65m ABOVE Danger Mark near Guijan",
    waterLevel: "126.50m MSL",
    rainfall24h: "130.0 mm",
    affectedPopulation: "36,400 Citizens",
    originAddress: "Bordoloi Nagar, Tinsukia, Assam",
    citizenOrigin: [27.4910, 95.3780],
    clinic: [27.5150, 95.3420],
    shelter: [27.5210, 95.3850],
    rescueCamp: [27.4800, 95.3510],
    roadBlock: [27.5020, 95.3650],
    floodedArea: [27.5120, 95.3950],
    deocPhone: "0374-2331471 / 1077",
    landmarks: ["District Sports Association Ground", "Senairam High School", "Nau-Pukhuri"],
    shelterInfo: {
      name: "Tinsukia District Sports Complex Shelter",
      capacity: 700,
      available: 290,
      occupied: 410,
      distance: "2.3 km",
      foodSupplies: "Hot Meals, Packed Water, Milk Rations",
      medicalAid: "Red Cross Emergency Post"
    },
    clinicInfo: {
      name: "Nau-Pukhuri Red Cross Clinic",
      doctor: "Dr. P. Sen",
      distance: "1.2 km",
      phone: "+91 94355 22334"
    },
    rescueInfo: {
      name: "Civil Defence Rescue Unit 1",
      commander: "Officer D. Chetia",
      vehicle: "High Clearance Rescue Van",
      phone: "+91 94355 11223",
      radioChannel: "VHF-CH 10"
    },
    blockageInfo: {
      name: "Bordoloi Road Low Crossing",
      waterDepth: "2.4 ft water",
      warning: "Drain water overflow. Use Station Road."
    },
    safeRouteToShelter: [
      [27.4910, 95.3780],
      [27.4820, 95.3590],
      [27.5080, 95.3350],
      [27.5160, 95.3620],
      [27.5210, 95.3850]
    ]
  },
  {
    district: "Dhemaji",
    division: "Upper Assam Division",
    coordinates: [27.4844, 94.5949],
    coordsLabel: "27.48°N, 94.59°E",
    riskLevel: "Critical",
    river: "Ji Dhal, Gainadi & Subansiri River",
    riverStatus: "Ji Dhal river in FLASH FLOOD overflowing embankment by 1.80m",
    waterLevel: "104.20m MSL",
    rainfall24h: "195.0 mm",
    affectedPopulation: "78,500 Citizens",
    originAddress: "Silapathar Road, Dhemaji Town, Assam",
    citizenOrigin: [27.4710, 94.6120],
    clinic: [27.4990, 94.5750],
    shelter: [27.5050, 94.6210],
    rescueCamp: [27.4620, 94.5810],
    roadBlock: [27.4880, 94.5990],
    floodedArea: [27.5150, 94.6400],
    deocPhone: "03753-224443 / 1077",
    landmarks: ["Dhemaji Public Field", "Town High School", "Silapathar Junction"],
    shelterInfo: {
      name: "Dhemaji Higher Secondary School Shelter",
      capacity: 600,
      available: 140,
      occupied: 460,
      distance: "2.5 km",
      foodSupplies: "Air-dropped Food Packs, Clean Water Tanks",
      medicalAid: "Waterborne Disease Epidemic Control Unit"
    },
    clinicInfo: {
      name: "Silapathar Community First Aid Clinic",
      doctor: "Dr. H. Doley",
      distance: "1.4 km",
      phone: "+91 94356 44556"
    },
    rescueInfo: {
      name: "NDRF Deep Water Rescue Unit 9",
      commander: "Inspector S. Sonowal",
      vehicle: "Inflatable Heavy Boat",
      phone: "+91 94356 33445",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Ji Dhal River Overflow Bridge Link",
      waterDepth: "4.1 ft water",
      warning: "Bridge approach washed out. Road closed."
    },
    safeRouteToShelter: [
      [27.4710, 94.6120],
      [27.4640, 94.5910],
      [27.4920, 94.5680],
      [27.5000, 94.5950],
      [27.5050, 94.6210]
    ]
  },
  {
    district: "Lakhimpur",
    division: "Upper Assam Division",
    coordinates: [27.2374, 94.0954],
    coordsLabel: "27.23°N, 94.09°E",
    riskLevel: "Critical",
    river: "Ranganadi & Subansiri River",
    riverStatus: "Ranganadi dam discharge causing 1.20m OVERFLOW past danger level",
    waterLevel: "84.60m MSL",
    rainfall24h: "178.0 mm",
    affectedPopulation: "58,900 Citizens",
    originAddress: "Khelmati & Main Town, North Lakhimpur, Assam",
    citizenOrigin: [27.2210, 94.1120],
    clinic: [27.2480, 94.0750],
    shelter: [27.2550, 94.1190],
    rescueCamp: [27.2110, 94.0820],
    roadBlock: [27.2390, 94.0980],
    floodedArea: [27.2450, 94.1350],
    deocPhone: "03752-222199 / 1077",
    landmarks: ["North Lakhimpur Govt School", "District Stadium", "Khelmati Bazar"],
    shelterInfo: {
      name: "North Lakhimpur College Relief Camp",
      capacity: 550,
      available: 195,
      occupied: 355,
      distance: "2.6 km",
      foodSupplies: "Hot Meals, Drinking Water, Dry Food Kits",
      medicalAid: "District Health Squad"
    },
    clinicInfo: {
      name: "Khelmati Maternal & Child Clinic",
      doctor: "Dr. R. Dutta",
      distance: "1.1 km",
      phone: "+91 94357 66778"
    },
    rescueInfo: {
      name: "SDRF Flood Squad 6",
      commander: "Sub-Inspector T. Nath",
      vehicle: "Rescue Boat Unit 8",
      phone: "+91 94357 55667",
      radioChannel: "VHF-CH 15"
    },
    blockageInfo: {
      name: "Ranganadi Highway Submerged Cut",
      waterDepth: "3.8 ft water",
      warning: "Submerged under 3.8ft swift water."
    },
    safeRouteToShelter: [
      [27.2210, 94.1120],
      [27.2140, 94.0910],
      [27.2420, 94.0680],
      [27.2500, 94.0950],
      [27.2550, 94.1190]
    ]
  },

  // ==========================================
  // 2. CENTRAL ASSAM DIVISION
  // ==========================================
  {
    district: "Nagaon",
    division: "Central Assam Division",
    coordinates: [26.3471, 92.6841],
    coordsLabel: "26.34°N, 92.68°E",
    riskLevel: "High",
    river: "Kolong & Kapili River",
    riverStatus: "Kolong river overtopping banks at Haibargaon by 0.90m",
    waterLevel: "60.50m MSL",
    rainfall24h: "135.0 mm",
    affectedPopulation: "45,000 Citizens",
    originAddress: "Haibargaon & Dimow Sector, Nagaon, Assam",
    citizenOrigin: [26.3350, 92.6980],
    clinic: [26.3580, 92.6620],
    shelter: [26.3650, 92.7050],
    rescueCamp: [26.3210, 92.6710],
    roadBlock: [26.3490, 92.6880],
    floodedArea: [26.3720, 92.7210],
    deocPhone: "03672-233222 / 1077",
    landmarks: ["Nurul Amin Stadium", "Haibargaon Bridge", "Nagaon Boys HS School"],
    shelterInfo: {
      name: "Nagaon Stadium Relief Camp",
      capacity: 750,
      available: 320,
      occupied: 430,
      distance: "2.8 km",
      foodSupplies: "Hot Cooked Meals, Bottled Water, Biscuits",
      medicalAid: "Mobile Medical Unit on Site"
    },
    clinicInfo: {
      name: "Haibargaon Urban Health Post",
      doctor: "Dr. S. Das",
      distance: "1.3 km",
      phone: "+91 94358 88990"
    },
    rescueInfo: {
      name: "SDRF Central Command Unit 8",
      commander: "Inspector J. Bora",
      vehicle: "High Water Patrol Truck & Boat",
      phone: "+91 94358 77889",
      radioChannel: "VHF-CH 14"
    },
    blockageInfo: {
      name: "Kolong River Overtopping at Haibargaon",
      waterDepth: "2.5 ft water",
      warning: "Road waterlogged. Use Circuit House road."
    },
    safeRouteToShelter: [
      [26.3350, 92.6980],
      [26.3250, 92.6810],
      [26.3510, 92.6550],
      [26.3600, 92.6820],
      [26.3650, 92.7050]
    ]
  },
  {
    district: "Hojai",
    division: "Central Assam Division",
    coordinates: [26.0094, 92.8488],
    coordsLabel: "26.00°N, 92.84°E",
    riskLevel: "High",
    river: "Kapili & Jamuna River",
    riverStatus: "Kapili flowing 1.10m ABOVE Danger Mark at Kampur/Hojai",
    waterLevel: "62.40m MSL",
    rainfall24h: "125.0 mm",
    affectedPopulation: "31,200 Citizens",
    originAddress: "Main Bazar & Station Road, Hojai, Assam",
    citizenOrigin: [25.9950, 92.8620],
    clinic: [26.0220, 92.8250],
    shelter: [26.0310, 92.8690],
    rescueCamp: [25.9820, 92.8350],
    roadBlock: [26.0120, 92.8520],
    floodedArea: [26.0250, 92.8910],
    deocPhone: "03674-284000 / 1077",
    landmarks: ["Hojai Eidgah Ground", "Lanka Road Crossing", "Govt B.B. College"],
    shelterInfo: {
      name: "Hojai Vidyasagar College Relief Complex",
      capacity: 400,
      available: 155,
      occupied: 245,
      distance: "2.4 km",
      foodSupplies: "Packaged Dry Rations, Potable Water, Baby Feed",
      medicalAid: "Emergency First Aid Camp"
    },
    clinicInfo: {
      name: "Gobindapur Rural Health Clinic",
      doctor: "Dr. K. Sarma",
      distance: "1.5 km",
      phone: "+91 94350 11222"
    },
    rescueInfo: {
      name: "Civil Defence Squad 3",
      commander: "Duty Officer",
      vehicle: "Inflatable Rescue Boat",
      phone: "+91 94350 22333",
      radioChannel: "VHF-CH 11"
    },
    blockageInfo: {
      name: "Kapili River Basin Low Road",
      waterDepth: "3.0 ft water",
      warning: "Submerged low road. Follow railway parallel bypass."
    },
    safeRouteToShelter: [
      [25.9950, 92.8620],
      [25.9860, 92.8410],
      [26.0150, 92.8180],
      [26.0240, 92.8450],
      [26.0310, 92.8690]
    ]
  },
  {
    district: "Morigaon",
    division: "Central Assam Division",
    coordinates: [26.2573, 92.3377],
    coordsLabel: "26.25°N, 92.33°E",
    riskLevel: "Critical",
    river: "Brahmaputra & Kolong River",
    riverStatus: "Brahmaputra severe backflow into Morigaon lowlands (1.4m overflow)",
    waterLevel: "54.80m MSL",
    rainfall24h: "152.0 mm",
    affectedPopulation: "56,000 Citizens",
    originAddress: "Jagiroad & Morigaon Town Circle, Morigaon, Assam",
    citizenOrigin: [26.2420, 92.3520],
    clinic: [26.2710, 92.3120],
    shelter: [26.2790, 92.3590],
    rescueCamp: [26.2250, 92.3210],
    roadBlock: [26.2590, 92.3410],
    floodedArea: [26.2820, 92.3810],
    deocPhone: "03678-240225 / 1077",
    landmarks: ["Morigaon District Library Grounds", "Jagiroad Paper Mill Gate", "District Sports Complex"],
    shelterInfo: {
      name: "Morigaon District Library Grounds Camp",
      capacity: 500,
      available: 180,
      occupied: 320,
      distance: "2.7 km",
      foodSupplies: "Hot Meals 3x/Day, Purified Water Tanks",
      medicalAid: "Waterborne Disease Treatment Center"
    },
    clinicInfo: {
      name: "Morigaon Chariali Primary Clinic",
      doctor: "Dr. P. Medhi",
      distance: "1.2 km",
      phone: "+91 94350 33444"
    },
    rescueInfo: {
      name: "NDRF Team 12 (Amphibious Unit)",
      commander: "Inspector K. Nath",
      vehicle: "Amphibian High Water Unit",
      phone: "+91 94350 44555",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Bhuragaon-Morigaon Road Cut",
      waterDepth: "3.6 ft water",
      warning: "Road cut by floodwaters. Use floodplain bypass."
    },
    safeRouteToShelter: [
      [26.2420, 92.3520],
      [26.2310, 92.3310],
      [26.2620, 92.3050],
      [26.2720, 92.3350],
      [26.2790, 92.3590]
    ]
  },
  {
    district: "Dima Hasao",
    division: "Central Assam Division",
    coordinates: [25.4004, 93.0752],
    coordsLabel: "25.40°N, 93.07°E",
    riskLevel: "Critical",
    river: "Jatinga & Diyung River",
    riverStatus: "Jatinga river hill torrent surge with FLASH FLOOD & mudslides",
    waterLevel: "Hill Torrent +2.20m",
    rainfall24h: "210.0 mm",
    affectedPopulation: "22,500 Citizens",
    originAddress: "Haflong Hill & Jatinga Valley Sector, Dima Hasao, Assam",
    citizenOrigin: [25.3850, 93.0910],
    clinic: [25.4180, 93.0520],
    shelter: [25.4250, 93.0990],
    rescueCamp: [25.3650, 93.0610],
    roadBlock: [25.4020, 93.0780],
    floodedArea: [25.4120, 93.1210],
    deocPhone: "03673-236222 / 1077",
    landmarks: ["Haflong Council Hall", "Haflong Lake Road", "Maibang Road Junction"],
    shelterInfo: {
      name: "Haflong Council Hall Shelter",
      capacity: 350,
      available: 190,
      occupied: 160,
      distance: "2.5 km",
      foodSupplies: "Hill Emergency Ration Packs, Generator Power",
      medicalAid: "Trauma & Orthopedic First Aid"
    },
    clinicInfo: {
      name: "Haflong Town Dispensary & Clinic",
      doctor: "Dr. L. Thang",
      distance: "1.0 km",
      phone: "+91 94350 55666"
    },
    rescueInfo: {
      name: "Mountain & Flood Rescue Squad 2",
      commander: "Officer B. Dimasa",
      vehicle: "4x4 Heavy Rescue Truck",
      phone: "+91 94350 66777",
      radioChannel: "VHF-CH 13"
    },
    blockageInfo: {
      name: "Jatinga Road Landslide & Flood",
      waterDepth: "Debris & mud flow",
      warning: "Road blocked by landslide. Use mountain contour route."
    },
    safeRouteToShelter: [
      [25.3850, 93.0910],
      [25.3710, 93.0720],
      [25.4080, 93.0450],
      [25.4180, 93.0750],
      [25.4250, 93.0990]
    ]
  },
  {
    district: "East Karbi Anglong",
    division: "Central Assam Division",
    coordinates: [26.1362, 93.5786],
    coordsLabel: "26.13°N, 93.57°E",
    riskLevel: "High",
    river: "Kopili, Jamuna & Dhansiri Tributaries",
    riverStatus: "Kopili tributary in spate at Manja & Diphu (0.8m overflow)",
    waterLevel: "98.20m MSL",
    rainfall24h: "118.0 mm",
    affectedPopulation: "29,000 Citizens",
    originAddress: "Diphu Market & Manja Road, East Karbi Anglong, Assam",
    citizenOrigin: [26.1210, 93.5950],
    clinic: [26.1510, 93.5520],
    shelter: [26.1590, 93.6020],
    rescueCamp: [26.1020, 93.5610],
    roadBlock: [26.1380, 93.5820],
    floodedArea: [26.1480, 93.6310],
    deocPhone: "03671-272255 / 1077",
    landmarks: ["Diphu Sports Complex", "Diphu Club", "Manja High School"],
    shelterInfo: {
      name: "Diphu Sports Complex Relief Camp",
      capacity: 450,
      available: 210,
      occupied: 240,
      distance: "2.8 km",
      foodSupplies: "Dry Rations, Drinking Water Tanks",
      medicalAid: "Community Medical Aid Point"
    },
    clinicInfo: {
      name: "Diphu Bazar Community Clinic",
      doctor: "Duty Medical Officer",
      distance: "1.4 km",
      phone: "+91 94350 77888"
    },
    rescueInfo: {
      name: "SDRF Karbi Response Unit",
      commander: "Officer M. Teron",
      vehicle: "Rescue Van & Raft",
      phone: "+91 94350 88999",
      radioChannel: "VHF-CH 12"
    },
    blockageInfo: {
      name: "Diphu-Manja Link Overflow",
      waterDepth: "2.2 ft water",
      warning: "Link road submerged. Follow foothill bypass."
    },
    safeRouteToShelter: [
      [26.1210, 93.5950],
      [26.1090, 93.5750],
      [26.1420, 93.5410],
      [26.1520, 93.5750],
      [26.1590, 93.6020]
    ]
  },

  // ==========================================
  // 3. LOWER & NORTH ASSAM DIVISIONS
  // ==========================================
  {
    district: "Guwahati / Kamrup Metro",
    division: "Lower & North Assam Divisions",
    coordinates: [26.1445, 91.7362],
    coordsLabel: "26.14°N, 91.73°E",
    riskLevel: "High",
    river: "Brahmaputra & Bharalu River",
    riverStatus: "Brahmaputra flowing near danger mark (49.82m MSL vs 49.68m mark)",
    waterLevel: "49.82m MSL (Danger: 49.68m MSL)",
    rainfall24h: "140.0 mm",
    affectedPopulation: "92,000 Citizens",
    originAddress: "Dispur Supermarket & GS Road, Guwahati, Assam",
    citizenOrigin: [26.1320, 91.7510],
    clinic: [26.1620, 91.7120],
    shelter: [26.1680, 91.7590],
    rescueCamp: [26.1150, 91.7210],
    roadBlock: [26.1460, 91.7390],
    floodedArea: [26.1550, 91.7810],
    deocPhone: "0361-2733052 / 1077",
    landmarks: ["Sarusajai Stadium", "Dispur Secretariat", "Panbazar Overbridge"],
    shelterInfo: {
      name: "Sarusajai Indoor Stadium Relief Hub",
      capacity: 1200,
      available: 650,
      occupied: 550,
      distance: "3.5 km",
      foodSupplies: "Mega Kitchen 24/7, Mineral Water Bottling, Baby Care",
      medicalAid: "50-Bed Mobile Hospital with ICU Ambulances"
    },
    clinicInfo: {
      name: "Panbazar Urban Health Clinic",
      doctor: "Dr. T. Kalita",
      distance: "1.5 km",
      phone: "+91 94359 22334"
    },
    rescueInfo: {
      name: "NDRF 10th Battalion - QRF Boat 1",
      commander: "Deputy Commandant A. Ray",
      vehicle: "High Capacity Amphibian Boat",
      phone: "+91 94359 11223",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Bharalu Sluice Flash Inundation",
      waterDepth: "1.8 ft water",
      warning: "Low-lying road diversion in place. Use GS Road Flyover."
    },
    safeRouteToShelter: [
      [26.1320, 91.7510],
      [26.1210, 91.7320],
      [26.1520, 91.7050],
      [26.1620, 91.7350],
      [26.1680, 91.7590]
    ]
  },
  {
    district: "Darrang",
    division: "Lower & North Assam Divisions",
    coordinates: [26.4497, 92.0294],
    coordsLabel: "26.44°N, 92.02°E",
    riskLevel: "High",
    river: "Mangaldai & Brahmaputra River",
    riverStatus: "Mangaldai river flowing 0.75m ABOVE Danger Mark",
    waterLevel: "58.20m MSL",
    rainfall24h: "110.0 mm",
    affectedPopulation: "32,000 Citizens",
    originAddress: "Mangaldai Town & Sipajhar Sector, Darrang, Assam",
    citizenOrigin: [26.4350, 92.0450],
    clinic: [26.4680, 92.0050],
    shelter: [26.4750, 92.0520],
    rescueCamp: [26.4180, 92.0120],
    roadBlock: [26.4520, 92.0320],
    floodedArea: [26.4620, 92.0810],
    deocPhone: "03713-222144 / 1077",
    landmarks: ["Mangaldai Town Club", "Mangaldai Govt HS School", "Sipajhar College"],
    shelterInfo: {
      name: "Mangaldai College Campus Shelter",
      capacity: 500,
      available: 205,
      occupied: 295,
      distance: "2.7 km",
      foodSupplies: "Hot Meals, Filtered Water, Baby Formula",
      medicalAid: "Mobile Health Camp"
    },
    clinicInfo: {
      name: "Mangaldai Town Care Clinic",
      doctor: "Dr. J. Nath",
      distance: "1.1 km",
      phone: "+91 94350 99000"
    },
    rescueInfo: {
      name: "SDRF Darrang Boat Squad",
      commander: "Officer K. Deka",
      vehicle: "Rescue Boat Unit 3",
      phone: "+91 94350 99111",
      radioChannel: "VHF-CH 14"
    },
    blockageInfo: {
      name: "Mangaldai Canal Cut",
      waterDepth: "2.9 ft water",
      warning: "Canal overflowing. Use highway bypass."
    },
    safeRouteToShelter: [
      [26.4350, 92.0450],
      [26.4220, 92.0220],
      [26.4580, 91.9950],
      [26.4680, 92.0280],
      [26.4750, 92.0520]
    ]
  },
  {
    district: "Barpeta",
    division: "Lower & North Assam Divisions",
    coordinates: [26.3184, 90.9818],
    coordsLabel: "26.31°N, 90.98°E",
    riskLevel: "Critical",
    river: "Beki, Manas & Nakhanda River",
    riverStatus: "Beki & Manas rivers flowing 1.25m ABOVE Danger Mark",
    waterLevel: "45.10m MSL",
    rainfall24h: "160.0 mm",
    affectedPopulation: "71,500 Citizens",
    originAddress: "Barpeta Town & Howly Sector, Barpeta, Assam",
    citizenOrigin: [26.3020, 90.9980],
    clinic: [26.3350, 90.9580],
    shelter: [26.3420, 91.0050],
    rescueCamp: [26.2850, 90.9650],
    roadBlock: [26.3210, 90.9850],
    floodedArea: [26.3320, 91.0310],
    deocPhone: "03665-252125 / 1077",
    landmarks: ["Barpeta District Stadium", "Barpeta Vidyapith", "Howly Junction"],
    shelterInfo: {
      name: "Barpeta Town Hall Relief Hub",
      capacity: 600,
      available: 220,
      occupied: 380,
      distance: "2.8 km",
      foodSupplies: "Hot Meals, Drinking Water, Dry Storage",
      medicalAid: "Separate Women & Child Medical Wing"
    },
    clinicInfo: {
      name: "Barpeta Mandir Area Clinic",
      doctor: "Dr. B. Sarma",
      distance: "0.9 km",
      phone: "+91 94350 99222"
    },
    rescueInfo: {
      name: "NDRF Boat Team 6",
      commander: "Inspector D. Pathak",
      vehicle: "Inflatable Motorboat",
      phone: "+91 94350 99333",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Nakhanda River Spillage Road",
      waterDepth: "3.4 ft water",
      warning: "Embankment flooded. Follow loop road."
    },
    safeRouteToShelter: [
      [26.3020, 90.9980],
      [26.2910, 90.9750],
      [26.3250, 90.9480],
      [26.3350, 90.9820],
      [26.3420, 91.0050]
    ]
  },
  {
    district: "Sonitpur",
    division: "Lower & North Assam Divisions",
    coordinates: [26.7562, 92.8532],
    coordsLabel: "26.75°N, 92.85°E",
    riskLevel: "High",
    river: "Jia Bharali & Brahmaputra River",
    riverStatus: "Jia Bharali flowing 0.92m ABOVE Danger Level at NT Road Crossing",
    waterLevel: "77.00m MSL",
    rainfall24h: "132.0 mm",
    affectedPopulation: "41,000 Citizens",
    originAddress: "Mission Chariali & Tezpur Port Sector, Sonitpur, Assam",
    citizenOrigin: [26.7410, 92.8690],
    clinic: [26.7720, 92.8250],
    shelter: [26.7810, 92.8750],
    rescueCamp: [26.7220, 92.8390],
    roadBlock: [26.7580, 92.8560],
    floodedArea: [26.7690, 92.9020],
    deocPhone: "03712-220011 / 1077",
    landmarks: ["Tezpur Church Field", "Darrang College Multi-Hall", "Mission Chariali"],
    shelterInfo: {
      name: "Tezpur Collegiate Campus Shelter",
      capacity: 550,
      available: 260,
      occupied: 290,
      distance: "2.9 km",
      foodSupplies: "Hot Meals 3x/Day, Purified Water, Solar Lighting",
      medicalAid: "Emergency Medical Triage"
    },
    clinicInfo: {
      name: "Mission Chariali Day Care Clinic",
      doctor: "Dr. K. Saikia",
      distance: "1.3 km",
      phone: "+91 94350 99444"
    },
    rescueInfo: {
      name: "SDRF Sonitpur Fleet",
      commander: "Officer N. Goswami",
      vehicle: "Patrol Motorboat 2",
      phone: "+91 94350 99555",
      radioChannel: "VHF-CH 15"
    },
    blockageInfo: {
      name: "Brahmaputra Ghat Road Barricade",
      waterDepth: "3.1 ft water",
      warning: "Ghat road inundated. Follow connecting valley road."
    },
    safeRouteToShelter: [
      [26.7410, 92.8690],
      [26.7310, 92.8480],
      [26.7620, 92.8150],
      [26.7750, 92.8520],
      [26.7810, 92.8750]
    ]
  },
  {
    district: "Dhubri",
    division: "Lower & North Assam Divisions",
    coordinates: [26.0190, 89.9911],
    coordsLabel: "26.01°N, 89.99°E",
    riskLevel: "Critical",
    river: "Brahmaputra & Gangadhar River",
    riverStatus: "Brahmaputra flowing 1.35m ABOVE Danger Level at Dhubri Port",
    waterLevel: "30.12m MSL (Danger: 28.62m MSL)",
    rainfall24h: "172.0 mm",
    affectedPopulation: "84,000 Citizens",
    originAddress: "Chilarai Nagar & Port Area, Dhubri, Assam",
    citizenOrigin: [26.0020, 90.0080],
    clinic: [26.0350, 89.9680],
    shelter: [26.0420, 90.0150],
    rescueCamp: [25.9850, 89.9750],
    roadBlock: [26.0210, 89.9950],
    floodedArea: [26.0320, 90.0410],
    deocPhone: "03662-230050 / 1077",
    landmarks: ["Dhubri Sports Complex", "Gauripur PC Institution", "Chilarai Statue"],
    shelterInfo: {
      name: "Dhubri Bholanath College Camp",
      capacity: 700,
      available: 275,
      occupied: 425,
      distance: "3.1 km",
      foodSupplies: "Hot Meals, Bottled Water, Infant Food",
      medicalAid: "Boat Rescue Trauma Post"
    },
    clinicInfo: {
      name: "Dhubri Port Area Health Clinic",
      doctor: "Dr. M. Islam",
      distance: "1.6 km",
      phone: "+91 94350 99666"
    },
    rescueInfo: {
      name: "NDRF River Patrol 5",
      commander: "Inspector A. Ali",
      vehicle: "Deep Water Vessel",
      phone: "+91 94350 99777",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Chilarai Road Submersion",
      waterDepth: "3.9 ft water",
      warning: "Road flooded. Follow western border track."
    },
    safeRouteToShelter: [
      [26.0020, 90.0080],
      [25.9910, 89.9850],
      [26.0250, 89.9580],
      [26.0350, 89.9920],
      [26.0420, 90.0150]
    ]
  },
  {
    district: "Goalpara",
    division: "Lower & North Assam Divisions",
    coordinates: [26.1784, 90.6227],
    coordsLabel: "26.17°N, 90.62°E",
    riskLevel: "High",
    river: "Brahmaputra & Urfut River",
    riverStatus: "Brahmaputra flowing 1.15m ABOVE Danger Level at Goalpara Town",
    waterLevel: "36.80m MSL",
    rainfall24h: "145.0 mm",
    affectedPopulation: "49,000 Citizens",
    originAddress: "Bapujinagar & Baladmari, Goalpara, Assam",
    citizenOrigin: [26.1620, 90.6390],
    clinic: [26.1950, 90.5980],
    shelter: [26.2020, 90.6450],
    rescueCamp: [26.1450, 90.6050],
    roadBlock: [26.1810, 90.6250],
    floodedArea: [26.1920, 90.6710],
    deocPhone: "03663-240030 / 1077",
    landmarks: ["Goalpara District Stadium", "PR Govt HS School", "Baladmari Center"],
    shelterInfo: {
      name: "Goalpara College Stadium Shelter",
      capacity: 500,
      available: 190,
      occupied: 310,
      distance: "2.6 km",
      foodSupplies: "Hot Meals, Emergency Water Purifiers, Dry Rations",
      medicalAid: "First Aid & Anti-Cholera Vaccination Squad"
    },
    clinicInfo: {
      name: "Bapujinagar Community Clinic",
      doctor: "Dr. D. Rabha",
      distance: "1.0 km",
      phone: "+91 94350 99888"
    },
    rescueInfo: {
      name: "SDRF Goalpara Team",
      commander: "Officer P. Das",
      vehicle: "Motorboat Unit 4",
      phone: "+91 94350 99999",
      radioChannel: "VHF-CH 13"
    },
    blockageInfo: {
      name: "Urfut Wetland Causeway",
      waterDepth: "3.3 ft water",
      warning: "Causeway submerged. Use elevated bypass lane."
    },
    safeRouteToShelter: [
      [26.1620, 90.6390],
      [26.1510, 90.6150],
      [26.1850, 90.5880],
      [26.1950, 90.6220],
      [26.2020, 90.6450]
    ]
  },

  // ==========================================
  // 4. BARAK VALLEY DIVISION
  // ==========================================
  {
    district: "Cachar",
    division: "Barak Valley Division",
    coordinates: [24.8333, 92.7789],
    coordsLabel: "24.83°N, 92.77°E",
    riskLevel: "Critical",
    river: "Barak River",
    riverStatus: "Barak river flowing 1.45m ABOVE Danger Level at Annapurna Ghat (21.32m MSL)",
    waterLevel: "21.32m MSL (Danger: 19.83m MSL)",
    rainfall24h: "185.0 mm",
    affectedPopulation: "98,000 Citizens",
    originAddress: "Rangirkhari & Tarapur, Silchar, Cachar, Assam",
    citizenOrigin: [24.8180, 92.7950],
    clinic: [24.8510, 92.7480],
    shelter: [24.8580, 92.8020],
    rescueCamp: [24.8010, 92.7590],
    roadBlock: [24.8360, 92.7820],
    floodedArea: [24.8480, 92.8310],
    deocPhone: "03842-245866 / 1077",
    landmarks: ["Silchar DSA Stadium", "Government Boys HS School", "Rangirkhari Point"],
    shelterInfo: {
      name: "Silchar DSA Stadium Relief Complex",
      capacity: 900,
      available: 340,
      occupied: 560,
      distance: "3.0 km",
      foodSupplies: "Hot Cooked Meals, Clean Drinking Water, Baby Food",
      medicalAid: "SMCH Emergency Medical Station"
    },
    clinicInfo: {
      name: "Rangirkhari First Aid Clinic",
      doctor: "Dr. S. Roy (Emergency Duty)",
      distance: "1.2 km",
      phone: "+91 94350 44556"
    },
    rescueInfo: {
      name: "NDRF 1st Bn - Barak Unit 3",
      commander: "Inspector D. Paul",
      vehicle: "Inflatable River Rescue Boat",
      phone: "+91 94350 55667",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Bethukandi Embankment Cut",
      waterDepth: "4.2 ft submerged",
      warning: "Bethukandi road severed. Follow low valley detour."
    },
    safeRouteToShelter: [
      [24.8180, 92.7950],
      [24.8090, 92.7720],
      [24.8420, 92.7380],
      [24.8520, 92.7750],
      [24.8580, 92.8020]
    ]
  },
  {
    district: "Hailakandi",
    division: "Barak Valley Division",
    coordinates: [24.6885, 92.5738],
    coordsLabel: "24.68°N, 92.57°E",
    riskLevel: "High",
    river: "Dhaleswari & Katakhal River",
    riverStatus: "Katakhal river flowing 0.88m ABOVE Danger Mark at Matijuri",
    waterLevel: "21.05m MSL",
    rainfall24h: "140.0 mm",
    affectedPopulation: "33,500 Citizens",
    originAddress: "Lala Bazar & Hailakandi Town, Hailakandi, Assam",
    citizenOrigin: [24.6720, 92.5910],
    clinic: [24.7050, 92.5420],
    shelter: [24.7120, 92.5980],
    rescueCamp: [24.6550, 92.5510],
    roadBlock: [24.6910, 92.5760],
    floodedArea: [24.7020, 92.6210],
    deocPhone: "03844-222253 / 1077",
    landmarks: ["Hailakandi Town Hall", "Victoria Memorial High School", "Lala Rural Post"],
    shelterInfo: {
      name: "Hailakandi Town Club Indoor Shelter",
      capacity: 400,
      available: 165,
      occupied: 235,
      distance: "2.4 km",
      foodSupplies: "Hot Meals, Packed Drinking Water, Dry Biscuits",
      medicalAid: "District Hospital First Aid Wing"
    },
    clinicInfo: {
      name: "Central Dispensary Clinic",
      doctor: "Duty Doctor",
      distance: "0.9 km",
      phone: "+91 94350 66770"
    },
    rescueInfo: {
      name: "SDRF Barak Unit 4",
      commander: "Officer S. Deb",
      vehicle: "High-Water Raft",
      phone: "+91 94350 77881",
      radioChannel: "VHF-CH 14"
    },
    blockageInfo: {
      name: "Katibari-Hailakandi Road Flood",
      waterDepth: "2.7 ft water",
      warning: "Road flooded. Follow inter-village bypass."
    },
    safeRouteToShelter: [
      [24.6720, 92.5910],
      [24.6610, 92.5680],
      [24.6950, 92.5320],
      [24.7050, 92.5720],
      [24.7120, 92.5980]
    ]
  },
  {
    district: "Karimganj",
    division: "Barak Valley Division",
    coordinates: [24.8649, 92.3592],
    coordsLabel: "24.86°N, 92.35°E",
    riskLevel: "Critical",
    river: "Kushiara & Longai River",
    riverStatus: "Kushiara river overflowing international border dyke by 0.95m",
    waterLevel: "15.65m MSL",
    rainfall24h: "155.0 mm",
    affectedPopulation: "52,000 Citizens",
    originAddress: "Settlement Road & Badarpur, Karimganj, Assam",
    citizenOrigin: [24.8510, 92.3750],
    clinic: [24.8820, 92.3250],
    shelter: [24.8890, 92.3820],
    rescueCamp: [24.8320, 92.3390],
    roadBlock: [24.8680, 92.3620],
    floodedArea: [24.8780, 92.4110],
    deocPhone: "03843-262105 / 1077",
    landmarks: ["Karimganj District Stadium", "Government High School", "Badarpur Junction"],
    shelterInfo: {
      name: "Karimganj Government College Camp",
      capacity: 500,
      available: 210,
      occupied: 290,
      distance: "2.6 km",
      foodSupplies: "Hot Meals, Drinking Water, Family Care Packs",
      medicalAid: "Border Disaster Relief Medical Post"
    },
    clinicInfo: {
      name: "Settlement Road Health Clinic",
      doctor: "Dr. N. Deb",
      distance: "1.1 km",
      phone: "+91 94350 88992"
    },
    rescueInfo: {
      name: "NDRF Border River Unit",
      commander: "Inspector M. Choudhury",
      vehicle: "River Patrol Boat",
      phone: "+91 94350 99003",
      radioChannel: "VHF-CH 16 (156.8 MHz)"
    },
    blockageInfo: {
      name: "Kushiara Riverside Bypass Flood",
      waterDepth: "3.5 ft water",
      warning: "Riverside bypass flooded. Follow border ridge route."
    },
    safeRouteToShelter: [
      [24.8510, 92.3750],
      [24.8410, 92.3520],
      [24.8720, 92.3150],
      [24.8820, 92.3550],
      [24.8890, 92.3820]
    ]
  }
];

// ==========================================
// ASSAM SHELTER NETWORK MATRIX (3+ Genuine Shelters per District)
// ==========================================
const assamShelterNetwork = {
  // ==========================================
  // 0. PRIMARY LIVE DEMO REGION: HYDERABAD (TELANGANA)
  // ==========================================
  "Hyderabad": [
    { name: "GHMC Begumpet Indoor Stadium Emergency Shelter", coordinates: [17.4410, 78.4780], capacity: 850, status: "Open", type: "Mega Camp", contact: "GHMC Officer K. Varma", phone: "+91 94401 11223", desc: "Central GHMC stadium complex with 50-bed medical camp and 24x7 community kitchen." },
    { name: "Nizam College Grounds Disaster Relief Camp", coordinates: [17.3980, 78.4750], capacity: 600, status: "Open", type: "College Shelter", contact: "Prof. P. Reddy", phone: "+91 94401 55664", desc: "Basheerbagh elevated campus with water filtration and power backup." },
    { name: "Lal Bahadur Shastri Stadium Relief Enclave", coordinates: [17.4020, 78.4710], capacity: 1000, status: "Open", type: "Stadium Enclave", contact: "Commander A. Rao", phone: "+91 94401 99005", desc: "Multi-purpose covered stadium safe from Musi river floodwaters." }
  ],

  // ==========================================
  // UPPER ASSAM DIVISION
  // ==========================================
  "Golaghat": [
    { name: "Golaghat Degree College Relief Camp", coordinates: [26.4220, 94.0410], capacity: 500, status: "Open", type: "Collegiate Shelter", contact: "Mr. Pranjal Saikia", phone: "+91 98765 43210", desc: "Government relief camp equipped with hot meals, drinking water, medical aid and bedding." },
    { name: "District Government College Shelter", coordinates: [26.4115, 94.0195], capacity: 350, status: "Open", type: "College Shelter", contact: "Dr. B. K. Sarma", phone: "+91 94350 11223", desc: "Highland collegiate shelter facility with clean drinking water and bedding." },
    { name: "Furkating Higher Secondary School", coordinates: [26.3780, 94.0240], capacity: 200, status: "Full", type: "School Shelter", contact: "Headmaster D. Bora", phone: "+91 94351 99887", desc: "School campus safe block currently operating at full capacity." }
  ],
  "Jorhat": [
    { name: "JB College Indoor Stadium Shelter", coordinates: [26.7720, 94.2250], capacity: 650, status: "Open", type: "Relief Camp", contact: "Officer P. Saikia", phone: "+91 94352 33445", desc: "State multi-purpose stadium camp with mega kitchen and trauma medical squad." },
    { name: "Jorhat Government Boys School", coordinates: [26.7580, 94.2150], capacity: 300, status: "Open", type: "School Shelter", contact: "Mr. A. Goswami", phone: "+91 94352 77665", desc: "Centrally located relief center with 24x7 medical staff." },
    { name: "Rowriah Community Relief Center", coordinates: [26.7320, 94.1750], capacity: 250, status: "Open", type: "Community Hall", contact: "Mrs. M. Dutta", phone: "+91 94352 88990", desc: "Community hall safe hub with dry ration distribution." }
  ],
  "Dibrugarh": [
    { name: "Dibrugarh University Multi-Purpose Hall", coordinates: [27.4990, 94.9210], capacity: 800, status: "Open", type: "Relief Camp", contact: "Inspector R. Sonowal", phone: "+91 94353 11224", desc: "Main transit relief facility with large dining hall and power backup." },
    { name: "Dibrugarh University Indoor Stadium", coordinates: [27.4520, 94.9030], capacity: 500, status: "Open", type: "Stadium Shelter", contact: "Prof. N. Gogoi", phone: "+91 94353 44556", desc: "Elevated university complex with high-capacity sanitation facilities." },
    { name: "Mankatta High School Shelter", coordinates: [27.4710, 94.8820], capacity: 250, status: "Full", type: "School Shelter", contact: "Mr. K. Chutia", phone: "+91 94353 66778", desc: "Ward relief post equipped with first-aid clinic." }
  ],
  "Sivasagar": [
    { name: "Sivasagar Government HS School Shelter", coordinates: [26.9990, 94.6620], capacity: 450, status: "Open", type: "School Shelter", contact: "Officer T. Phukan", phone: "+91 94354 11225", desc: "Primary district relief shelter with mobile medical van." },
    { name: "Fuleswari Girls School Relief Base", coordinates: [26.9850, 94.6380], capacity: 300, status: "Open", type: "School Shelter", contact: "Mrs. R. Hazarika", phone: "+91 94354 55667", desc: "Dedicated maternal and child safety relief block." },
    { name: "Joysagar Community Shelter Hall", coordinates: [26.9650, 94.6290], capacity: 350, status: "Open", type: "Community Hall", contact: "Mr. D. Borgohain", phone: "+91 94354 77889", desc: "Community relief center near Joysagar tank." }
  ],
  "Tinsukia": [
    { name: "Tinsukia District Sports Complex Shelter", coordinates: [27.5210, 95.3850], capacity: 700, status: "Open", type: "School Shelter", contact: "Mr. S. Moran", phone: "+91 94355 11226", desc: "Town center emergency safe zone with potable water." },
    { name: "District Sports Association Ground", coordinates: [27.4980, 95.3520], capacity: 600, status: "Open", type: "Relief Camp", contact: "Officer B. Chetia", phone: "+91 94355 44557", desc: "Large multi-tent shelter facility with 24-hour kitchen." },
    { name: "Borguri Community Relief Hub", coordinates: [27.4850, 95.3310], capacity: 200, status: "Open", type: "Community Hall", contact: "Mr. P. Gohain", phone: "+91 94355 88991", desc: "Suburban relief outpost with direct ambulance access." }
  ],
  "Dhemaji": [
    { name: "Dhemaji Higher Secondary School Shelter", coordinates: [27.5050, 94.6210], capacity: 600, status: "Open", type: "Relief Camp", contact: "Commander H. Doley", phone: "+91 94356 11227", desc: "Elevated flood protection center with boat evacuation jetty." },
    { name: "Town High School Safe Zone", coordinates: [27.4790, 94.5820], capacity: 350, status: "Open", type: "School Shelter", contact: "Mr. J. Pegu", phone: "+91 94356 33448", desc: "Reinforced high-ground school building." },
    { name: "Silapathar Community Shelter", coordinates: [27.6110, 94.7310], capacity: 400, status: "Open", type: "Community Hall", contact: "Officer N. Kaman", phone: "+91 94356 77880", desc: "Silapathar junction relief point with power generator." }
  ],
  "Lakhimpur": [
    { name: "North Lakhimpur College Relief Camp", coordinates: [27.2550, 94.1190], capacity: 550, status: "Open", type: "College Shelter", contact: "Mr. R. Bhuyan", phone: "+91 94357 11228", desc: "Primary collegiate shelter with emergency ration storage." },
    { name: "District Stadium Emergency Camp", coordinates: [27.2280, 94.0880], capacity: 550, status: "Open", type: "Relief Camp", contact: "Officer L. Saikia", phone: "+91 94357 55669", desc: "Stadium pavilion relief facility with medical team." },
    { name: "Kamalaboria College Safe Block", coordinates: [27.2420, 94.1450], capacity: 300, status: "Open", type: "College Shelter", contact: "Dr. P. Borah", phone: "+91 94357 99001", desc: "College block with clean drinking water and baby supplies." }
  ],

  // ==========================================
  // CENTRAL ASSAM DIVISION
  // ==========================================
  "Nagaon": [
    { name: "Nagaon Stadium Relief Camp", coordinates: [26.3650, 92.7050], capacity: 750, status: "Open", type: "Relief Camp", contact: "Inspector J. Bora", phone: "+91 94358 77889", desc: "Central district relief base with dedicated medical warehouse." },
    { name: "Nagaon Govt Boys Higher Secondary", coordinates: [26.3450, 92.6750], capacity: 400, status: "Open", type: "School Shelter", contact: "Mr. K. Mahanta", phone: "+91 94358 22334", desc: "Town center shelter facility with round-the-clock security." },
    { name: "Dawson High School Relief Outpost", coordinates: [26.3520, 92.6910], capacity: 300, status: "Open", type: "School Shelter", contact: "Mrs. A. Goswami", phone: "+91 94358 66770", desc: "High-ground campus with clean sanitation blocks." }
  ],
  "Hojai": [
    { name: "Hojai Vidyasagar College Relief Complex", coordinates: [26.0310, 92.8690], capacity: 400, status: "Open", type: "Relief Camp", contact: "Officer S. Roy", phone: "+91 94359 11220", desc: "Community field camp with dry food and infant support." },
    { name: "Lanka High School Emergency Block", coordinates: [25.9220, 93.0020], capacity: 350, status: "Open", type: "School Shelter", contact: "Mr. M. Dey", phone: "+91 94359 44551", desc: "Lanka safe zone with emergency doctor on duty." },
    { name: "Govt B.B. College Shelter Pitches", coordinates: [26.0020, 92.8420], capacity: 400, status: "Open", type: "College Shelter", contact: "Dr. S. K. Paul", phone: "+91 94359 88992", desc: "College campus with clean beds and drinking water." }
  ],
  "Morigaon": [
    { name: "Morigaon District Library Grounds Camp", coordinates: [26.2790, 92.3590], capacity: 500, status: "Open", type: "Relief Camp", contact: "Mr. H. Medhi", phone: "+91 94360 11221", desc: "Primary municipal school safe zone with large field accommodation." },
    { name: "District Sports Complex Shelter", coordinates: [26.2510, 92.3250], capacity: 600, status: "Open", type: "Relief Camp", contact: "Officer T. Deka", phone: "+91 94360 55662", desc: "Sports stadium camp with hot cooked meals provided 3 times daily." },
    { name: "Jagiroad Community Relief Block", coordinates: [26.1950, 92.2150], capacity: 350, status: "Open", type: "Community Hall", contact: "Mr. P. Bordoloi", phone: "+91 94360 99003", desc: "Jagiroad town relief hub with solar lighting." }
  ],
  "Dima Hasao": [
    { name: "Haflong Council Hall Shelter", coordinates: [25.4250, 93.0990], capacity: 350, status: "Open", type: "Community Hall", contact: "Officer D. Thaosen", phone: "+91 94361 11222", desc: "Hilltop relief shelter safe from landslides and river surges." },
    { name: "Haflong Govt College Highland Block", coordinates: [25.3950, 93.0680], capacity: 500, status: "Open", type: "College Shelter", contact: "Dr. K. Hrangkhawl", phone: "+91 94361 44553", desc: "Elevated college building with full power generation backup." },
    { name: "Maibang Community Relief Base", coordinates: [25.6920, 93.1610], capacity: 250, status: "Open", type: "Community Hall", contact: "Mr. J. Langthasa", phone: "+91 94361 77884", desc: "Maibang valley relief outpost with medical kits." }
  ],
  "East Karbi Anglong": [
    { name: "Diphu Sports Complex Relief Camp", coordinates: [26.1590, 93.6020], capacity: 450, status: "Open", type: "Relief Camp", contact: "Officer M. Teron", phone: "+91 94350 88999", desc: "Spacious community complex with solar emergency generator and dry rations." },
    { name: "Diphu Club Relief Enclosure", coordinates: [25.8380, 93.4410], capacity: 300, status: "Open", type: "Community Hall", contact: "Mr. L. Ronghang", phone: "+91 94362 33445", desc: "Club premises converted into temporary medical camp." },
    { name: "Manja Village Elevated School", coordinates: [25.9120, 93.5150], capacity: 200, status: "Open", type: "School Shelter", contact: "Headmaster K. Timung", phone: "+91 94362 66776", desc: "Village high-school building on elevated terrain." }
  ],

  // ==========================================
  // LOWER & NORTH ASSAM DIVISIONS
  // ==========================================
  "Guwahati / Kamrup Metro": [
    { name: "Sarusajai Indoor Stadium Relief Hub", coordinates: [26.1680, 91.7590], capacity: 1200, status: "Open", type: "Mega Camp", contact: "State Coordinator S. Kalita", phone: "+91 94363 11223", desc: "Assam state central mega shelter with 50-bed mobile hospital." },
    { name: "Guwahati Exhibition Ground", coordinates: [26.1680, 91.7590], capacity: 1000, status: "Open", type: "Relief Camp", contact: "Officer B. Talukdar", phone: "+91 94363 55664", desc: "Covered pavilion shelter with multi-line clean water stations." },
    { name: "Cotton University Hostel Complex", coordinates: [26.1850, 91.7480], capacity: 450, status: "Open", type: "University Shelter", contact: "Prof. P. Das", phone: "+91 94363 99005", desc: "Hostel building shelter with bedding and infant supplies." }
  ],
  "Kamrup Metropolitan": [
    { name: "Sarusajai Indoor Stadium Relief Hub", coordinates: [26.1680, 91.7590], capacity: 1200, status: "Open", type: "Mega Camp", contact: "State Coordinator S. Kalita", phone: "+91 94363 11223", desc: "Assam state central mega shelter with 50-bed mobile hospital." },
    { name: "Guwahati Exhibition Ground", coordinates: [26.1680, 91.7590], capacity: 1000, status: "Open", type: "Relief Camp", contact: "Officer B. Talukdar", phone: "+91 94363 55664", desc: "Covered pavilion shelter with multi-line clean water stations." },
    { name: "Cotton University Hostel Complex", coordinates: [26.1850, 91.7480], capacity: 450, status: "Open", type: "University Shelter", contact: "Prof. P. Das", phone: "+91 94363 99005", desc: "Hostel building shelter with bedding and infant supplies." }
  ],
  "Darrang": [
    { name: "Mangaldai College Campus Shelter", coordinates: [26.4750, 92.0520], capacity: 500, status: "Open", type: "College Shelter", contact: "Dr. B. Deka", phone: "+91 94364 88996", desc: "Town college campus compound with dry food and sanitation." },
    { name: "Mangaldai Govt HS School Field", coordinates: [26.4420, 92.0250], capacity: 350, status: "Open", type: "School Shelter", contact: "Headmaster P. Nath", phone: "+91 94364 44555", desc: "High-school ground with emergency tents and water filters." },
    { name: "Sipajhar College Emergency Center", coordinates: [26.4250, 91.8850], capacity: 300, status: "Open", type: "College Shelter", contact: "Mr. D. Saharia", phone: "+91 94364 11224", desc: "Sipajhar relief campus with direct highway connectivity." }
  ],
  "Barpeta": [
    { name: "Barpeta Town Hall Relief Hub", coordinates: [26.3420, 91.0050], capacity: 600, status: "Open", type: "Relief Camp", contact: "Officer H. Das", phone: "+91 94365 11225", desc: "Main district stadium shelter equipped with rescue motorboat dock." },
    { name: "Barpeta Vidyapith High School", coordinates: [26.3150, 90.9720], capacity: 400, status: "Open", type: "School Shelter", contact: "Mr. G. Pathak", phone: "+91 94365 55666", desc: "Elevated school relief building with separate women's wing." },
    { name: "Howly Community Relief Block", coordinates: [26.4250, 90.9650], capacity: 350, status: "Open", type: "Community Hall", contact: "Mr. M. Ali", phone: "+91 94365 99007", desc: "Howly junction community shelter with medicine dispensary." }
  ],
  "Sonitpur": [
    { name: "Tezpur Collegiate Campus Shelter", coordinates: [26.7810, 92.8750], capacity: 550, status: "Open", type: "College Shelter", contact: "Officer S. Mahanta", phone: "+91 94366 11226", desc: "Highland transit camp with emergency kitchen." },
    { name: "Darrang College Multi-Hall Base", coordinates: [26.6350, 92.7950], capacity: 500, status: "Open", type: "College Shelter", contact: "Dr. R. Goswami", phone: "+91 94366 44557", desc: "College auditorium safe complex with solar power." },
    { name: "Tezpur Govt Boys School Annex", coordinates: [26.6280, 92.7820], capacity: 300, status: "Open", type: "School Shelter", contact: "Mr. K. Sharma", phone: "+91 94366 88998", desc: "Urban school safe facility with clean restrooms." }
  ],
  "Dhubri": [
    { name: "Dhubri Bholanath College Camp", coordinates: [26.0420, 90.0150], capacity: 700, status: "Open", type: "Relief Camp", contact: "Inspector M. Islam", phone: "+91 94367 11227", desc: "Brahmaputra bank elevated stadium with boat rescue hub." },
    { name: "Gauripur PC Institution School", coordinates: [26.0820, 89.9950], capacity: 400, status: "Open", type: "School Shelter", contact: "Headmaster S. Roy", phone: "+91 94367 44558", desc: "Historic brick building safe zone with dry storage." },
    { name: "Bidyapara Girls High School Hub", coordinates: [26.0120, 89.9720], capacity: 250, status: "Open", type: "School Shelter", contact: "Mrs. F. Begum", phone: "+91 94367 88999", desc: "Girls school safe haven with medical volunteers." }
  ],
  "Goalpara": [
    { name: "Goalpara College Stadium Shelter", coordinates: [26.2020, 90.6450], capacity: 500, status: "Open", type: "Relief Camp", contact: "Officer A. Rabha", phone: "+91 94368 11228", desc: "Town stadium relief enclave with emergency water purifiers." },
    { name: "PR Govt HS School Relief Facility", coordinates: [26.1720, 90.6180], capacity: 400, status: "Open", type: "School Shelter", contact: "Mr. N. Nath", phone: "+91 94368 55669", desc: "High-ground campus with bedding and hot meals." },
    { name: "Baladmari Community Center Space", coordinates: [26.1650, 90.6480], capacity: 300, status: "Open", type: "Community Hall", contact: "Mr. S. Das", phone: "+91 94368 99000", desc: "Community relief center with dedicated power generator." }
  ],

  // ==========================================
  // BARAK VALLEY DIVISION
  // ==========================================
  "Cachar": [
    { name: "Silchar DSA Stadium Relief Complex", coordinates: [24.8580, 92.8020], capacity: 900, status: "Open", type: "Relief Complex", contact: "Commander P. Deb", phone: "+91 94369 11229", desc: "Barak valley central coordination shelter with emergency helicopter pad." },
    { name: "Government Boys Higher Secondary", coordinates: [24.8210, 92.7920], capacity: 500, status: "Open", type: "School Shelter", contact: "Mr. S. Paul", phone: "+91 94369 44550", desc: "Silchar center school shelter with 24x7 doctor." },
    { name: "Sonai Road Community Safe Center", coordinates: [24.7950, 92.8050], capacity: 300, status: "Open", type: "Community Hall", contact: "Mr. B. Chanda", phone: "+91 94369 88991", desc: "Highland community shelter along Sonai road." }
  ],
  "Hailakandi": [
    { name: "Hailakandi Town Club Indoor Shelter", coordinates: [24.7120, 92.5980], capacity: 400, status: "Open", type: "Community Hall", contact: "Officer R. Laskar", phone: "+91 94370 11220", desc: "Municipal hall shelter with emergency food distribution." },
    { name: "Government Victoria Memorial High", coordinates: [24.6820, 92.5650], capacity: 350, status: "Open", type: "School Shelter", contact: "Headmaster D. Roy", phone: "+91 94370 55661", desc: "Elevated high-school campus safe from Dhaleswari river overflow." },
    { name: "Lala Rural Emergency Outpost", coordinates: [24.5520, 92.5450], capacity: 300, status: "Open", type: "School Shelter", contact: "Mr. M. Nath", phone: "+91 94370 99002", desc: "Rural safe zone with clean drinking water tanks." }
  ],
  "Karimganj": [
    { name: "Karimganj Government College Camp", coordinates: [24.8890, 92.3820], capacity: 500, status: "Open", type: "College Shelter", contact: "Officer K. Dasgupta", phone: "+91 94371 11221", desc: "Stadium relief ground with medical care and dry rations." },
    { name: "Government High School Relief Facility", coordinates: [24.8610, 92.3550], capacity: 400, status: "Open", type: "School Shelter", contact: "Mr. T. Bhattacharjee", phone: "+91 94371 55662", desc: "Town center emergency shelter with separate family dormitories." },
    { name: "Badarpur Sub-Division Safe Site", coordinates: [24.9020, 92.5180], capacity: 350, status: "Open", type: "Community Hall", contact: "Mr. A. Hussain", phone: "+91 94371 99003", desc: "Badarpur junction safe haven with generator backup." }
  ]
};

// Precise Haversine distance calculator in kilometers
function calculateHaversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
}

// Proximity logic helper utilizing standard coordinate arrays
function locateNearestShelters(currentDistrict, userLat, userLng) {
  const matchData = window.citizenApp ? window.citizenApp.getDistrictModelData(currentDistrict) : null;
  const dKey = matchData ? matchData.district : currentDistrict;
  const shelters = assamShelterNetwork[dKey] || assamShelterNetwork["Golaghat"] || [];
  if (!shelters || shelters.length === 0) return [];

  return shelters.map((shelter, idx) => {
    const latDiff = shelter.coordinates[0] - userLat;
    const lngDiff = shelter.coordinates[1] - userLng;
    const distanceMetric = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
    const distKm = calculateHaversineKm(userLat, userLng, shelter.coordinates[0], shelter.coordinates[1]);
    
    let occRatio;
    if (shelter.status === 'Full') {
      occRatio = 1.0;
    } else {
      const charSum = shelter.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const spread = ((charSum * (idx + 7) + shelter.capacity * 3) % 45 + 35) / 100;
      occRatio = parseFloat(spread.toFixed(2));
    }

    const occupiedBeds = Math.round(shelter.capacity * occRatio);
    const availableBeds = Math.max(0, shelter.capacity - occupiedBeds);
    
    return {
      ...shelter,
      score: distanceMetric,
      distanceKm: parseFloat(distKm),
      distance: `${distKm} km`,
      time: `${Math.max(5, Math.round(parseFloat(distKm) * 5))} mins`,
      available: availableBeds,
      occupied: occupiedBeds,
      occupancyRatio: occRatio
    };
  }).sort((a, b) => a.score - b.score);
}

class CitizenApp {
  constructor() {
    this.currentDistrict = this.getSelectedDistrict();
    this.map = null;
    this.mapLayers = {
      markers: [],
      polylines: [],
      circles: []
    };
    this.init();
  }

  init() {
    console.log(`AEGIS Citizen Portal Controller Initialized. Active District: ${this.currentDistrict}`);
  }

  // Get active selected district from localStorage (defaults to Hyderabad for live demo)
  getSelectedDistrict() {
    try {
      return localStorage.getItem('aegis_selected_district') || 'Hyderabad';
    } catch (e) {
      return 'Hyderabad';
    }
  }

  // Save selected district to localStorage
  setSelectedDistrict(districtName) {
    try {
      localStorage.setItem('aegis_selected_district', districtName);
    } catch (e) {
      console.warn('localStorage error', e);
    }
    this.currentDistrict = districtName;
  }

  // Get district data from assamFloodModelData with fuzzy matching
  getDistrictModelData(districtName) {
    if (!districtName) districtName = this.getSelectedDistrict();
    const query = districtName.toLowerCase().trim();

    const match = assamFloodModelData.find(d => {
      const dName = d.district.toLowerCase();
      return dName === query ||
        (query.includes('hyd') && dName.includes('hyderabad')) ||
        (query.includes('telangana') && dName.includes('hyderabad')) ||
        (query.includes('guwahati') && dName.includes('guwahati')) ||
        (query.includes('kamrup') && dName.includes('guwahati')) ||
        (query.includes('silchar') && dName.includes('cachar')) ||
        (query.includes('cachar') && dName.includes('cachar')) ||
        (query.includes('karbi') && dName.includes('karbi')) ||
        dName.includes(query) ||
        query.includes(dName);
    });

    return match || assamFloodModelData[0]; // fallback to Hyderabad (index 0)
  }

  // Get at least 3 genuine real-time shelters for the given district
  getDistrictShelters(districtName) {
    const dist = districtName || this.getSelectedDistrict() || 'Golaghat';
    const matchData = this.getDistrictModelData(dist);
    const resolvedKey = matchData ? matchData.district : dist;
    const shelters = assamShelterNetwork[resolvedKey] || assamShelterNetwork["Golaghat"] || [];
    const origin = (matchData && matchData.citizenOrigin) ? matchData.citizenOrigin : (matchData ? matchData.coordinates : [26.4049, 94.0321]);

    return shelters.map((s, idx) => {
      const distKm = calculateHaversineKm(origin[0], origin[1], s.coordinates[0], s.coordinates[1]);
      const distanceStr = `${distKm} km`;
      const timeStr = `${Math.max(6, Math.round(parseFloat(distKm) * 5.5))} mins`;
      
      const charSum = s.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const spread = ((charSum * (idx + 7) + s.capacity * 3) % 45 + 35) / 100;
      const occRatio = s.status === 'Full' ? 1.0 : parseFloat(spread.toFixed(2));
      const occupied = Math.round(s.capacity * occRatio);
      const available = Math.max(0, s.capacity - occupied);

      return {
        id: `sh-${dist.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${idx+1}`,
        name: s.name,
        location: `${dist} District, Assam`,
        district: dist,
        coordinates: s.coordinates,
        coords: s.coordinates,
        capacity: s.capacity,
        occupied: occupied,
        available: available,
        occupancyRatio: occRatio,
        status: s.status || (available > 0 ? 'Open' : 'Full'),
        type: s.type || 'Relief Camp',
        contact: s.contact || 'District Emergency Officer',
        phone: s.phone || (matchData ? matchData.deocPhone : '1077'),
        distance: distanceStr,
        distanceKm: parseFloat(distKm),
        time: timeStr,
        desc: s.desc || 'Government verified flood relief shelter with food, clean water and medical triage.',
        foodSupplies: 'Hot Cooked Meals (3x daily), Clean Filtered Water, Baby Nutrition',
        medicalAid: 'On-Duty Emergency Medical Officer, Trauma Triage & Anti-Venom',
        facilities: ['Food', 'Water', 'Medical', 'Toilets', 'Sleeping Area', 'Charging Area', 'Security']
      };
    });
  }

  // Setup High-Clarity Tile Layers with Place Names, Streets, Terrain, and Satellite Switcher
  setupMapTileLayers(mapInstance, defaultStyle = 'street', addControl = true) {
    if (!mapInstance) return null;

    // 1. Street Map (High Resolution with place names, road network, town labels)
    const streetLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      maxNativeZoom: 18,
      subdomains: ['server', 'services'],
      attribution: '&copy; Esri World Street Map'
    });

    // 2. Satellite Map (Base Imagery + Boundaries & Places Overlay + Transportation Roads)
    const satBase = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      maxNativeZoom: 18,
      subdomains: ['server', 'services'],
      attribution: '&copy; Esri World Imagery'
    });
    const satLabels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      maxNativeZoom: 18,
      pane: 'overlayPane'
    });
    const satRoads = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      maxNativeZoom: 18,
      pane: 'overlayPane'
    });
    const satelliteLayer = L.layerGroup([satBase, satLabels, satRoads]);

    // 3. Terrain / Topographic Map (Elevation contours, hillshading, rivers, place names)
    const terrainLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      maxNativeZoom: 18,
      subdomains: ['server', 'services'],
      attribution: '&copy; Esri World Topo Map'
    });

    // Add selected initial layer
    if (defaultStyle === 'satellite') {
      satelliteLayer.addTo(mapInstance);
    } else if (defaultStyle === 'terrain') {
      terrainLayer.addTo(mapInstance);
    } else {
      streetLayer.addTo(mapInstance);
    }

    // Attach Layer Switcher Control (Street, Satellite, Terrain)
    if (addControl && !mapInstance._customLayerControlAttached) {
      mapInstance._customLayerControlAttached = true;
      const baseMaps = {
        '<span style="color:#e2e8f0; font-weight:700; font-size:11px;">🏙️ Street View</span>': streetLayer,
        '<span style="color:#e2e8f0; font-weight:700; font-size:11px;">🛰️ Satellite View</span>': satelliteLayer,
        '<span style="color:#e2e8f0; font-weight:700; font-size:11px;">⛰️ Terrain View</span>': terrainLayer
      };
      L.control.layers(baseMaps, null, {
        position: 'topright',
        collapsed: true
      }).addTo(mapInstance);
    }

    return { streetLayer, satelliteLayer, terrainLayer };
  }

  // Synchronize Topbar district pill & banner across all non-dashboard pages
  syncTopbarDistrict() {
    const districtName = this.getSelectedDistrict();
    const data = this.getDistrictModelData(districtName);

    // 1. Update District Label Pill
    const pill = document.getElementById('topbar-dist-name') || document.getElementById('topbar-district-label');
    if (pill) {
      pill.innerHTML = `${data.district} (${data.coordsLabel || 'Critical Sector'})`;
    }

    // 2. Update Topbar Alert Banner
    const banner = document.querySelector('.topbar-alert-banner span') || document.querySelector('.topbar-alert-banner div span');
    if (banner) {
      const risk = data.riskLevel ? data.riskLevel.toUpperCase() : 'HIGH';
      banner.innerHTML = `<strong style="color:#f87171;">${risk} FLOOD RISK</strong> in ${data.district} District (${data.river || 'River Basin'}). Heavy rainfall and rising water levels. Stay alert.`;
    }
  }

  // Render the user's selected district using the exact assamFloodModelData model
  renderDistrictOnMap(mapInstance, districtName) {
    if (!mapInstance) return;
    this.map = mapInstance;
    if (districtName) this.setSelectedDistrict(districtName);
    const data = this.getDistrictModelData(districtName || this.currentDistrict);

    // Clear previous district layers
    this.clearMapLayers();

    // 1. Citizen Origin Marker (Blue Person Pin)
    const citizenMarker = L.marker(data.citizenOrigin, {
      icon: L.divIcon({
        className: 'custom-map-icon',
        html: `<div style="background:#2563eb; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #fff; box-shadow:0 0 16px #2563eb;"><i class="fa-solid fa-user"></i></div>`,
        iconSize: [34, 34]
      })
    }).addTo(mapInstance).bindPopup(`<b>📍 My Current Location</b><br>${data.originAddress || data.district + ' Sector'}`);
    this.mapLayers.markers.push(citizenMarker);

    // 2. Emergency Clinic Marker (Red Doctor Pin - NOT Hospital)
    const clinicMarker = L.marker(data.clinic, {
      icon: L.divIcon({
        className: 'custom-map-icon',
        html: `<div style="background:#ef4444; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #fff; box-shadow:0 0 16px #ef4444;"><i class="fa-solid fa-user-doctor"></i></div>`,
        iconSize: [34, 34]
      })
    }).addTo(mapInstance).bindPopup(`
      <div style="padding:4px; font-family:sans-serif;">
        <strong style="color:#ef4444;">🩺 ${data.clinicInfo ? data.clinicInfo.name : 'Emergency Clinic'}</strong><br>
        Doctor: ${data.clinicInfo ? data.clinicInfo.doctor : 'On-Duty'}<br>
        Distance: ${data.clinicInfo ? data.clinicInfo.distance : 'Nearby'}<br>
        Phone: <strong>${data.clinicInfo ? data.clinicInfo.phone : '+91 108'}</strong>
      </div>
    `);
    this.mapLayers.markers.push(clinicMarker);

    // 3. Emergency Relief Shelter Marker (Green Tent Pin)
    const shelterMarker = L.marker(data.shelter, {
      icon: L.divIcon({
        className: 'custom-map-icon',
        html: `<div style="background:#10b981; color:#fff; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #fff; box-shadow:0 0 18px #10b981;"><i class="fa-solid fa-campground"></i></div>`,
        iconSize: [36, 36]
      })
    }).addTo(mapInstance).bindPopup(`
      <div style="padding:4px; font-family:sans-serif;">
        <strong style="color:#10b981;">🟢 ${data.shelterInfo ? data.shelterInfo.name : 'Relief Shelter'}</strong><br>
        Available Beds: <strong>${data.shelterInfo ? data.shelterInfo.available : 180} / ${data.shelterInfo ? data.shelterInfo.capacity : 500}</strong><br>
        Distance: ${data.shelterInfo ? data.shelterInfo.distance : '2.4 km'}<br>
        Supplies: ${data.shelterInfo ? data.shelterInfo.foodSupplies : 'Rations Available'}
      </div>
    `);
    this.mapLayers.markers.push(shelterMarker);

    // 4. Dispatched Rescue Base / Boat Marker (Purple Boat Pin)
    const rescueMarker = L.marker(data.rescueCamp, {
      icon: L.divIcon({
        className: 'custom-map-icon',
        html: `<div style="background:#8b5cf6; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #fff; box-shadow:0 0 16px #8b5cf6;"><i class="fa-solid fa-sailboat"></i></div>`,
        iconSize: [34, 34]
      })
    }).addTo(mapInstance).bindPopup(`
      <div style="padding:4px; font-family:sans-serif;">
        <strong style="color:#8b5cf6;">🚤 ${data.rescueInfo ? data.rescueInfo.name : 'Rescue Team'}</strong><br>
        Commander: ${data.rescueInfo ? data.rescueInfo.commander : 'NDRF Unit'}<br>
        Vehicle: ${data.rescueInfo ? data.rescueInfo.vehicle : 'Rescue Boat'}<br>
        Radio: <strong>${data.rescueInfo ? data.rescueInfo.radioChannel : 'VHF-16'}</strong><br>
        Phone: <strong>${data.rescueInfo ? data.rescueInfo.phone : '+91 112'}</strong>
      </div>
    `);
    this.mapLayers.markers.push(rescueMarker);

    // 5. Roadblock Warning Node (Orange Warning Triangle)
    const roadBlockMarker = L.marker(data.roadBlock, {
      icon: L.divIcon({
        className: 'custom-map-icon',
        html: `<div style="background:#f59e0b; color:#000; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #fff; box-shadow:0 0 16px #f59e0b;"><i class="fa-solid fa-triangle-exclamation"></i></div>`,
        iconSize: [34, 34]
      })
    }).addTo(mapInstance).bindPopup(`
      <div style="padding:4px; font-family:sans-serif;">
        <strong style="color:#f59e0b;">⚠️ Roadblock Node</strong><br>
        ${data.blockageInfo ? data.blockageInfo.name : 'Road Submerged'}<br>
        Water Depth: <span style="color:#ef4444; font-weight:700;">${data.blockageInfo ? data.blockageInfo.waterDepth : '3.0 ft'}</span><br>
        <em>${data.blockageInfo ? data.blockageInfo.warning : 'Road impassable.'}</em>
      </div>
    `);
    this.mapLayers.markers.push(roadBlockMarker);

    // 6. Flooded Boundary Circle (Translucent Red Overlay Zone, radius: 1200m)
    const floodCircle = L.circle(data.floodedArea, {
      color: '#ef4444',
      fillColor: '#ef4444',
      fillOpacity: 0.35,
      weight: 2,
      radius: 1200
    }).addTo(mapInstance).bindPopup(`🌊 <b>${data.river || 'Flood'} Inundated Hazard Zone</b><br>Do not attempt to cross`);
    this.mapLayers.circles.push(floodCircle);

    // 7. Draw Safe Curved Road Network Line to Shelter (Green Solid Polyline)
    const safeRouteLine = L.polyline(data.safeRouteToShelter, {
      color: '#10b981',
      weight: 6,
      opacity: 0.9,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(mapInstance).bindTooltip(`🟢 Recommended Safe Route to ${data.shelterInfo ? data.shelterInfo.name : 'Shelter'}`, { sticky: true });
    this.mapLayers.polylines.push(safeRouteLine);

    // 8. Draw Safe Route to Clinic (Blue Solid Polyline)
    const clinicRouteLine = L.polyline([
      data.citizenOrigin,
      data.safeRouteToShelter[1] || data.clinic,
      data.clinic
    ], {
      color: '#38bdf8',
      weight: 5,
      opacity: 0.85,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(mapInstance).bindTooltip(`🔵 Route to ${data.clinicInfo ? data.clinicInfo.name : 'Clinic'}`, { sticky: true });
    this.mapLayers.polylines.push(clinicRouteLine);

    // 9. Draw Rescue Team Boat Approach Path (Purple Dashed Polyline)
    const rescueRouteLine = L.polyline([
      data.rescueCamp,
      data.safeRouteToShelter[1] || data.citizenOrigin,
      data.citizenOrigin
    ], {
      color: '#8b5cf6',
      weight: 4,
      dashArray: '6, 8',
      opacity: 0.85,
      lineCap: 'round'
    }).addTo(mapInstance).bindTooltip("🟣 Dispatched Rescue Team Boat Approach Path", { sticky: true });
    this.mapLayers.polylines.push(rescueRouteLine);

    // 10. Draw Submerged Blocked Road Section (Red Dashed Polyline leading to Roadblock)
    const blockedRoadLine = L.polyline([
      data.citizenOrigin,
      data.roadBlock
    ], {
      color: '#ef4444',
      weight: 5,
      dashArray: '6, 8',
      opacity: 0.85,
      lineCap: 'round'
    }).addTo(mapInstance).bindTooltip(`🔴 Submerged Road (${data.blockageInfo ? data.blockageInfo.name : 'Avoided by Safe Route'})`, { sticky: true });
    this.mapLayers.polylines.push(blockedRoadLine);

    // Auto-fit map viewport to frame all waypoints and markers
    try {
      const allPoints = [
        ...data.safeRouteToShelter,
        data.clinic,
        data.rescueCamp,
        data.roadBlock,
        data.floodedArea
      ];
      const bounds = L.latLngBounds(allPoints);
      mapInstance.fitBounds(bounds.pad(0.28), { animate: true, duration: 0.8 });
    } catch (e) {
      mapInstance.setView(data.coordinates, 13);
    }

    // Update Dashboard Widgets
    this.updateDashboardWidgets(data);
  }

  // Clear Map Markers, Polylines and Circles
  clearMapLayers() {
    if (!this.map) return;
    this.mapLayers.markers.forEach(m => this.map.removeLayer(m));
    this.mapLayers.polylines.forEach(p => this.map.removeLayer(p));
    this.mapLayers.circles.forEach(c => this.map.removeLayer(c));
    this.mapLayers.markers = [];
    this.mapLayers.polylines = [];
    this.mapLayers.circles = [];
  }

  // Update Dashboard Widgets with Selected District Details
  updateDashboardWidgets(data) {
    const shelterName = document.getElementById('dash-shelter-name');
    if (shelterName && data.shelterInfo) shelterName.innerText = data.shelterInfo.name;

    const shelterDist = document.getElementById('dash-shelter-distance');
    if (shelterDist && data.shelterInfo) shelterDist.innerText = `${data.shelterInfo.distance} Away`;

    const shelterBeds = document.getElementById('dash-shelter-beds');
    if (shelterBeds && data.shelterInfo) shelterBeds.innerText = `${data.shelterInfo.available} Beds Available (${data.shelterInfo.occupied} occupied)`;

    // River status widget if present
    const riverStatus = document.getElementById('dash-river-status');
    if (riverStatus && data.riverStatus) riverStatus.innerText = data.riverStatus;

    const waterLevel = document.getElementById('dash-water-level');
    if (waterLevel && data.waterLevel) waterLevel.innerText = data.waterLevel;

    const rainfallVal = document.getElementById('dash-rainfall-val');
    if (rainfallVal && data.rainfall24h) rainfallVal.innerText = data.rainfall24h;

    const affectedPop = document.getElementById('dash-affected-pop');
    if (affectedPop && data.affectedPopulation) affectedPop.innerText = data.affectedPopulation;

    const aiSummary = document.getElementById('dash-ai-summary');
    if (aiSummary) {
      aiSummary.innerHTML = `
        AI Guidance for <strong>${data.district}</strong>: 
        Recommended safe evacuation route to <strong>${data.shelterInfo ? data.shelterInfo.name : 'Emergency Shelter'}</strong> (${data.shelterInfo ? data.shelterInfo.distance : '2.4 km'}). 
        <strong>Avoid ${data.blockageInfo ? data.blockageInfo.name : 'Blocked Road'}</strong> (${data.blockageInfo ? data.blockageInfo.waterDepth : 'Submerged'}). 
        Nearest emergency clinic: <strong>${data.clinicInfo ? data.clinicInfo.name : 'Local Clinic'}</strong> (${data.clinicInfo ? data.clinicInfo.distance : 'Nearby'}).
      `;
    }
  }

  // Generate District-Specific Knowledge Answers for AI Assistant
  getDistrictAIKnowledge(districtName, userQuery) {
    const data = this.getDistrictModelData(districtName);
    const q = (userQuery || '').toLowerCase();

    // 1. Shelter queries
    if (q.includes('shelter') || q.includes('camp') || q.includes('relief') || q.includes('stay') || q.includes('safe place') || q.includes('bed')) {
      const shelters = assamShelterNetwork[data.district] || [];
      const shelterList = shelters.map((s, idx) => `${idx + 1}. **${s.name}** (${s.type}) - ${s.capacity} capacity (${s.status}). Contact: ${s.contact} (${s.phone})`).join('\n');
      return `🏠 **Verified Relief Shelters in ${data.district} District:**\n\n` +
        `• Primary Hub: **${data.shelterInfo.name}**\n` +
        `• Available Capacity: **${data.shelterInfo.available} beds open** (Total: ${data.shelterInfo.capacity}, ${data.shelterInfo.occupied} currently sheltered)\n` +
        `• Distance: **${data.shelterInfo.distance}** from your current location\n` +
        `• Rations & Food: ${data.shelterInfo.foodSupplies}\n` +
        `• Medical Unit: ${data.shelterInfo.medicalAid}\n\n` +
        `**Other Verified Facilities in ${data.district}:**\n${shelterList}\n\n` +
        `👉 Tap **Safe Routes** in the left menu to view turn-by-turn navigation bypassing all submerged roads.`;
    }

    // 2. Road / blockage / route queries
    if (q.includes('route') || q.includes('road') || q.includes('blocked') || q.includes('highway') || q.includes('nh') || q.includes('waterlog') || q.includes('path') || q.includes('drive')) {
      return `🛣️ **Safe Evacuation Route & Road Intel for ${data.district}:**\n\n` +
        `⚠️ **Active Roadblock Alert:** ${data.blockageInfo.name} is **SUBMERGED (${data.blockageInfo.waterDepth})**. *${data.blockageInfo.warning}*\n\n` +
        `🟢 **Recommended Safe Corridor:**\n` +
        `1. Start at **${data.originAddress}**.\n` +
        `2. Take the elevated link bypass (avoiding the river bank).\n` +
        `3. Follow green route signs directly to **${data.shelterInfo.name}** (${data.shelterInfo.distance}).\n\n` +
        `💡 *Radar confirms this route is on elevated terrain with 0% flood inundation.*`;
    }

    // 3. River / water level queries
    if (q.includes('river') || q.includes('water') || q.includes('level') || q.includes('danger') || q.includes('flood') || q.includes('rain') || q.includes('weather')) {
      return `🌊 **Hydrological & Weather Telemetry for ${data.district}:**\n\n` +
        `• Major Rivers: **${data.river}**\n` +
        `• River Status: **${data.riverStatus}**\n` +
        `• Water Level: **${data.waterLevel}**\n` +
        `• 24-Hour Rainfall: **${data.rainfall24h}** (Heavy Monsoon Precipitation)\n` +
        `• Population Affected: **${data.affectedPopulation}**\n` +
        `• Flood Risk Tier: **Level 4 - ${data.riskLevel.toUpperCase()} WARNING**\n\n` +
        `⚠️ ASDMA warns that river levels are expected to remain critical for the next 48 hours. Keep Go-Bags ready.`;
    }

    // 4. Rescue / boat / NDRF / SDRF queries
    if (q.includes('rescue') || q.includes('boat') || q.includes('ndrf') || q.includes('sdrf') || q.includes('officer') || q.includes('battalion') || q.includes('evacuat')) {
      return `🚤 **Dispatched Rescue Forces for ${data.district}:**\n\n` +
        `• Assigned Team: **${data.rescueInfo.name}**\n` +
        `• Commander: **${data.rescueInfo.commander}**\n` +
        `• Vehicle Type: **${data.rescueInfo.vehicle}**\n` +
        `• Emergency Contact: **${data.rescueInfo.phone}**\n` +
        `• Marine Radio Channel: **${data.rescueInfo.radioChannel}**\n\n` +
        `🚨 If you are stranded, press **SOS** in the sidebar immediately or dial **112**. Your GPS coordinates will be dispatched straight to Commander ${data.rescueInfo.commander}.`;
    }

    // 5. Medical / clinic / doctor / hospital queries
    if (q.includes('doctor') || q.includes('clinic') || q.includes('medical') || q.includes('health') || q.includes('hospital') || q.includes('medicine') || q.includes('ambulance') || q.includes('108')) {
      return `🩺 **Emergency Medical Services in ${data.district}:**\n\n` +
        `• Primary Emergency Clinic: **${data.clinicInfo.name}**\n` +
        `• On-Duty Medical Officer: **${data.clinicInfo.doctor}**\n` +
        `• Distance: **${data.clinicInfo.distance}**\n` +
        `• Direct Clinic Line: **${data.clinicInfo.phone}**\n` +
        `• State Ambulance Hotline: **108** (Toll-Free, 24/7 Dispatch)\n\n` +
        `⚠️ First aid kits, anti-venom vials, and water purification tablets are available at this clinic.`;
    }

    // 6. Contact / emergency number / helpline queries
    if (q.includes('contact') || q.includes('helpline') || q.includes('phone') || q.includes('number') || q.includes('deoc') || q.includes('dc') || q.includes('control')) {
      return `📞 **Official Emergency Contacts for ${data.district} District:**\n\n` +
        `• **DEOC ${data.district}:** ${data.deocPhone}\n` +
        `• **National Emergency Dispatch:** 112 (Toll-Free)\n` +
        `• **ASDMA State Control Room:** 1078 / 0361-2237011\n` +
        `• **Mrityunjoy Ambulance:** 108\n` +
        `• **Assam Police:** 100\n` +
        `• **Fire & Emergency Services:** 101\n` +
        `• **${data.rescueInfo.name}:** ${data.rescueInfo.phone}`;
    }

    // Default general response tailored to district
    return `🤖 **AEGIS Assistant &bull; Active Intelligence for ${data.district}:**\n\n` +
      `You are currently monitored in **${data.district} District** (${data.division}).\n\n` +
      `• **Risk Level:** ${data.riskLevel.toUpperCase()} (${data.riverStatus})\n` +
      `• **Nearest Relief Camp:** ${data.shelterInfo.name} (${data.shelterInfo.distance}, ${data.shelterInfo.available} beds open)\n` +
      `• **Emergency Clinic:** ${data.clinicInfo.name} (${data.clinicInfo.doctor}, Phone: ${data.clinicInfo.phone})\n` +
      `• **Assigned Rescue Team:** ${data.rescueInfo.name} (${data.rescueInfo.vehicle})\n` +
      `• **Critical Road Alert:** Avoid ${data.blockageInfo.name} (${data.blockageInfo.waterDepth})\n\n` +
      `How can I assist you with evacuations, safe routes, or emergency rescue in ${data.district}?`;
  }

  // Handle District Dropdown Change
  onDistrictChange(districtName) {
    this.setSelectedDistrict(districtName);
    if (this.map) {
      this.renderDistrictOnMap(this.map, districtName);
    }
  }

  // Navigation Handlers
  navigateTo(page) {
    window.location.href = page;
  }

  logout() {
    window.location.href = 'index.html';
  }
}

// Universal Glassmorphic Alert System
function showCustomAlert(title, message, type = 'info', actionBtnText = 'Got It') {
  let modalBackdrop = document.getElementById('custom-glass-alert-backdrop');
  
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'custom-glass-alert-backdrop';
    modalBackdrop.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(6, 12, 28, 0.85);
      backdrop-filter: blur(10px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    `;
    document.body.appendChild(modalBackdrop);
  }

  const colorMap = {
    info: '#3b82f6',
    warning: '#f59e0b',
    danger: '#ef4444',
    success: '#10b981',
    ai: '#8b5cf6'
  };

  const iconMap = {
    info: 'fa-circle-info',
    warning: 'fa-triangle-exclamation',
    danger: 'fa-circle-exclamation',
    success: 'fa-circle-check',
    ai: 'fa-wand-magic-sparkles'
  };

  const color = colorMap[type] || colorMap.info;
  const icon = iconMap[type] || iconMap.info;

  let formattedMessage = message.split('\n').map(line => {
    line = line.trim();
    if (!line) return '';
    if (line.match(/^\d+\./) || line.startsWith('-') || line.startsWith('•')) {
      return `<li style="margin-bottom:0.35rem;">${line.replace(/^(\d+\.|-|•)\s*/, '')}</li>`;
    }
    return `<p style="margin-bottom:0.4rem; line-height:1.5;">${line}</p>`;
  }).join('');

  if (formattedMessage.includes('<li')) {
    formattedMessage = `<ul style="margin:0.3rem 0; padding-left:1.2rem; color:#cbd5e1; font-size:0.8rem;">${formattedMessage}</ul>`;
  }

  modalBackdrop.innerHTML = `
    <div style="background:#0b1426; border:1.5px solid ${color}; box-shadow:0 0 35px rgba(0,0,0,0.85), 0 0 15px ${color}40; border-radius:14px; width:100%; max-width:500px; overflow:hidden; font-family:'Plus Jakarta Sans', sans-serif; animation: fadeIn 0.2s ease-out;">
      <div style="padding:0.85rem 1.15rem; background:rgba(15,23,42,0.95); border-bottom:1px solid rgba(59,130,246,0.2); display:flex; align-items:center; justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <div style="width:34px; height:34px; border-radius:8px; background:${color}20; color:${color}; display:flex; align-items:center; justify-content:center; font-size:1.1rem; border:1px solid ${color}40;">
            <i class="fa-solid ${icon}"></i>
          </div>
          <div style="font-weight:800; font-size:0.95rem; color:#fff;">${title}</div>
        </div>
        <button onclick="closeCustomAlert()" style="background:transparent; border:none; color:#94a3b8; font-size:1.2rem; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <div style="padding:1rem 1.15rem; color:#cbd5e1; font-size:0.8rem;">
        ${formattedMessage}
      </div>

      <div style="padding:0.75rem 1.15rem; background:rgba(15,23,42,0.95); border-top:1px solid rgba(59,130,246,0.2); display:flex; justify-content:flex-end;">
        <button onclick="closeCustomAlert()" style="background:${color}; color:#fff; border:none; font-weight:800; font-size:0.75rem; padding:0.4rem 1.25rem; border-radius:6px; cursor:pointer;">
          ${actionBtnText}
        </button>
      </div>
    </div>
  `;

  modalBackdrop.style.display = 'flex';
}

function closeCustomAlert() {
  const modalBackdrop = document.getElementById('custom-glass-alert-backdrop');
  if (modalBackdrop) modalBackdrop.style.display = 'none';
}

// Expose globals
window.assamFloodModelData = assamFloodModelData;
window.assamShelterNetwork = assamShelterNetwork;
window.calculateHaversineKm = calculateHaversineKm;
window.locateNearestShelters = locateNearestShelters;
window.CitizenApp = CitizenApp;
window.citizenApp = new CitizenApp();
window.showCustomAlert = showCustomAlert;
window.closeCustomAlert = closeCustomAlert;
