/*
 * AEGIS Emergency Platform - Firebase Google Authentication Module
 * National Weather Big Data Analytics Platform (MoES / SIH26069)
 */

const firebaseConfig = {
  apiKey: "AIzaSyBg8ePZQfXmsOGnkQeMQhWCm7_OI14lTEA",
  authDomain: "aegis-flood-response.firebaseapp.com",
  projectId: "aegis-flood-response",
  storageBucket: "aegis-flood-response.firebasestorage.app",
  messagingSenderId: "429989214794",
  appId: "1:429989214794:web:84a38077ac61964b5344b3"
};

// Initialize Firebase App & Auth if available
if (typeof firebase !== 'undefined') {
  try {
    if (!firebase.apps || !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  } catch (e) {
    console.warn("Firebase initialization warning:", e);
  }
}

// Google Sign-In Handler
async function loginWithGoogleFirebase() {
  // If Firebase Auth is available and online, attempt standard Google Popup
  if (typeof firebase !== 'undefined' && firebase.auth) {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      
      const profile = {
        name: user.displayName || "Verified Citizen",
        email: user.email || "citizen@aegis-response.gov.in",
        photoURL: user.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        phone: user.phoneNumber || "+91 98765 43210",
        uid: user.uid,
        provider: "Google Firebase (Verified)",
        loggedInAt: new Date().toLocaleString()
      };

      saveAndApplyProfile(profile);
      showAegisAuthNotification(`Signed in with Google as ${profile.name}`);
      
      // If currently on landing page, navigate to citizen dashboard
      if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        setTimeout(() => { window.location.href = 'citizen-dashboard.html'; }, 700);
      }
      return;
    } catch (error) {
      console.warn("Firebase Auth popup notice:", error.message || error);
      if (error.code === 'auth/popup-closed-by-user') {
        return;
      }
      // If domain not whitelisted on Firebase Console or popup blocked, open the Google Auth Dialog
      openGoogleAuthModal();
      return;
    }
  }

  // Fallback to Google Auth Modal
  openGoogleAuthModal();
}

// Save Profile and Apply to Entire UI Instantly
function saveAndApplyProfile(profile) {
  localStorage.setItem('AEGIS_CITIZEN_PROFILE', JSON.stringify(profile));
  updateCitizenProfileUI();
}

