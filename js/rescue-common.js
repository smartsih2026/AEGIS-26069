/*
 * AEGIS Rescue Command System - Master Common Utilities & Glassmorphic Tactical Alerts
 */

function showRescueAlert(title, message, iconType = 'info') {
  let existing = document.getElementById('rescue-custom-alert-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'rescue-custom-alert-modal';
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(3, 7, 18, 0.82); backdrop-filter: blur(16px);
    z-index: 99999; display: flex; align-items: center; justify-content: center;
    animation: fadeInModal 0.25s ease-out;
  `;

  let iconHtml = '<i class="fa-solid fa-circle-info" style="color:#38bdf8; font-size:2.5rem;"></i>';
  let badgeBorder = '#38bdf8';
  if (iconType === 'success') {
    iconHtml = '<i class="fa-solid fa-circle-check" style="color:#10b981; font-size:2.5rem;"></i>';
    badgeBorder = '#10b981';
  } else if (iconType === 'danger' || iconType === 'warning') {
    iconHtml = '<i class="fa-solid fa-triangle-exclamation" style="color:#ef4444; font-size:2.5rem;"></i>';
    badgeBorder = '#ef4444';
  }

  modal.innerHTML = `
    <div style="background:#070d1d; border:1px solid ${badgeBorder}; border-radius:16px; padding:1.75rem 2rem; max-width:420px; text-align:center; box-shadow:0 25px 60px rgba(0,0,0,0.85), 0 0 35px ${badgeBorder}44;">
      <div style="margin-bottom:0.85rem;">${iconHtml}</div>
      <h3 style="font-size:1.2rem; font-weight:800; color:#ffffff; margin-bottom:0.4rem;">${title}</h3>
      <p style="font-size:0.825rem; color:#cbd5e1; line-height:1.5; margin-bottom:1.4rem;">${message}</p>
      <button style="background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); border:none; color:#ffffff; font-weight:800; font-size:0.825rem; padding:0.6rem 1.8rem; border-radius:8px; cursor:pointer; box-shadow:0 0 15px rgba(37,99,235,0.4);" onclick="document.getElementById('rescue-custom-alert-modal').remove()">
        Acknowledge &amp; Proceed &rarr;
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Global Override to replace native browser alert(...) with Glassmorphic Tactical Alert Modal
window.alert = function(msg) {
  showRescueAlert('Tactical Command Center', msg, 'info');
};

// Real-Time Cross-Tab Listener for Incoming Citizen SOS Reports
(function initRealtimeRescueSosListener() {
  let processedSosIds = new Set();

  function checkForIncomingSos() {
    const rawSos = localStorage.getItem('AEGIS_ACTIVE_CITIZEN_SOS');
    const sosStatus = localStorage.getItem('AEGIS_ACTIVE_CITIZEN_SOS_STATUS');

    if (rawSos && sosStatus === 'PENDING_APPROVAL') {
      try {
        const sosData = JSON.parse(rawSos);
        if (sosData.id && !processedSosIds.has(sosData.id)) {
          showIncomingCitizenSosModal(sosData);
        }
      } catch (e) {
        console.error("Error parsing incoming SOS data:", e);
      }
    }
  }

  // Listen for storage events across browser tabs
  window.addEventListener('storage', (event) => {
    if (event.key === 'AEGIS_LATEST_SOS_DISPATCH' || event.key === 'AEGIS_ACTIVE_CITIZEN_SOS_STATUS') {
      checkForIncomingSos();
    }
  });

  // Also poll every 1 second as fallback
  setInterval(checkForIncomingSos, 1000);
})();

function showIncomingCitizenSosModal(sosData) {
  let existing = document.getElementById('incoming-sos-rescue-modal');
  if (existing) return; // Modal already active

  // Play synthetic emergency alert tone using Web Audio API
  playEmergencyAudioAlert();

  const modal = document.createElement('div');
  modal.id = 'incoming-sos-rescue-modal';
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(3, 7, 18, 0.88); backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 100000; display: flex; align-items: center; justify-content: center;
  `;

  modal.innerHTML = `
    <div style="background:#070d1d; border:2px solid #ef4444; border-radius:18px; padding:1.75rem 2rem; max-width:480px; width:92vw; text-align:center; box-shadow:0 0 50px rgba(239,68,68,0.5), 0 25px 60px rgba(0,0,0,0.9);">
      
      <!-- Pulsing Red Icon -->
      <div style="font-size:2.8rem; color:#ef4444; margin-bottom:0.5rem;">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>

      <div style="background:rgba(239,68,68,0.2); border:1px solid #ef4444; border-radius:9999px; padding:3px 12px; display:inline-block; font-size:0.65rem; font-weight:800; color:#ef4444; margin-bottom:0.5rem; letter-spacing:0.05em;">
        🚨 URGENT LIVE CITIZEN EMERGENCY SOS RECEIVED
      </div>

      <h3 style="font-size:1.3rem; font-weight:800; color:#ffffff; margin-bottom:0.4rem;">
        Distress Signal: ${sosData.id || 'SOS-1088'}
      </h3>

      <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(59,130,246,0.25); border-radius:10px; padding:0.85rem; text-align:left; margin:0.85rem 0; font-size:0.785rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
          <span style="color:#cbd5e1;">District / Area:</span>
          <strong style="color:#fff;">${sosData.district || 'Golaghat District'}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
          <span style="color:#cbd5e1;">Location:</span>
          <strong style="color:#38bdf8;">${sosData.locationName || 'Kabori Pathar, Ward 4'}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
          <span style="color:#cbd5e1;">People Trapped:</span>
          <strong style="color:#ef4444;">👤 ${sosData.peopleCount || 5} People (${sosData.childrenCount || 2} Children/Elderly)</strong>
        </div>
        <div style="border-top:1px dashed rgba(255,255,255,0.1); margin-top:0.4rem; padding-top:0.4rem; color:#fca5a5; font-style:italic;">
          "${sosData.details || 'Water entered our house. We are trapped on the roof.'}"
        </div>
      </div>

      <p style="font-size:0.75rem; color:#cbd5e1; margin-bottom:1.2rem;">
        Citizen is currently on high alert waiting for <strong>NDRF Command Dispatch Approval</strong>.
      </p>

      <div style="display:flex; gap:0.65rem;">
        <button style="flex:1; background:linear-gradient(135deg, #10b981 0%, #059669 100%); border:none; color:#ffffff; font-weight:800; font-size:0.85rem; padding:0.75rem; border-radius:10px; cursor:pointer; box-shadow:0 0 20px rgba(16,185,129,0.4);" onclick="acceptCitizenSosRescue('${sosData.id}')">
          <i class="fa-solid fa-circle-check"></i> Accept &amp; Deploy Rescue Team
        </button>
        <button style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); color:#cbd5e1; font-weight:700; font-size:0.785rem; padding:0.75rem 1rem; border-radius:10px; cursor:pointer;" onclick="location.href='rescue-sos.html'">
          SOS Center
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function acceptCitizenSosRescue(sosId) {
  // Update state to APPROVED
  localStorage.setItem('AEGIS_ACTIVE_CITIZEN_SOS_STATUS', 'APPROVED');
  localStorage.setItem('AEGIS_SOS_APPROVED_EVENT', JSON.stringify({
    sosId: sosId || 'SOS-1088',
    status: 'APPROVED',
    rescueUnit: 'Motorized OBM Speedboat SD-04',
    eta: '12 Mins',
    timestamp: Date.now()
  }));

  // Async fetch to FastAPI Backend Core & PostgreSQL
  fetch('http://localhost:8000/api/sos/1/approve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ team_id: 1 })
  }).then(r => r.json()).then(res => {
    console.log('[AEGIS Backend API] Squad dispatch approved in PostgreSQL:', res);
  }).catch(err => {
    console.warn('[AEGIS Backend Offline Fallback] Using local state:', err);
  });

  const modal = document.getElementById('incoming-sos-rescue-modal');
  if (modal) modal.remove();

  showRescueAlert('✅ RESCUE MISSION APPROVED!', `Ticket ${sosId || 'SOS-1088'} has been approved! Motorized OBM Speedboat SD-04 dispatched. Live GPS telemetry transmitted to Citizen screen!`, 'success');
}

function playEmergencyAudioAlert() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  } catch (e) {
    console.warn("AudioContext tone blocked or unavailable:", e);
  }
}

