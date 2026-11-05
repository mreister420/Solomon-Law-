# Local QA and Handover

Verified 5 November 2026 using headless Chrome / Playwright.

## Passed
- All seven pages at 390px, 768px and 1440px widths (21 page/viewport checks).
- One H1 per page, unique IDs, no horizontal document overflow.
- All inline images decode successfully; hero backgrounds and local file/anchor destinations exist.
- All seven .html routes return successfully on a local static HTTP server, including repeat requests.
- Nine selected ED photos have named WebP assets and responsive smaller versions. About/Team has exactly two Shanay photographs, with the other two replaced by the supplied stock images.
- Mobile navigation opens/closes; Team and Network anchors resolve.
- FAQ disclosure interaction toggles.
- Contact form rejects missing fields, invalid email and missing consent; prepares encoded WhatsApp summary and visible fallback.
- Network form requires fields, practice areas and consent; prepares the expected email summary.
- Chatbot service menus, Back, Cancel, invalid phone handling, consent and full encoded enquiry summary on mobile and desktop.
- WhatsApp destinations consistently use 27607625530, confirmed by client.
- No uncaught JavaScript errors during the tested flows.
- No messages were sent during tests; external handoffs were captured locally.
- Production ZIP uses forward-slash paths and index.html at its root; archive integrity checked.

## Production Characteristics
This is a static site; there is no compilation step, package installation or Node.js requirement. The clean final folder is the production output. It has no framework routing or Vercel-only dependency.

## Remaining Host/Owner Checks
- Actual WhatsApp delivery and email-client behaviour must be tested manually on the deployed domain and a real phone. A prepared message is not a sent message.
- No automated backend form delivery is configured.
- External social URLs and Google Maps destinations are preserved; account ownership, availability and final location must be confirmed by the firm.
- Enable HTTPS and verify the final production domain, sitemap and structured data.
- Review biographies, privacy disclosures and forthcoming News topics before publication.
- Browser checks used Chrome, not a complete Safari/Firefox or physical-device test matrix.
