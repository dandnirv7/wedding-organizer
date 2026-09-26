# PRD.md

# Wedding Organizer Landing Page — Product Requirements Document

## 1\. Product Overview

### Product Name

Wedding Organizer Landing Page

### Product Type

Marketing / Lead Generation Website

### Business Category

Wedding Organizer / Wedding Planning & Coordination Service

### Primary Purpose

Membangun kepercayaan dan ketertarikan calon pengantin terhadap layanan Wedding Organizer, kemudian mengarahkan mereka untuk melakukan konsultasi atau inquiry.

### Primary Conversion

**Mulai Konsultasi**

### Secondary Conversions

- Lihat Pernikahan Kami
- Lihat Layanan
- Hubungi via WhatsApp
- Request Proposal
- Submit Wedding Inquiry

---

# 2\. Product Goals

## Primary Goals

### Goal 01 — Build Emotional Connection

Website harus memberikan kesan emosional sejak Hero melalui video dan photography dari real wedding.

### Goal 02 — Communicate Service Value

Pengunjung harus memahami apa yang dilakukan Wedding Organizer dan bagaimana layanan tersebut membantu mereka.

### Goal 03 — Establish Trust

Website harus menunjukkan bukti nyata melalui:

- Portfolio
- Testimonials
- Experience
- Process
- Service clarity

### Goal 04 — Reduce Uncertainty

Pengunjung harus memahami:

- Apa yang dilakukan WO
- Bagaimana prosesnya
- Apa yang bisa mereka dapatkan
- Apa langkah selanjutnya

### Goal 05 — Generate Qualified Leads

Website harus mengarahkan calon pengantin yang relevan untuk melakukan konsultasi.

---

# 3\. Non-Goals

Landing page bukan ditujukan untuk:

- Menjadi aplikasi wedding planning
- Menjadi marketplace vendor
- Menjadi wedding directory
- Menyediakan wedding planning tools
- Mengelola booking secara kompleks
- Menampilkan seluruh operasional internal WO
- Menjadi katalog vendor lengkap

Fokus utama tetap:

> **Brand → Trust → Service → Inquiry**

---

# 4\. Target Users

## Primary User

Calon pengantin yang sedang mencari Wedding Organizer.

### User Context

User kemungkinan sedang:

- Mencari WO
- Membandingkan beberapa WO
- Melihat portfolio
- Mencari inspirasi wedding
- Mencari bantuan perencanaan
- Mencari vendor
- Menentukan budget
- Mencari informasi tentang proses kerja WO

---

# 5\. User Intent

User dapat datang dengan beberapa intent.

## Intent 01 — Exploration

> "Saya sedang mencari WO."

Kebutuhan:

- First impression
- Portfolio
- Brand credibility
- Service overview

---

## Intent 02 — Validation

> "Saya ingin tahu apakah WO ini cocok untuk saya."

Kebutuhan:

- Portfolio
- Services
- Testimonials
- Experience
- Wedding types

---

## Intent 03 — Comparison

> "Saya sedang membandingkan beberapa WO."

Kebutuhan:

- Differentiator
- Service details
- Process
- Packages
- Proof

---

## Intent 04 — Conversion

> "Saya tertarik dan ingin berbicara dengan mereka."

Kebutuhan:

- Clear CTA
- WhatsApp
- Consultation form
- Contact information

---

# 6\. User Journey

```
Landing Page
      ↓
Hero Video
      ↓
Understand Brand
      ↓
Explore Services
      ↓
View Real Weddings
      ↓
Evaluate Capability
      ↓
Understand Process
      ↓
Review Testimonials / Packages
      ↓
FAQ
      ↓
Consultation CTA
      ↓
WhatsApp / Inquiry Form
```

---

# 7\. Information Architecture

## Main Structure

```
Landing Page
│
├── Hero
├── Introduction
├── Services
├── Real Weddings
├── Why Us
├── How We Work
├── Packages / Investment
├── Testimonials
├── FAQ
├── Final CTA
└── Footer
```

---

# 8\. Functional Requirements

## FR-01 — Hero

The website MUST provide a hero section containing:

- Wedding video
- Brand / category identification
- Primary headline
- Supporting copy
- Primary CTA
- Optional secondary CTA

### Expected Interaction

Primary CTA directs users to the consultation/inquiry flow.

Secondary CTA directs users to the portfolio.

---

# 9\. FR-02 — Hero Video

Hero video MUST:

- Autoplay
- Be muted by default
- Loop
- Be optimized for web
- Have an appropriate fallback poster image
- Preserve important visual subjects across responsive breakpoints
- Not be required to understand the core message

### Performance Requirement

Video should be optimized to avoid significantly delaying the first meaningful content.

Potential implementation:

