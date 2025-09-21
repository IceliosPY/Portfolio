/* ---------- 1. Icônes langage GitHub ---------- */
const icons = {
    "JavaScript": "🟨", "TypeScript": "🔷", "Python": "🐍", "PHP": "🐘",
    "HTML": "🌐", "CSS": "🎨", "C": "💻", "C++": "🔧", "C#": "♯",
    "Java": "☕", "Shell": "🐚", "Other": "📁"
};
const getIcon = lang => icons[lang] || icons["Other"];

/* ---------- 2. Projets épinglés ---------- */
fetch("pinned.php")
  .then(r => r.json())
  .then(repos => {
      const container = document.getElementById("projets");
      container.innerHTML = "";                      // nettoie l’ancien contenu

      repos.forEach(repo => {
          const lang = repo.primaryLanguage ? repo.primaryLanguage.name : null;

          const card = document.createElement("div");
          card.className = "projet";
          card.innerHTML = `
              <h3>${getIcon(lang)} ${repo.name}</h3>
              <p>${repo.description || "Pas de description."}</p>
              <p><strong>Langage :</strong> ${lang || "Inconnu"}</p>
              <a href="${repo.url}" target="_blank">Voir sur GitHub</a>
          `;
          container.appendChild(card);
      });
  })
  .catch(err => {
      console.error("Erreur lors du chargement des projets :", err);
      document.getElementById("projets").textContent =
        "Impossible de charger les projets épinglés.";
  });

  document.querySelectorAll('.experience').forEach(span => {
    const startDate = new Date(span.dataset.start);
    const now = new Date();

    let years  = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth()  - startDate.getMonth();
    const days =  now.getDate()  - startDate.getDate();

    // Ajuste si on n’a pas encore atteint le jour du mois
    if (days < 0) {
        months--;
    }
    // Ajuste si on n’a pas encore atteint le mois anniversaire
    if (months < 0) {
        years--;
        months += 12;
    }

    // Construit le texte : ex. "1 an 3 mois", "8 mois", "2 ans"
    let txt = '';
    if (years > 0) {
        txt += `${years} an${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
        if (txt) txt += ' ';
        txt += `${months} mois`;
    }
    if (!txt) txt = '0 mois';          // au cas où la date est aujourd’hui

    span.textContent = txt;
});


/* ---------- 3. Calcul d’expérience ---------- */
document.querySelectorAll('.experience').forEach(span => {
    const start = new Date(span.dataset.start);
    const now   = new Date();

    let years  = now.getFullYear() - start.getFullYear();
    let months = now.getMonth()    - start.getMonth();
    if (now.getDate() < start.getDate()) months--;
    if (months < 0) { years--; months += 12; }

    const txtYears  = years  ? `${years} an${years > 1 ? 's' : ''}` : '';
    const txtMonths = months ? `${months} mois`                      : '';

    span.textContent = [txtYears, txtMonths].filter(Boolean).join(' ') || '0 mois';
});


/* ---------- 4. Année automatique footer ---------- */
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* ---------- 5. Avertissement CNIL (facultatif) ---------- */
const cnilLink = document.querySelector('a[href*="cnil.fr"]');
if (cnilLink) {
    cnilLink.addEventListener('click', () =>
        alert("Vous allez être redirigé vers le site officiel de la CNIL.")
    );
}

/* ---------- Cycle jour/nuit ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleTheme");
    if (!btn) return;
    const fadeOutStars = () => {
        // ① on lance le fondu
        sky.querySelectorAll('.star').forEach(star => star.style.opacity = 0);
        // ② on nettoie le DOM après l’animation (~900 ms)
        setTimeout(() => (sky.innerHTML = ""), 900);
      };
  
    const THEMES = ["light", "dark"];
    let currentTheme = "auto"; // toujours auto au début
  
    const getResolvedTheme = (raw) => {
      if (raw === "auto") {
        const hour = new Date().getHours();
        return (hour >= 7 && hour < 20) ? "light" : "dark";
      }
      return raw;
    };
  
    const applyTheme = (rawTheme) => {
      const resolved = getResolvedTheme(rawTheme);
      document.body.classList.toggle("dark", resolved === "dark");
  
      // met à jour l'apparence du bouton selon le thème actuel
      btn.textContent =
        resolved === "light" ? "🌙 Mode Sombre" : "🌞 Mode Clair";
    };
  
    const setTheme = (newTheme) => {
      currentTheme = newTheme;
      localStorage.setItem("theme", newTheme); // facultatif : stocker si tu veux
      applyTheme(currentTheme);
    };
  
    // 🕒 Au premier chargement, on utilise "auto"
    applyTheme(currentTheme);
  
    // 🖱️ Dès que l'utilisateur clique, on bascule dans le cycle ["light", "dark"]
    btn.addEventListener("click", () => {
      // si on était encore en "auto", on commence le cycle à partir de l’heure réelle
      const current = currentTheme === "auto" ? getResolvedTheme("auto") : currentTheme;
      const index = THEMES.indexOf(current);
      const next = THEMES[(index + 1) % THEMES.length];
      setTheme(next);
    });
  });
  
  

  
/* ---------- 7. Pluie + son ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("rain-container");
    const audio     = document.getElementById("rain-audio");
  
    /* -------- génération des gouttes avec profondeur -------- */
    const layers = [
      { count: 25, size: 2,   opacity: 0.30, speed: 1.2 }, // arrière
      { count: 20, size: 2.5, opacity: 0.40, speed: 0.9 }, // milieu
      { count: 15, size: 3,   opacity: 0.55, speed: 0.6 }  // avant
    ];
  
    layers.forEach(layer => {
        for (let i = 0; i < layer.count; i++) {
          const d = document.createElement("div");
          d.className = "raindrop";
      
          d.style.left   = `${Math.random() * 100}vw`;
          d.style.width  = `${layer.size}px`;
          d.style.height = `${layer.size * 6}px`;
      
          d.style.opacity          = layer.opacity;
          d.style.animationDuration= `${layer.speed + Math.random()}s`;
          d.style.animationDelay   = `${Math.random() * 4}s`;
      
          container.appendChild(d);
        }
      });
      
  
    /* --------- son très discret --------- */
    if (audio) {
      audio.volume = 0.06;   // volume doux
      // Démarre après interaction si l’autoplay est bloqué
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const rainToggle  = document.getElementById("toggleRain");
    const rainCanvas  = document.getElementById("rain-container");
    const rainAudio   = document.getElementById("rain-audio");

    if (!rainToggle || !rainCanvas || !rainAudio) return;

    /* --- état initial : pluie OFF --- */
    let rainActive = false;
    rainCanvas.style.display = "none";
    rainAudio.pause();
    rainToggle.textContent = "☀️ Sec";

    /* ---------- bascule pluie / sec ---------- */
    rainToggle.addEventListener("click", () => {
        rainActive = !rainActive;

        /* Affichage visuel */
        rainCanvas.style.display = rainActive ? "block" : "none";

        /* Son : ne joue que si pluie ON
           et seulement après une première interaction user (clic sur le bouton) */
        if (rainActive) {
            rainAudio.volume = 0.2;
            rainAudio.play().catch(() => {/* silencieux si bloqué */});
        } else {
            rainAudio.pause();
        }

        /* Libellé du bouton */
        rainToggle.textContent = rainActive ? "🌧️ Pluie" : "☀️ Sec";
    });
});

/* ---------- 8. Éclairs aléatoires quand la pluie est active ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const flashLayer   = document.getElementById("lightning-flash");
    const thunderSound = document.getElementById("thunder-sound");
    const rainToggle   = document.getElementById("toggleRain");
    const rainCanvas   = document.getElementById("rain-container");
    const miniLayer    = document.getElementById("mini-lightnings"); // <-- conteneur mini-éclairs
  
    if (!flashLayer || !rainToggle || !rainCanvas) return;
  
    let rainActive = rainCanvas.style.display !== "none";   // état initial
    let flashTimer = null;
  
    /* -------- déclenche un éclair -------- */
    const triggerFlash = () => {
      if (!rainActive) return;        // sécurité : pas de pluie → pas d’éclair
  
      /* gros flash plein écran */
      flashLayer.style.opacity = 1;
      setTimeout(() => (flashLayer.style.opacity = 0), 80);
  
      /* tonnerre (facultatif) */
      if (thunderSound) {
        thunderSound.currentTime = 0;
        thunderSound.volume      = 0.15;
        thunderSound.play().catch(() => {});   // ignore si bloqué
      }
  
      /* mini-éclair localisé */
      if (miniLayer) {
        const mini = document.createElement("div");
        mini.className   = "mini-lightning";
        mini.style.left = `${Math.random() * 100}vw`;
        mini.style.top  = `${Math.random() * 80}vh`;
        miniLayer.appendChild(mini);
        setTimeout(() => mini.remove(), 400);         // nettoyage
      }
    };
  
    /* -------- planification aléatoire -------- */
    const startFlashes = () => {
      if (flashTimer) return;               // déjà en cours
      triggerFlash();                       // petit flash immédiat
      flashTimer = setInterval(() => {
        triggerFlash();
      }, 8000 + Math.random() * 10000);     // 8-18 s
    };
  
    const stopFlashes = () => {
      clearInterval(flashTimer);
      flashTimer = null;
    };
  
    /* -------- synchronisé avec le bouton Pluie -------- */
    rainToggle.addEventListener("click", () => {
      rainActive = rainCanvas.style.display !== "none";
      rainActive ? startFlashes() : stopFlashes();
    });
  
    /* -------- si la pluie est active au chargement -------- */
    if (rainActive) startFlashes();
  });

  document.addEventListener("DOMContentLoaded", () => {
    /* ---------------------------------
       1)  RÉGLAGE DE TEST (22 h simulé)
       --------------------------------- */
    const overrideHour = null;        // ←  mets null pour revenir à l’heure réelle
    /* --------------------------------- */
  
    const btn = document.getElementById("toggleTheme");
    const sky = document.getElementById("sky-elements");
    if (!btn || !sky) return;
  
    let currentMode = "";
  
    const addStars = () => {
      sky.innerHTML = "";
      for (let i = 0; i < 100; i++) {
        const s  = document.createElement("div");
        const sz = Math.random() * 1.5 + 1;
        s.className  = "star";
        s.style.width  = s.style.height = `${sz}px`;
        s.style.top  = `${Math.random() * 100}vh`;
        s.style.left = `${Math.random() * 100}vw`;
        sky.appendChild(s);
      }
    };
  
    const applyTheme = (mode) => {
      document.body.classList.remove("dark", "night");
      sky.innerHTML = "";
      currentMode = mode;
  
      if (mode === "light") {
        btn.textContent = "🌙 Mode sombre";
      } else if (mode === "dark") {
        document.body.classList.add("dark");
        btn.textContent = "☀️ Mode Clair";
      } else if (mode === "night") {
        document.body.classList.add("dark", "night");
        addStars();
        btn.textContent = "☀️ Mode Clair";
      }
    };
  
    /* ----------- heure courante (réelle ou simulée) ----------- */
    const getHour = () => overrideHour ?? new Date().getHours();
  
    /* ----------- état initial ----------- */
    const h = getHour();
    if (h >= 6 && h < 20)        applyTheme("light");
    else if (h >= 20 && h < 22)  applyTheme("dark");
    else                         applyTheme("night");
  
    /* ----------- clic sur le bouton ----------- */
    btn.addEventListener("click", () => {
      if (currentMode === "light") {
        const now = getHour();
        if (now >= 22 || now < 6) applyTheme("night");
        else                      applyTheme("dark");
      } else {
        applyTheme("light");
      }
    });
  });
  
  