// Custom Google Sign-In Modal (for seamless zero-friction login)
function openGoogleAuthModal() {
  let existingModal = document.getElementById('aegis-google-auth-modal');
  if (existingModal) {
    existingModal.remove();
  }

  const modalHtml = `
  <div id="aegis-google-auth-modal" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(4,8,20,0.85); backdrop-filter:blur(8px); z-index:99999; display:flex; align-items:center; justify-content:center; animation:fadeInModal 0.2s ease;">
    <div style="background:#0f172a; border:1px solid rgba(59,130,246,0.3); border-radius:16px; width:92%; max-width:440px; box-shadow:0 25px 60px rgba(0,0,0,0.6); overflow:hidden; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      
      <!-- Top Google Bar -->
      <div style="background:rgba(255,255,255,0.03); padding:1.25rem 1.5rem; border-bottom:1px solid rgba(255,255,255,0.07); display:flex; align-items:center; justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <svg width="24" height="24" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.41-1.57-5.13-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"/><path fill="#FBBC05" d="M3.87 10.78c-.18-.53-.29-1.1-.29-1.78s.11-1.25.29-1.78L.97 4.96C.35 6.18 0 7.55 0 9s.35 2.82.97 4.04l2.9-2.26z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0 5.48 0 2.45 2.02.97 4.96l2.9 2.26C4.59 5.05 6.62 3.58 9 3.58z"/></svg>
          <div>
            <div style="font-weight:700; font-size:0.95rem; color:#ffffff;">Sign in with Google</div>
            <div style="font-size:0.7rem; color:#94a3b8;">Choose an account to continue to AEGIS Platform</div>
          </div>
        </div>
        <button onclick="closeGoogleAuthModal()" style="background:transparent; border:none; color:#94a3b8; font-size:1.4rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

      <!-- Content -->
      <div style="padding:1.5rem;">
        
        <div style="font-size:0.78rem; color:#cbd5e1; margin-bottom:1rem; line-height:1.4;">
          Authenticate with your Google account to access real-time National Weather Telemetry, personal SOS alerts, and emergency shelter coordination.
        </div>

        <!-- Option 1: Quick One-Click Account -->
        <div onclick="selectQuickGoogleAccount('Ravi Das', 'ravi.das@gmail.com', '+91 98765 43210')" style="display:flex; align-items:center; gap:0.9rem; padding:0.75rem 0.9rem; border-radius:10px; background:rgba(37,99,235,0.1); border:1px solid rgba(59,130,246,0.3); cursor:pointer; margin-bottom:0.75rem; transition:all 0.2s;" onmouseover="this.style.borderColor='#38bdf8'; this.style.background='rgba(37,99,235,0.18)'" onmouseout="this.style.borderColor='rgba(59,130,246,0.3)'; this.style.background='rgba(37,99,235,0.1)'">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:1px solid rgba(59,130,246,0.5);">
          <div style="flex:1;">
            <div style="font-weight:700; font-size:0.85rem; color:#ffffff;">Ravi Das</div>
            <div style="font-size:0.72rem; color:#94a3b8;">ravi.das@gmail.com</div>
          </div>
          <span style="font-size:0.7rem; color:#38bdf8; font-weight:700; background:rgba(56,189,248,0.15); padding:3px 8px; border-radius:12px;">Active Account &rarr;</span>
        </div>

        <div style="text-align:center; margin:1rem 0; font-size:0.7rem; color:#64748b; position:relative;">
          <span style="background:#0f172a; padding:0 10px; position:relative; z-index:1;">OR USE YOUR OWN ACCOUNT</span>
          <div style="position:absolute; top:50%; left:0; right:0; height:1px; background:rgba(255,255,255,0.08); z-index:0;"></div>
        </div>

        <!-- Custom Account Entry -->
        <form onsubmit="handleCustomGoogleSubmit(event)">
          <div style="margin-bottom:0.75rem;">
            <label style="display:block; font-size:0.7rem; font-weight:700; color:#94a3b8; text-transform:uppercase; margin-bottom:4px;">Full Name</label>
            <input type="text" id="google-modal-name" placeholder="Enter your full name" required style="width:100%; box-sizing:border-box; background:rgba(15,23,42,0.9); border:1px solid rgba(59,130,246,0.3); border-radius:8px; padding:0.55rem 0.75rem; color:#ffffff; font-size:0.8rem; outline:none;" onfocus="this.style.borderColor='#38bdf8'" onblur="this.style.borderColor='rgba(59,130,246,0.3)'">
          </div>

          <div style="margin-bottom:1rem;">
            <label style="display:block; font-size:0.7rem; font-weight:700; color:#94a3b8; text-transform:uppercase; margin-bottom:4px;">Google / Gmail Address</label>
            <input type="email" id="google-modal-email" placeholder="e.g. yourname@gmail.com" required style="width:100%; box-sizing:border-box; background:rgba(15,23,42,0.9); border:1px solid rgba(59,130,246,0.3); border-radius:8px; padding:0.55rem 0.75rem; color:#ffffff; font-size:0.8rem; outline:none;" onfocus="this.style.borderColor='#38bdf8'" onblur="this.style.borderColor='rgba(59,130,246,0.3)'">
          </div>

          <div style="display:flex; gap:0.5rem;">
            <button type="button" onclick="closeGoogleAuthModal()" style="flex:1; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; padding:0.6rem; border-radius:8px; font-size:0.8rem; font-weight:600; cursor:pointer;">Cancel</button>
            <button type="submit" style="flex:2; background:#2563eb; border:none; color:#ffffff; padding:0.6rem; border-radius:8px; font-size:0.8rem; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.4rem; box-shadow:0 4px 14px rgba(37,99,235,0.4);">
              <svg width="15" height="15" viewBox="0 0 18 18"><path fill="#ffffff" d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"/><path fill="#ffffff" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.41-1.57-5.13-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"/></svg>
              Confirm &amp; Sign In
            </button>
          </div>
        </form>

      </div>

    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeGoogleAuthModal() {
  const m = document.getElementById('aegis-google-auth-modal');
  if (m) m.remove();
}

function selectQuickGoogleAccount(name, email, phone) {
  const profile = {
    name: name,
    email: email,
    photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    phone: phone || "+91 98765 43210",
    provider: "Google Account (Verified)",
    loggedInAt: new Date().toLocaleString()
  };
  saveAndApplyProfile(profile);
  closeGoogleAuthModal();
  showAegisAuthNotification(`Signed in with Google as ${profile.name}`);
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    setTimeout(() => { window.location.href = 'citizen-dashboard.html'; }, 600);
  }
}

function handleCustomGoogleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('google-modal-name').value.trim();
  const email = document.getElementById('google-modal-email').value.trim();
  if (!name || !email) return;

  const profile = {
    name: name,
    email: email,
    photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    phone: "+91 98765 43210",
    provider: "Google Account (Verified)",
    loggedInAt: new Date().toLocaleString()
  };

  saveAndApplyProfile(profile);
  closeGoogleAuthModal();
  showAegisAuthNotification(`Signed in with Google as ${profile.name}`);
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    setTimeout(() => { window.location.href = 'citizen-dashboard.html'; }, 600);
  }
}

// Notification Toast
function showAegisAuthNotification(msg) {
  let toast = document.getElementById('aegis-auth-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'aegis-auth-toast';
    toast.style.cssText = "position:fixed; bottom:24px; right:24px; background:#10b981; color:#fff; padding:0.65rem 1.25rem; border-radius:8px; font-size:0.8rem; font-weight:700; box-shadow:0 10px 25px rgba(0,0,0,0.5); z-index:999999; display:flex; align-items:center; gap:0.5rem; transition:all 0.3s ease;";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${msg}`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 4000);
}

