// Static enquiry handoff: details are only delivered after the visitor sends in WhatsApp.
(() => {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const summary = [
      "New Website Enquiry - Solomon & Associates Inc", "",
      "Client Name:", data.get("full-name"), "", "Contact Number:", data.get("phone"),
      "", "Email:", data.get("email"), "", "Service Category:", data.get("service"),
      "", "Matter Summary:", data.get("message"), "",
      "Consent:", "Client confirmed consent to be contacted.",
      "", "Website Source:", "Solomon & Associates Inc contact form."
    ].join("\n");
    const link = form.action + "?text=" + encodeURIComponent(summary);
    const status = form.querySelector(".contact-form-status");
    status.textContent = "Enquiry prepared, not yet sent. ";
    const fallback = document.createElement("a");
    fallback.href = link;
    fallback.target = "_blank";
    fallback.rel = "noopener noreferrer";
    fallback.textContent = "Open WhatsApp to review and send";
    status.append(fallback);
    window.open(link, "_blank", "noopener,noreferrer");
  });
})();

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    });
  });
}

document.querySelectorAll(".faq-section").forEach((group) => {
  group.addEventListener("toggle", (event) => {
    if (event.target.tagName !== "DETAILS" || !event.target.open) {
      return;
    }

    group.querySelectorAll("details[open]").forEach((item) => {
      if (item !== event.target) {
        item.removeAttribute("open");
      }
    });
  }, true);
});