```
Desktop Video
Mobile Video / Poster
        ↓
Responsive Media Strategy
```

---

# 10\. FR-03 — Introduction

Introduction section MUST communicate:

- Who the business is
- What philosophy they have
- How they approach wedding planning
- Emotional value of the service

The section SHOULD remain concise.

---

# 11\. FR-04 — Services

Services section MUST:

- Clearly communicate available services
- Explain each service in concise language
- Communicate the benefit of each service
- Provide optional detail CTA

Potential services:

- Full Wedding Planning
- Wedding Day Coordination
- Traditional Wedding
- Intimate Wedding
- Custom Wedding

Actual services MUST be validated with the client before implementation.

---

# 12\. FR-05 — Real Weddings / Portfolio

Portfolio MUST be a major content section.

Each portfolio item SHOULD support:

- Main image
- Couple name
- Wedding concept
- Venue
- Location
- Optional wedding type
- Optional project description

### Portfolio Interaction

Potential interaction:

```
Featured Wedding
      ↓
View Project
      ↓
Project Detail / Gallery
```

If individual project pages are not required, the landing page may use a gallery/lightbox instead.

---

# 13\. FR-06 — Why Us

The section MUST communicate the primary value pillars of the service.

Potential pillars:

- Structured planning
- Comprehensive coordination
- Personal approach
- Wedding-day support

Claims must be based on actual client capabilities.

---

# 14\. FR-07 — Process

Process section MUST explain the customer journey after contacting the business.

Default structure:

```
01 — Konsultasi
02 — Perencanaan
03 — Persiapan
04 — Hari Pernikahan
```

The actual process should be updated based on the client's operational workflow.

---

# 15\. FR-08 — Packages / Investment

The landing page MAY include package information.

Two supported modes:

### Mode A — Public Pricing

Display:

- Package name
- Suitable customer
- Included services
- Price
- CTA

### Mode B — Consultation-Based Pricing

Display:

- Explanation of customized service
- CTA to request proposal
- Consultation pathway

The implementation MUST follow the client's actual pricing strategy.

---

# 16\. FR-09 — Testimonials

Testimonials MUST:

- Use authentic customer statements
- Include customer name where permission is available
- Optionally include wedding context
- Optionally include couple photo

Testimonials MUST NOT be fabricated.

---

# 17\. FR-10 — FAQ

FAQ MUST address the most important pre-conversion questions.

Potential questions:

- Kapan sebaiknya mulai menggunakan WO?
- Apakah paket dapat disesuaikan?
- Apakah WO membantu vendor?
- Apakah menangani pernikahan adat?
- Apakah melayani luar kota?
- Bagaimana proses konsultasi?
- Berapa biaya jasa WO?

FAQ content MUST reflect actual client policies.

---

# 18\. FR-11 — Final CTA

Final CTA MUST provide a clear next step.

Primary action:

**Mulai Konsultasi**

Potential secondary actions:

- WhatsApp
- Request Proposal
- Contact Us

---

# 19\. FR-12 — Contact / Inquiry

The inquiry flow SHOULD allow users to contact the business with minimal friction.

Potential channels:

### WhatsApp

Direct WhatsApp conversation.

### Inquiry Form

Potential fields:

```
Nama
Nama Pasangan
Tanggal Pernikahan
Lokasi
Estimasi Jumlah Tamu
Jenis Pernikahan
Layanan yang Dibutuhkan
Budget
Nomor WhatsApp
Email
Pesan Tambahan
```

Only fields required for lead qualification should be mandatory.

---

# 20\. FR-13 — Navigation

Desktop navigation SHOULD provide access to:

```
Home
Services
Our Weddings
About
FAQ
```

Primary CTA:

**Mulai Konsultasi**

Navigation SHOULD remain visible and lightweight.

---

# 21\. FR-14 — Mobile Navigation

Mobile navigation MUST:

- Be accessible from a compact menu
- Provide all primary navigation items
- Keep CTA accessible
- Avoid unnecessary complexity

---

# 22\. FR-15 — Footer

Footer MUST provide:

- Brand
- Main navigation
- Contact information
- WhatsApp
- Instagram
- Email
- Legal links
- Copyright

Actual contact details must be supplied by the client.

---

# 23\. Non-Functional Requirements

## NFR-01 — Performance

The website SHOULD prioritize fast initial loading despite the use of large photography and hero video.

Requirements:

- Compress images
- Use modern image formats where supported
- Lazy-load below-the-fold images
- Optimize hero media
- Avoid unnecessary JavaScript
- Avoid oversized assets

---

# 24\. NFR-02 — Responsive Design

The website MUST support:

```
Desktop
Tablet
Mobile
```

Primary breakpoint strategy:

```
Mobile: < 768px
Tablet: 768–1279px
Desktop: 1280px+
```

