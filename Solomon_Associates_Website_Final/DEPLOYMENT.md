# Deployment Guide for William

## 1. Project Overview
Solomon & Associates Inc is a static HTML/CSS/JavaScript website. No server application, framework, database or Vercel service is required.

## 2. Tech Stack and Requirements
- HTML5, CSS and browser JavaScript.
- Node.js version: not required.
- Dependencies: none. No package.json, npm install, npm run dev or npm run build is needed.
- Environment variables: none. Do not put secret keys in these public files.

## 3. Local Preview
Unzip the package and open index.html in a browser. All navigation uses real .html files and relative asset paths. For a server preview, any ordinary static server works (for example, Python 3: python -m http.server 8080).

## 4. Production Output
The contents of Solomon_Associates_Website_Final are the production files. There is no dist folder or compilation step. The ZIP has index.html at its top level and assets/ as a real folder, with forward-slash entry paths.

## 5. Upload Steps
1. Back up the existing hosted site.
2. Unzip Solomon_Associates_Website_Final.zip.
3. Confirm index.html is directly beside about.html, services.html, network.html, news.html, faq.html, contact.html, styles.css and script.js.
4. Upload those HTML/CSS/JS files, robots.txt, sitemap.xml and the complete assets/ folder to public_html or the host's public web root.
5. Do not upload the outer containing folder: public_html/index.html must exist.
6. README.md, DEPLOYMENT.md and QA-REPORT.md are handover documents; they do not need to be publicly uploaded.
7. Enable HTTPS and visit the domain. Follow the checklist below.

## 6. Routes and Domain
No React Router fallback, Node process or rewrite is required. Keep the .html links; refreshing any page should work directly. The Network page is network.html. The Team link opens about.html#team.

SEO files assume https://www.solomonassociates.co.za. Confirm the final domain and update sitemap.xml, robots.txt, the Network canonical URL and homepage structured data if different. The optional Vercel configuration is deliberately excluded from this host-neutral package.

## 7. Images
Photos retain ED file numbers as WebP filenames. Each has a smaller -640.webp variant selected by the browser with srcset. Dimensions and descriptive alt text are included. WebP is supported in current mainstream browsers; legacy browsers without WebP support are outside this handover's compatibility target. Original JPEGs remain in the supplied source location, not in the upload package.

Do not rename individual assets without updating their references. Upload every supplied asset, including small variants. Do not recreate Windows backslash filenames.

## 8. Forms and Chatbot
- Contact form: required fields and consent prepare an encoded WhatsApp summary. The visitor must review and press Send in WhatsApp. A fallback link remains visible if a popup is blocked.
- Chatbot: controlled by script.js on every page. Provides general service information, not legal advice. Intake includes consent and prepares an encoded WhatsApp summary. It does not automatically deliver an enquiry, accept a matter or create an attorney-client relationship.
- Network form: validates fields, consent and at least one practice area; opens a formatted email to info@solomonassociates.co.za. The applicant must press Send in their email client. Long mailto messages and users without an email app may require contacting the firm directly.
- There is no backend, submission database, email delivery service or automatic follow-up.
- For reliable automatic delivery later, connect a real form endpoint and update the scripts and privacy disclosures. Do not claim successful delivery until that endpoint confirms it.
- Personal information is held in the page while in use; scripts do not save intake to localStorage or send it to an AI provider. WhatsApp/email handoff transfers it to the visitor's chosen external service.

## 9. Contact Details and Content Approval
The package consistently uses 060 762 5530 (+27607625530; WhatsApp 27607625530), confirmed by the client on 30 October 2026. If changed later, update all occurrences in HTML, script.js and these documents together.

Email: info@solomonassociates.co.za.
Address: Office 5, Brandwag Park, 82 Mchardy Avenue, Brandwag, Bloemfontein, 9301.
News topics marked "Article coming soon" are not published articles. Team biographies are supplied by the client and require the firm's final approval.

## 10. Troubleshooting
- Images missing: confirm assets/ uploaded as a real folder, exact filename case and forward slashes.
- 404 on pages or refresh: confirm all .html files are directly in public_html; remove conflicting host-specific clean-URL rules.
- Styles missing: confirm styles.css beside index.html, then hard-refresh or clear CDN/browser cache.
- Chatbot missing: confirm script.js is linked, uploaded and not blocked; check browser console.
- WhatsApp does not open: allow the popup or use the visible fallback link; confirm the international number has no leading zero, spaces or plus sign in wa.me.
- Email form does not open: configure an email client or contact the firm directly. A mailto link does not send automatically.
- Updates not showing: check upload location and clear host/CDN cache.

## 11. Post-Deployment Checklist
- Open all seven pages and refresh each URL.
- Test header, mobile menu, footer, Team and Network anchor links.
- Confirm photos, logos and mobile portrait framing.
- Check telephone, email, social and WhatsApp destinations on a real phone.
- Test Contact required fields, consent, popup fallback and final WhatsApp Send.
- Test Network required fields, practice area selection, consent and email handoff.
- Complete a chatbot enquiry, test Back/Cancel, consent and WhatsApp handoff.
- Confirm HTTPS, final domain and SEO files.
- Obtain the firm's approval of the phone number, biographies, privacy wording and content before launch.
