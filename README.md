# 🍬 Carambar Front

Application web React permettant de consulter et ajouter des blagues Carambar. Interface moderne et responsive construite avec React 19, TypeScript et Vite 7.

## 🌐 Liens du projet

- **🚀 Application déployée** : [https://heleneb1.github.io/carambar-front](https://heleneb1.github.io/carambar-front)
- **⚙️ API** : [https://carambar-api.onrender.com](https://carambar-api.onrender.com)
- **📘 Documentation API (Swagger)** : [https://carambar-api.onrender.com/api-docs](https://carambar-api.onrender.com/api-docs)
- **📂 Repository Backend** : [github.com/Heleneb1/carambar-api](https://github.com/Heleneb1/carambar-api)

---

## 📁 Architecture du projet

```
src/
├── api/              # Couche de communication API
│   └── JokeApi.ts    # Service Axios pour les blagues
├── assets/           # Ressources statiques (images, icônes)
│   └── bg-carmbar.png, realistic.png, icon.svg...
├── components/       # Composants réutilisables
│   ├── AddJokeForm.tsx
│   ├── JokeCard.tsx
│   └── NavBar.tsx
├── models/           # Interfaces TypeScript
│   └── Joke.ts
├── pages/            # Composants de pages
│   ├── Home.tsx
│   ├── AddJoke.tsx
│   ├── AllJokes.tsx
│   └── NotFound.tsx
├── styles/           # Styles CSS modulaires
│   ├── home.css
│   ├── joke-card.css
│   └── variables.css
├── App.tsx           # Configuration du routing
└── main.tsx          # Point d'entrée de l'application
```

---

## 🚀 Stack technique

- @eslint/js@9.38.0
- @types/node@24.9.1
- @types/react-dom@19.2.2
- @types/react@19.2.2
- @vitejs/plugin-react@5.1.0
- axios@1.12.2
- eslint-plugin-react-hooks@5.2.0
- eslint-plugin-react-refresh@0.4.24
- eslint@9.38.0
- globals@16.4.0
- react-dom@19.2.0
- react-router-dom@7.9.4
- react-toastify@11.0.5
- react@19.2.0
- typescript-eslint@8.46.2
- typescript@5.9.3
- vite@7.1.12

🔗 API utilisée
L’application consomme l’API Carambar & Co :
https://carambar-api-khpl.onrender.com/

## 🔗 API Endpoints

L'application consomme l'API Carambar hébergée sur Render :  
**Base URL** : [https://carambar-api-khpl.onrender.com/api/v1/jokes](https://carambar-api-khpl.onrender.com/api/v1/jokes)

| Méthode | Endpoint          | Description                    |
| ------- | ----------------- | ------------------------------ |
| `GET`   | `/blagues`        | Récupère toutes les blagues    |
| `GET`   | `/blagues/:id`    | Récupère une blague par son ID |
| `GET`   | `/blagues/random` | Récupère une blague aléatoire  |
| `POST`  | `/blagues`        | Ajoute une nouvelle blague     |

📖 **Documentation complète** :

- Documentation Swagger : [https://carambar-api-khpl.onrender.com/api-docs](https://carambar-api-khpl.onrender.com/api-docs)
  [Swagger UI](https://carambar-api.onrender.com/api-docs)

---

## 🧠 Fonctionnalités

- Affichage des blagues avec JokeCard
- Ajout via AddJokeForm avec validation
- Navigation SPA avec React Router
- Notifications Toastify
- Design responsive
- Page NotFound via NotFound.tsx

## 📌 À venir

- Suppression d'une blague et mise à jour
- Système de favoris
- Mode sombre
- Animation des transitions
- Authentification (optionnelle)

🛠️ Installation et lancement
Prérequis

Node.js >= 18
npm >= 9

# Installation

- Cloner le repository
  git clone https://github.com/Heleneb1/carambar-front.git
  cd carambar-front

## 🛠️ Installation et lancement

### Installation

```bash
# Cloner le repository
git clone https://github.com/Heleneb1/carambar-front.git
cd carambar-front

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur **http://localhost:5173**

### Build de production

```bash
# Créer un build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

---

## 👩‍💻 Auteur

**Helene**  
GitHub : [@Heleneb1](https://github.com/Heleneb1)

## 📄 Licence

Ce projet est réalisé dans le cadre d'un projet de formation.