(() => {
  const form = document.querySelector(".network-application-form");
  if (!form) {
    return;
  }

  const status = form.querySelector(".network-form-status");
  const practiceBoxes = Array.from(form.querySelectorAll("input[name='practiceAreas']"));
  const firstPracticeBox = practiceBoxes[0];

  const valueOf = (name) => {
    const field = form.elements[name];
    return field && typeof field.value === "string" ? field.value.trim() : "";
  };

  const checkedValue = (name) => form.querySelector(`input[name="${name}"]:checked`)?.value || "";
  const checkedList = (name) => Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map((item) => item.value);

  const validatePracticeAreas = () => {
    const hasPracticeArea = practiceBoxes.some((box) => box.checked);
    if (firstPracticeBox) {
      firstPracticeBox.setCustomValidity(hasPracticeArea ? "" : "Please select at least one practice area.");
    }
    return hasPracticeArea;
  };

  practiceBoxes.forEach((box) => {
    box.addEventListener("change", validatePracticeAreas);
  });

  const buildNetworkSummary = () => [
    "New Network Application \u2014 Solomon Property Law Network",
    "",
    "Full Name:",
    valueOf("fullName"),
    "",
    "Firm Name:",
    valueOf("firmName"),
    "",
    "Email:",
    valueOf("email"),
    "",
    "Contact Number:",
    valueOf("contactNumber"),
    "",
    "Province:",
    valueOf("province"),
    "",
    "City:",
    valueOf("city"),
    "",
    "Admission Status:",
    valueOf("admissionStatus"),
    "",
    "Years of Experience:",
    valueOf("yearsExperience"),
    "",
    "Registered Conveyancer:",
    checkedValue("conveyancerRegistration"),
    "",
    "Practice Areas:",
    checkedList("practiceAreas").join(", "),
    "",
    "Current Capacity:",
    valueOf("currentCapacity"),
    "",
    "Languages:",
    valueOf("languages"),
    "",
    "Deed Office Coverage:",
    valueOf("deedOfficeCoverage"),
    "",
    "Professional Indemnity Status:",
    valueOf("professionalIndemnityStatus"),
    "",
    "Can Accept Referred Matters:",
    checkedValue("canAcceptReferredMatters"),
    "",
    "Motivation / Additional Information:",
    valueOf("motivation"),
    "",
    "Consent:",
    "Applicant confirmed consent for Solomon & Associates Inc to use the information to assess network interest.",
    "",
    "Source:",
    "Solomon Property Law Network website page.",
  ].join("\n");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validatePracticeAreas();

    if (!form.reportValidity()) {
      return;
    }

    const subject = "New Network Application - Solomon Property Law Network";
    const body = buildNetworkSummary();
    const mailto = `mailto:info@solomonassociates.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.__lastNetworkApplicationMailto = mailto;
    status.innerHTML = `<strong>Application prepared.</strong> Your email client should open with a formatted summary for Solomon &amp; Associates Inc. If it does not, <a href="${mailto}">open the email manually</a>.`;
    window.location.href = mailto;
  });
})();

(() => {
  const firm = {
    name: "Solomon & Associates Inc",
    phoneDisplay: "060 762 5530",
    phoneLink: "+27607625530",
    whatsapp: "27607625530",
    email: "info@solomonassociates.co.za",
    website: "www.solomonassociates.co.za",
    websiteUrl: "https://www.solomonassociates.co.za",
    location: "Bloemfontein",
  };

  const services = {
    conveyancing: {
      label: "Conveyancing",
      startLabel: "Start Conveyancing Enquiry",
      response: [
        "Conveyancing is the legal process involved in transferring property ownership from one party to another. Solomon & Associates Inc can assist with property transfers and related conveyancing matters.",
        "If your enquiry relates to buying, selling or transferring property, you can submit a short enquiry so the firm knows what your matter is about before contacting you.",
      ],
    },
    estate: {
      label: "Estate Administration",
      startLabel: "Start Estate Enquiry",
      response: [
        "Estate administration involves the legal process of handling a deceased estate and related administrative steps. Solomon & Associates Inc can guide clients through the process with care and professionalism.",
        "If your enquiry relates to a deceased estate, estate planning or estate administration, you can submit a short enquiry so the firm can understand the matter before contacting you.",
      ],
    },
    commercial: {
      label: "Commercial Law",
      startLabel: "Start Commercial Law Enquiry",
      response: [
        "Commercial law deals with legal matters involving businesses, agreements, transactions and business relationships. Solomon & Associates Inc can assist with practical legal support for business-related matters.",
        "If your enquiry relates to a business, agreement, transaction or commercial concern, you can submit a short enquiry so the firm can prepare before contacting you.",
      ],
    },
    litigation: {
      label: "Litigation",
      startLabel: "Start Litigation Enquiry",
      response: [
        "Litigation involves resolving disputes through the court process or preparing for possible legal action. Solomon & Associates Inc can assist with dispute-related matters, court representation and strategic legal guidance after reviewing the facts of the matter.",
        "If your enquiry relates to a dispute, claim, demand, court process or urgent legal issue, you can submit a short enquiry so the firm has context before contacting you.",
      ],
    },
    general: {
      label: "General Enquiry",
      startLabel: "Start General Enquiry",
      response: [
        "I can collect your enquiry details and direct them to Solomon & Associates Inc. This is useful if you are not sure which service applies to your matter.",
        "Please avoid sharing unnecessary sensitive information in this chat. The firm can discuss the details with you directly during consultation.",
      ],
    },
  };

  const steps = [
    {
      key: "fullName",
      question: "Please enter your full name.",
      type: "text",
      label: "Full name",
      validate: (value) => value.trim().length >= 2,
      error: "Please enter your full name.",
    },
    {
      key: "phone",
      question: "What is the best contact number for the firm to reach you on?",
      type: "tel",
      label: "Contact number",
      validate: (value) => value.replace(/\D/g, "").length >= 9,
      error: "Please enter a contact number.",
    },
    {
      key: "email",
      question: "Please enter your email address.",
      type: "email",
      label: "Email address",
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      error: "Please enter a valid email address.",
    },
    {
      key: "preferredContact",
      question: "How would you prefer the firm to contact you?",
      type: "choice",
      choices: ["Phone call", "WhatsApp", "Email"],
    },
    {
      key: "summary",
      question: "Please briefly explain what you need assistance with. You do not need to share sensitive details here.",
      type: "textarea",
      label: "Short matter description",
      validate: (value) => value.trim().length >= 8,
      error: "Please add a short description of your enquiry.",
      note: "For your privacy, please avoid sharing ID numbers, banking details, passwords, case numbers or confidential documents in this chat.",
    },
    {
      key: "urgency",
      question: "How urgent is your matter?",
      type: "choice",
      choices: ["General enquiry", "I need assistance soon", "Urgent matter"],
    },
    {
      key: "location",
      question: "Which city or area are you based in?",
      type: "text",
      label: "City or area",
      validate: (value) => value.trim().length >= 2,
      error: "Please enter your city or area.",
    },
    {
      key: "confirm",
      question: "Please confirm your enquiry details",
      type: "confirm",
      error: "Please confirm consent before submitting.",
    },
  ];

  const state = {
    started: false,
    open: false,
    selectedService: "general",
    intake: {},
    stepIndex: 0,
    whatsappLink: "",
  };

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const paragraphs = (items) => items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");

  const boundaryMessageFor = (answer) => {
    const lower = answer.toLowerCase();
    if (/(id number|identity number|banking|bank account|password|case number|confidential document|confidential documents)/.test(lower)) {
      return "Thank you. For your privacy, please avoid sharing unnecessary sensitive information in this chat. The firm can discuss the details with you directly during consultation.";
    }
    if (/(draft|legal document|contract|letter|pleading|legal notice|legal documents)/.test(lower)) {
      return "I'm not able to draft legal documents through this chat. Please contact Solomon & Associates Inc so the firm can properly review your matter and assist where appropriate.";
    }
    if (/(legal advice|what should i do|should i|strong case|weak case|can i sue|what legal action|what action should)/.test(lower)) {
      return "I'm not able to provide legal advice through this chat. I can help collect your enquiry details so Solomon & Associates Inc can contact you directly, or you may contact the firm by phone, email or WhatsApp.";
    }
    return "";
  };

  const widget = document.createElement("section");
  widget.className = "chatbot-widget";
  widget.setAttribute("aria-label", "Solomon & Associates Inc chatbot");
  widget.innerHTML = `
    <button class="chatbot-launcher" type="button" title="Open enquiry assistant" aria-label="Open enquiry assistant" aria-expanded="false" aria-controls="chatbot-panel">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 5.8c0-1.2 1-2.3 2.3-2.3h10.4c1.3 0 2.3 1.1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3h-5.1l-4.6 4.1v-4.1h-.7c-1.3 0-2.3-1-2.3-2.3V5.8Z"/></svg>
      <span>Chat</span>
    </button>
    <div class="chatbot-panel" id="chatbot-panel" role="dialog" aria-modal="false" aria-labelledby="chatbot-title" hidden>
      <div class="chatbot-header">
        <div>
          <p class="chatbot-kicker">Solomon & Associates Inc</p>
          <h2 id="chatbot-title">FAQ & Enquiry Assistant</h2>
        </div>
        <button class="chatbot-close" type="button" aria-label="Close chatbot">&times;</button>
      </div>
      <div class="chatbot-messages" aria-live="polite"></div>
      <div class="chatbot-actions"></div>
      <div class="chatbot-input"></div>
      <p class="chatbot-disclaimer">General information only. This chat does not constitute legal advice or create an attorney-client relationship.</p>
    </div>
  `;

  document.body.appendChild(widget);

  const launcher = widget.querySelector(".chatbot-launcher");
  const panel = widget.querySelector(".chatbot-panel");
  const closeButton = widget.querySelector(".chatbot-close");
  const messages = widget.querySelector(".chatbot-messages");
  const actions = widget.querySelector(".chatbot-actions");
  const inputArea = widget.querySelector(".chatbot-input");

  const scrollMessages = () => {
    messages.scrollTop = messages.scrollHeight;
  };

  const clearControls = () => {
    actions.innerHTML = "";
    inputArea.innerHTML = "";
  };

  const addMessage = (type, content) => {
    const item = document.createElement("div");
    item.className = `chatbot-message chatbot-message-${type}`;
    item.innerHTML = content;
    messages.appendChild(item);
    scrollMessages();
  };

  const bot = (content) => addMessage("bot", content);
  const user = (content) => addMessage("user", `<p>${escapeHtml(content)}</p>`);

  const renderActions = (items) => {
    actions.innerHTML = "";
    inputArea.innerHTML = "";
    items.forEach((item) => {
      const element = item.href ? document.createElement("a") : document.createElement("button");
      element.className = [
        "chatbot-action",
        item.primary ? "chatbot-action-primary" : "",
        item.secondary ? "chatbot-action-secondary" : "",
        item.quiet ? "chatbot-action-quiet" : "",
      ].filter(Boolean).join(" ");
      element.textContent = item.label;
      if (item.href) {
        element.href = item.href;
        if (item.external) {
          element.target = "_blank";
          element.rel = "noopener";
        }
      } else {
        element.type = "button";
        element.dataset.action = item.action;
        if (item.value) {
          element.dataset.value = item.value;
        }
      }
      actions.appendChild(element);
    });
    setTimeout(scrollMessages, 0);
    setTimeout(scrollMessages, 80);
  };

  const intakeNav = () => `
    <div class="chatbot-form-actions">
      <button class="chatbot-submit" type="submit">Continue</button>
      <button class="chatbot-action chatbot-action-quiet" type="button" data-action="intake-back">Back</button>
      <button class="chatbot-action chatbot-action-quiet" type="button" data-action="cancel-enquiry">Cancel Enquiry</button>
    </div>
  `;

  const mainMenu = (announce = true) => {
    clearControls();
    if (announce) {
      bot("<p>What would you like assistance with today?</p>");
    }
    renderActions([
      { label: "Conveyancing", action: "service", value: "conveyancing" },
      { label: "Estate Administration", action: "service", value: "estate" },
      { label: "Commercial Law", action: "service", value: "commercial" },
      { label: "Litigation", action: "service", value: "litigation" },
      { label: "General Enquiry", action: "service", value: "general" },
      { label: "Contact Details", action: "contact" },
      { label: "Book a Consultation", action: "book", primary: true },
    ]);
  };

  const startWidget = () => {
    if (state.started) {
      return;
    }
    state.started = true;
    bot(`
      <p>Welcome to Solomon &amp; Associates Inc. I can help you find the right service, answer general questions about what the firm offers, and collect your enquiry details so the firm can contact you directly.</p>
      <p><strong>Please note:</strong> this chat provides general information only. It does not provide legal advice or create an attorney-client relationship.</p>
    `);
    mainMenu();
  };

  const togglePanel = (forceOpen) => {
    state.open = typeof forceOpen === "boolean" ? forceOpen : !state.open;
    panel.hidden = !state.open;
    launcher.setAttribute("aria-expanded", String(state.open));
    widget.classList.toggle("is-open", state.open);
    if (state.open) {
      startWidget();
      setTimeout(scrollMessages, 0);
    }
  };

  const serviceResponse = (key) => {
    const service = services[key] || services.general;
    state.selectedService = key;
    user(service.label);
    bot(`<div class="chatbot-service-copy">${paragraphs(service.response)}</div>`);
    if (key === "general") {
      renderActions([
        { label: service.startLabel, action: "start-enquiry", primary: true },
        { label: "View Services", action: "menu" },
        { label: "Contact the Firm", action: "contact" },
      ]);
      return;
    }
    renderActions([
      { label: service.startLabel, action: "start-enquiry", primary: true },
      { label: "Contact the Firm", action: "contact" },
      { label: "Back to Services", action: "menu" },
    ]);
  };

  const showContact = () => {
    user("Contact Details");
    bot(`
      <p>You can contact Solomon &amp; Associates Inc directly using the details below:</p>
      <ul class="chatbot-contact-list">
        <li><strong>Phone:</strong> <a href="tel:${firm.phoneLink}">${firm.phoneDisplay}</a></li>
        <li><strong>Email:</strong> <a href="mailto:${firm.email}">${firm.email}</a></li>
        <li><strong>Website:</strong> <a href="${firm.websiteUrl}" target="_blank" rel="noopener">${firm.website}</a></li>
        <li><strong>Location:</strong> ${firm.location}</li>
      </ul>
    `);
    renderActions([
      { label: "WhatsApp the Firm", href: `https://wa.me/${firm.whatsapp}`, external: true, primary: true },
      { label: "Book a Consultation", href: "contact.html" },
      { label: "Back to Services", action: "menu" },
    ]);
  };

  const showBooking = () => {
    state.selectedService = state.selectedService || "general";
    user("Book a Consultation");
    bot("<p>Please use the consultation option if you would like the firm to contact you regarding a legal matter. You can also submit a short enquiry through this chatbot so the firm knows what your matter relates to before contacting you.</p>");
    renderActions([
      { label: "Start Enquiry", action: "start-enquiry", primary: true },
      { label: "WhatsApp the Firm", href: `https://wa.me/${firm.whatsapp}`, external: true },
      { label: "Back to Services", action: "menu" },
    ]);
  };

  const startEnquiry = () => {
    const service = services[state.selectedService] || services.general;
    state.intake = { service: service.label };
    state.stepIndex = 0;
    user(service.startLabel || "Start Enquiry");
    bot(`<p>I will collect a few basic details for <strong>${escapeHtml(service.label)}</strong>. Please avoid sharing unnecessary sensitive information. This chat does not provide legal advice.</p>`);
    renderStep();
  };

  const goBackInIntake = () => {
    if (state.stepIndex > 0) {
      state.stepIndex -= 1;
      user("Back");
      renderStep();
      return;
    }
    user("Back");
    serviceResponse(state.selectedService || "general");
  };

  const cancelEnquiry = () => {
    state.intake = {};
    state.stepIndex = 0;
    user("Cancel Enquiry");
    bot("<p>Your enquiry has been cancelled. You can choose another service or contact the firm directly.</p>");
    mainMenu();
  };

  const renderStep = () => {
    const step = steps[state.stepIndex];
    clearControls();
    if (!step) {
      renderConfirmationStep();
      return;
    }

    if (step.type === "confirm") {
      renderConfirmationStep();
      return;
    }

    bot(`<p>${escapeHtml(step.question)}</p>`);

    if (step.type === "choice") {
      renderActions([
        ...step.choices.map((choice) => ({
          label: choice,
          action: "step-choice",
          value: choice,
          primary: state.intake[step.key] === choice,
        })),
        { label: "Back", action: "intake-back", quiet: true },
        { label: "Cancel Enquiry", action: "cancel-enquiry", quiet: true },
      ]);
      return;
    }

    const existing = state.intake[step.key] || "";
    const field = step.type === "textarea"
      ? `<textarea name="answer" rows="5" aria-label="${step.label}" required>${escapeHtml(existing)}</textarea>`
      : `<input name="answer" type="${step.type}" aria-label="${step.label}" value="${escapeHtml(existing)}" required>`;

    inputArea.innerHTML = `
      <form class="chatbot-form">
        <label>
          <span>${escapeHtml(step.label)}</span>
          ${field}
        </label>
        ${step.note ? `<p class="chatbot-note">${escapeHtml(step.note)}</p>` : ""}
        <p class="chatbot-error" hidden>${escapeHtml(step.error)}</p>
        ${intakeNav()}
      </form>
    `;

    inputArea.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = inputArea.querySelector("[name='answer']").value.trim();
      const error = inputArea.querySelector(".chatbot-error");
      if (!step.validate(answer)) {
        error.hidden = false;
        return;
      }
      state.intake[step.key] = answer;
      user(answer);
      if (step.key === "summary") {
        const boundaryMessage = boundaryMessageFor(answer);
        if (boundaryMessage) {
          bot(`<p>${escapeHtml(boundaryMessage)}</p>`);
        }
      }
      state.stepIndex += 1;
      renderStep();
    });
  };

  const summaryRows = () => [
    ["Name", state.intake.fullName],
    ["Contact number", state.intake.phone],
    ["Email", state.intake.email],
    ["Preferred contact method", state.intake.preferredContact],
    ["Service category", state.intake.service],
    ["Matter summary", state.intake.summary],
    ["Urgency", state.intake.urgency],
    ["Location", state.intake.location],
  ];

  const renderConfirmationStep = () => {
    clearControls();
    bot(`
      <div class="chatbot-summary-card">
        <h3>Please confirm your enquiry details</h3>
        <dl>
          ${summaryRows().map(([label, value]) => `<div><dt>${escapeHtml(label)}:</dt><dd>${escapeHtml(value || "")}</dd></div>`).join("")}
        </dl>
      </div>
    `);
    inputArea.innerHTML = `
      <form class="chatbot-form">
        <label class="chatbot-consent">
          <input type="checkbox" name="consent">
          <span>I confirm that the information I provide may be used by Solomon &amp; Associates Inc to contact me about my enquiry. I understand that this chat provides general information only and does not constitute legal advice or create an attorney-client relationship.</span>
        </label>
        <p class="chatbot-error" hidden>Please confirm consent before submitting.</p>
        <div class="chatbot-form-actions">
          <button class="chatbot-submit" type="submit">Submit Enquiry</button>
          <button class="chatbot-action chatbot-action-quiet" type="button" data-action="intake-back">Back</button>
          <button class="chatbot-action chatbot-action-quiet" type="button" data-action="cancel-enquiry">Cancel Enquiry</button>
        </div>
      </form>
    `;
    inputArea.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const checked = inputArea.querySelector("input[name='consent']").checked;
      const error = inputArea.querySelector(".chatbot-error");
      if (!checked) {
        error.hidden = false;
        return;
      }
      state.intake.consent = "Client confirmed consent to be contacted.";
      user("Submit Enquiry");
      submitEnquiry();
    });
  };

  const buildSummary = () => [
    "New Website Enquiry \u2014 Solomon & Associates Inc",
    "",
    "Client Name:",
    state.intake.fullName,
    "",
    "Contact Number:",
    state.intake.phone,
    "",
    "Email:",
    state.intake.email,
    "",
    "Preferred Contact Method:",
    state.intake.preferredContact,
    "",
    "Service Category:",
    state.intake.service,
    "",
    "Matter Summary:",
    state.intake.summary,
    "",
    "Urgency:",
    state.intake.urgency,
    "",
    "Location:",
    state.intake.location,
    "",
    "Consent:",
    "Client confirmed consent to be contacted.",
    "",
    "Website Source:",
    "Solomon & Associates Inc chatbot enquiry.",
  ].join("\n");

  const submitEnquiry = () => {
    state.whatsappLink = `https://wa.me/${firm.whatsapp}?text=${encodeURIComponent(buildSummary())}`;
    window.open(state.whatsappLink, "_blank", "noopener,noreferrer");
    clearControls();
    bot("<p>Your enquiry has been prepared. Please review the message and press Send in WhatsApp to deliver it to Solomon &amp; Associates Inc. The firm can then review your information and contact you directly. No legal advice has been provided through this chat.</p>");
    renderActions([
      { label: "WhatsApp the Firm", href: state.whatsappLink, external: true, primary: true },
      { label: "Back to Services", action: "menu" },
      { label: "Close Chat", action: "close", quiet: true },
    ]);
  };

  actions.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) {
      return;
    }
    const { action, value } = button.dataset;
    if (action === "service") serviceResponse(value);
    if (action === "menu") {
      user(button.textContent.trim());
      mainMenu();
    }
    if (action === "contact") showContact();
    if (action === "book") showBooking();
    if (action === "start-enquiry") startEnquiry();
    if (action === "step-choice") {
      const step = steps[state.stepIndex];
      state.intake[step.key] = value;
      user(value);
      state.stepIndex += 1;
      renderStep();
    }
    if (action === "intake-back") goBackInIntake();
    if (action === "cancel-enquiry") cancelEnquiry();
    if (action === "close") togglePanel(false);
  });

  inputArea.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) {
      return;
    }
    const { action } = button.dataset;
    if (action === "intake-back") goBackInIntake();
    if (action === "cancel-enquiry") cancelEnquiry();
  });

  launcher.addEventListener("click", () => togglePanel());
  closeButton.addEventListener("click", () => togglePanel(false));
})();