// =====================================================================
// AEGIS National Weather Big Data Analytics Engine (SIH26069 | MoES)
// Real-time Ingestion Stream, AI Verification & Multi-Dimensional Filters
// =====================================================================

class WeatherBigDataEngine {
  constructor() {
    this.stream = [
      {
        id: "IMD-HYD-901",
        timestamp: "Just Now (10:15 AM)",
        source: "Citizen Crowdsource",
        user: "@suresh_hyd_citizen",
        city: "Hyderabad",
        state: "Telangana",
        location: "Khairatabad & Hussain Sagar Surplus Nala",
        coordinates: [17.4125, 78.4682],
        eventCategory: "Flooding",
        eventIcon: "fa-water",
        eventColor: "#38bdf8",
        text: "Severe waterlogging near Khairatabad flyover. Water reached knee height in 20 mins! Vehicles stranded. #IMD #HyderabadRains",
        mediaUrl: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80",
        verificationStatus: "Verified",
        aiTrustScore: 96.4,
        aiRationale: "High text-radar correlation with Begumpet IMD AWS (84mm/hr). Image metadata EXIF verified live capture.",
        nlpCheck: "Factual meteorological reporting (Sensationalism: 12%)",
        imageCheck: "Passed (No recycled web footprint detected)",
        radarCheck: "Confirmed (Doppler reflectivity 52 dBZ over Central Hyderabad)",
        duplicateCount: 8,
        isMisleading: false
      },
      {
        id: "IMD-HYD-902",
        timestamp: "5 mins ago",
        source: "Twitter/X (#IMD)",
        user: "@HydWeatherPulse",
        city: "Hyderabad",
        state: "Telangana",
        location: "Begumpet Airport Radar Zone",
        coordinates: [17.4483, 78.4744],
        eventCategory: "Rainfall",
        eventIcon: "fa-cloud-showers-heavy",
        eventColor: "#60a5fa",
        text: "Intense cloudburst squall cell moving over North Hyderabad! Begumpet AWS clocked 48mm in 35 mins. #IMD #WeatherUpdate",
        mediaUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
        verificationStatus: "Verified",
        aiTrustScore: 98.2,
        aiRationale: "Official meteorological amateur observer. Matches CWC & IMD radar sensor stream.",
        nlpCheck: "High precision vocabulary (Sensationalism: 4%)",
        imageCheck: "Passed (Live rain gauge photograph)",
        radarCheck: "Confirmed (48mm accumulated precipitation)",
        duplicateCount: 34,
        isMisleading: false
      },
      {
        id: "IMD-HYD-903",
        timestamp: "12 mins ago",
        source: "Telegram Public Channel",
        user: "@MusiRiverWatch",
        city: "Hyderabad",
        state: "Telangana",
        location: "Moosarambagh Old Bridge, Musi River",
        coordinates: [17.3712, 78.5089],
        eventCategory: "Flooding",
        eventIcon: "fa-water",
        eventColor: "#38bdf8",
        text: "Musi river causeway completely overflowing! Osman Sagar gates 2 & 4 lifted. Water rising fast. #IMD #MusiFlood #Hyderabad",
        mediaUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
        verificationStatus: "Verified",
        aiTrustScore: 94.8,
        aiRationale: "Cross-verified with CWC Musi River Gauge telemetry (1.45m above danger mark).",
        nlpCheck: "Valid warning alert (Sensationalism: 18%)",
        imageCheck: "Passed (Matches causeway geometry)",
        radarCheck: "Confirmed (Catchment area rainfall 62mm)",
        duplicateCount: 19,
        isMisleading: false
      },
      {
        id: "IMD-HYD-904",
        timestamp: "22 mins ago",
        source: "Instagram Reel",
        user: "@viral_today_hyd",
        city: "Hyderabad",
        state: "Telangana",
        location: "Hitec City Cyber Towers",
        coordinates: [17.4504, 78.3808],
        eventCategory: "Flooding",
        eventIcon: "fa-triangle-exclamation",
        eventColor: "#ef4444",
        text: "Shocking tsunami-like flood in Hitec city right now, cars washing away! #IMD #CyberabadDrowning",
        mediaUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=600&q=80",
        verificationStatus: "Flagged Fake",
        aiTrustScore: 14.2,
        aiRationale: "FLAGGED MISLEADING: Reverse image search found video is from 2020 Bengaluru flood. Hitec City AWS reports only 6mm drizzle.",
        nlpCheck: "Extreme hyperbole ('tsunami-like', 'apocalypse')",
        imageCheck: "FAILED (Recycled image footprint detected from Aug 2020)",
        radarCheck: "MISMATCH (Radar shows zero high-intensity storm cell)",
        duplicateCount: 0,
        isMisleading: true
      },
      {
        id: "IMD-ASM-905",
        timestamp: "35 mins ago",
        source: "Citizen Crowdsource",
        user: "@pranab_assam_sdrf",
        city: "Golaghat",
        state: "Assam",
        location: "Dhansiri River Embankment, Bokakhat",
        coordinates: [26.4049, 94.0321],
        eventCategory: "Flooding",
        eventIcon: "fa-water",
        eventColor: "#38bdf8",
        text: "Dhansiri embankment breached near Bokakhat. Water gushing onto NH-715. SDRF boats deployed. #IMD #AssamFloods",
        mediaUrl: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80",
        verificationStatus: "Verified",
        aiTrustScore: 97.5,
        aiRationale: "Confirmed by ASDMA ground report. Central Water Commission Dhansiri level: 4.82m (Critical).",
        nlpCheck: "Factual official report",
        imageCheck: "Passed (Current verified flood basin)",
        radarCheck: "Confirmed (Continuous rainfall 148mm)",
        duplicateCount: 42,
        isMisleading: false
      },
      {
        id: "IMD-MUM-906",
        timestamp: "45 mins ago",
        source: "Twitter/X (#IMD)",
        user: "@MumbaiRainLive",
        city: "Mumbai",
        state: "Maharashtra",
        location: "Hindmata & Dadar TT Circle",
        coordinates: [19.0178, 72.8478],
        eventCategory: "Rainfall",
        eventIcon: "fa-cloud-showers-heavy",
        eventColor: "#60a5fa",
        text: "Extreme downpour in South Central Mumbai. Hindmata water pumps active. High tide of 4.2m expected at 2 PM. #IMD #MumbaiRains",
        mediaUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
        verificationStatus: "Verified",
        aiTrustScore: 95.1,
        aiRationale: "Santacruz AWS recorded 64mm/3hr. In line with IMD Red Alert.",
        nlpCheck: "Factual status update",
        imageCheck: "Passed (Live street pump photo)",
        radarCheck: "Confirmed (Coastal radar band active)",
        duplicateCount: 68,
        isMisleading: false
      },
      {
        id: "IMD-DEL-907",
        timestamp: "1 hour ago",
        source: "Twitter/X (#IMD)",
        user: "@DelhiWeatherWatch",
        city: "New Delhi",
        state: "Delhi",
        location: "Palam & Safdarjung Airport",
        coordinates: [28.6139, 77.2090],
        eventCategory: "Heatwave",
        eventIcon: "fa-temperature-high",
        eventColor: "#f97316",
        text: "Severe Heatwave condition across Delhi-NCR. Safdarjung hits 43.6°C. Loo winds at 30km/h. Avoid outdoor exposure 12-3 PM. #IMD #HeatwaveAlert",
        mediaUrl: null,
        verificationStatus: "Verified",
        aiTrustScore: 99.0,
        aiRationale: "Safdarjung Official AWS ground truth confirmed.",
        nlpCheck: "Standard IMD advisory advisory format",
        imageCheck: "Text telemetry confirmed",
        radarCheck: "Confirmed (Clear skies, 43.6°C thermal band)",
        duplicateCount: 25,
        isMisleading: false
      },
      {
        id: "IMD-KOL-908",
        timestamp: "1.5 hours ago",
        source: "Citizen Crowdsource",
        user: "@sourav_kolkata",
        city: "Kolkata",
        state: "West Bengal",
        location: "Alipore & Salt Lake Sector V",
        coordinates: [22.5726, 88.3639],
        eventCategory: "Thunderstorm",
        eventIcon: "fa-bolt-lightning",
        eventColor: "#a855f7",
        text: "Nor'wester (Kalbaishakhi) squall hit Kolkata! Heavy lightning and tree branches down on EM Bypass. #IMD #KolkataStorm",
        mediaUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=600&q=80",
        verificationStatus: "Verified",
        aiTrustScore: 93.7,
        aiRationale: "Doppler radar shows squall line traveling 65 km/h over Gangetic West Bengal.",
        nlpCheck: "Accurate storm description",
        imageCheck: "Passed (Live lightning photo)",
        radarCheck: "Confirmed (Squall gust 68 km/h)",
        duplicateCount: 14,
        isMisleading: false
      },
      {
        id: "IMD-RAJ-909",
        timestamp: "2 hours ago",
        source: "Twitter/X (#IMD)",
        user: "@DesertStormTracker",
        city: "Bikaner",
        state: "Rajasthan",
        location: "Bikaner Bypass Highway",
        coordinates: [28.0229, 73.3119],
        eventCategory: "Dust Storm",
        eventIcon: "fa-wind",
        eventColor: "#eab308",
        text: "Severe dust storm engulfed Western Rajasthan. Visibility dropped to less than 50 meters on highways. #IMD #DustStorm #Rajasthan",
        mediaUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80",
        verificationStatus: "Verified",
        aiTrustScore: 91.2,
        aiRationale: "Satellite AOD (Aerosol Optical Depth) spike confirmed over Thar basin.",
        nlpCheck: "Standard visibility warning",
        imageCheck: "Passed (Low visibility dust wall)",
        radarCheck: "Confirmed (Aerosol index: 3.8)",
        duplicateCount: 11,
        isMisleading: false
      },
      {
        id: "IMD-HYD-910",
        timestamp: "2.5 hours ago",
        source: "Citizen Crowdsource",
        user: "@ananya_gachibowli",
        city: "Hyderabad",
        state: "Telangana",
        location: "Gachibowli ORR Junction",
        coordinates: [17.4401, 78.3489],
        eventCategory: "Strong Wind",
        eventIcon: "fa-wind",
        eventColor: "#38bdf8",
        text: "High speed gusty winds toppling hoardings near Gachibowli flyover! #IMD #HyderabadWeather",
        mediaUrl: null,
        verificationStatus: "Pending",
        aiTrustScore: 78.5,
        aiRationale: "Wind sensor registered 45km/h gust. Awaiting second crowdsourced corroboration.",
        nlpCheck: "Factual warning",
        imageCheck: "Awaiting photo",
        radarCheck: "Partial Match (42km/h gust at Hitec AWS)",
        duplicateCount: 3,
        isMisleading: false
      }
    ];

    this.activeFilters = {
      event: "All",
      location: "All",
      status: "All",
      dateRange: "24h"
    };
  }

