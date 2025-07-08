<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Portfolio GitHub</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<!-- Effets visuels -->
<div id="rain-container"></div>
<audio id="rain-audio" src="Audio/pluie.mp3" loop preload="auto"></audio>
<div id="lightning-flash"></div>
<audio id="thunder-sound" src="Audio/Thunder.mp3" preload="auto"></audio>

    <!-- Menu -->
    <nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#documents">Documents</a></li>
    <li class="dropdown rain-control">
        <button class="more-btn" aria-label="Plus">⋯</button>
        <ul class="dropdown-content">
            <li><button id="toggleTheme">🌓 Auto</button></li>
            <li><button id="toggleRain" class="menu-toggle">🌧️ Pluie</button></li>
        </ul>
    </li>
  </ul>
</li>
  </ul>
</li>
  </ul>
</nav>

<!-- Section Home -->
<section id="home" class="hero-block">
    <div class="hero-content">
        <h1 class="hero-title">Enzo Castetbon</h1>
        <p class="hero-social-text">Retrouvez-moi aussi sur :</p>
        <ul class="socials">
    <li>
        <a href="https://github.com/IceliosPY" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            GitHub
        </a>
    </li>
    <li>
        <a href="https://linkedin.com/in/tonprofil" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            LinkedIn
        </a>
    </li>
    <li>
        <a href="mailto:tonmail@example.com">
            <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/mail.svg" alt="Email" />
            Email
        </a>
    </li>
</ul>
    </div>
</section>

    <!-- Section Projects -->
    <main id="projects">
        <h2>Mes projets GitHub</h2>
        <div id="projets"></div>
        <p class="more-projects">
            👉 <a href="projects.html">Voir plus de projets</a>
        </p>
    </main>

<!-- Section Skills -->
<section id="skills-section">
    <h2>Compétences</h2>
    <div id="skills">
        <div class="skill">
            <h3>HTML/CSS/JS</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2018-10-10"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Unficsit</a></li>
                <li><a href="#">Realisation d'une application de gestion</a></li>
                <li><a href="#">Realisation d'un réseau social</a></li>
            </ul>
        </div>

        <div class="skill">
            <h3>C</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2023-09-10"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">C/D césar/vigenere</a></li>
                <li><a href="#">Proxy en C</a></li>
            </ul>
        </div>

        <div class="skill">
            <h3>Windev</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2023-03-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Application de reservation</a></li>
                <li><a href="#">Application bancaire</a></li>
            </ul>
        </div>

        <div class="skill">
            <h3>C++</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2023-09-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Modificateur de sauvegarde GBA</a></li>
            </ul>
        </div>

        <div class="skill">
            <h3>Python</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2018-09-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Algorithme de Djikstra et belman-ford</a></li>
            </ul>
        </div>

        <div class="skill">
            <h3>Git / Linux</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2023-09-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Dotfiles Linux</a></li>
            </ul>
        </div>

        <div class="skill">
            <h3>Shell</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2024-09-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Réalisation d'un script de lancement linux</a></li>
            </ul>
        </div>
        <div class="skill">
            <h3>C#/.NET</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2023-09-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Moteur graphique Mankind</a></li>
            </ul>
        </div>
        <div class="skill">
            <h3>Java</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2023-03-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Application de vente</a></li>
                <li><a href="#">Application de photographie</a></li>
            </ul>
        </div>
        <div class="skill">
            <h3>ADA</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2022-09-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Concours de programmation : Hashis</a></li>
                <li><a href="#">Concours de programmation : Takuzu</a></li>
            </ul>
        </div>
        <div class="skill">
            <h3>SQL/NoSQL/MongoDB</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2023-03-01"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Réalisation statistique de reussite</a></li>
            </ul>
        </div>
        <div class="skill">
            <h3>Modding Esp/Esl/Esm</h3>
            <p><strong>Expérience :</strong> <span class="experience" data-start="2025-05-15"></span></p>
            <p><strong>Projets en lien :</strong></p>
            <ul>
                <li><a href="#">Réalisation de Script FOMOD de traduction pour Skyrim et Fallout 4</a></li>
            </ul>
        </div>
    </div>
</section>


   <!-- Section Documents -->
   <section id="documents">
  <div class="doc-wrapper">
    <h2>Documents</h2>
    <div class="doc-box">
      <ul>
        <li>
          <a href="Progc.pdf" target="_blank">Modding FKSE/SKSE</a>
          <span class="doc-desc">Le modding pour FKSE,SKSE<br>(in french)</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<footer>
    <div class="footer-container">
    <p>&copy; <span id="year"></span> Icelios • Tous droits réservés</p>
        <ul class="footer-links">
            <li><a href="mailto:tonmail@example.com">Email</a></li>
            <li><a href="https://github.com/IceliosPY" target="_blank">GitHub</a></li>
            <li><a href="https://linkedin.com/in/tonprofil" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.cnil.fr" target="_blank" title="Site officiel de la CNIL">CNIL</a></li>
        </ul>
    </div>
</footer>
    <div id="sunset-layer"></div>
    <div id="sunrise-layer"></div>
    <div id="sky-elements">
    <div id="moon"></div>
    </div>
         <div id="mini-lightnings"></div>
         <script src="script.js"></script>
</body>
</html>
