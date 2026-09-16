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

  // Landing Page Interactive Map Initialization (With Collapsed Layer Control)
  initLandingMap() {
    const mapElement = document.getElementById('landing-map');
    if (!mapElement) return;

    // Center on Assam with Minimized All-Inclusive View (Zoom ~7.2)
    const assamCenter = [26.2500, 92.8000];
    this.landingMap = L.map('landing-map', {
      center: assamCenter,
      zoom: 7.2,
      minZoom: 6.5,
      maxZoom: 14,
      zoomControl: true
    });

    // Assam Bounding Box Lock
    const assamBounds = L.latLngBounds(
      L.latLng(23.8000, 89.2000), // Southwest
      L.latLng(28.4000, 96.5000)  // Northeast
    );
    this.landingMap.setMaxBounds(assamBounds);

    // Dark View (Default on Landing Page)
    const darkTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      className: 'dark-tiles',
      attribution: '&copy; Esri World Street Map',
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

    // Base Layers Control Object for Layer Switcher
    this.baseLayers = {
      "🌙 Dark View": darkTile,
      "🗺️ Default Street View": streetTile,
      "🛰️ Satellite View": satelliteTile
    };

    // Collapsed Layer Switcher Control in Top-Right (Hidden until clicked)
    L.control.layers(this.baseLayers, null, { position: 'topright', collapsed: true }).addTo(this.landingMap);

    // 2. Heatmap Data Points across Assam
    const heatData = [
      [26.4049, 94.0321, 1.0], // Golaghat (Critical)
      [26.7578, 94.2080, 0.85], // Jorhat
      [27.4845, 94.9019, 0.8], // Dibrugarh
      [26.9826, 94.6425, 0.8], // Sivasagar
      [27.4844, 94.5949, 0.75], // Dhemaji
      [27.2374, 94.0954, 0.75], // Lakhimpur
      [26.3471, 92.6841, 0.6], // Nagaon
      [26.4497, 92.0294, 0.55], // Darrang
      [26.3184, 90.9818, 0.5], // Barpeta
      [26.1445, 91.7362, 0.45], // Guwahati
      [26.1784, 90.6227, 0.4]  // Goalpara
    ];

    if (typeof L.heatLayer === 'function') {
      L.heatLayer(heatData, {
        radius: 28,
        blur: 18,
        maxZoom: 10,
        gradient: {
          0.2: '#38bdf8',
          0.4: '#eab308',
          0.7: '#f97316',
          1.0: '#ef4444'
        }
      }).addTo(this.landingMap);
    }

    // 3. Transparent Risk Circles & Clean District Markers for Assam
    const districtRisks = [
      { name: 'Golaghat', lat: 26.4049, lng: 94.0321, risk: 'Critical', color: '#ef4444', radius: 22000 },
      { name: 'Jorhat', lat: 26.7578, lng: 94.2080, risk: 'High', color: '#f97316', radius: 18000 },
      { name: 'Dibrugarh', lat: 27.4845, lng: 94.9019, risk: 'High', color: '#f97316', radius: 17000 },
      { name: 'Sivasagar', lat: 26.9826, lng: 94.6425, risk: 'High', color: '#f97316', radius: 16000 },
      { name: 'Dhemaji', lat: 27.4844, lng: 94.5949, risk: 'High', color: '#f97316', radius: 16000 },
      { name: 'Lakhimpur', lat: 27.2374, lng: 94.0954, risk: 'High', color: '#f97316', radius: 16000 },
      { name: 'Nagaon', lat: 26.3471, lng: 92.6841, risk: 'Moderate', color: '#eab308', radius: 15000 },
      { name: 'Darrang', lat: 26.4497, lng: 92.0294, risk: 'Moderate', color: '#eab308', radius: 14000 },
      { name: 'Morigaon', lat: 26.2573, lng: 92.3377, risk: 'Moderate', color: '#eab308', radius: 13000 },
      { name: 'Guwahati (Kamrup Metro)', lat: 26.1445, lng: 91.7362, risk: 'Low', color: '#38bdf8', radius: 12000 },
      { name: 'Dima Hasao', lat: 25.4004, lng: 93.0752, risk: 'Low', color: '#38bdf8', radius: 14000 },
      { name: 'Karimganj', lat: 24.8649, lng: 92.3592, risk: 'Low', color: '#38bdf8', radius: 12000 }
    ];

    districtRisks.forEach(d => {
      // Translucent risk circle
      const circle = L.circle([d.lat, d.lng], {
        color: d.color,
        fillColor: d.color,
        fillOpacity: 0.22,
        weight: 1.5,
        radius: d.radius
      }).addTo(this.landingMap);

      // Custom Glowing Pin Marker
      const pinHtml = `
        <div style="background:${d.color}; color:#fff; width:22px; height:22px; border-radius:50%; border:2px solid #fff; display:flex; align-items:center; justify-content:center; box-shadow:0 0 12px ${d.color}; font-size:10px; font-weight:800;">
          ${d.risk === 'Critical' ? '!' : '✓'}
        </div>
      `;
      const customIcon = L.divIcon({
        className: 'custom-map-icon',
        html: pinHtml,
        iconSize: [22, 22]
      });

      const marker = L.marker([d.lat, d.lng], { icon: customIcon }).addTo(this.landingMap);

      // Tooltip: ONLY Place Name (Clean & Clutter-Free!)
      marker.bindTooltip(`<strong>${d.name}</strong>`, {
        permanent: true,
        direction: 'top',
        className: 'map-district-label'
      });

      // Rich Glassmorphic Popup on CLICK
      const badgeClass = d.risk === 'Critical' ? 'badge-danger' : d.risk === 'High' ? 'badge-warning' : 'badge-yellow';
      const popupContent = `
        <div style="padding: 6px 8px; font-family: 'Plus Jakarta Sans', sans-serif;">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.6rem; margin-bottom:0.35rem;">
            <div style="font-weight:800; font-size:0.85rem; color:#ffffff;">📍 ${d.name}</div>
            <span class="badge ${badgeClass}" style="font-size:0.6rem; padding:0.15rem 0.45rem;">${d.risk}</span>
          </div>
          <div style="font-size:0.725rem; color:#cbd5e1; line-height:1.4;">
            Status: <strong style="color:${d.color};">${d.risk} Risk Zone</strong><br>
            Monitored by ASDMA & IMD Assam
          </div>
        </div>
      `;
      marker.bindPopup(popupContent);
      circle.bindPopup(popupContent);
    });

    setTimeout(() => {
      if (this.landingMap) {
        this.landingMap.setView([26.2500, 92.8000], 7.2);
        this.landingMap.invalidateSize();
      }
    }, 400);
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
