# 🎥 AEGIS: 5-Minute YouTube Video Recording Script & SIH Presentation Guide
## Problem Statement SIH26069: National Weather Big Data Analytics Platform
**Organization:** Ministry of Earth Sciences (MoES) / Ministry of Education's Innovation Cell (MIC)  
**Problem Creator:** Sarim Moin  
**Project Name:** AEGIS  
**Target Video Duration:** Exactly 5:00 Minutes (300 Seconds)  
**Primary Operational Sector:** Hyderabad, Telangana (17.38°N, 78.48°E) + National India Weather Grid  

---

## ⏱️ Master 5-Minute Video Recording Timeline (0:00 to 5:00)

```
┌────────────────┬──────────────────────┬──────────────────────────────────────────────────────────────┐
│ Timestamp      │ Screen / URL         │ Key Demonstration Action & Focus                             │
├────────────────┼──────────────────────┼──────────────────────────────────────────────────────────────┤
│ 0:00 - 0:45    │ index.html           │ Problem Statement (SIH26069 • MoES) & National Weather Grid  │
│ 0:45 - 1:45    │ rescue-dashboard.html│ MoES Admin Center: Live Kafka Stream & 4-Way Multi-Filtering │
│ 1:45 - 2:45    │ AI Inspection Modal  │ AI Multimodal Verification: Doppler Radar & Reverse-Image EXIF│
│ 2:45 - 3:45    │ citizen-sos.html     │ Google Auth Sync, 7 MoES Categories, GPS Geotagging & #IMD   │
│ 3:45 - 4:30    │ citizen-dashboard    │ Dynamic Flood Evacuation Routing & Shelter Infrastructure     │
│ 4:30 - 5:00    │ FastAPI /docs & Arch │ Big Data Architecture (Kafka, PostGIS, FastAPI) & Conclusion │
└────────────────┴──────────────────────┴──────────────────────────────────────────────────────────────┘
```

---

## 🎙️ Word-for-Word Video Demonstration Script (Screen-by-Screen)

---

### 📍 [0:00 - 0:45] Scene 1: Executive Introduction & National Weather Big Data Grid

