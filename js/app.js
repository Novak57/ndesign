(function () {
  "use strict";

  const CONTACT_EMAIL = "kontakt@aperiodigital.hr";

  const translations = {
    hr: {
      "meta.title": "nDesign · Izrada web stranica",
      "meta.description":
        "nDesign — izrada modernih web stranica za mala poduzeća i obrtnike u Hrvatskoj. Transparentni paketi i besplatna demo verzija prije dogovora.",

      "nav.services": "Usluge",
      "nav.pricing": "Cjenik",
      "nav.about": "O nama",
      "nav.faq": "FAQ",
      "nav.cta": "Zatražite ponudu",
      "nav.promo.tag": "Demo",
      "nav.promo.text": "Funkcionalna stranica online — bez obveze i bez troška",
      "nav.promo.cta": "Zatražite demo",

      "hero.badge": "nDesign · Zagreb",
      "hero.title": "Web stranice za <em>obrte i mala poduzeća</em>",
      "hero.text":
        "Prije bilo kakve obveze izradimo funkcionalnu demo verziju, postavimo je online i pošaljemo Vam link. Fiksna cijena, bez skrivenih troškova.",
      "hero.cta.primary": "Zatražite demo verziju",
      "hero.note": "Fiksna cijena · Bez obveze · Odgovor u 24 sata",

      "steps.1.title": "Kratki upit",
      "steps.1.text": "Opisujete čime se bavite. Traje nekoliko minuta.",
      "steps.2.title": "Demo verzija",
      "steps.2.text": "Funkcionalna stranica online — bez obveze i bez troška.",
      "steps.3.title": "Vaša odluka",
      "steps.3.text": "Ako ste zadovoljni, prebacujemo je na Vašu domenu.",

      "services.eyebrow": "Usluge",
      "services.title": "Što nudimo",
      "services.lead":
        "Fokus na ono što malim poduzećima stvarno treba — jasna online prisutnost bez nepotrebne kompleksnosti.",
      "services.1.title": "Web stranice",
      "services.1.text":
        "Prezentacijske stranice za obrte i mala poduzeća — jasan prikaz usluga, kontakt i profesionalan dojam.",
      "services.2.title": "CMS sustavi",
      "services.2.text":
        "Blog, galerija ili oboje — s mogućnošću samostalnog ažuriranja sadržaja bez tehničkog znanja.",
      "services.3.title": "Projekti po dogovoru",
      "services.3.text":
        "Veći ili specifični zahtjevi — rezervacije, članstva, integracije ili nešto što ne stane u standardni paket. Cijena i opseg dogovaraju se nakon kratkog upita.",
      "services.4.title": "Održavanje i podrška",
      "services.4.text":
        "Hosting, sigurnosna ažuriranja, backup i sitne izmjene — kako biste se mogli fokusirati na poslovanje.",

      "pricing.eyebrow": "Cjenik",
      "pricing.title": "Transparentni paketi",
      "pricing.lead":
        "Fiksne cijene bez skrivenih troškova. Odaberite paket koji odgovara Vašem poslovanju.",
      "pricing.popular": "Najpopularnije",
      "pricing.start.name": "Start",
      "pricing.start.ideal": "Idealno za: brzu online vizitku",
      "pricing.start.price": "390 €",
      "pricing.start.maint": "+ 25 €/mj — hosting, backup, do 30 min izmjena",
      "pricing.start.f1": "1 stranica, do 5 sekcija",
      "pricing.start.f2": "Kontakt forma i navigacija po sekcijama",
      "pricing.start.f3": "Responzivni dizajn + SEO osnove",
      "pricing.start.f4": "Domena i hosting prve godine",
      "pricing.start.f5": "2 kruga izmjena dizajna",
      "pricing.start.f6": "Rok izrade: 5–10 radnih dana",
      "pricing.business.name": "Business",
      "pricing.business.ideal": "Idealno za: salone, restorane, obrte",
      "pricing.business.price": "690 €",
      "pricing.business.maint": "+ 30 €/mj — hosting, backup, do 30 min izmjena",
      "pricing.business.f1": "Do 8 sekcija ili do 3 zasebne stranice",
      "pricing.business.f2": "Više sadržaja, slika i galerija",
      "pricing.business.f3": "Kontakt forma, Google Maps i SEO osnove",
      "pricing.business.f4": "Domena, hosting i Google Analytics",
      "pricing.business.f5": "2 kruga izmjena dizajna",
      "pricing.business.f6": "Rok izrade: 2–3 tjedna",
      "pricing.growth.name": "Growth",
      "pricing.growth.ideal": "Idealno za: česte izmjene sadržaja",
      "pricing.growth.price": "1.090 €",
      "pricing.growth.maint": "+ 45 €/mj — hosting, backup, CMS podrška",
      "pricing.growth.f1": "CMS — samostalno ažuriranje sadržaja",
      "pricing.growth.f2": "Blog, galerija ili oboje",
      "pricing.growth.f3": "Do 8 sekcija ili stranica",
      "pricing.growth.f4": "Domena i hosting prve godine",
      "pricing.growth.f5": "Edukacija i 3 kruga izmjena",
      "pricing.growth.f6": "Rok izrade: 3–4 tjedna",
      "pricing.custom.name": "Custom",
      "pricing.custom.ideal": "Idealno za: veće i specifične projekte",
      "pricing.custom.price": "od 1.500 €",
      "pricing.custom.maint": "Održavanje prema dogovoru",
      "pricing.custom.f1": "Opseg i funkcionalnosti po briefu",
      "pricing.custom.f2": "CMS, rezervacije ili integracije po potrebi",
      "pricing.custom.f3": "Ponuda nakon kratkog razgovora",
      "pricing.custom.f4": "Domena i hosting prve godine",
      "pricing.custom.f5": "Edukacija i krugovi izmjena po dogovoru",
      "pricing.custom.f6": "Rok izrade ovisi o opsegu",
      "pricing.custom.cta": "Pošaljite upit",
      "pricing.cta": "Odaberite paket",
      "pricing.note":
        "Cijene su konačne — obrt nije u sustavu PDV-a, pa se PDV ne obračunava. Jednokratna cijena uključuje domenu i hosting za prvu godinu. Tekstovi i fotografije dostavlja klijent ili se dogovaraju kao dodatak. Održavanje nije obavezno, ali ga preporučujemo. Custom projekti se cijene prema dogovoru, nakon kratkog upita.",

      "addons.title": "Dodaci na zahtjev",
      "addons.1.name": "Dodatni jezik na stranici",
      "addons.1.price": "od 150 €",
      "addons.2.name": "Pisanje tekstova (copywriting)",
      "addons.2.price": "od 80 € po stranici",
      "addons.3.name": "Izrada logotipa",
      "addons.3.price": "od 150 €",
      "addons.4.name": "Google Business Profile, Analytics i Search Console",
      "addons.4.price": "90 €",
      "addons.5.name": "Dodatna podstranica",
      "addons.5.price": "90 €",
      "addons.6.name": "Dodatni krug izmjena nakon uključenih",
      "addons.6.price": "40 €/h",

      "about.eyebrow": "O nama",
      "about.title": "Obrt za izradu web stranica",
      "about.role": "Obrt za izradu web stranica · Zagreb",
      "about.p1":
        "nDesign je obrt za izradu web stranica sa sjedištem u Zagrebu. Pomažemo obrtnicima i malim poduzećima da budu pronađivi online, s jasnom strukturom i bez nepotrebne kompleksnosti.",
      "about.p2":
        "Radimo s klijentima diljem Hrvatske — od frizerskih salona i apartmana do ordinacija i uslužnih djelatnosti. Svaki projekt vodimo od prvog upita do lansiranja, s transparentnom cijenom i bez posrednika.",
      "about.p3":
        "Vjerujemo da dobra web stranica ne mora biti skupa niti komplicirana. Mora biti brza, jasna i prilagođena onome što Vaše poslovanje stvarno treba.",
      "about.stat1.value": "4+",
      "about.stat1.label": "godine iskustva u web razvoju",
      "about.stat2.value": "3+",
      "about.stat2.label": "objavljenih projekata",
      "about.stat3.value": "24 h",
      "about.stat3.label": "odgovor na upit",

      "faq.eyebrow": "FAQ",
      "faq.title": "Česta pitanja",
      "faq.lead": "Odgovori na ono što klijenti najčešće pitaju prije suradnje.",
      "faq.1.q": "Koliko traje izrada web stranice?",
      "faq.1.a":
        "Start paket obično 5–10 radnih dana, Business 2–3 tjedna, Growth 3–4 tjedna. Custom projekti ovise o opsegu. Rok ovisi i o brzini dostave sadržaja s Vaše strane.",
      "faq.2.q": "Što trebam pripremiti prije početka?",
      "faq.2.a":
        "Idealan scenarij: tekstovi, logo (ako ga imate), fotografije i jasna ideja što želite postići stranicom. Ako nešto nedostaje, možemo pomoći s copywritingom ili preporučiti suradnike.",
      "faq.3.q": "Mogu li samostalno ažurirati sadržaj?",
      "faq.3.a":
        "Da — u Growth paketu dobivate CMS sustav za samostalno uređivanje. Custom projekti uključuju CMS ako je to dio dogovora. Za Start i Business pakete sitne izmjene rješavamo kroz mjesečno održavanje (do 30 min/mj).",
      "faq.4.q": "Što uključuje mjesečno održavanje?",
      "faq.4.a":
        "Hosting, SSL, sigurnosne kopije, ažuriranja sustava i do 30 minuta sitnih izmjena mjesečno (tekst, slike, kontakt podaci). Veće izmjene se dogovaraju zasebno.",
      "faq.5.q": "Radite li samo u Zagrebu?",
      "faq.5.a":
        "Ne — sjedište nam je u Zagrebu, ali surađujemo s klijentima iz cijele Hrvatske. Komunikacija ide putem e-pošte, poziva ili video sastanka.",
      "faq.6.q": "Kako izgleda proces suradnje?",
      "faq.6.a":
        "1) Uvodni upit → 2) Besplatna demo verzija (bez obveze) → 3) Ponuda i dogovor → 4) Razvoj i testiranje → 5) Lansiranje i predaja. Plaćanje po fazama ili po dogovoru.",
      "faq.7.q": "Što uključuje besplatna demo verzija?",
      "faq.7.a":
        "Na temelju Vaših podataka izrađujemo funkcionalnu web stranicu, postavljamo je na privremenu adresu i dostavljamo Vam link. Nije riječ o slici ili skici — stranicu možete otvoriti, pregledati i testirati na mobilnom uređaju. Ako želite nastaviti, prebacujemo je na Vašu domenu; u protivnom nemate nikakvih troškova.",
      "faq.8.q": "Radite li u WordPressu?",
      "faq.8.a":
        "Ne. Stranice pišemo vlastitim kodom, bez WordPressa i bez dodataka. Rezultat je brže učitavanje i bolji rezultat na Google PageSpeed testu, a nema ni mjesečnih ažuriranja dodataka ni sigurnosnih rupa koje WordPress stranice moraju stalno zatvarati. Za Vas to znači stranicu koja radi godinama bez intervencija.",
      "faq.9.q": "Što znači fiksna cijena?",
      "faq.9.a":
        "Cijena iz cjenika je cijena koju plaćate. Nema raspona koji se tijekom izrade pomiče prema gore ni naknadnog zaračunavanja za ono što je navedeno u paketu. Sve izvan paketa nalazi se u popisu dodataka s cijenom, pa unaprijed znate koliko bi eventualno proširenje stajalo.",
      "faq.10.q": "Na tržištu postoje i jeftinije ponude. U čemu je razlika?",
      "faq.10.a":
        "Postoje, i uglavnom su rađene u WordPressu po gotovom predlošku, u tri do pet dana. To je sasvim legitiman izbor ako Vam treba samo osnovna prisutnost na internetu. Radimo manji broj projekata, svaki pišemo od nule prema Vašoj djelatnosti i ostajemo dostupni nakon predaje. Budući da prije plaćanja dobivate link na gotovu stranicu, možete usporediti rezultat, a ne samo cijenu.",

      "contact.eyebrow": "Upit",
      "contact.title": "Zatražite demo verziju",
      "contact.lead":
        "Ispunite obrazac i javit ćemo Vam se u roku od 24 sata. Demo verziju izrađujemo bez troška i bez obveze — dostavljamo Vam link na funkcionalnu stranicu, a odluku donosite nakon toga.",
      "contact.emailLabel": "E-pošta:",
      "form.name": "Ime i prezime",
      "form.email": "E-pošta",
      "form.package": "Paket",
      "form.package.placeholder": "Odaberite paket (opcionalno)",
      "form.package.start": "Start — 390 €",
      "form.package.business": "Business — 690 €",
      "form.package.growth": "Growth — 1.090 €",
      "form.package.project": "Custom — od 1.500 €",
      "form.package.custom": "Drugo / nisam siguran/na",
      "form.message": "Poruka",
      "form.message.placeholder": "Opišite svoj projekt, rokove ili pitanja...",
      "form.submit": "Pošaljite upit",
      "form.success": "Hvala na upitu. Otvorio se Vaš program za e-poštu s pripremljenom porukom — pošaljite je ili nam pišite izravno na navedenu adresu.",
      "form.error": "Molimo ispunite sva obavezna polja.",

      "footer.copy": "© {year} nDesign · obrt za izradu web stranica, Zagreb",
      "footer.top": "Na vrh",
    },
    en: {
      "meta.title": "nDesign · Web Development",
      "meta.description":
        "nDesign — modern websites for small businesses and freelancers in Croatia. Transparent packages and a free demo version before any commitment.",

      "nav.services": "Services",
      "nav.pricing": "Pricing",
      "nav.about": "About us",
      "nav.faq": "FAQ",
      "nav.cta": "Request a quote",
      "nav.promo.tag": "Demo",
      "nav.promo.text": "A working site online — no obligation and no cost",
      "nav.promo.cta": "Request a demo",

      "hero.badge": "nDesign · Zagreb",
      "hero.title": "Websites for <em>trades and small businesses</em>",
      "hero.text":
        "Before any commitment we build a functional demo, put it online and send you the link. Fixed price, no hidden fees.",
      "hero.cta.primary": "Request a demo version",
      "hero.note": "Fixed price · No obligation · Reply within 24 hours",

      "steps.1.title": "Short inquiry",
      "steps.1.text": "You describe what you do. It takes a few minutes.",
      "steps.2.title": "Demo version",
      "steps.2.text": "A working site online — no obligation and no cost.",
      "steps.3.title": "Your decision",
      "steps.3.text": "If you are satisfied, we move it to your domain.",

      "services.eyebrow": "Services",
      "services.title": "What we offer",
      "services.lead":
        "Focused on what small businesses actually need — a clear online presence without unnecessary complexity.",
      "services.1.title": "Websites",
      "services.1.text":
        "Presentation sites for trades and small businesses — clear services, contact details and a professional impression.",
      "services.2.title": "CMS systems",
      "services.2.text":
        "Blog, gallery or both — with the ability to update content yourself, no technical knowledge required.",
      "services.3.title": "Custom projects",
      "services.3.text":
        "Larger or specific requirements — bookings, memberships, integrations or anything that doesn't fit a standard package. Scope and price are agreed after a short inquiry.",
      "services.4.title": "Maintenance & support",
      "services.4.text":
        "Hosting, security updates, backups and minor edits — so you can focus on your business.",

      "pricing.eyebrow": "Pricing",
      "pricing.title": "Transparent packages",
      "pricing.lead":
        "Fixed prices with no hidden costs. Choose the package that fits your business.",
      "pricing.popular": "Most popular",
      "pricing.start.name": "Start",
      "pricing.start.ideal": "Ideal for: a quick online presence",
      "pricing.start.price": "€390",
      "pricing.start.maint": "+ €25/mo — hosting, backup, up to 30 min edits",
      "pricing.start.f1": "1 page, up to 5 sections",
      "pricing.start.f2": "Contact form and scroll navigation",
      "pricing.start.f3": "Responsive design + SEO basics",
      "pricing.start.f4": "Domain and hosting for the first year",
      "pricing.start.f5": "2 rounds of design revisions",
      "pricing.start.f6": "Delivery: 5–10 business days",
      "pricing.business.name": "Business",
      "pricing.business.ideal": "Ideal for: salons, restaurants, trades",
      "pricing.business.price": "€690",
      "pricing.business.maint": "+ €30/mo — hosting, backup, up to 30 min edits",
      "pricing.business.f1": "Up to 8 sections or 3 separate pages",
      "pricing.business.f2": "More content, images and gallery",
      "pricing.business.f3": "Contact form, Google Maps and SEO basics",
      "pricing.business.f4": "Domain, hosting and Google Analytics",
      "pricing.business.f5": "2 rounds of design revisions",
      "pricing.business.f6": "Delivery: 2–3 weeks",
      "pricing.growth.name": "Growth",
      "pricing.growth.ideal": "Ideal for: frequent content updates",
      "pricing.growth.price": "€1,090",
      "pricing.growth.maint": "+ €45/mo — hosting, backup, CMS support",
      "pricing.growth.f1": "CMS — update content yourself",
      "pricing.growth.f2": "Blog, gallery or both",
      "pricing.growth.f3": "Up to 8 sections or pages",
      "pricing.growth.f4": "Domain and hosting for the first year",
      "pricing.growth.f5": "Training and 3 rounds of revisions",
      "pricing.growth.f6": "Delivery: 3–4 weeks",
      "pricing.custom.name": "Custom",
      "pricing.custom.ideal": "Ideal for: larger and specific projects",
      "pricing.custom.price": "from €1,500",
      "pricing.custom.maint": "Maintenance by agreement",
      "pricing.custom.f1": "Scope and features based on your brief",
      "pricing.custom.f2": "CMS, bookings or integrations as needed",
      "pricing.custom.f3": "Quote after a short conversation",
      "pricing.custom.f4": "Domain and hosting for the first year",
      "pricing.custom.f5": "Training and revision rounds by agreement",
      "pricing.custom.f6": "Timeline depends on scope",
      "pricing.custom.cta": "Send an inquiry",
      "pricing.cta": "Choose package",
      "pricing.note":
        "Prices are final — the business is not VAT registered, so no VAT is charged. The one-time price includes domain and hosting for the first year. Copy and photos are provided by the client or arranged as an add-on. Maintenance is optional but recommended. Custom projects are priced by agreement after a short inquiry.",

      "addons.title": "Add-ons on request",
      "addons.1.name": "Additional language on the site",
      "addons.1.price": "from €150",
      "addons.2.name": "Copywriting",
      "addons.2.price": "from €80 per page",
      "addons.3.name": "Logo design",
      "addons.3.price": "from €150",
      "addons.4.name": "Google Business Profile, Analytics and Search Console",
      "addons.4.price": "€90",
      "addons.5.name": "Additional subpage",
      "addons.5.price": "€90",
      "addons.6.name": "Extra round of revisions beyond those included",
      "addons.6.price": "€40/h",

      "about.eyebrow": "About us",
      "about.title": "Web development studio",
      "about.role": "Web development · Zagreb",
      "about.p1":
        "nDesign is a web development business based in Zagreb. We help trades and small businesses get found online, with a clear structure and no unnecessary complexity.",
      "about.p2":
        "We work with clients across Croatia — from hair salons and apartments to clinics and service businesses. We handle every project from the first inquiry to launch, with transparent pricing and no middlemen.",
      "about.p3":
        "We believe a good website doesn't have to be expensive or complicated. It needs to be fast, clear and tailored to what your business actually needs.",
      "about.stat1.value": "4+",
      "about.stat1.label": "years of web development experience",
      "about.stat2.value": "3+",
      "about.stat2.label": "published projects",
      "about.stat3.value": "24 h",
      "about.stat3.label": "reply to inquiries",

      "faq.eyebrow": "FAQ",
      "faq.title": "Common questions",
      "faq.lead": "Answers to what clients most often ask before we start working together.",
      "faq.1.q": "How long does it take to build a website?",
      "faq.1.a":
        "Start package usually 5–10 business days, Business 2–3 weeks, Growth 3–4 weeks. Custom projects depend on scope. Timeline also depends on how quickly you provide content.",
      "faq.2.q": "What do I need to prepare before we start?",
      "faq.2.a":
        "Ideally: copy, logo (if you have one), photos and a clear idea of what you want the site to achieve. If you're missing something, we can help with copywriting or recommend collaborators.",
      "faq.3.q": "Can I update the content myself?",
      "faq.3.a":
        "Yes — the Growth package includes a CMS for self-service updates. Custom projects include a CMS when that's part of the agreement. For Start and Business, minor edits are handled through monthly maintenance (up to 30 min/mo).",
      "faq.4.q": "What's included in monthly maintenance?",
      "faq.4.a":
        "Hosting, SSL, backups, system updates and up to 30 minutes of minor edits per month (text, images, contact details). Larger changes are agreed separately.",
      "faq.5.q": "Do you only work in Zagreb?",
      "faq.5.a":
        "No — we are based in Zagreb but work with clients across Croatia. Communication via email, calls or video meetings.",
      "faq.6.q": "What does the collaboration process look like?",
      "faq.6.a":
        "1) Initial inquiry → 2) Free demo version (no obligation) → 3) Quote and agreement → 4) Development and testing → 5) Launch and handover. Payment in phases or by agreement.",
      "faq.7.q": "What does the free demo version include?",
      "faq.7.a":
        "Based on your details we build a functional website, put it on a temporary address and send you a link. It is not a picture or a sketch — you can open it, review it and test it on a mobile device. If you wish to proceed, we move it to your domain; otherwise there is no cost to you.",
      "faq.8.q": "Do you build in WordPress?",
      "faq.8.a":
        "No. We write sites in our own code, without WordPress and without plugins. The result is faster loading and a better Google PageSpeed score, with none of the monthly plugin updates or security holes that WordPress sites constantly have to patch. For you that means a site that runs for years without intervention.",
      "faq.9.q": "What does a fixed price mean?",
      "faq.9.a":
        "The price in the list is the price you pay. There is no range that drifts upwards during the build and no extra charges for anything listed in the package. Everything outside the package appears in the add-on list with its price, so you know in advance what an extension would cost.",
      "faq.10.q": "There are cheaper offers on the market. What is the difference?",
      "faq.10.a":
        "There are, and most of them are WordPress builds on a ready-made template, delivered in three to five days. That is a perfectly legitimate choice if all you need is a basic online presence. We take on fewer projects, write each one from scratch for your line of work, and stay available after handover. Since you get a link to the finished site before paying, you can compare the result rather than just the price.",

      "contact.eyebrow": "Inquiry",
      "contact.title": "Request a demo version",
      "contact.lead":
        "Fill out the form and we will respond within 24 hours. The demo version costs nothing and carries no obligation — we send you a link to a functional site and you decide afterwards.",
      "contact.emailLabel": "Email:",
      "form.name": "Full name",
      "form.email": "Email",
      "form.package": "Package",
      "form.package.placeholder": "Select a package (optional)",
      "form.package.start": "Start — €390",
      "form.package.business": "Business — €690",
      "form.package.growth": "Growth — €1,090",
      "form.package.project": "Custom — from €1,500",
      "form.package.custom": "Other / not sure",
      "form.message": "Message",
      "form.message.placeholder": "Describe your project, timeline or questions...",
      "form.submit": "Send inquiry",
      "form.success": "Thank you for your inquiry. Your email client has opened with a prepared message — send it, or write to us directly at the address above.",
      "form.error": "Please fill in all required fields.",

      "footer.copy": "© {year} nDesign · web development, Zagreb",
      "footer.top": "Back to top",
    },
  };

  let currentLang = localStorage.getItem("ndesign-lang") || "hr";

  function t(key) {
    const value = translations[currentLang][key] ?? translations.hr[key] ?? key;
    return value.replace("{year}", String(new Date().getFullYear()));
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = t(key);
      } else {
        el.textContent = t(key);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });

    document.querySelectorAll("[data-i18n-popular]").forEach((el) => {
      el.setAttribute("data-popular", t("pricing.popular"));
    });

    const title = t("meta.title");
    const description = t("meta.description");
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
      btn.classList.toggle("lang-toggle__btn--active", btn.dataset.lang === currentLang);
    });

    document.querySelectorAll(".js-email").forEach((el) => {
      el.textContent = CONTACT_EMAIL;
      el.href = `mailto:${CONTACT_EMAIL}`;
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("ndesign-lang", lang);
    applyTranslations();
  }

  function initLanguageToggle() {
    document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  }

  function initHeader() {
    const header = document.getElementById("header");
    const onScroll = () => {
      header.classList.toggle("header--scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMobileNav() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileNav = document.getElementById("mobile-nav");
    const links = mobileNav.querySelectorAll("a");

    menuBtn.addEventListener("click", () => {
      const open = menuBtn.classList.toggle("menu-btn--open");
      mobileNav.classList.toggle("mobile-nav--open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("menu-btn--open");
        mobileNav.classList.remove("mobile-nav--open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initFaq() {
    document.querySelectorAll(".faq__item").forEach((item) => {
      const btn = item.querySelector(".faq__question");
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("faq__item--open");
        document.querySelectorAll(".faq__item").forEach((i) => {
          i.classList.remove("faq__item--open");
          i.querySelector(".faq__question").setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("faq__item--open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.className = "form__status";
      status.textContent = "";

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const pkg = form.package.value;
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = t("form.error");
        status.classList.add("form__status--error");
        return;
      }

      const subject = encodeURIComponent(`nDesign — upit od ${name}`);
      const body = encodeURIComponent(
        `Ime: ${name}\nEmail: ${email}\nPaket: ${pkg || "—"}\n\n${message}`
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      status.textContent = t("form.success");
      status.classList.add("form__status--success");
      form.reset();
    });
  }

  function initPricingLinks() {
    document.querySelectorAll("[data-package]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pkg = btn.getAttribute("data-package");
        const select = document.getElementById("package-select");
        if (select) select.value = pkg;
        document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function initCoverflow() {
    const root = document.getElementById("coverflow");
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(".coverflow__card"));
    const dotsWrap = root.querySelector(".coverflow__dots");
    const prev = root.querySelector(".coverflow__btn--prev");
    const next = root.querySelector(".coverflow__btn--next");
    const total = cards.length;
    let index = 0;
    let timer;

    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "coverflow__dot";
      dot.setAttribute("aria-label", `Projekt ${i + 1}`);
      dot.addEventListener("click", () => goTo(i, true));
      dotsWrap.appendChild(dot);
    });

    const dots = Array.from(dotsWrap.querySelectorAll(".coverflow__dot"));

    function offsetFor(i) {
      let offset = i - index;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;
      return offset;
    }

    function render() {
      cards.forEach((card, i) => {
        const offset = offsetFor(i);
        card.dataset.pos = String(offset);
        card.setAttribute("aria-current", offset === 0 ? "true" : "false");
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
      });
    }

    function goTo(nextIndex, user) {
      index = (nextIndex + total) % total;
      render();
      if (user) restart();
    }

    function restart() {
      clearInterval(timer);
      timer = setInterval(() => goTo(index + 1, false), 4200);
    }

    prev.addEventListener("click", () => goTo(index - 1, true));
    next.addEventListener("click", () => goTo(index + 1, true));

    cards.forEach((card, i) => {
      card.addEventListener("click", (event) => {
        if (offsetFor(i) !== 0) {
          event.preventDefault();
          goTo(i, true);
        }
      });
    });

    root.tabIndex = 0;
    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(index - 1, true);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(index + 1, true);
      }
    });

    const pause = () => clearInterval(timer);
    const resume = () => restart();

    root.addEventListener("mouseenter", pause);
    root.addEventListener("mouseleave", resume);
    root.addEventListener("focusin", pause);
    root.addEventListener("focusout", resume);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) pause();
      else resume();
    });

    render();
    restart();
  }

  applyTranslations();
  initLanguageToggle();
  initHeader();
  initMobileNav();
  initFaq();
  initReveal();
  initContactForm();
  initPricingLinks();
  initCoverflow();
})();
