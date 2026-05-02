# Dental Essential — Deployment & SEO Setup Guide

## Part 1: Netlify Deployment

### Step 1: Push Code to GitHub
```bash
cd Dentist-Website
git add .
git commit -m "SEO optimization: patient-intent content, FAQs, schema, landing pages"
git push origin main
```

### Step 2: Deploy on Netlify
1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Select your GitHub repository
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18 (set in Environment variables: `NODE_VERSION` = `18`)
4. Add environment variable:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = your Formspree endpoint
5. Click **Deploy site**

### Step 3: Install Next.js Plugin
- Go to **Site settings** → **Plugins** → Search for `@netlify/plugin-nextjs`
- Install it (this handles SSR/ISR for Next.js automatically)

---

## Part 2: Connect GoDaddy Domain (.co.in)

### Step 1: Add Domain in Netlify
1. Go to **Site settings** → **Domain management** → **Add custom domain**
2. Enter: `dentalessential.co.in`
3. Also add: `www.dentalessential.co.in`

### Step 2: Configure DNS in GoDaddy
1. Log into [GoDaddy](https://www.godaddy.com) → **My Products** → **DNS Management**
2. **Delete** any existing A records and CNAME for `@` and `www`
3. Add these DNS records:

| Type  | Name | Value                          | TTL    |
|-------|------|--------------------------------|--------|
| A     | @    | 75.2.60.5                      | 600    |
| CNAME | www  | your-site-name.netlify.app     | 1 Hour |

> Replace `your-site-name` with your actual Netlify site subdomain.

### Step 3: Enable HTTPS/SSL
- In Netlify → **Domain settings** → **HTTPS** → Click **Verify DNS** → **Provision certificate**
- SSL will be auto-provisioned by Let's Encrypt (takes 5–15 minutes)

### Step 4: Redirect www ↔ non-www
- In Netlify → **Domain settings** → Set **primary domain** to `www.dentalessential.co.in`
- Netlify auto-redirects the other version

---

## Part 3: Google Search Console Setup

### Step 1: Add Property
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add property** → Choose **URL prefix**
3. Enter: `https://www.dentalessential.co.in`

### Step 2: Verify Ownership
- Choose **HTML tag** method
- Copy the meta tag, e.g.: `<meta name="google-site-verification" content="XXXXX" />`
- Add it to `app/layout.tsx` inside metadata:
```typescript
export const metadata = {
  // ... existing metadata
  verification: {
    google: 'YOUR_VERIFICATION_CODE_HERE',
  },
};
```

### Step 3: Submit Sitemap
1. In Search Console → **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**

### Step 4: Request Indexing
- In Search Console → **URL Inspection**
- Enter your homepage URL → Click **Request Indexing**
- Repeat for key pages: `/services/painless-root-canal`, `/services/dental-implants`, etc.

---

## Part 4: Google Business Profile

### Step 1: Create/Claim Profile
1. Go to [business.google.com](https://business.google.com)
2. Search for **"Dental Essential Old Panvel"**
3. If it exists → **Claim this business**; if not → **Add your business**

### Step 2: Fill Complete Information
- **Business name:** Dental Essential
- **Category:** Dentist (primary), Dental Clinic
- **Address:** Shop No. 16, Building No. 7/B, Gurusharnam Complex, Vishrali Naka, Old Panvel – 410206
- **Phone:** +91 877-9648573
- **Website:** https://www.dentalessential.co.in
- **Hours:** Mon–Sat: 10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM; Sunday: Closed

### Step 3: Add Services
Add all treatments: Root Canal, Dental Implants, Braces, Clear Aligners, Smile Designing, Pediatric Dentistry, Crowns & Bridges, Dentures, Wisdom Tooth Extraction, Full Mouth Rehabilitation

### Step 4: Add Photos
Upload clinic photos, team photos, treatment room photos, before/after cases

### Step 5: Encourage Reviews
Ask satisfied patients to leave Google reviews — this is the #1 local SEO factor

---

## Part 5: Monitor Keywords & Traffic

### In Google Search Console:
- **Performance** tab shows which keywords bring traffic
- Track impressions and clicks for patient-intent keywords like:
  - "tooth pain treatment Panvel"
  - "missing teeth replacement"
  - "jaw pain dentist"
  - "braces cost Panvel"

### Key Metrics to Watch:
1. **Total impressions** — how often your pages appear in search
2. **Click-through rate (CTR)** — percentage of impressions that get clicked
3. **Average position** — where you rank for each keyword
4. **Top pages** — which pages get the most traffic

### Monthly SEO Checklist:
- [ ] Check Search Console for new keyword opportunities
- [ ] Respond to Google reviews
- [ ] Update blog with 1-2 new articles targeting patient queries
- [ ] Check for crawl errors and fix them
- [ ] Monitor competitor rankings

---

## SEO Changes Summary

### What Was Done:
1. ✅ **Homepage** — Patient-intent H1, "Facing Dental Problems?" section, FAQ
2. ✅ **10 Service Pages** — Patient problems, FAQs with schema, improved meta, internal links
3. ✅ **7 Blog Posts** — Optimized meta titles & descriptions
4. ✅ **6 New Landing Pages** — High-intent keyword pages (conditions/)
5. ✅ **Local SEO** — JSON-LD LocalBusiness schema, NAP consistency
6. ✅ **Technical SEO** — sitemap.xml, robots.txt, canonical tags, FAQ schema
7. ✅ **Footer** — Already has address, phone, WhatsApp (no changes needed)
