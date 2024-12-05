document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le formulaire de se soumettre par défaut

    // Récupère les données du formulaire
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérifie si l'email est déjà utilisé
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('Cet email est déjà utilisé.');
        return;
    }

    // Ajoute l'utilisateur au localStorage
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Inscription réussie !');
    window.location.href = 'login.html'; // Redirige vers la page de connexion
});
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le formulaire de se soumettre par défaut

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Connexion réussie !');
        window.location.href = 'home.html'; // Redirige vers la page d'accueil
    } else {
        alert('Email ou mot de passe incorrect.');
    }
});