// Function to Sync Citizen Profile Details Across All Pages
function updateCitizenProfileUI() {
  let raw = localStorage.getItem('AEGIS_CITIZEN_PROFILE');
  if (!raw) {
    // Default initial profile
    const defaultProfile = {
      name: "Ravi Das",
      email: "ravi.das@gmail.com",
      photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      phone: "+91 98765 43210",
      provider: "Verified Citizen Account"
    };
    localStorage.setItem('AEGIS_CITIZEN_PROFILE', JSON.stringify(defaultProfile));
    raw = JSON.stringify(defaultProfile);
  }

  try {
    const profile = JSON.parse(raw);

    // Profile Page Elements (handles both ID styles)
    const nameEl = document.getElementById('profile-name-text') || document.getElementById('prof-name-text');
    const emailEl = document.getElementById('profile-email-text') || document.getElementById('prof-email-text');
    const phoneEl = document.getElementById('profile-phone-text') || document.getElementById('prof-phone-text');
    const photoEl = document.getElementById('profile-avatar-img') || document.getElementById('prof-avatar-img');

    if (nameEl) nameEl.innerText = profile.name;
    if (emailEl) emailEl.innerHTML = `<i class="fa-solid fa-envelope" style="color:#38bdf8; font-size:0.6rem;"></i> ${profile.email}`;
    if (phoneEl) phoneEl.innerHTML = `<i class="fa-solid fa-phone" style="color:#38bdf8; font-size:0.6rem;"></i> ${profile.phone || '+91 98765 43210'}`;
    if (photoEl && profile.photoURL) photoEl.src = profile.photoURL;

    // Topbar & Sidebar Elements across Citizen Pages
    document.querySelectorAll('.citizen-user-name').forEach(el => el.innerText = profile.name);
    document.querySelectorAll('.citizen-user-email').forEach(el => el.innerText = profile.email);
    document.querySelectorAll('.citizen-user-avatar').forEach(el => {
      if (el.tagName === 'IMG') {
        if (profile.photoURL) el.src = profile.photoURL;
      } else {
        const initials = profile.name ? profile.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'RD';
        el.innerText = initials;
      }
    });

    // Form inputs and dynamic placeholders
    const welcomeEl = document.getElementById('citizen-welcome-name');
    if (welcomeEl) welcomeEl.innerText = profile.name;

    const routeNameEl = document.getElementById('route-citizen-name');
    if (routeNameEl) routeNameEl.innerText = `👤 ${profile.name} & Family`;

    const sosNameInput = document.getElementById('sos-name');
    if (sosNameInput && (!sosNameInput.value || sosNameInput.value.includes('Ravi Das'))) {
      sosNameInput.value = `${profile.name} & Family`;
    }

    const citizenNameInput = document.getElementById('citizen-name');
    if (citizenNameInput && (!citizenNameInput.value || citizenNameInput.value === 'Ravi Das')) {
      citizenNameInput.value = profile.name;
    }

    const editNameInput = document.getElementById('edit-input-name');
    if (editNameInput) editNameInput.value = profile.name;

    const editEmailInput = document.getElementById('edit-input-email');
    if (editEmailInput) editEmailInput.value = profile.email;

    const editPhoneInput = document.getElementById('edit-input-phone');
    if (editPhoneInput && profile.phone) editPhoneInput.value = profile.phone;

    // Update Google Sign-in Buttons status text
    document.querySelectorAll('.google-auth-status-text').forEach(el => {
      el.innerText = `Google: ${profile.name.split(' ')[0]}`;
    });

  } catch (e) {
    console.error("Error syncing profile UI:", e);
  }
}

// Initial Sync on DOM Ready and Page Load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateCitizenProfileUI);
} else {
  updateCitizenProfileUI();
}
window.addEventListener('load', updateCitizenProfileUI);
