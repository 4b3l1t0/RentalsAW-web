document.addEventListener("DOMContentLoaded", () => {
  const i18n = window.AW_I18N || { language: "es", t: (text) => text };
  const t = i18n.t;
  const isEnglish = i18n.language === "en";
  const whatsappNumber = "50763554238";
  const whatsappMessage = encodeURIComponent(
    isEnglish
      ? "Hello, I am interested in an Rentals AW apartment."
      : "Hola, estoy interesado en un apartamento de Rentals AW.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const whatsappIcon = `
    <svg width="35px" height="35px" viewBox="-1.5 0 259 259" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
            <g>
                <path
                    d="M67.6631045,221.823373 L71.8484512,223.916047 C89.2873956,234.379413 108.819013,239.262318 128.350631,239.262318 L128.350631,239.262318 C189.735716,239.262318 239.959876,189.038158 239.959876,127.653073 C239.959876,98.3556467 228.101393,69.7557778 207.17466,48.8290445 C186.247927,27.9023111 158.345616,16.0438289 128.350631,16.0438289 C66.9655467,16.0438289 16.7413867,66.2679889 17.4389445,128.350631 C17.4389445,149.277365 23.7169645,169.50654 34.1803311,186.945485 L36.9705622,191.130831 L25.8096378,232.28674 L67.6631045,221.823373 Z"
                    fill="#00E676">

                </path>
                <path
                    d="M219.033142,37.66812 C195.316178,13.2535978 162.530962,0 129.048189,0 C57.8972956,0 0.697557778,57.8972956 1.39511556,128.350631 C1.39511556,150.67248 7.67313556,172.296771 18.1365022,191.828389 L0,258.096378 L67.6631045,240.657433 C86.4971645,251.1208 107.423898,256.003705 128.350631,256.003705 L128.350631,256.003705 C198.803967,256.003705 256.003705,198.106409 256.003705,127.653073 C256.003705,93.4727423 242.750107,61.3850845 219.033142,37.66812 Z M129.048189,234.379413 L129.048189,234.379413 C110.214129,234.379413 91.380069,229.496509 75.3362401,219.7307 L71.1508934,217.638027 L30.6925422,228.101393 L41.1559089,188.3406 L38.3656778,184.155253 C7.67313556,134.628651 22.3218489,69.05822 72.5460089,38.3656778 C122.770169,7.67313556 187.643042,22.3218489 218.335585,72.5460089 C249.028127,122.770169 234.379413,187.643042 184.155253,218.335585 C168.111425,228.798951 148.579807,234.379413 129.048189,234.379413 Z M190.433273,156.9505 L182.760138,153.462711 C182.760138,153.462711 171.599213,148.579807 164.623636,145.092018 C163.926078,145.092018 163.22852,144.39446 162.530962,144.39446 C160.438289,144.39446 159.043173,145.092018 157.648058,145.789576 L157.648058,145.789576 C157.648058,145.789576 156.9505,146.487133 147.184691,157.648058 C146.487133,159.043173 145.092018,159.740731 143.696902,159.740731 L142.999345,159.740731 C142.301787,159.740731 140.906671,159.043173 140.209113,158.345616 L136.721325,156.9505 L136.721325,156.9505 C129.048189,153.462711 122.072611,149.277365 116.492149,143.696902 C115.097033,142.301787 113.00436,140.906671 111.609245,139.511556 C106.72634,134.628651 101.843436,129.048189 98.3556467,122.770169 L97.658089,121.375053 C96.9605312,120.677496 96.9605312,119.979938 96.2629734,118.584822 C96.2629734,117.189707 96.2629734,115.794591 96.9605312,115.097033 C96.9605312,115.097033 99.7507623,111.609245 101.843436,109.516571 C103.238551,108.121456 103.936109,106.028782 105.331225,104.633667 C106.72634,102.540993 107.423898,99.7507623 106.72634,97.658089 C106.028782,94.1703001 97.658089,75.3362401 95.5654156,71.1508934 C94.1703001,69.05822 92.7751845,68.3606623 90.6825112,67.6631045 L88.5898378,67.6631045 C87.1947223,67.6631045 85.1020489,67.6631045 83.0093756,67.6631045 C81.6142601,67.6631045 80.2191445,68.3606623 78.8240289,68.3606623 L78.1264712,69.05822 C76.7313556,69.7557778 75.3362401,71.1508934 73.9411245,71.8484512 C72.5460089,73.2435667 71.8484512,74.6386823 70.4533356,76.0337978 C65.5704312,82.3118178 62.7802,89.9849534 62.7802,97.658089 L62.7802,97.658089 C62.7802,103.238551 64.1753156,108.819013 66.2679889,113.701918 L66.9655467,115.794591 C73.2435667,129.048189 81.6142601,140.906671 92.7751845,151.370038 L95.5654156,154.160269 C97.658089,156.252942 99.7507623,157.648058 101.145878,159.740731 C115.794591,172.296771 132.535978,181.365022 151.370038,186.247927 C153.462711,186.945485 156.252942,186.945485 158.345616,187.643042 L158.345616,187.643042 C160.438289,187.643042 163.22852,187.643042 165.321193,187.643042 C168.808982,187.643042 172.994329,186.247927 175.78456,184.852811 C177.877233,183.457696 179.272349,183.457696 180.667465,182.06258 L182.06258,180.667465 C183.457696,179.272349 184.852811,178.574791 186.247927,177.179676 C187.643042,175.78456 189.038158,174.389445 189.735716,172.994329 C191.130831,170.204098 191.828389,166.716309 192.525947,163.22852 C192.525947,161.833405 192.525947,159.740731 192.525947,158.345616 C192.525947,158.345616 191.828389,157.648058 190.433273,156.9505 Z"
                    fill="#FFFFFF">

                </path>
            </g>
        </svg>
  `;

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const oldIcon = link.querySelector("svg");
    if (oldIcon) oldIcon.outerHTML = whatsappIcon;
    else link.insertAdjacentHTML("afterbegin", whatsappIcon);
  });

  document
    .querySelectorAll("[data-contact-form] button[type='submit'] svg")
    .forEach((icon) => {
      icon.outerHTML = whatsappIcon;
    });

  const customSelects = [];

  document.querySelectorAll("select").forEach((select) => {
    const wrapper = document.createElement("div");
    const trigger = document.createElement("button");
    const menu = document.createElement("div");
    const label = document.querySelector(`label[for="${select.id}"]`);

    wrapper.className = "custom-select";
    trigger.className = "custom-select__trigger";
    trigger.type = "button";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute(
      "aria-label",
      label?.textContent.trim() || "Seleccionar opción",
    );
    menu.className = "custom-select__menu";
    menu.setAttribute("role", "listbox");
    menu.hidden = true;

    [...select.options].forEach((option) => {
      const item = document.createElement("button");
      item.className = "custom-select__option";
      item.type = "button";
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", String(option.selected));
      item.dataset.value = option.value;
      item.textContent = option.textContent;

      item.addEventListener("click", () => {
        select.value = item.dataset.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        updateSelect();
        closeSelect();
        trigger.focus();
      });

      menu.append(item);
    });

    const updateSelect = () => {
      const selected = select.options[select.selectedIndex];
      trigger.innerHTML = `<span>${selected.textContent}</span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>`;
      menu.querySelectorAll(".custom-select__option").forEach((item) => {
        item.setAttribute(
          "aria-selected",
          String(item.dataset.value === select.value),
        );
      });
    };

    const closeSelect = () => {
      wrapper.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    };

    const openSelect = () => {
      customSelects.forEach((entry) => {
        if (entry.wrapper !== wrapper) entry.close();
      });
      wrapper.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      menu.hidden = false;
      menu.querySelector('[aria-selected="true"]')?.focus();
    };

    trigger.addEventListener("click", () => {
      if (wrapper.classList.contains("is-open")) closeSelect();
      else openSelect();
    });

    wrapper.addEventListener("keydown", (event) => {
      const options = [...menu.querySelectorAll(".custom-select__option")];
      const currentIndex = options.indexOf(document.activeElement);
      if (event.key === "Escape") {
        closeSelect();
        trigger.focus();
      } else if (event.key === "ArrowDown" && !menu.hidden) {
        event.preventDefault();
        options[Math.min(currentIndex + 1, options.length - 1)]?.focus();
      } else if (event.key === "ArrowUp" && !menu.hidden) {
        event.preventDefault();
        options[Math.max(currentIndex - 1, 0)]?.focus();
      }
    });

    select.classList.add("native-select");
    select.insertAdjacentElement("afterend", wrapper);
    wrapper.append(trigger, menu);
    select.addEventListener("change", updateSelect);
    customSelects.push({ wrapper, close: closeSelect });
    updateSelect();
  });

  document.addEventListener("click", (event) => {
    customSelects.forEach((entry) => {
      if (!entry.wrapper.contains(event.target)) entry.close();
    });
  });

  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".site-nav");

  if (menuButton && mobileMenu) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) closeMenu();
    });
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    const initialAnswer = button
      .closest(".faq-item")
      .querySelector(".faq-answer");
    initialAnswer.hidden = false;
    initialAnswer.setAttribute("aria-hidden", "true");

    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      document
        .querySelectorAll(".faq-question[aria-expanded='true']")
        .forEach((openButton) => {
          if (openButton !== button) {
            openButton.setAttribute("aria-expanded", "false");
            openButton.closest(".faq-item").classList.remove("is-open");
            openButton
              .closest(".faq-item")
              .querySelector(".faq-answer")
              .setAttribute("aria-hidden", "true");
          }
        });

      button.setAttribute("aria-expanded", String(!isOpen));
      item.classList.toggle("is-open", !isOpen);
      item
        .querySelector(".faq-answer")
        .setAttribute("aria-hidden", String(isOpen));
    });
  });

  const propertyGrid = document.querySelector("[data-property-grid]");
  const emptyState = document.querySelector("[data-empty-state]");
  const resultCount = document.querySelector("[data-result-count]");
  const filterForm = document.querySelector("[data-property-filter]");
  const properties = window.AW_PROPERTIES || [];
  const featuredGrid = propertyGrid?.dataset.propertyGrid === "featured";

  const icon = (name) => {
    const icons = {
      pin: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
      guests:
        '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 6a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4.6V20"/></svg>',
      bed: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 20v-9M21 20v-7a2 2 0 0 0-2-2H8a3 3 0 0 0-3 3v3h16M8 11V8h5a3 3 0 0 1 3 3M3 17h18"/></svg>',
      bath: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 13h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2ZM7 13V6a3 3 0 0 1 6 0M4 22l1-3M20 22l-1-3"/></svg>',
      airbnb:
        '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 19c-2.3 3.2-5.7 2.1-5.7-.7 0-1.6 1.2-4.3 2.5-7.2C10 8.5 10.6 7 12 7s2 1.5 3.2 4.1c1.3 2.9 2.5 5.6 2.5 7.2 0 2.8-3.4 3.9-5.7.7Zm0 0c-1.9-2.7-3.7-5-3.7-7.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 3.7 3.7c0 2.3-1.8 4.6-3.7 7.3Z"/></svg>',
    };
    return icons[name] || "";
  };

  const renderProperties = (items) => {
    if (!propertyGrid) return;

    propertyGrid.innerHTML = items
      .map((property) => {
        const propertyName =
          isEnglish && property.nameEn ? property.nameEn : property.name;
        const propertyLocation =
          isEnglish && property.locationEn
            ? property.locationEn
            : property.location;
        return `
          <article class="property-card">
            <div class="property-card__media">
              <img src="${property.image}" alt="${isEnglish ? `Interior of ${propertyName}` : `Interior de ${propertyName}`}" width="640" height="427" loading="lazy">
              ${property.featured ? `<span class="property-card__badge">${t("Destacado")}</span>` : property.demo ? `<span class="property-card__badge property-card__badge--demo">${t("Ejemplo")}</span>` : ""}
            </div>
            <div class="property-card__body">
              <h3>${propertyName}</h3>
              <p class="property-card__location">${icon("pin")}<span>${propertyLocation}</span></p>
              <ul class="property-card__details" aria-label="${isEnglish ? "Features" : "Características"}">
                <li>${icon("guests")}<span>${property.guests} ${t("huéspedes")}</span></li>
                <li>${icon("bed")}<span>${property.bedrooms} ${t("hab.")}</span></li>
                <li>${icon("bath")}<span>${property.bathrooms} ${t("baños")}</span></li>
              </ul>
              <a class="button button--airbnb button--full" href="${property.airbnbUrl}" target="_blank" rel="noopener noreferrer" aria-label="${isEnglish ? `View ${propertyName} on Airbnb` : `Ver ${propertyName} en Airbnb`}">
                ${icon("airbnb")} ${t("Ver en Airbnb")}
              </a>
            </div>
          </article>
        `;
      })
      .join("");

    if (emptyState) emptyState.hidden = items.length > 0;
    if (resultCount) {
      resultCount.textContent = `${items.length} ${t(items.length === 1 ? "apartamento" : "apartamentos")}`;
    }
  };

  if (propertyGrid) {
    renderProperties(
      featuredGrid
        ? properties.filter((property) => property.featured)
        : properties,
    );
  }

  if (filterForm) {
    const formControls = [...filterForm.querySelectorAll("select")];
    const zoneAliases = {
      "bella-vista": "Bella Vista",
      "calle-50": "Calle 50",
      "avenida-balboa": "Avenida Balboa",
    };
    const requestedZone = new URLSearchParams(window.location.search).get(
      "zona",
    );
    const zoneControl = filterForm.querySelector('[name="zone"]');
    if (requestedZone && zoneControl && zoneAliases[requestedZone]) {
      zoneControl.value = zoneAliases[requestedZone];
      zoneControl.dispatchEvent(new Event("change", { bubbles: true }));
    }

    const syncActiveState = () => {
      formControls.forEach((control) => {
        control
          .closest(".search-field")
          ?.classList.toggle("is-active", Boolean(control.value));
      });
    };

    const applyFilters = (shouldScroll) => {
      const data = new FormData(filterForm);
      const zone = data.get("zone");
      const guests = Number(data.get("guests")) || 0;
      const bedrooms = Number(data.get("bedrooms")) || 0;
      const hasFilters = Boolean(zone || guests || bedrooms);
      const source =
        featuredGrid && !hasFilters
          ? properties.filter((property) => property.featured)
          : properties;
      const filtered = source.filter(
        (property) =>
          (!zone || property.zone === zone) &&
          (!guests || property.guests >= guests) &&
          (!bedrooms || property.bedrooms >= bedrooms),
      );

      renderProperties(filtered);

      const targetId = filterForm.dataset.resultsTarget;
      const target = targetId ? document.querySelector(targetId) : propertyGrid;
      if (shouldScroll)
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    filterForm.addEventListener("change", () => {
      syncActiveState();
      applyFilters(false);
    });

    filterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      applyFilters(false);
    });

    filterForm.addEventListener("reset", () => {
      window.setTimeout(() => {
        formControls.forEach((control) => {
          control.dispatchEvent(new Event("change", { bubbles: true }));
        });
        syncActiveState();
        applyFilters(false);
      }, 0);
    });

    syncActiveState();
    if (requestedZone && zoneAliases[requestedZone]) {
      applyFilters(false);
    }
  }

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const zone = String(data.get("zone") || "").trim();
      const guests = String(data.get("guests") || "").trim();
      const notes = String(data.get("message") || "").trim();
      const lines = [
        isEnglish
          ? `Hello, my name is ${name}. I am interested in an Rentals AW apartment.`
          : `Hola, soy ${name}. Estoy interesado en un apartamento de Rentals AW.`,
        zone
          ? `${isEnglish ? "Preferred area" : "Zona preferida"}: ${zone}.`
          : "",
        guests ? `${isEnglish ? "Guests" : "Huéspedes"}: ${guests}.` : "",
        notes ? `${isEnglish ? "Message" : "Mensaje"}: ${notes}` : "",
      ].filter(Boolean);

      window.open(
        `https://wa.me/?text=${encodeURIComponent(lines.join("\n"))}`,
        "_blank",
        "noopener,noreferrer",
      );
    });
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
});
