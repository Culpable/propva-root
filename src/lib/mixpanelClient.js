import mixpanel from 'mixpanel-browser';

// Mixpanel project token - hardcoded for reliability
const MIXPANEL_TOKEN = '949d4da614a2742e5165a79a1b628b2a';

/**
 * Initialize Mixpanel with hardcoded token, Session Replay, and Heatmaps configuration
 * - Session Replay records user interactions to review later
 * - Heatmaps track click interactions to visualise user engagement patterns
 * - track_pageview set to true for automatic page view tracking
 * - Using cookie persistence with cross-subdomain support
 * - Recording 100% of sessions with heatmap data collection enabled
 * - Masks sensitive data and collects font information
 * - Session timeouts configured for optimal recording
 */
export const initMixpanel = () => {
  mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: true,
    persistence: 'cookie', // Changed from 'localStorage' to enable cross-subdomain tracking
    cross_subdomain_cookie: true, // Enable tracking across propva.com.au and app.propva.com.au
    record_sessions_percent: 100,
    record_heatmap_data: true, // Enable heatmap data collection for click tracking
    record_block_selector: "",
    record_mask_text_selector: ".sensitive-data",
    record_collect_fonts: true,
    record_idle_timeout_ms: 600000,
    record_min_ms: 3000,
  });
  
  // Explicitly expose mixpanel instance globally
  window.mixpanel = mixpanel;
  
  // Set flag for referral tracking script
  window.mixpanelLoaded = true;
};

/**
 * Expose the mixpanel instance for custom event tracking
 * This allows components to import and use mixpanel directly
 */
export default mixpanel; 