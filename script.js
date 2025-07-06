/* --- Configuration --- */
const icons = {
    "JavaScript": "🟨", "TypeScript": "🔷", "Python": "🐍", "PHP": "🐘",
    "HTML": "🌐", "CSS": "🎨", "C": "💻", "C++": "🔧", "C#": "♯",
    "Java": "☕", "Shell": "🐚", "Other": "📁"
};
const getIcon = lang => icons[lang] || icons["Other"];

/* ---- On récupère UNIQUEMENT les projets épinglés via pinned.php ---- */
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