---

# 25\. NFR-03 — Accessibility

The website SHOULD provide:

- Sufficient color contrast
- Semantic HTML
- Keyboard navigation
- Accessible interactive controls
- Descriptive image alt text
- Reduced-motion support
- Accessible form labels
- Video fallback content

---

# 26\. NFR-04 — Browser Support

The website SHOULD support current versions of:

- Chrome
- Safari
- Firefox
- Edge

Mobile support should include current versions of:

- iOS Safari
- Android Chrome

---

# 27\. NFR-05 — SEO

The landing page SHOULD include:

### Technical SEO

- Semantic HTML
- One primary H1
- Proper heading hierarchy
- Meta title
- Meta description
- Canonical URL
- Open Graph metadata
- Structured data where appropriate
- Descriptive image alt text
- Sitemap where applicable

---

# 28\. NFR-06 — Analytics

The website SHOULD support measurement of:

```
Page View
Hero CTA Click
Portfolio Click
Service Interaction
WhatsApp Click
Inquiry Form Start
Inquiry Form Submit
Email Click
Instagram Click
```

Analytics implementation should follow the client's chosen analytics platform and privacy requirements.

---

# 29\. Content Requirements

All primary website content MUST use Bahasa Indonesia.

### Tone

```
Hangat
Personal
Elegan
Natural
Profesional
```

### Language Style

Use:

> Kamu / Pernikahanmu / Ceritamu

when appropriate to maintain a personal tone.

Avoid overly formal corporate language.

---

# 30\. Visual Requirements

The website MUST follow the visual direction established in `design.md`.

### Primary Visual Characteristics

```
Editorial
Warm
Elegant
Human
Timeless
Minimal
Photography-led
```

### Primary Colors

```
Charcoal  #1E1D1B
Ivory    #F7F3EE
Beige    #E8DED2
Champagne #B69B72
White    #FFFFFF
```

### Typography

```
Display: Cormorant Garamond
Body: Manrope
```

---

# 31\. Media Requirements

## Photography

Priority should be given to real wedding photography.

Required categories:

- Couple
- Ceremony
- Reception
- Decoration
- Detail
- Candid moments
- Venue
- Traditional elements where relevant

---

## Video

Hero video should communicate:

- Emotion
- Couple
- Celebration
- Venue
- Wedding details
- Overall production quality

Video should not be purely decorative.

---

# 32\. Responsive Requirements

## Desktop

Hero:

```
Full viewport / near full viewport
Large typography
Cinematic video
Clear CTA
```

Portfolio:

```
Editorial grid
Large images
Asymmetric composition where appropriate
```

---

## Tablet

Reduce:

- Typography
- Section spacing
- Image scale

Maintain:

- Visual hierarchy
- CTA visibility
- Photography prominence

---

## Mobile

Hero:

- Strong image/video crop
- Reduced typography
- Clear CTA
- Minimal copy

Services:

- Stack vertically

Portfolio:

- Vertical list or horizontal browsing

Testimonials:

- Single-column layout

FAQ:

- Accordion

---

# 33\. Interaction Requirements

## Buttons

Buttons MUST provide:

- Visible default state
- Hover state
- Active state
- Focus state

---

## Links

Links SHOULD provide clear hover/focus feedback.

---

## FAQ

FAQ SHOULD use accordion behavior to prevent excessive vertical content.

---

## Portfolio

Portfolio MAY use:

- Lightbox
- Gallery
- Dedicated project pages
- Horizontal scroll

depending on final implementation scope.

---

# 34\. Conversion Requirements

## Primary CTA Placement

Primary CTA SHOULD appear:

- Hero
- Navigation
- Relevant service sections where appropriate
- Final CTA

---

## CTA Strategy

CTA language should remain consistent.

Primary:

> **Mulai Konsultasi**

Alternative contextual CTA:

> **Mulai Rencanakan Pernikahanmu**

Portfolio:

> **Lihat Pernikahan Kami**

---

# 35\. Trust Requirements

Trust should be established through actual evidence.

Potential evidence:

```
Real Wedding Portfolio
Testimonials
Experience
Wedding Count
Client Logos
Vendor Partners
Process
Service Detail
```

Any numerical or superlative claim MUST be verified before publication.

---

# 36\. Data Requirements

The following data must be collected from the client before final production:

```
Brand Name
Logo
Tagline
Brand Description
Service List
Service Descriptions
Wedding Types
Geographic Coverage
Portfolio
Portfolio Metadata
Testimonials
Experience
Wedding Count
Team Information
Vendor / Partner Information
Packages
Pricing
Booking Requirements
Consultation Process
WhatsApp
Email
Instagram
Address
Operating Hours
Legal Information
```

---

# 37\. Open Questions