* **Open Screen:** [`index.html`](http://localhost:8085/index.html) in your browser.
* **On-Screen Actions:**
  1. Show the hero title: **"AEGIS: National Weather Big Data Analytics Platform"** with the live pulse badge: *"LIVE • MoES / SIH26069 • Sarim Moin"*.
  2. Pan your mouse smoothly across the interactive **Live National Weather & Hazard Grid** showing active nodes across India (Hyderabad, Mumbai, Delhi NCR, Golaghat, Bikaner, Kolkata, Bengaluru).
  3. Click **"⭐ Hyderabad"** &rarr; smooth map fly-to animation into the Deccan / Musi River basin.
  4. Point to the sensor telemetry pill: *"4,120 Sensors Streaming &bull; Ingesting 312 events/sec"*.
* **What to Say (Spoken Voiceover):**
  > *"Greetings respected evaluators and jury members. We are presenting **AEGIS**, engineered for Smart India Hackathon Problem Statement **SIH26069**: 'National Weather Big Data Analytics Platform' under the **Ministry of Earth Sciences (MoES)** and Innovation Cell.*
  >
  > *During extreme weather events such as cloudbursts, cyclones, and flash floods, authorities face a critical bottleneck: millions of unverified, chaotic social media posts tagged with #IMD flood the internet, mixed with recycled rumors and outdated media.*
  >
  > *AEGIS provides India's first end-to-end Big Data Analytics Platform capable of ingesting over **312 real-time events per second** from social platforms, Doppler weather radars, IoT automatic weather stations, and citizen reports, delivering verified, life-saving intelligence to both MoES command centers and citizens on the ground."*

---

### 📍 [0:45 - 1:45] Scene 2: MoES Admin Command Center & 4-Way Multi-Dimensional Filtering

* **Open Screen:** Switch to Tab 2 or click **"MoES Admin &rarr;"** ([`rescue-dashboard.html`](http://localhost:8085/rescue-dashboard.html)).
* **On-Screen Actions:**
  1. Highlight the top 6 Big Data Real-Time Telemetry Cards:
     * **312 / sec** Ingestion Throughput (Kafka Streaming)
     * **184,290** Records Ingested & Indexed
     * **94.2%** AI Multimodal Verification Accuracy
     * **1,248** Misinformation Reports Quarantined
     * **18,430** Spatiotemporal Duplicates Merged
     * **4,120** Active Doppler Radar & AWS Feeds
  2. Demonstrate the **4-Way Multi-Dimensional Filter Bar** required by the problem statement:
     * **Location Filter:** Select *"Hyderabad, Telangana (Primary Operational Sector)"*.
     * **Event Category Pills:** Click **"🌧️ Rainfall"**, then **"⚡ Thunderstorm"**, then **"🌊 Flooding"** &rarr; show table updating in real time.
     * **Status Filter:** Click **"🚨 Fake"** &rarr; shows quarantined records.
     * Click **"All"** to reset.
  3. Point to the live `#IMD Social Media & Sensor Ingestion Telemetry Stream` showing tweets, timestamps, GPS coordinates, and media attachments.
* **What to Say (Spoken Voiceover):**
  > *"Here on the MoES Admin Command Center, disaster response directors have real-time situational awareness across the entire nation.*
  >
  > *Our problem statement explicitly requires large-scale real-time ingestion and multi-dimensional analysis. AEGIS features an interactive 4-Way Filtering Grid filtering simultaneously across Date & Time, Geographic Region, Verification Status, and all 7 Official MoES Event Categories: Rainfall, Thunderstorm, Flooding, Heatwave, Fog, Dust Storm, and Strong Wind.*
  >
  > *Every second, incoming posts tagged with #IMD are ingested through Apache Kafka partitions, deduplicated with spatiotemporal geohashing, and queued for automated AI verification."*

---

### 📍 [1:45 - 2:45] Scene 3: AI Multimodal Verification & Misinformation Quarantine

* **Open Screen:** Still on [`rescue-dashboard.html`](http://localhost:8085/rescue-dashboard.html).
* **On-Screen Actions:**
  1. In the ingestion table, locate report **`IMD-HYD-904`** (viral tweet claiming: *"Massive 4-foot flash flood submerging Hitec City Cyber Towers under Musi cloudburst"*).
  2. Click the **"Inspect AI"** button.
  3. The **AI Multi-Modal Verification Matrix Modal** pops up. Walk the judges through the 3 verification pillars:
     * **Trust Score:** Highlight the red badge: **`14% Authenticity (HIGH RISK MISINFORMATION)`**.
     * **Pillar 1: NLP Sensationalism Analysis:** Flagged for exaggerated panic phrasing and missing meteorological grounding.
     * **Pillar 2: Reverse-Image & EXIF Forensics:** Matched uploaded image to a known October 2020 archive from an unrelated event.
     * **Pillar 3: Doppler Radar Reflectivity Validation:** Begumpet Doppler Radar at `[17.4474, 78.3762]` detected only **12 dBZ light drizzle**, physically disproving claims of 4-foot deep standing water.
  4. Click the red button: **"Flag as Misinformation / Quarantine"**.
  5. Show the green notification toast: *"Report IMD-HYD-904 quarantined. Public feeds updated."*
* **What to Say (Spoken Voiceover):**
  > *"Disaster misinformation is a matter of life and death. When a viral tweet tagged with #IMD claims 4 feet of floodwater at Cyber Towers, AEGIS deploys a rigorous 3-pillar AI verification model.*
  >
  > *First, natural language processing evaluates linguistic sensationalism. Second, our computer vision pipeline conducts reverse-image forensics, detecting that the attached photo was recycled from a 2020 flood.*
  >
  > *Third, and most importantly, AEGIS performs automated cross-verification against authoritative meteorological sensors. We cross-reference the exact GPS coordinates with the IMD Begumpet Doppler Weather Radar reflectivity. The radar registers only 12 dBZ light drizzle — physically contradicting the claim.*
  >
  > *The post receives a 14% trust score and is quarantined with one click, protecting citizens and emergency personnel from panic and diverted resources."*

---

### 📍 [2:45 - 3:45] Scene 4: Citizen Portal, Google Auth Sync & #IMD Ingestion

* **Open Screen:** Switch to Tab 3: [`citizen-sos.html`](http://localhost:8085/citizen-sos.html) (or click Google Sign-in on [`index.html`](http://localhost:8085/index.html)).
* **On-Screen Actions:**
  1. Show the **"Sign in with Google"** button in the topbar and the authenticated user badge: *"Ravi Das &bull; ravi.das@gmail.com"*.
  2. Briefly switch to [`citizen-profile.html`](http://localhost:8085/citizen-profile.html) to show the **Google Citizen Identity & Auth** banner and verified profile credentials.
  3. Return to [`citizen-sos.html`](http://localhost:8085/citizen-sos.html):
     * Point out the GPS auto-lock: *"Hyderabad, Telangana (Command Sector &bull; 17.38°N, 78.48°E)"*.
     * Point to the **7 MoES Category Selector**: Click **"🌊 Flooding"**.
     * Notice the automated hashtag compilation: `#IMD #HyderabadWeather #Flooding #MusiRiver`.
     * Point out the client-side **Real-Time Credibility Indicator (96.4% Authentic)**.
     * Click **"Submit Weather & Hazard Report (#IMD)"**.
     * Show the ingestion modal confirmation: *"Report ingested into National Weather Big Data Stream"*.
* **What to Say (Spoken Voiceover):**
  > *"Now switching to the Citizen POV. Citizens can authenticate seamlessly using Sign in with Google, synchronizing verified profile credentials across every emergency screen.*
  >
  > *When an on-ground citizen encounters severe weather, they report it directly through this portal. The platform automatically acquires their high-precision GPS coordinates in Hyderabad and presents the 7 official MoES hazard categories.*
  >
  > *As the user selects 'Flooding' and reports rising water levels near Hussain Sagar, our on-device AI calculates a 96.4% credibility score and compiles the standardized #IMD hashtag taxonomy.*
  >
  > *Upon submission, this report is ingested into our FastAPI backend at `/api/v1/weather/ingest` and broadcast to MoES command centers in under 50 milliseconds."*

---

### 📍 [3:45 - 4:30] Scene 5: Tactical Flood Evasion Routing & Shelter Network

* **Open Screen:** Switch to Tab 4: [`citizen-dashboard.html`](http://localhost:8085/citizen-dashboard.html) and open [`sos-route.html`](http://localhost:8085/sos-route.html).
* **On-Screen Actions:**
  1. In [`citizen-dashboard.html`](http://localhost:8085/citizen-dashboard.html), show the live critical alert banner: *"CRITICAL FLOOD RISK: Musi River Basin overflow & Begumpet AWS cloudburst"*.
  2. Show the live map visualization:
     * Red polygon covering the overflowing Musi River and inundated causeway.
     * Blue citizen marker at Khairatabad.
     * Green glowing safe route actively steering around the flood zone.
     * Destination: **GHMC Begumpet Indoor Stadium Emergency Shelter**.
  3. Show [`sos-route.html`](http://localhost:8085/sos-route.html):
     * Shows: *"👤 Ravi Das & Family (5 Members) &bull; Distance: 4.8 km &bull; ETA: 12 Mins"*.
     * Tactical path avoiding high-risk water depth zones.
* **What to Say (Spoken Voiceover):**
  > *"On the Citizen Tactical Dashboard, AEGIS transforms big data into individualized life safety.*
  >
  > *Centered in Hyderabad, our dynamic routing engine computes real-time evacuation corridors using an A* pathfinding algorithm with hazard cost weighting. It detects the Musi River overflow polygon and dynamically routes the citizen and their family around submerged roads.*
  >
  > *It safely guides them to the nearest high-capacity shelter at GHMC Begumpet Indoor Stadium, complete with contact details, capacity tracking, and emergency medical facilities."*

---

### 📍 [4:30 - 5:00] Scene 6: Big Data Architecture & Closing Presentation

* **Open Screen:** Switch to Tab 5: FastAPI Swagger UI ([`http://localhost:8000/docs`](http://localhost:8000/docs)) and [`TECH_STACK.md`](file:///c:/Users/bhuva/Downloads/flood%20detection%20-%20newly%20updated%20and%20aug%20version%20-%20Copy/TECH_STACK.md).
* **On-Screen Actions:**
  1. Scroll through the documented REST API endpoints:
     * `POST /api/v1/weather/ingest` (Big Data Ingestion)
     * `GET /api/v1/weather/metrics` (Throughput & Pipeline Telemetry)
     * `POST /api/v1/weather/ai-verify` (Multimodal AI Verification)
     * `GET /api/v1/weather/export/csv` & `GET /api/v1/weather/export/geojson`
  2. Briefly show the architecture diagram: Ingestion &rarr; Kafka Stream &rarr; Spark Analytics &rarr; PostGIS Database &rarr; AI Inference &rarr; MoES & Citizen Visualizers.
* **What to Say (Spoken Voiceover):**
  > *"Under the hood, AEGIS is built on an enterprise Big Data foundation: an asynchronous FastAPI engine, Apache Kafka event streaming, Apache Spark batch analytics, and a PostGIS spatial database for geospatial querying.*
  >
  > *Our microservice architecture is containerized, cloud-deployable on national infrastructure, and fully satisfies every mandate of Problem Statement SIH26069.*
  >
  > *AEGIS empowers the Ministry of Earth Sciences to turn chaotic weather data into actionable, verified national intelligence that saves lives. Thank you!"*

---

## 🛠️ Step-by-Step Recording Preparation Checklist

### 1. Start Both Servers (Before Recording)
Open two PowerShell terminals:
* **Terminal 1 (Backend API):**
  ```powershell
  cd "c:\Users\bhuva\Downloads\flood detection - newly updated and aug version - Copy"
  python -m uvicorn backend.app.main:app --port 8000 --reload
  ```
* **Terminal 2 (Frontend Web Server):**
  ```powershell
  cd "c:\Users\bhuva\Downloads\flood detection - newly updated and aug version - Copy"
  python server_no_cache.py
  ```

### 2. Arrange Your Browser Tabs in Exact Order
Open your browser in Fullscreen (press `F11` for a clean, professional view) with these 5 tabs:
1. `http://localhost:8085/index.html` (Landing Page & National Grid)
2. `http://localhost:8085/rescue-dashboard.html` (MoES Command Center & AI Verification)
3. `http://localhost:8085/citizen-sos.html` (Citizen Ingestion & Google Auth)
4. `http://localhost:8085/citizen-dashboard.html` (Tactical Routing & Evacuation)
5. `http://localhost:8000/docs` (FastAPI Swagger Interactive Documentation)

### 3. Screen Recording Settings
* **Software:** OBS Studio or Windows Game Bar (`Win + Alt + R`).
* **Resolution:** 1080p (1920 × 1080) at 60 FPS.
* **Audio:** Clear microphone, quiet room. Speak with a steady, confident pace.

### 4. YouTube Upload Details
* **Title:** `AEGIS - National Weather Big Data Analytics Platform | SIH26069 (MoES)`
* **Visibility:** **Unlisted** (or Public).
* **Category:** Science & Technology.
* **Tags:** `SIH2024`, `SIH26069`, `Ministry of Earth Sciences`, `MoES`, `Big Data`, `Weather Analytics`, `FastAPI`, `IMD`.
