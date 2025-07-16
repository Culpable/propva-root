# Quick Guide: Re-enabling the Company Page

Follow these steps to bring back the Company/About page:

## 1. Move the Page Back

```bash
# Move the page file back to the app directory
mkdir -p src/app/company
mv _disabled_pages/company/page.jsx src/app/company/
```

## 2. Update Navigation

**File: `src/components/navbar.jsx`**

Change:
```javascript
// { href: '/company', label: 'Company' },  // Temporarily disabled
```

To:
```javascript
{ href: '/company', label: 'Company' },
```

## 3. Update Footer

**File: `src/components/footer.jsx`**

Remove the comment wrapper around the About section:
```jsx
{/* About section - temporarily disabled */}
{/* <div>
  ...
</div> */}
```

Change to:
```jsx
<div>
  <SitemapHeading>About</SitemapHeading>
  <SitemapLinks>
    <SitemapLink href="#">Careers</SitemapLink>
    <SitemapLink href="/company">Company</SitemapLink>
  </SitemapLinks>
</div>
```

## 4. Update Sitemap Generation

**File: `src/scripts/generate-sitemap.js`**

Change:
```javascript
// '/company/',   // Temporarily disabled
```

To:
```javascript
'/company/',
```

Then regenerate the sitemap:
```bash
node src/scripts/generate-sitemap.js
```

## 5. Update Documentation (Optional)

**File: `.cursorrules`**

Remove the company line from disabled_pages:
```
└── company/: Company/About page (temporarily disabled)
```

## 6. Clean Up

```bash
# Remove the empty directory
rmdir _disabled_pages/company
```

That's it! The Company page should now be fully restored and accessible. 