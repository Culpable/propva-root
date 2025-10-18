import mixpanel from './mixpanelClient';

/**
 * Analytics utility functions for tracking user interactions
 * Provides a consistent interface for event tracking throughout the application
 */
const analytics = {
  /**
   * Track a custom event with properties
   * @param {string} eventName - Name of the event
   * @param {Object} properties - Additional event properties
   */
  track: (eventName, properties = {}) => {
    if (typeof window !== 'undefined') {
      mixpanel.track(eventName, properties);
    }
  },

  /**
   * Track form submission events
   * @param {string} formName - Name of the form
   * @param {Object} formData - Form data being submitted
   */
  trackFormSubmission: (formName, formData = {}) => {
    if (typeof window !== 'undefined') {
      mixpanel.track('Form Submitted', {
        form_name: formName,
        ...formData
      });
    }
  },

  /**
   * Track button click events
   * @param {string} buttonName - Name of the button
   * @param {Object} properties - Additional properties
   */
  trackButtonClick: (buttonName, properties = {}) => {
    if (typeof window !== 'undefined') {
      mixpanel.track('Button Clicked', {
        button_name: buttonName,
        ...properties
      });
    }
  },

  /**
   * Track video play events
   * @param {string} videoId - Video identifier
   * @param {Object} properties - Additional video properties
   */
  trackVideoPlay: (videoId, properties = {}) => {
    if (typeof window !== 'undefined') {
      mixpanel.track('Video Play', {
        video_id: videoId,
        ...properties
      });
    }
  },

  /**
   * Identify a user and set their properties in Mixpanel People
   * This should be called when we have identifiable user information
   * @param {string} email - User's email (used as unique identifier)
   * @param {Object} userProperties - User properties to set
   */
  identifyUser: (email, userProperties = {}) => {
    if (typeof window !== 'undefined' && email) {
      // Use email as the unique identifier
      mixpanel.identify(email);
      
      // Set user properties in People
      mixpanel.people.set({
        $email: email,
        ...userProperties
      });
    }
  },

  /**
   * Track form submission with user identification
   * This combines event tracking with people identification for lead capture
   * @param {string} formName - Name of the form
   * @param {Object} formData - Form data being submitted
   * @param {Object} userInfo - User information for identification (email, name, etc.)
   */
  trackFormSubmissionWithIdentification: (formName, formData = {}, userInfo = {}) => {
    if (typeof window !== 'undefined') {
      // Track the event first
      mixpanel.track('Form Submitted', {
        form_name: formName,
        ...formData
      });

      // If we have user info, identify them
      if (userInfo.email) {
        // Prepare user properties for people profile
        const userProperties = {};
        
        if (userInfo.name) {
          userProperties.$name = userInfo.name;
        }
        
        // Add timestamp of first contact
        userProperties.first_contact_date = new Date().toISOString();
        userProperties.contact_form_submitted = true;
        userProperties.lead_source = formData.form_source || 'contact_form';

        // Identify the user
        analytics.identifyUser(userInfo.email, userProperties);
      }
    }
  }
};

export default analytics; 