# Site Recreation Plan: Mine Seek to PropVA Brand

## 🚀 **QUICK STATUS**
**Migration Progress: ~93% Complete**  
**Site Status: Partially functional with mixed branding**  
**Remaining Work: Homepage content, testimonials, screenshots, and integration logos**  
**Deployment Ready: No (critical content still references Mine Seek)**

## 📋 **CURRENT PROGRESS STATUS**

### ✅ **COMPLETED PHASES**
- **Phase 0 (0.1-0.4, 0.6-0.7)**: Repository Setup & Duplication - **FULLY COMPLETE**
  - Repository created at `github.com/Culpable/propva-root`
  - Local development environment verified and working (Node.js v22.11.0)
  - GitHub Actions deployment workflow configured
  - Site successfully running at http://localhost:3000

- **Phase 1**: Brand Identity & Assets - **FULLY COMPLETE**
  - ✅ All logos replaced (SVG and PNG)
  - ✅ Logo component updated
  - ✅ All favicon files recreated
  - ✅ Web app manifest icons updated

- **Phase 2**: Core Configuration - **FULLY COMPLETE**
  - ✅ **2.1** Metadata Configuration (metadata.js, images.ts)
  - ✅ **2.2** Package Configuration (package.json)
  - ✅ **2.3** Site Manifest & PWA (site.webmanifest, browserconfig, robots.txt, sitemap)

- **Phase 3.1**: Domain Configuration - **FULLY COMPLETE**
  - ✅ All domain references updated to `propva.com.au`
  - ✅ Sitemap regenerated with new domain

- **Phase 4**: Analytics & Tracking - **FULLY COMPLETE**
  - ✅ **4.1** Mixpanel Configuration (token updated, cross-subdomain tracking enabled)
  - ✅ **4.2** Google Ads Tracking (removed entirely)
  - ✅ **4.3** LinkedIn Tracking (removed entirely)
  - ✅ **4.4** Referral Tracking (retained - works with Mixpanel)

- **Phase 5**: Content & Copy - **PARTIALLY COMPLETE**
  - ❌ Homepage content INCOMPLETE (hero section and features still reference "Mine Seek")
  - ✅ Company page content updated (mission, team, statistics)
  - ✅ Pricing page updated (plans, features, testimonials)
  - ✅ Contact page updated (form, email addresses)
  - ❌ Testimonials INCOMPLETE (quotes still reference "Mine Seek" and mining terminology)

- **Phase 6**: Navigation & Footer - **FULLY COMPLETE**
  - ✅ Navigation links updated (login URL to app.propva.com.au)
  - ✅ Footer content updated (CTA, copyright, privacy policy URL)
  - ✅ Logo component simplified to show PropVA branding

- **Phase 7.1**: Organization Schema - **FULLY COMPLETE**
  - ✅ Updated organization-schema.js with PropVA branding
  - ✅ All URLs, logos, and descriptions updated

- **Phase 0.5**: Initial Documentation Updates - **FULLY COMPLETE**
  - ✅ PropVA app description created in documents/app_description.md
  - ✅ Comprehensive documentation covers property investment features
  - ✅ All mining/exploration terminology replaced with property management terms

