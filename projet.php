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
    <li><a href="index.php#home">Home</a></li>
    <li><a href="index.php#projects">Projects</a></li>
    <li><a href="index.php#skills">Skills</a></li>
    <li><a href="index.php#documents">Documents</a></li>
    <li><a href="projet.php">Autres projets</a></li>
    <li class="dropdown rain-control">
        <button class="more-btn" aria-label="Plus">⋯</button>
        <ul class="dropdown-content">
            <li><button id="toggleTheme">🌓 Auto</button></li>
            <li><button id="toggleRain" class="menu-toggle">🌧️ Pluie</button></li>
        </ul>
    </li>
  </ul>
</nav>



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
    
    <div id="sky-elements">
    <div id="moon"></div>
    </div>
         <div id="mini-lightnings"></div>
         <script src="script.js"></script>
</body>
</html>
