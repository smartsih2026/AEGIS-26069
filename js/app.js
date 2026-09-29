/* 
 * AEGIS Flood Emergency Platform
 * Master Landing Page Controller & Interactive Map Initialization (index.html)
 */

class AegisApp {
  constructor() {
    this.currentUser = {
      role: 'citizen',
      name: 'Ravi Das',
      email: 'ravi.das@gmail.com',
      location: 'Golaghat'
    };
    this.activeAuthRole = 'citizen';
    this.landingMap = null;
    this.baseLayers = {};
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initLandingMap();
    });
  }

  // Landing Page Interactive Map Initialization (National India Weather Big Data Grid)
  initLandingMap() {
    const mapElement = document.getElementById('landing-map');
    if (!mapElement) return;

    // Center on India National View
    const indiaCenter = [20.5937, 78.9629];
    this.landingMap = L.map('landing-map', {
      center: [17.3850, 78.4867], // Default focused on Hyderabad (Primary Sector)
      zoom: 6.5,
      minZoom: 4.2,
      maxZoom: 16,
      zoomControl: true
    });

    // Dark View (Default on Landing Page)
    const darkTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      className: 'dark-tiles',
      attribution: '&copy; Esri World Street Map | MoES Big Data',
      maxZoom: 18
    });

    // Default Street Lanes View
    const streetTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; Esri World Street Map',
      maxZoom: 18
    });

    // Satellite View (Esri World Imagery)
    const satelliteTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; Esri World Imagery',
      maxZoom: 18
    });

    // Default to Dark View on Landing Page
    darkTile.addTo(this.landingMap);

    this.baseLayers = {
      "🌙 Dark View": darkTile,
      "🗺️ Default Street View": streetTile,
      "🛰️ Satellite View": satelliteTile
    };

    L.control.layers(this.baseLayers, null, { position: 'topright', collapsed: true }).addTo(this.landingMap);

    // Heatmap Data Points across India National Weather Grid
    const heatData = [
      [17.3850, 78.4867, 1.0],  // Hyderabad (Critical Flood / Musi)
      [19.0760, 72.8777, 0.9],  // Mumbai (Extreme Rain)
      [28.6139, 77.2090, 0.85], // Delhi NCR (Dense Fog)
      [28.0229, 73.3119, 0.8],  // Rajasthan (Heatwave 44.8C)
      [26.4049, 94.0321, 0.95], // Golaghat Assam (Brahmaputra Flood)
      [22.5726, 88.3639, 0.75], // Kolkata (Thunderstorm)
      [12.9716, 77.5946, 0.65], // Bengaluru (Waterlogging)
      [13.0827, 80.2707, 0.6]   // Chennai (Wind)
    ];

    if (typeof L.heatLayer === 'function') {
      L.heatLayer(heatData, {
        radius: 32,
        blur: 20,
        maxZoom: 10,
        gradient: {
          0.2: '#38bdf8',
          0.4: '#eab308',
          0.7: '#f97316',
          1.0: '#ef4444'
        }
      }).addTo(this.landingMap);
    }

    // National Weather Grid Hazard Points
    const nationalHazards = [
      { name: 'Hyderabad, Telangana (Command Grid)', lat: 17.3850, lng: 78.4867, category: 'Flooding', risk: 'Critical', color: '#ef4444', desc: 'Musi River overflow, 114mm/h flash cloudburst. Begumpet Radar active.', radius: 35000, isPrimary: true },
      { name: 'Mumbai, Maharashtra', lat: 19.0760, lng: 72.8777, category: 'Rainfall', risk: 'High', color: '#f97316', desc: '94mm/h extreme downpour + 4.2m Arabian Sea high tide.', radius: 28000 },
      { name: 'Delhi NCR', lat: 28.6139, lng: 77.2090, category: 'Fog', risk: 'High', color: '#f97316', desc: 'Dense radiation smog, visibility < 150m, IGI Airport CAT-III.', radius: 25000 },
      { name: 'Golaghat, Assam', lat: 26.4049, lng: 94.0321, category: 'Flooding', risk: 'Critical', color: '#ef4444', desc: 'Dhansiri & Brahmaputra basin 1.8m above danger level.', radius: 28000 },
      { name: 'Bikaner, Rajasthan', lat: 28.0229, lng: 73.3119, category: 'Heatwave', risk: 'Critical', color: '#ef4444', desc: '44.8°C severe Loo heatwave warning. MoES Orange alert.', radius: 26000 },
      { name: 'Kolkata, West Bengal', lat: 22.5726, lng: 88.3639, category: 'Thunderstorm', risk: 'Moderate', color: '#eab308', desc: 'Norwester Kalbaishakhi squall (78 km/h wind gusts).', radius: 22000 },
      { name: 'Bengaluru, Karnataka', lat: 12.9716, lng: 77.5946, category: 'Rainfall', risk: 'Moderate', color: '#eab308', desc: 'Outer Ring Road Bellandur waterlogging reported via #IMD.', radius: 20000 }
    ];

    nationalHazards.forEach(d => {
      const circle = L.circle([d.lat, d.lng], {
        color: d.color,
        fillColor: d.color,
        fillOpacity: 0.22,
        weight: d.isPrimary ? 2.5 : 1.5,
        radius: d.radius
      }).addTo(this.landingMap);

      const pinHtml = `
        <div style="background:${d.color}; color:#fff; width:${d.isPrimary ? 28 : 22}px; height:${d.isPrimary ? 28 : 22}px; border-radius:50%; border:2px solid #fff; display:flex; align-items:center; justify-content:center; box-shadow:0 0 16px ${d.color}; font-size:${d.isPrimary ? 12 : 10}px; font-weight:800; animation:${d.isPrimary ? 'pulse 1.8s infinite' : 'none'};">
          ${d.isPrimary ? '⭐' : '!'}
        </div>
      `;
      const customIcon = L.divIcon({
        className: 'custom-map-icon',
        html: pinHtml,
        iconSize: [d.isPrimary ? 28 : 22, d.isPrimary ? 28 : 22]
      });

      const marker = L.marker([d.lat, d.lng], { icon: customIcon }).addTo(this.landingMap);

      marker.bindTooltip(`<strong>${d.name}</strong>`, {
        permanent: d.isPrimary,
        direction: 'top',
        className: 'map-district-label'
      });

      const badgeClass = d.risk === 'Critical' ? 'badge-danger' : 'badge-warning';
      const popupContent = `
        <div style="padding: 6px 8px; font-family: 'Plus Jakarta Sans', sans-serif; min-width: 200px;">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.6rem; margin-bottom:0.35rem;">
            <div style="font-weight:800; font-size:0.85rem; color:#ffffff;">📍 ${d.name}</div>
            <span class="badge ${badgeClass}" style="font-size:0.6rem; padding:0.15rem 0.45rem;">${d.risk}</span>
          </div>
          <div style="font-size:0.75rem; color:#f8fafc; margin-bottom: 3px;"><strong>Event Category:</strong> ${d.category}</div>
          <div style="font-size:0.72rem; color:#cbd5e1; line-height:1.4;">${d.desc}</div>
          <div style="margin-top:6px; font-size:0.68rem; color:#38bdf8;">Tagged with #IMD • Real-time Big Data Stream</div>
        </div>
      `;
      marker.bindPopup(popupContent);
      circle.bindPopup(popupContent);

      if (d.isPrimary) {
        setTimeout(() => marker.openPopup(), 1200);
      }
    });

    setTimeout(() => {
      if (this.landingMap) {
        this.landingMap.invalidateSize();
      }
    }, 400);
  }

  flyToHyderabad() {
    if (!this.landingMap) return;
    this.landingMap.flyTo([17.3850, 78.4867], 11.5, { duration: 1.5 });
  }

  flyToIndia() {
    if (!this.landingMap) return;
    this.landingMap.flyTo([20.5937, 78.9629], 5.0, { duration: 1.5 });
  }

  locateUserLive() {
    if (!this.landingMap) return;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userLat = pos.coords.latitude;
          const userLng = pos.coords.longitude;
          const userPin = L.marker([userLat, userLng], {
            icon: L.divIcon({
              className: 'user-live-gps-pin',
              html: `<div style="background:#2563eb; width:22px; height:22px; border-radius:50%; border:3px solid #fff; box-shadow:0 0 15px #3b82f6;"></div>`,
              iconSize: [22, 22]
            })
          }).addTo(this.landingMap);
          userPin.bindPopup(`<strong>📍 Your Detected GPS Location</strong><br>Accurate within ${Math.round(pos.coords.accuracy)}m<br><span style="color:#10b981;">Connected to AEGIS Weather Stream</span>`).openPopup();
          this.landingMap.flyTo([userLat, userLng], 12.5, { duration: 1.5 });
        },
        (err) => {
          console.warn("GPS access denied or unavailable, defaulting to Hyderabad sector:", err);
          this.flyToHyderabad();
          alert("📍 GPS access unavailable or blocked. Centering on Primary Sector: Hyderabad, Telangana (17.38°N, 78.48°E).");
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      this.flyToHyderabad();
    }
  }

  // Navigation Page Switching
  showPage(pageId) {
    if (pageId === 'citizen-dashboard') {
      window.location.href = 'citizen-dashboard.html';
      return;
    }
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.remove('hidden');
    }
  }

  // Authentication Modal Handler (Citizens / Rescue Team)
  openAuthModal(defaultRole = 'citizen') {
    const modal = document.getElementById('auth-modal-backdrop');
    if (modal) {
      modal.classList.add('open');
      this.switchAuthTab(defaultRole);
    }
  }

  closeAuthModal() {
    const modal = document.getElementById('auth-modal-backdrop');
    if (modal) {
      modal.classList.remove('open');
    }
  }

  switchAuthTab(role) {
    this.activeAuthRole = role;
    const tabCitizen = document.getElementById('tab-citizen');
    const tabRescue = document.getElementById('tab-rescue');
    const formCitizen = document.getElementById('citizen-auth-form');
    const formRescue = document.getElementById('rescue-auth-form');

    if (role === 'citizen') {
      if (tabCitizen) tabCitizen.classList.add('active');
      if (tabRescue) tabRescue.classList.remove('active');
      if (formCitizen) formCitizen.classList.remove('hidden');
      if (formRescue) formRescue.classList.add('hidden');
    } else {
      if (tabRescue) tabRescue.classList.add('active');
      if (tabCitizen) tabCitizen.classList.remove('active');
      if (formRescue) formRescue.classList.remove('hidden');
      if (formCitizen) formCitizen.classList.add('hidden');
    }
  }

  handleCitizenAuth(e) {
    if (e) e.preventDefault();
    this.closeAuthModal();
    window.location.href = 'citizen-dashboard.html';
  }

  handleGoogleAuth() {
    this.closeAuthModal();
    window.location.href = 'citizen-dashboard.html';
  }

  handleRescueAuth(e) {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }
    this.closeAuthModal();
    window.location.href = 'rescue-dashboard.html';
    return false;
  }

  logout() {
    window.location.href = 'index.html';
  }
}

// Global App Instance
window.app = new AegisApp();