The following questions must be resolved before final content and implementation:

```
[ ] Apa nama resmi brand?
[ ] Apa positioning utama brand?
[ ] Siapa target utama mereka?
[ ] Apa service utama yang paling ingin dijual?
[ ] Apakah mereka spesialis wedding adat tertentu?
[ ] Area layanan mereka di mana saja?
[ ] Apakah mereka menangani destination wedding?
[ ] Berapa tahun pengalaman?
[ ] Berapa jumlah wedding yang telah ditangani?
[ ] Apa differentiator utama mereka?
[ ] Apakah pricing ditampilkan?
[ ] Apa package yang tersedia?
[ ] Bagaimana proses booking?
[ ] Bagaimana proses konsultasi?
[ ] Apakah menggunakan WhatsApp sebagai primary channel?
[ ] Apakah membutuhkan inquiry form?
[ ] Apakah portfolio memiliki metadata lengkap?
[ ] Apakah testimonial sudah tersedia?
[ ] Apakah ada video hero final?
[ ] Apakah tersedia mobile-specific video?
[ ] Apakah ada brand guideline existing?
```

---

# 38\. MVP Scope

## Included

```
Hero Video
Introduction
Services
Real Wedding Portfolio
Why Us
Process
Packages / Investment
Testimonials
FAQ
Final CTA
Footer
Responsive Design
WhatsApp / Inquiry
Basic SEO
Analytics
```

---

# 39\. Optional / Future Scope

Potential future features:

```
Individual Wedding Case Studies
Portfolio Filtering
Advanced Gallery
Wedding Package Calculator
Online Consultation Booking
Calendar Integration
Lead Management
Client Login
Wedding Planning Dashboard
Vendor Directory
Blog / Journal
```

These features are outside the initial landing page scope unless explicitly required.

---

# 40\. Acceptance Criteria

## Hero

- [ ] Video loads correctly
- [ ] Video autoplay works where supported
- [ ] Video is muted
- [ ] Poster/fallback exists
- [ ] Headline is readable
- [ ] Primary CTA is visible
- [ ] Hero works on mobile

---

## Services

- [ ] All actual services are represented
- [ ] Service descriptions are understandable
- [ ] Service CTA works
- [ ] No unsupported claims

---

## Portfolio

- [ ] Real wedding imagery is used
- [ ] Portfolio items are identifiable
- [ ] Images are optimized
- [ ] Portfolio interaction works
- [ ] Mobile layout works

---

## Testimonials

- [ ] Testimonials are authentic
- [ ] Attribution is correct
- [ ] Layout works responsively

---

## FAQ

- [ ] Questions reflect real customer concerns
- [ ] Accordion works
- [ ] Content is accurate

---

## CTA

- [ ] Primary CTA works
- [ ] WhatsApp link works
- [ ] Inquiry form works if included
- [ ] Success state exists
- [ ] Error state exists

---

# 41\. Quality Criteria

The finished landing page should satisfy:

### Brand

```
Warm
Editorial
Elegant
Human
Professional
```

### UX

```
Clear
Simple
Predictable
Responsive
Conversion-oriented
```

### Content

```
Concise
Authentic
Specific
Personal
Evidence-based
```

### Visual

```
Photography-led
Generous whitespace
Strong typography
Minimal UI
Controlled color
```

### Technical

```
Fast
Responsive
Accessible
SEO-ready
Analytics-ready
```

---

# 42\. Success Metrics

The landing page can be evaluated using:

## Primary Metric

**Qualified consultation inquiries**

---

## Secondary Metrics

- Hero CTA click-through rate
- WhatsApp click-through rate
- Inquiry form completion rate
- Portfolio engagement
- Average engagement time
- Scroll depth
- Service section engagement
- FAQ interaction
- Return visits

Metrics should be interpreted according to traffic source, campaign context, and measurement period.

---

# 43\. Product Requirement Summary

```
PRODUCT
Wedding Organizer Landing Page

PRIMARY USER
Couples planning their wedding

PRIMARY PROBLEM
Wedding planning involves complexity,
coordination, vendors, timelines, and decisions.

PRIMARY VALUE
Professional planning and coordination
that allows couples to focus on their wedding.

PRIMARY PROOF
Real wedding portfolio
Testimonials
Experience
Process
Service clarity

PRIMARY EXPERIENCE
Emotional + Professional + Personal

PRIMARY CTA
Mulai Konsultasi

PRIMARY CHANNEL
WhatsApp / Inquiry

PRIMARY VISUAL
Real Wedding Video + Photography
```

---

# 44\. Product Principle

> **The website should not merely explain that the client is a Wedding Organizer. It should make prospective couples understand the value of having someone they can trust to plan, coordinate, and manage the details of one of the most meaningful days in their lives.**
