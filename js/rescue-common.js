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
