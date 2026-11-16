document.getElementById("year").textContent = new Date().getFullYear();

    const menuToggle = document.getElementById("menuToggle");

    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {

      const open = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(open));

    });



    const inquiryForm = document.getElementById("inquiryForm");

    function getInquiryMessage() {

      const name = document.getElementById("clientName").value.trim();

      const email = document.getElementById("clientEmail").value.trim();

      const service = document.getElementById("projectService").value;
      const category = document.getElementById("serviceCategory").value;
      const country = document.getElementById("clientCountry").value;
      const details = document.getElementById("projectDetails").value.trim();

      return `Hello NexOrbit,



I'd like to discuss a project.



Name: ${name}

Email: ${email}
Country: ${country}

Service: ${service}

Category: ${category || "Not specified"}



Project details:

${details}`;

    }

    document.getElementById("emailSubmit").addEventListener("click", (event) => {

      event.preventDefault();

      if (!inquiryForm.reportValidity()) return;

      const subject = encodeURIComponent("NexOrbit Project Inquiry");

      const body = encodeURIComponent(getInquiryMessage());

      window.location.href = `mailto:nexorbit.business@gmail.com?subject=${subject}&body=${body}`;

    });

    document.getElementById("whatsappSubmit").addEventListener("click", () => {

      if (!inquiryForm.reportValidity()) return;

      const message = encodeURIComponent(getInquiryMessage());

      window.open(`https://wa.me/923287894595?text=${message}`, "_blank", "noopener,noreferrer");

    });

    
    const projectService = document.getElementById("projectService");

    const serviceCategoryField = document.getElementById("serviceCategoryField");

    const serviceCategory = document.getElementById("serviceCategory");

    const serviceCategoryPreview = document.getElementById("serviceCategoryPreview");

    // If a remote image URL is unavailable, show a locally embedded illustration instead of a broken image.

    function categoryFallbackSvg(label) {

      const isPackaging = /packaging|label/i.test(label);

      const isLogo = /logo|brand identity/i.test(label);

      const title = isPackaging ? 'PACKAGING DESIGN' : isLogo ? 'BRAND IDENTITY' : String(label).toUpperCase().slice(0, 26);

      const artwork = isPackaging

        ? `<rect x="145" y="65" width="145" height="160" rx="10" fill="#f3e9d6" stroke="#11c8f2" stroke-width="3"/><path d="M145 95 L215 50 L290 95" fill="#d6c8ae" stroke="#11c8f2" stroke-width="3"/><rect x="166" y="125" width="103" height="62" rx="7" fill="#0c2340"/><text x="217" y="151" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="700">NEXORBIT</text><text x="217" y="169" font-size="9" fill="#11c8f2" text-anchor="middle">PRODUCT LABEL</text>`

        : isLogo

        ? `<circle cx="215" cy="130" r="65" fill="#0b2844" stroke="#11c8f2" stroke-width="3"/><path d="M182 145 L212 83 L246 145 L226 145 L212 119 L201 145 Z" fill="#11c8f2"/><text x="215" y="222" font-size="20" fill="#ffffff" text-anchor="middle" font-weight="800">NEXORBIT</text><text x="215" y="244" font-size="10" fill="#8fcfe2" text-anchor="middle" letter-spacing="3">BRAND CONCEPT</text>`

        : `<rect x="105" y="60" width="220" height="150" rx="12" fill="#0c2845" stroke="#11c8f2" stroke-width="2"/><rect x="125" y="82" width="70" height="95" rx="7" fill="#11c8f2"/><rect x="205" y="82" width="100" height="14" rx="4" fill="#d9edf8"/><rect x="205" y="107" width="80" height="10" rx="4" fill="#5a88a8"/><rect x="205" y="128" width="90" height="10" rx="4" fill="#5a88a8"/><text x="215" y="245" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="700">${title}</text>`;

      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 280"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071326"/><stop offset="1" stop-color="#123b5c"/></linearGradient></defs><rect width="430" height="280" fill="url(#bg)"/>${artwork}</svg>`;

      return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);

    }

    function attachImageFallback(img, label) {

      img.addEventListener('error', function onImageError() {

        img.removeEventListener('error', onImageError);

        img.src = categoryFallbackSvg(label || img.alt || 'Design category');

      });

    }

    document.querySelectorAll('.design-category img').forEach(img => attachImageFallback(img, img.alt));



    const serviceCategories = {

      "Web Development": [

        ["Business Website", "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80", "Professional websites for businesses to explain services, build trust and help customers get in touch."],

        ["Landing Page", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", "A focused single page built around one goal, such as getting leads, promoting an offer or collecting sign-ups."],

        ["Portfolio Website", "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80", "A personal or business portfolio that presents work, skills, projects and contact details."],

        ["E-commerce Website", "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80", "An online store with product listings, shopping features and clear paths to purchase."],

        ["Website Redesign", "https://images.unsplash.com/photo-1547657278-fd2f1b6f8f4f?auto=format&fit=crop&w=900&q=80", "Improving an existing website's layout, usability, mobile experience and visual style."],

        ["Website Maintenance", "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80", "Updates, content changes, routine checks and small fixes to keep a website working well."]

      ],

      "Graphic Design": [

        ["Logo Design & Brand Identity", "https://images.unsplash.com/photo-1634942536790-2534db7a7c3e?auto=format&fit=crop&w=900&q=80", "Logos, brand marks, color palettes and typography that give a business a consistent visual identity."],

        ["Social Media Design", "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80", "Posts, stories, carousel graphics and cover designs for platforms such as Instagram and Facebook."],

        ["Advertising & Ad Creatives", "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80", "Promotional graphics for digital campaigns, product offers and paid advertisements."],

        ["Business Stationery", "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=900&q=80", "Business cards, letterheads, envelopes and branded documents for a professional look."],

        ["Print Design", "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80", "Flyers, brochures, posters, menus and pamphlets prepared for printing or digital sharing."],

        ["YouTube & Content Graphics", "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=80", "Video thumbnails, channel banners, podcast covers and other graphics for creators."],

        ["Packaging & Label Design", "https://images.unsplash.com/photo-1602148797690-5f9e7c5c7a4d?auto=format&fit=crop&w=900&q=80", "Product boxes, packaging artwork and labels that help products look polished."],

        ["Photo Editing & Image Manipulation", "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80", "Image cleanup, retouching, background removal and creative edits for professional visuals."]

      ],

      "Software Development": [

        ["Custom Software", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80", "Software designed around a business's specific processes, users and requirements."],

        ["Web Application", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", "Interactive browser-based tools such as dashboards, portals and workflow apps."],

        ["Desktop Application", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80", "Computer applications that help users complete specific tasks on their desktop or laptop."],

        ["API / Integration", "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80", "Connecting software systems so they can exchange data and work together."],

        ["Bug Fixes & Improvements", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", "Finding and fixing software issues and improving existing features or performance."]

      ],

      "AI Automation": [

        ["AI Chatbot", "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80", "A conversational assistant that answers common questions and guides users through routine tasks."],

        ["Workflow Automation", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80", "Automating repetitive steps such as notifications, data entry and task hand-offs."],

        ["AI Assistant Integration", "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=80", "Adding AI-powered assistance to suitable business tools and workflows."],

        ["Data Processing Automation", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", "Reducing manual work when sorting, transforming or summarizing structured information."],

        ["Business Process Automation", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", "Connecting recurring business tasks into more consistent, efficient workflows."]

      ],

      "Cybersecurity": [

        ["Security Consultation", "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80", "Discussing security goals and practical ways to improve protection for systems you own or manage."],

        ["Website Security Review", "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80", "Reviewing an authorized website for common security configuration and protection issues."],

        ["Authorized Vulnerability Assessment", "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=80", "A scoped assessment of systems with the owner's permission to identify potential weaknesses."],

        ["Security Hardening", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", "Improving secure settings, access controls, updates and basic defensive practices."],

        ["Cybersecurity Guidance", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80", "Beginner-friendly guidance on safer computing, account protection and security fundamentals."]

      ],

      "IT Support": [

        ["PC / Laptop Troubleshooting", "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80", "Diagnosing common computer issues and helping restore normal operation."],

        ["Software Installation & Setup", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", "Installing and configuring legitimate software and essential system tools."],

        ["Network / Wi-Fi Support", "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80", "Helping diagnose common home or small-office connectivity and Wi-Fi issues."],

        ["System Optimization", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80", "Checking startup apps, storage and settings to improve everyday system performance."],

        ["Backup & Data Transfer", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80", "Helping organize backups and move files between devices or storage locations."]

      ],

      "Not sure yet": [["Help me choose the right service", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80", "Tell us your goal and we can help identify which service category best fits your project."]]

    };

    function updateServiceCategories() {

      const service = projectService.value;

      const options = serviceCategories[service] || [];

      serviceCategory.innerHTML = '<option value="">Select a category</option>';

      serviceCategoryPreview.innerHTML = "";

      options.forEach(([category, image, description]) => {

        const option = document.createElement("option");

        option.value = category;

        option.textContent = category;

        serviceCategory.appendChild(option);

        const card = document.createElement("article");

        card.className = "design-category";

        const img = document.createElement("img");

        img.src = image;

        img.alt = category;

        img.loading = "lazy";

        attachImageFallback(img, category);

        const info = document.createElement("div");

        info.className = "design-category-info";

        const heading = document.createElement("h3");

        heading.textContent = category;

        const paragraph = document.createElement("p");

        paragraph.textContent = description;

        const choose = document.createElement("button");

        choose.type = "button";

        choose.className = "btn btn-outline";

        choose.textContent = "Choose this category";

        choose.classList.add("category-choose");

        choose.addEventListener("click", () => {

          serviceCategory.value = category;

          serviceCategory.dispatchEvent(new Event("change", { bubbles: true }));

        });

        info.append(heading, paragraph, choose);

        card.append(img, info);

        serviceCategoryPreview.appendChild(card);

      });

      serviceCategoryField.hidden = options.length === 0;

      serviceCategoryPreview.hidden = options.length === 0;

      serviceCategory.required = options.length > 0;

      serviceCategoryPreview.setAttribute("aria-label", service + " categories and descriptions");

    }

    projectService.addEventListener("change", updateServiceCategories);

    // Initialize the dependent category list and cards on page load.

    updateServiceCategories();



    // Keep category cards visually complete if a remote image is unavailable.

    document.querySelectorAll(".design-category img").forEach(img => {

      img.addEventListener("error", () => {

        if (img.dataset.fallbackApplied) return;

        img.dataset.fallbackApplied = "true";

        const label = (img.alt || "NexOrbit design").replace(/[<>&**\\"**']/g, "").slice(0, 48);

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071326"/><stop offset="1" stop-color="#087fa8"/></linearGradient></defs><rect width="900" height="520" fill="url(#g)"/><circle cx="450" cy="210" r="105" fill="none" stroke="#12c9f5" stroke-width="8"/><path d="M390 250 L450 130 L510 250 L475 250 L450 200 L425 250 Z" fill="#12c9f5"/><text x="450" y="380" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" font-weight="700" fill="#ffffff">NEXORBIT</text><text x="450" y="425" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="#b8d9e9">${label}</text></svg>`;

        img.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);

      });

      if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));

    });



    const workFilters = document.querySelectorAll(".work-filter");

    const workCards = document.querySelectorAll(".work-card[data-category]");

    const categoryDetails = document.getElementById("categoryDetails");

    const designCategoryGrid = document.getElementById("designCategoryGrid");

    const workProjectGrid = document.getElementById("workProjectGrid");

    const workCategoryServices = {

      web: "Web Development",

      graphic: "Graphic Design",

      software: "Software Development",

      ai: "AI Automation",

      cybersecurity: "Cybersecurity",

      it: "IT Support"

    };



    function renderSelectedWorkCategories(serviceName) {

      const items = serviceCategories[serviceName] || [];

      designCategoryGrid.innerHTML = "";

      items.forEach(([name, image, description]) => {

        const card = document.createElement("article");

        card.className = "design-category";

        const img = document.createElement("img");

        img.src = image;

        img.alt = name + " example";

        img.loading = "lazy";

        attachImageFallback(img, name);

        const info = document.createElement("div");

        info.className = "design-category-info";

        const heading = document.createElement("h3");

        heading.textContent = name;

        const paragraph = document.createElement("p");

        paragraph.textContent = description;

        info.append(heading, paragraph);

        card.append(img, info);

        designCategoryGrid.appendChild(card);

      });

    }



    workFilters.forEach(button => {

      button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        workFilters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));

        const isServiceCategory = Object.prototype.hasOwnProperty.call(workCategoryServices, filter);

        designCategoryGrid.hidden = !isServiceCategory;

        workProjectGrid.hidden = isServiceCategory;

        categoryDetails.hidden = true;



        if (isServiceCategory) {

          renderSelectedWorkCategories(workCategoryServices[filter]);

        } else {

          workCards.forEach(card => {

            const categories = (card.dataset.category || "").split(/\s+/);

            card.hidden = filter !== "all" && !categories.includes(filter);

          });

        }

      });

    });

    document.querySelectorAll("[data-service]").forEach(link => {

      link.addEventListener("click", () => {

        const service = link.dataset.service;

        const select = document.getElementById("projectService");

        if (select) {

          select.value = service;

          select.dispatchEvent(new Event("change"));

        }

      });

    });



    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

      });

    });