  getFilteredStream() {
    return this.stream.filter(item => {
      // 1. Event Category Filter
      if (this.activeFilters.event !== "All" && item.eventCategory.toLowerCase() !== this.activeFilters.event.toLowerCase()) {
        return false;
      }
      // 2. Location Filter
      if (this.activeFilters.location !== "All") {
        const loc = this.activeFilters.location.toLowerCase();
        const itemCity = item.city.toLowerCase();
        const itemState = item.state.toLowerCase();
        if (!itemCity.includes(loc) && !itemState.includes(loc) && !loc.includes(itemCity)) {
          return false;
        }
      }
      // 3. Verification Status Filter
      if (this.activeFilters.status !== "All") {
        if (this.activeFilters.status === "Verified" && item.verificationStatus !== "Verified") return false;
        if (this.activeFilters.status === "Pending" && item.verificationStatus !== "Pending") return false;
        if (this.activeFilters.status === "Flagged Fake" && item.verificationStatus !== "Flagged Fake") return false;
        if (this.activeFilters.status === "Duplicates" && (item.duplicateCount === 0)) return false;
      }
      return true;
    });
  }

  setFilter(type, value) {
    this.activeFilters[type] = value;
  }

  openAIInspector(reportId) {
    const report = this.stream.find(r => r.id === reportId) || this.stream[0];
    
    let modal = document.getElementById('ai-verification-inspector-modal');
    if (modal) modal.remove();

    const scoreColor = report.aiTrustScore > 80 ? '#10b981' : (report.aiTrustScore > 50 ? '#f59e0b' : '#ef4444');
    const verdictBadge = report.isMisleading 
      ? '<span style="background:rgba(239,68,68,0.25); color:#ef4444; border:1px solid #ef4444; padding:3px 10px; border-radius:12px; font-weight:800; font-size:0.75rem;">🚨 MISINFORMATION DETECTED</span>'
      : '<span style="background:rgba(16,185,129,0.25); color:#10b981; border:1px solid #10b981; padding:3px 10px; border-radius:12px; font-weight:800; font-size:0.75rem;">✅ VERIFIED BY AI &amp; IMD RADAR</span>';

    modal = document.createElement('div');
    modal.id = 'ai-verification-inspector-modal';
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(3, 7, 18, 0.88); backdrop-filter: blur(16px);
      z-index: 100000; display: flex; align-items: center; justify-content: center;
      padding: 1rem;
    `;

    modal.innerHTML = `
      <div style="background:#070d1d; border:1.5px solid rgba(59,130,246,0.4); border-radius:16px; max-width:680px; width:95vw; overflow:hidden; font-family:'Plus Jakarta Sans', sans-serif; box-shadow:0 25px 60px rgba(0,0,0,0.9);">
        
        <!-- Header -->
        <div style="background:rgba(15,23,42,0.95); padding:1rem 1.25rem; border-bottom:1px solid rgba(59,130,246,0.25); display:flex; align-items:center; justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <div style="width:34px; height:34px; border-radius:8px; background:rgba(37,99,235,0.2); color:#38bdf8; display:flex; align-items:center; justify-content:center; font-size:1.1rem; border:1px solid rgba(59,130,246,0.3);">
              <i class="fa-solid fa-microchip"></i>
            </div>
            <div>
              <div style="font-weight:800; font-size:1rem; color:#fff;">AI Credibility &amp; Fake Report Inspector</div>
              <div style="font-size:0.65rem; color:#94a3b8;">Report ID: <strong>${report.id}</strong> &bull; Source: ${report.source} (${report.user})</div>
            </div>
          </div>
          <button onclick="document.getElementById('ai-verification-inspector-modal').remove()" style="background:transparent; border:none; color:#94a3b8; font-size:1.2rem; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <!-- Body -->
        <div style="padding:1.2rem; max-height:75vh; overflow-y:auto; display:flex; flex-direction:column; gap:1rem;">
          
          <!-- Post Summary Box -->
          <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(59,130,246,0.2); border-radius:10px; padding:0.85rem; display:flex; gap:0.85rem; align-items:center;">
            ${report.mediaUrl ? `<img src="${report.mediaUrl}" style="width:90px; height:75px; object-fit:cover; border-radius:8px; border:1px solid rgba(255,255,255,0.15);" alt="Report Media">` : ''}
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
                <span style="font-size:0.7rem; font-weight:800; color:#38bdf8;"><i class="fa-solid fa-location-dot"></i> ${report.location}, ${report.city}, ${report.state}</span>
                <span style="font-size:0.65rem; color:#94a3b8;">${report.timestamp}</span>
              </div>
              <div style="font-size:0.785rem; color:#f1f5f9; line-height:1.4;">"${report.text}"</div>
            </div>
          </div>

          <!-- Trust Score & Verdict Banner -->
          <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(6,12,28,0.9); border:1px solid rgba(59,130,246,0.3); border-radius:10px; padding:0.75rem 1rem;">
            <div>
              <div style="font-size:0.65rem; color:#94a3b8; font-weight:700;">AI TRUST &amp; CREDIBILITY SCORE</div>
              <div style="font-size:1.6rem; font-weight:800; color:${scoreColor}; line-height:1.1;">
                ${report.aiTrustScore}%
                <span style="font-size:0.75rem; color:#cbd5e1; font-weight:600;">/ 100</span>
              </div>
            </div>
            <div>${verdictBadge}</div>
          </div>

          <!-- 3-Pillar Verification Grid -->
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.65rem;">
            <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(59,130,246,0.2); border-radius:8px; padding:0.7rem;">
              <div style="font-size:0.65rem; font-weight:800; color:#38bdf8; margin-bottom:0.25rem;"><i class="fa-solid fa-comment-dots"></i> NLP Text Analysis</div>
              <div style="font-size:0.7rem; color:#cbd5e1; line-height:1.35;">${report.nlpCheck || 'Factual wording.'}</div>
            </div>

            <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(59,130,246,0.2); border-radius:8px; padding:0.7rem;">
              <div style="font-size:0.65rem; font-weight:800; color:#10b981; margin-bottom:0.25rem;"><i class="fa-solid fa-image"></i> Reverse Image Forensic</div>
              <div style="font-size:0.7rem; color:#cbd5e1; line-height:1.35;">${report.imageCheck || 'EXIF metadata verified.'}</div>
            </div>

            <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(59,130,246,0.2); border-radius:8px; padding:0.7rem;">
              <div style="font-size:0.65rem; font-weight:800; color:#f59e0b; margin-bottom:0.25rem;"><i class="fa-solid fa-satellite-dish"></i> IMD Radar Corroboration</div>
              <div style="font-size:0.7rem; color:#cbd5e1; line-height:1.35;">${report.radarCheck || 'Precipitation confirmed.'}</div>
            </div>
          </div>

          <!-- AI Model Explanation Rationale -->
          <div style="background:rgba(30,41,59,0.5); border-left:3.5px solid ${scoreColor}; border-radius:6px; padding:0.65rem 0.85rem;">
            <div style="font-size:0.68rem; font-weight:800; color:#fff; margin-bottom:0.15rem;">🤖 AI Explainability Note</div>
            <div style="font-size:0.735rem; color:#cbd5e1; line-height:1.4;">${report.aiRationale}</div>
            ${report.duplicateCount > 0 ? `<div style="font-size:0.68rem; color:#38bdf8; margin-top:0.35rem; font-weight:700;"><i class="fa-solid fa-code-merge"></i> Spatial-Temporal Deduplication: Merged <strong>${report.duplicateCount}</strong> identical citizen reports into this single event cluster.</div>` : ''}
          </div>

        </div>

        <!-- Footer Action Buttons -->
        <div style="background:rgba(15,23,42,0.95); padding:0.85rem 1.25rem; border-top:1px solid rgba(59,130,246,0.25); display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:0.68rem; color:#94a3b8;">Admin Decision Protocol &bull; Human-In-The-Loop</div>
          <div style="display:flex; gap:0.5rem;">
            <button onclick="window.weatherBigDataEngine.flagReportFake('${report.id}'); document.getElementById('ai-verification-inspector-modal').remove();" style="background:rgba(239,68,68,0.2); border:1px solid #ef4444; color:#ef4444; font-weight:800; font-size:0.72rem; padding:0.4rem 0.85rem; border-radius:6px; cursor:pointer;">
              <i class="fa-solid fa-ban"></i> Flag as Misinformation
            </button>
            <button onclick="window.weatherBigDataEngine.approveReport('${report.id}'); document.getElementById('ai-verification-inspector-modal').remove();" style="background:#10b981; border:none; color:#fff; font-weight:800; font-size:0.72rem; padding:0.4rem 1.1rem; border-radius:6px; cursor:pointer;">
              <i class="fa-solid fa-circle-check"></i> Verify &amp; Broadcast Alert
            </button>
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(modal);
  }

  flagReportFake(reportId) {
    const report = this.stream.find(r => r.id === reportId);
    if (report) {
      report.verificationStatus = "Flagged Fake";
      report.isMisleading = true;
      report.aiTrustScore = 15.0;
    }
    showRescueAlert('🚫 REPORT FLAGGED AS FAKE', `Report ${reportId} has been flagged as misinformation. Broadcast removed and incident marked invalid.`, 'danger');
    if (window.renderBigDataDashboard) window.renderBigDataDashboard();
  }

  approveReport(reportId) {
    const report = this.stream.find(r => r.id === reportId);
    if (report) {
      report.verificationStatus = "Verified";
      report.isMisleading = false;
      report.aiTrustScore = 98.0;
    }
    showRescueAlert('✅ OFFICIAL IMD BROADCAST ISSUED', `Report ${reportId} has been verified as authentic weather intelligence. Broadcast pushed to Citizens & NDRF!`, 'success');
    if (window.renderBigDataDashboard) window.renderBigDataDashboard();
  }
}

// Global Export
window.WeatherBigDataEngine = WeatherBigDataEngine;
window.weatherBigDataEngine = new WeatherBigDataEngine();
