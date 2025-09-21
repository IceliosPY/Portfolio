<?php
require 'config.php'; // Assure-toi que ce fichier contient define('GH_TOKEN', 'ton_token')

header('Content-Type: application/json');

// Requête GraphQL : récupérer les 4 projets épinglés du profil
$query = <<<'GRAPHQL'
query {
  user(login: "IceliosPY") {
    pinnedItems(first: 4, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          primaryLanguage {
            name
          }
        }
      }
    }
  }
}

GRAPHQL;

$payload = json_encode(['query' => $query]);

// Préparer la requête vers l'API GraphQL de GitHub
$ch = curl_init("https://api.github.com/graphql");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        'Authorization: bearer ' . GH_TOKEN,
        'Content-Type: application/json',
        'User-Agent: Portfolio-App' // Important : requis par GitHub
    ]
]);

$response = curl_exec($ch);
curl_close($ch);

// Décoder la réponse JSON
$data = json_decode($response, true);
$repos = $data['data']['user']['pinnedItems']['nodes'] ?? [];

/* ---------- SECTION DE DÉBOGAGE TEMPORAIRE ---------- */
if (!$repos || count($repos) === 0) {
    file_put_contents('debug.json', json_encode($data, JSON_PRETTY_PRINT));
    echo json_encode([
        "error" => "Aucun projet épinglé récupéré. Voir debug.json pour plus d'infos."
    ]);
    exit;
}
/* ---------------------------------------------------- */

// Réponse normale : les projets épinglés
echo json_encode($repos);