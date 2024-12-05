// Fonction pour afficher les vidéos
function showVideos() {
    // Masquer toutes les sections
    document.getElementById('planet-list').classList.add('hidden');
    document.getElementById('planet-details').classList.add('hidden');
    document.getElementById('planet-gallery').classList.add('hidden');
    document.getElementById('planet-comments').classList.add('hidden');
  
    // Afficher la section des vidéos
    document.getElementById('planet-video').classList.remove('hidden');
  }
  
  // Fonction pour revenir à la vue précédente
  function goBack() {
    // Masquer la section des vidéos et afficher la liste des planètes
    document.getElementById('planet-video').classList.add('hidden');
    document.getElementById('planet-list').classList.remove('hidden');
    document.getElementById('planet-details').classList.add('hidden');
    document.getElementById('planet-gallery').classList.add('hidden');
    document.getElementById('planet-comments').classList.add('hidden');
  }
  
  // Fonction pour afficher les détails d'une planète
  function showDetails(planetName) {
    // Masquer la liste des planètes
    document.getElementById('planet-list').classList.add('hidden');
    // Afficher la section des détails
    document.getElementById('planet-details').classList.remove('hidden');
    
    // Modifier le contenu en fonction de la planète sélectionnée
    document.getElementById('planet-name').textContent = planetName;
    document.getElementById('planet-description').textContent = getPlanetDescription(planetName);
  }
  
  // Fonction pour obtenir la description d'une planète (exemple simplifié)
  function getPlanetDescription(planetName) {
    const descriptions = {
      'Mercure': 'Mercure est la planète la plus proche du Soleil.',
      'Vénus': 'Vénus est la deuxième planète du système solaire.',
      'Terre': 'La Terre est la troisième planète et abrite la vie.',
      'Mars': 'Mars est la quatrième planète et est souvent appelée la planète rouge.'
    };
    return descriptions[planetName] || 'Description non disponible';
  }
  
  // Fonction pour afficher la galerie d'images
  function showGallery() {
    document.getElementById('planet-gallery').classList.remove('hidden');
    document.getElementById('planet-details').classList.add('hidden');
  }
  
  // Fonction pour afficher les commentaires
  function showComments() {
    document.getElementById('planet-comments').classList.remove('hidden');
    document.getElementById('planet-details').classList.add('hidden');
  }
  
  // Fonction pour ajouter un commentaire
  function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;
    if (commentText) {
      const commentList = document.getElementById('comment-list');
      const newComment = document.createElement('li');
      newComment.textContent = commentText;
      commentList.appendChild(newComment);
      commentInput.value = ''; // Réinitialiser le champ de texte
    }
  }
  