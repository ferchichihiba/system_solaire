// Récupérer les utilisateurs depuis le localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Récupérer le tableau HTML
const tableBody = document.querySelector('#userTable tbody');

// Fonction pour remplir le tableau avec les utilisateurs
function populateTable() {
    tableBody.innerHTML = ''; // Nettoie le tableau avant de le remplir
    users.forEach((user, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.status || 'actif'}</td>
            <td>
                <button onclick="deleteUser(${index})">Supprimer</button>
            </td>
        `;
    });
}

// Fonction pour ajouter un utilisateur via le formulaire
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const status = document.getElementById('status').value;

    if (username === '' || email === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Vérifie si l'utilisateur existe déjà
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('Cet email est déjà utilisé.');
        return;
    }

    // Ajoute l'utilisateur au tableau et localStorage
    users.push({ username, email, status });
    localStorage.setItem('users', JSON.stringify(users));

    // Actualise le tableau et réinitialise le formulaire
    populateTable();
    this.reset();
    alert('Utilisateur ajouté avec succès.');
});

// Fonction pour supprimer un utilisateur
function deleteUser(index) {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        populateTable();
        alert('Utilisateur supprimé avec succès.');
    }
}

// Charger les utilisateurs dans le tableau au démarrage
populateTable();