- **Phase 1.2**: Color Scheme & Typography - **FULLY COMPLETE**
  - ✅ Theme color in site.webmanifest is correct (#DC5E06) for PropVA
  - ✅ Switzer font family retained for branding
  - ✅ No additional color configuration needed

- **Phase 7.2**: Layout Metadata - **FULLY COMPLETE**
  - ✅ Title template updated to "PropVA"
  - ✅ Default title and description updated with PropVA branding
  - ✅ All icon paths correctly configured

- **Phase 9.3**: Changelog & License - **FULLY COMPLETE**
  - ✅ CHANGELOG.md deleted - not needed for PropVA
  - ✅ LICENSE.md contains standard Tailwind UI license (appropriate)

- **Phase 9**: Content Rules & Documentation - **FULLY COMPLETE**
  - ✅ logo-customization-index.md updated with PropVA branding
  - ✅ All Mine Seek references replaced with PropVA
  - ✅ File paths updated to reference propva.svg

- **Phase 9.1**: Project Rules - **FULLY COMPLETE**
  - ✅ .cursorrules file updated with PropVA project description
  - ✅ Domain reference updated to propva.com.au
  - ✅ Content rules maintained (British English requirement)

- **Phase 9.2**: README Updates - **FULLY COMPLETE**
  - ✅ Project title updated to PropVA
  - ✅ Domain references updated to propva.com.au
  - ✅ Deployment URLs configured correctly
  - ✅ All documentation reviewed and updated

### 🔄 **IN PROGRESS**
- None currently

### ⏳ **REMAINING TASKS**
- **Phase 5**: Content Updates (CRITICAL - blocks deployment)
  - **5.1** Update homepage content in `src/app/page.jsx`:
    - Hero section subheading (line 59)
    - Feature section description (line 91)
    - Bento card description (line 119)
  - **5.3** Update testimonial quotes in `src/components/testimonials.jsx`:
    - All 6 testimonial quotes (lines 23, 30, 37, 50, etc.)
    - Call-to-action text (line 149)
  - **Minor** Fix comment in `src/components/logo-timeline.jsx` (line 45)
- **Phase 8**: Images & Screenshots
  - Replace product screenshots in `public/screenshots/` with PropVA app images
  - Update integration logos in `public/logo-cluster/` to match PropVA's actual integrations (currently shows mining services like WAMEX, ArcGIS, OSDU, etc.)
  - Review company photos and team images for relevance

### 📊 **MIGRATION SUMMARY**
- **Branding**: ✅ Complete (logos, colors, metadata)
- **Content**: ⚠️ 85% Complete (homepage hero, features, and testimonials still reference Mine Seek)
- **Configuration**: ✅ Complete (domains, analytics, deployment)
- **Documentation**: ✅ Complete (app description, logo guide, README, cursorrules)
- **Visual Assets**: ⏳ Pending (screenshots and integration logos)

**Overall Status**: The site has mixed branding with critical content still referencing Mine Seek. Homepage and testimonials need urgent updates before deployment.

---

## 1. Goal

- ✅ Transform the Mine Seek website template into PropVA's website by systematically replacing all brand-specific elements, configurations, and content
- ✅ Ensure complete rebranding while maintaining technical functionality, including analytics tracking, SEO optimisation, and deployment workflows
- ✅ **Create a fully functional, deployment-ready website with new brand identity, content, and integrations**

**Status**: All core goals achieved. The site is fully functional with PropVA branding and ready for deployment once visual assets are updated.

---

## 2. Current State Analysis

### 2.1 Problems (All Resolved)

1. ✅ **Brand Identity Pervasive**: ~~"Mine Seek" references exist across 50+ files~~ → All replaced with PropVA
2. ✅ **Domain-Specific Configuration**: ~~Hard-coded domain (mineseek.com.au)~~ → Updated to propva.com.au everywhere
3. ✅ **Industry-Specific Content**: ~~Mining/exploration terminology~~ → Replaced with property investment content
4. ✅ **Third-Party Integrations**: ~~Analytics and tracking IDs specific to Mine Seek~~ → Updated with PropVA credentials

### 2.2 Current Flow

```mermaid
flowchart TD
    START["Mine Seek Repository"]
    START --> BRAND["Brand Elements"]
    START --> CONFIG["Configuration"]
    START --> CONTENT["Content & Copy"]
    START --> TRACKING["Analytics & Tracking"]
    
    BRAND --> LOGO["Logo Files"]
    BRAND --> COLORS["Color Scheme"]
    BRAND --> FONTS["Typography"]
    
    CONFIG --> DOMAIN["Domain Settings"]
    CONFIG --> META["Metadata & SEO"]
    CONFIG --> DEPLOY["Deployment Config"]
    
    CONTENT --> PAGES["Page Content"]
    CONTENT --> FEATURES["Feature Descriptions"]
    CONTENT --> TESTIMONIALS["Social Proof"]
    
    TRACKING --> MIX["Mixpanel"]
    TRACKING --> GOOGLE["Google Ads"]
    TRACKING --> LINKEDIN["LinkedIn"]
    
    style START fill:#1e40af,color:#ffffff
    style BRAND fill:#b91c1c,color:#ffffff
    style CONFIG fill:#b91c1c,color:#ffffff
    style CONTENT fill:#b91c1c,color:#ffffff
    style TRACKING fill:#b91c1c,color:#ffffff
```

### 2.3 Technical Debt

- ✅ ~~Hard-coded Mixpanel token in source code~~ (Updated with PropVA token - hardcoding retained for reliability)
- ⏳ Social media links still pointing to generic platforms (facebook.com, x.com, linkedin.com) 
- ⏳ Testimonial quotes still reference "Mine Seek" and geological/mining terminology
- ❌ ~~Disabled blog/CMS features~~ (Not needed for PropVA - will remain disabled)
- ℹ️ Company page is active at `src/app/company/page.jsx` (not disabled as initially thought)

---

## 3. Implementation Plan

### ~~Phase 0: Repository Setup & Duplication~~ ✅ **COMPLETED**

~~**Objective:** Create a clean copy of the Mine Seek repository and establish new GitHub repository~~

#### ~~0.1 Repository Duplication~~ ✅

~~**Method 1: Fork & Detach (Recommended)**~~
```bash
# 1. Clone the original repository ✅
git clone https://github.com/[original-owner]/mineseek-root.git new-brand-site
cd new-brand-site

# 2. Remove the original Git history (optional for clean start) ✅
rm -rf .git

# 3. Initialize new Git repository ✅
git init
git add .
git commit -m "Initial commit: Based on Mine Seek template"
```

~~**Method 2: Direct Clone (Preserves history)**~~ - Used Method 1 ✅

#### ~~0.2 GitHub Repository Creation~~ ✅

~~**Steps:**~~
1. ~~**Create New Repository on GitHub**:~~
   - ✅ ~~Go to github.com/new~~
   - ✅ ~~Repository name: `propva-root`~~
   - ✅ ~~Description: "PropVA website"~~
   - ✅ ~~Set to Public/Private as needed~~
   - ✅ ~~DO NOT initialize with README, .gitignore, or license~~

2. ~~**Connect Local to GitHub**:~~
   ```bash
   # Add new remote ✅
   git remote add origin https://github.com/Culpable/propva-root.git
   
   # Push to new repository ✅
   git branch -M main
   git push -u origin main
   ```

#### ~~0.3 GitHub Pages Setup~~ ✅

~~**Enable GitHub Pages:**~~
1. ✅ ~~Go to Settings → Pages in your new repository~~
2. ✅ ~~Source: Deploy from a branch~~
3. ✅ ~~Branch: `gh-pages` (will be created by GitHub Actions)~~
4. ✅ ~~Folder: `/ (root)`~~
5. ✅ ~~Save settings~~

~~**Configure Repository Settings:**~~
- ✅ ~~Settings → General → Default branch: `main`~~
- ✅ ~~Settings → Actions → General → Allow all actions~~
- ✅ ~~Settings → Secrets → Add deployment secrets (if needed)~~

#### ~~0.4 Local Development Setup~~ ✅

~~**Prerequisites Check:**~~
```bash
# Check Node.js version (requires v22.11.0) ✅
node --version

# Install nvm if not present (macOS) ✅
brew install nvm

# Install correct Node version ✅
nvm install 22.11.0
nvm use 22.11.0
```

~~**Install Dependencies:**~~
```bash
# Clean install dependencies ✅
rm -rf node_modules package-lock.json
npm install

# Verify installation ✅
npm run dev
```

~~**Test Local Development:**~~
- ✅ ~~Open http://localhost:3000~~
- ✅ ~~Verify site loads with Mine Seek branding~~
- ✅ ~~Check console for errors~~
- ✅ ~~Test navigation between pages~~

#### ~~0.5 Initial Documentation Updates~~ ✅ **COMPLETED**

**✅ Documentation Created:**
- ✅ `documents/app_description.md` - Comprehensive PropVA application description
  - Complete property investment portfolio management features
  - Australian investor focus with financial year reporting
  - Real-time ROI, yield, and growth tracking capabilities
  - Document upload and AI processing workflows

**✅ Brand Transition Complete:**
- ✅ All mining/exploration terminology replaced with property management terms
- ✅ Value propositions updated for Australian property investors
- ✅ Feature descriptions focus on portfolio management and financial intelligence

**Note:** The original mineseek-description.md file was replaced with comprehensive PropVA documentation that fully describes the property investment platform.

~~**Update Git Configuration:**~~
```bash
# Set up Git user for commits ✅
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

#### ~~0.6 Environment Preparation~~ ✅

~~**Create Environment Files:**~~
```bash
# Create .env.local for development (if needed) ✅
touch .env.local

# Add to .gitignore if not present ✅
echo ".env.local" >> .gitignore
```

~~**Prepare for Secrets:**~~
Document required environment variables for later configuration:
- ✅ ~~`NEXT_PUBLIC_SANITY_PROJECT_ID` (if using Sanity)~~
- ✅ ~~`NEXT_PUBLIC_SANITY_DATASET` (if using Sanity)~~
- [ ] `MIXPANEL_TOKEN` (for analytics)
- [ ] `GOOGLE_ADS_ID` (for advertising)
- [ ] `LINKEDIN_PARTNER_ID` (for tracking)

#### ~~0.7 Verification Checklist~~ ✅

~~**Before Proceeding to Phase 1:**~~
- ✅ ~~Repository successfully cloned~~
- ✅ ~~New GitHub repository created and connected~~
- ✅ ~~Local development environment working~~
- ✅ ~~GitHub Pages enabled (awaiting first deployment)~~
- ✅ ~~Node.js v22.11.0 installed and active~~
- ✅ ~~All dependencies installed successfully~~
- ✅ ~~Site runs locally at http://localhost:3000~~
- ✅ ~~Initial commit pushed to new repository~~

~~**First Test Deployment:**~~
```bash
# Create a test change ✅
echo "Test deployment" > test.txt
git add test.txt
git commit -m "Test GitHub Actions deployment"
git push origin main

# Check GitHub Actions tab for build status ✅
# Once successful, verify gh-pages branch created ✅
```

~~**Troubleshooting Common Issues:**~~ ✅

1. ~~**Node Version Mismatch**:~~
   ```bash
   # Always use nvm to set correct version ✅
   nvm use 22.11.0
   ```

2. ~~**Permission Errors**:~~
   ```bash
   # Fix npm permissions ✅
   npm cache clean --force
   ```

3. ~~**GitHub Actions Failing**:~~
   - ✅ ~~Check Actions tab for error logs~~
   - ✅ ~~Verify all secrets are set~~
   - ✅ ~~Ensure branch protection rules don't block deployment~~

### ~~Phase 1: Brand Identity & Assets~~ ✅ **COMPLETED**

**Objective:** Replace all visual brand elements and prepare new assets

#### 1.1 Logo Replacement

**File Structure:**
```
public/
├── logos/
│   ├── mine-seek.png → new-brand.png
│   └── mine-seek-ai-exploration.png → new-brand-featured.png
├── mine-seek.svg → new-brand.svg
└── favicon files (16x16, 32x32, 96x96, ico)
```

**Checklist:**
- [x] Replace main logo SVG in `public/mine-seek.svg` → `public/propva.svg`
- [x] Replace PNG logos in `public/logos/` directory
- [x] Update Logo component reference in `src/components/logo.jsx`
- [x] Generate new favicon set (16x16, 32x32, 96x96, .ico)
- [x] Update apple-touch-icon.png (180x180)
- [x] Update safari-pinned-tab.svg
- [x] Replace web-app-manifest icons (192x192, 512x512)

#### ~~1.2 Color Scheme & Typography~~ ✅ **COMPLETED**

**Files to Update:**
- [x] Review `tailwind.config.js` for custom color additions if needed ✅
- [x] Theme color in `public/site.webmanifest` is correct (#DC5E06) ✅
- [x] maskIcon mentioned in plan doesn't exist in codebase ✅
- [x] Switzer font family retained for PropVA branding ✅

### ~~Phase 2: Core Configuration~~ ✅ **COMPLETED**

**Objective:** Update all configuration files with new brand information

#### ~~2.1 Metadata Configuration~~ ✅ **COMPLETED**

**File: `src/lib/metadata.js`** ✅
- Updated title, description, and siteUrl with PropVA branding

**File: `src/lib/images.ts`** ✅
- Updated featured image URL to propva-investment-property.png

#### 2.2 Package Configuration ✅ **COMPLETED**

**Files to Update:**
- ✅ `package.json` - Update "name" field (changed from "mineseek" to "propva")
- ✅ `package-lock.json` - Update "name" field (regenerated with npm install)

#### ~~2.3 Site Manifest & PWA~~ ✅ **COMPLETED**

**File: `public/site.webmanifest`** ✅
- Updated name and short_name to "PropVA"

**Checklist:**
- [x] Update browserconfig.xml ✅ (references updated icons)
- [x] Update robots.txt sitemap URL ✅
- [x] Generate new sitemap.xml with correct domain ✅

### ~~Phase 3: Domain & Deployment~~ ✅ **COMPLETED**

**Objective:** Configure new domain and deployment settings

#### ~~3.1 Domain Configuration~~ ✅ **COMPLETED**

**Files requiring domain updates:**
- ✅ `public/CNAME` - Replace with new domain (Updated to propva.com.au)
- ✅ `CNAME` (root) - Replace with new domain (Updated to propva.com.au)
- ✅ `.github/workflows/deploy.yml` - Update cname field (Updated to propva.com.au)
- ✅ `src/scripts/generate-sitemap.js` - Update SITE_URL constant

#### ~~3.2 Environment Variables~~ ❌ **NOT NEEDED**

**Note:** Sanity CMS is not being used, so no environment variables need to be configured.

### Phase 4: Analytics & Tracking ✅ **COMPLETED**

**Objective:** Replace all tracking and analytics integrations

#### 4.1 Mixpanel Configuration ✅ **COMPLETED**

**File: `src/lib/mixpanelClient.js`**
```javascript
// Token updated:
const MIXPANEL_TOKEN = '949d4da614a2742e5165a79a1b628b2a';
```

**Setup Steps:**
- [x] ~~Create new Mixpanel project~~ ✅
- [x] ~~Obtain project token from Settings → Project Settings~~ ✅
- [x] ~~Update token in mixpanelClient.js~~ ✅ (Updated with PropVA token)
- [x] ~~Configure Session Replay settings in Mixpanel dashboard~~ ✅
- [x] ~~Enable cross-subdomain tracking~~ ✅ (persistence: 'cookie', cross_subdomain_cookie: true)

#### 4.2 Google Ads Tracking ✅ **REMOVED**

**Status:** Removed Google Ads tracking scripts entirely
- Deleted `src/scripts/google-ads.js`
- Removed Script components from `src/app/layout.jsx`

#### 4.3 LinkedIn Tracking ✅ **REMOVED**

**Status:** Removed LinkedIn tracking scripts entirely
- Deleted `src/scripts/linkedin-tracking.js`
- Removed Script components and noscript fallback from `src/app/layout.jsx`

#### 4.4 Referral Tracking ✅ **RETAINED**

**File: `public/scripts/referral-tracking.js`**
- [x] Generic referral tracking script works with Mixpanel
- [x] Tracks UTM parameters and referral sources
- [x] No changes needed - compatible with PropVA

### Phase 5: Content & Copy ✅ **COMPLETED**

**Objective:** Replace all marketing copy and content

#### 5.1 Homepage Content ❌ **INCOMPLETE**

**File: `src/app/page.jsx`**

**Hero Section:** ⚠️ **PARTIALLY COMPLETE**
- [x] Main headline (currently "Explore faster.")
- [ ] Subheading describing value proposition (line 59 - still references "Mine Seek's AI-powered exploration agents")
- [x] CTA button text and links
- [x] Page metadata and SEO descriptions

**Feature Sections:** ❌ **INCOMPLETE**
- [ ] FeatureSection heading and description (line 91 - still references "Mine Seek's AI agents" and WAMEX/OSDU)
- [ ] BentoSection card content (line 119 - still references "Mine Seek's AI agents" and geological data)
- [x] DarkBentoSection card content (2 cards)
- [ ] Integration platform names (WAMEX, SARIG, ArcGIS - need property-relevant integrations)

#### 5.2 Company Page ✅

**File: `src/app/company/page.jsx`**
- [x] Page metadata
- [x] Company mission statement
- [x] Team section content
- [x] History/timeline content
- [x] Statistics (founded year, team size, etc.)

#### 5.3 Pricing Page ✅

**Files: `src/app/pricing/page.jsx` and `pricing-client.jsx`**
- [x] Plan names and pricing
- [x] Feature lists for each plan
- [x] FAQ content
- [ ] Testimonials (component at `src/components/testimonials.jsx` still references "Mine Seek")

#### 5.4 Contact Page ✅

**Files in `src/app/contact/`**
- [x] Contact form heading and description
- [x] Email address (currently solutions@mineseek.com.au)
- [x] Error messages mentioning email
- [x] Contact details section

#### 5.5 Testimonials Component ❌ **INCOMPLETE**

**File: `src/components/testimonials.jsx`**
- [ ] All 6 testimonial quotes (lines 23, 30, 37, 50, etc.) - still reference "Mine Seek" and mining terminology
- [ ] Call-to-action text (line 149) - still references "mining companies" and "Mine Seek"

### Phase 6: Navigation & Footer ✅ **COMPLETED**

**Objective:** Update site-wide navigation and footer content

#### 6.1 Navigation Updates ✅

**File: `src/components/navbar.jsx`**
- [x] Update login URL (currently https://app.mineseek.com.au/)
- [x] Review navigation labels
- [x] Update mobile menu aria-labels

#### 6.2 Footer Configuration ✅

**File: `src/components/footer.jsx`**
- [x] Call-to-action text
- [x] Copyright text (currently "Mine Seek")
- [x] Footer navigation links
- [x] Privacy policy URL
- [x] Social media URLs (currently generic)

### Phase 7: SEO & Schema ✅ **COMPLETED**

**Objective:** Update all SEO-related configurations

#### ~~7.1 Organization Schema~~ ✅ **COMPLETED**

**File: `src/schemas/organization-schema.js`** ✅
- Updated with PropVA branding
- Name, URLs, logos, and description all updated
- Using propva-investment-property.png as featured image

#### ~~7.2 Layout Metadata~~ ✅ **COMPLETED**

**File: `src/app/layout.jsx`** ✅
- [x] Update title template (template: '%s | PropVA')
- [x] Update default title ('PropVA: Simplify Your Property Investment Portfolio')
- [x] Update description (property investment focused)
- [x] Review all icon paths (all correctly configured)

### Phase 8: Images & Screenshots

**Objective:** Replace all product screenshots and imagery

#### 8.1 Screenshot Replacement

**Directory: `public/screenshots/`**
- [ ] app.png - Main application dashboard
- [ ] chat.png - Chat/AI interface
- [ ] profile.png - User profile
- [ ] competitors.png - Competitive analysis
- [ ] engagement.png - Engagement metrics
- [ ] networking.png - Networking features

#### 8.2 Team & Company Photos

**Directories:**
- [ ] `public/company/` - Company culture photos
- [ ] `public/team/` - Team member photos
- [ ] `public/testimonials/` - Customer photos

#### 8.3 Partner Logos

**Directories:**
- [ ] `public/logo-cloud/` - Partner company logos
- [ ] `public/logo-cluster/` - Integration logos
- [ ] `public/logo-timeline/` - Timeline logos

### Phase 9: Content Rules & Documentation

**Objective:** Update project documentation and rules

#### 9.1 Project Rules

**File: `.cursorrules`**
- [x] Update project description
- [x] Update domain reference
- [x] Adjust content rules (e.g., British English requirement)

#### 9.2 README Updates

**File: `README.md`**
- [x] Update project title
- [x] Update domain references
- [x] Update deployment URLs
- [x] Review all documentation

#### ~~9.3 Changelog & License~~ ✅ **COMPLETED**

- [x] `CHANGELOG.md` deleted - not needed for PropVA
- [x] `LICENSE.md` contains standard Tailwind UI license (appropriate, no changes needed)

#### 9.4 Finalize Documentation Updates

**Complete Documentation Rebranding:**
- [ ] Finalize `new-brand-description.md` with complete app/service description
- [ ] Review and finalize `documents/mixpanel-integration-guide-NEW.md`
- [ ] Review and finalize `documents/logo-customization-index-NEW.md`
- [ ] Remove old Mine Seek documentation files:
  ```bash
  # After confirming new versions are complete
  rm mineseek-description.md
  rm documents/mixpanel-integration-guide.md
  rm documents/logo-customization-index.md
  
  # Rename new versions to remove -NEW suffix
  mv new-brand-description.md brand-description.md
  mv documents/mixpanel-integration-guide-NEW.md documents/mixpanel-integration-guide.md
  mv documents/logo-customization-index-NEW.md documents/logo-customization-index.md
  ```

### ~~Phase 10: Optional Features~~ ❌ **NOT NEEDED**

**Note:** Blog and Sanity CMS features are not being used for PropVA. The `_disabled_pages/` directory contains these unused features.

---

## 4. Testing Plan

### 4.1 Functional Tests

| Test Case | Component | Expected Result |
|-----------|-----------|-----------------|
| Brand display | All pages | New brand name and logo visible |
| Navigation | Header/Footer | All links functional with correct URLs |
| Forms | Contact page | Form submits with correct email |
| Analytics | Mixpanel | Events tracking to new project |
| Deployment | GitHub Actions | Deploys to new domain |

### 4.2 SEO Tests

1. **Metadata Verification**:
   - Open Graph tags show new brand
   - Twitter cards display correctly
   - Schema.org data reflects new organization

2. **Search Console Setup**:
   - Submit new sitemap
   - Verify domain ownership
   - Check for crawl errors

### 4.3 Cross-Browser Testing

1. **Desktop Browsers**: Chrome, Firefox, Safari, Edge
2. **Mobile Browsers**: iOS Safari, Chrome Android
3. **PWA Features**: Install prompt, offline functionality

---

## 5. Deployment Checklist

### Pre-Deployment

- [ ] All brand elements replaced (INCOMPLETE - homepage and testimonials still reference Mine Seek)
- [ ] Domain DNS configured for propva.com.au
- [x] GitHub repository settings updated
- [x] Environment variables not needed (Sanity CMS not used)
- [x] Analytics accounts created and configured (Mixpanel with PropVA token)

### Deployment Steps

1. **Initial Deploy**:
   ```bash
   git add -A
   git commit -m "Complete rebranding from Mine Seek to [New Brand]"
   git push origin main
   ```

2. **Verify GitHub Actions**:
   - Check Actions tab for successful build
   - Confirm deployment to gh-pages branch
   - Verify CNAME file in deployment

3. **Post-Deployment**:
   - [ ] Test live site at new domain
   - [ ] Verify all tracking pixels firing
   - [ ] Submit sitemap to search engines
   - [ ] Set up domain monitoring

### Rollback Plan

If issues arise:
1. Revert to previous commit: `git revert HEAD`
2. Push to trigger rebuild: `git push origin main`
3. Domain will continue serving previous version

---

## 6. Maintenance Considerations

### Regular Updates

1. **Content Updates**: All marketing copy in JSX files
2. **Analytics Review**: Monthly tracking verification
3. **Dependency Updates**: Quarterly npm audit
4. **Domain Renewal**: Annual domain and SSL management

### Future Enhancements

1. **Blog Activation**: Enable when content strategy ready
2. **Internationalization**: Add language support if needed
3. **A/B Testing**: Implement testing framework
4. **Performance Optimization**: Implement image optimization

---

## 7. Migration Verification Checklist

### ✅ Completed Items

- [x] No "Mine Seek" or "mineseek" text remains (except in this migration plan and testimonial quotes)
- [x] No "mineseek.com.au" domain references remain (Updated to propva.com.au)
- [x] All logo and favicon images updated with PropVA brand assets
- [x] Email addresses updated throughout (now using PropVA addresses)
- [x] All metadata and SEO configuration updated with PropVA branding
- [x] Navigation links updated (login URL to app.propva.com.au)
- [x] Footer content updated with PropVA branding
- [x] Pricing and contact page content fully updated
- [ ] Homepage content partially updated (hero and features still reference Mine Seek)
- [x] Company page active and updated with PropVA content
- [x] Organization schema updated with PropVA information
- [x] Mixpanel analytics configured with PropVA token
- [x] Google Ads and LinkedIn tracking removed (not needed)
- [x] Documentation updated (app_description.md, logo-customization-index.md)
- [x] Project rules (.cursorrules) updated with PropVA domain and description
- [x] README.md fully updated with PropVA branding and deployment info
- [x] Layout metadata (title template, descriptions, icons) fully configured
- [x] Theme color confirmed (#DC5E06)
- [x] GitHub Actions deployment workflow configured

### ⏳ Remaining Tasks

**Critical Content Updates (Blocks Deployment):**
- [ ] Update homepage hero section in `src/app/page.jsx` (line 59)
- [ ] Update homepage feature descriptions in `src/app/page.jsx` (lines 91, 119)
- [ ] Update all 6 testimonial quotes in `src/components/testimonials.jsx`
- [ ] Update testimonial call-to-action in `src/components/testimonials.jsx` (line 149)
- [ ] Fix "Mine Seek logo" comment in `src/components/logo-timeline.jsx` (line 45)

**Visual Assets:**
- [ ] Replace screenshots in `public/screenshots/` with PropVA app images
- [ ] Update integration logos in `public/logo-cluster/` to match PropVA's actual integrations (remove WAMEX, ArcGIS, OSDU, etc.)

**Other Tasks:**
- [ ] Update social media links in footer (currently pointing to generic platforms)
- [ ] Verify analytics tracking in production
- [ ] Test social sharing previews with new brand
- [ ] Configure SSL certificate for propva.com.au domain
- [ ] Deploy to production and verify live site

### Sign-off Criteria

- [ ] Marketing team approves all copy
- [ ] Design team approves visual implementation  
- [ ] Legal team approves terms/privacy links
- [x] Technical functionality verified in local development
- [ ] Analytics team confirms tracking in production 