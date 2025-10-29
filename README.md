<p align="center">
 <img src="https://raw.githubusercontent.com/Heleneb1/carambar-front/main/src/assets/carambar-joke.png" alt="Carambar Banner" />
</p>

# 🍬 Carambar Front

Application web React permettant de consulter et ajouter des blagues Carambar. Interface moderne et responsive construite avec React 19, TypeScript et Vite 7.

## 🌐 Liens du projet

- **🚀 Application déployée** : [https://heleneb1.github.io/carambar-front](https://heleneb1.github.io/carambar-front)
- **⚙️ API** : [https://carambar-api-khpl.onrender.com/](https://carambar-api-khpl.onrender.com)
- **📘 Documentation API (Swagger)** : [https://carambar-api-khpl.onrender.com/api-docs/](https://carambar-api-khpl.onrender.com/api-docs/)
- **📂 Repository Backend** : [github.com/Heleneb1/carambar-api](https://github.com/Heleneb1/carambar-api)

---

## 🚀 Stack technique

### Core

- **React 19.2.0** - Bibliothèque UI
- **TypeScript 5.9.3** - Typage statique
- **Vite 7.1.12** - Build tool et dev server
- **React Router DOM 7.9.4** - Navigation SPA

### Communication & UI

- **Axios 1.12.2** - Client HTTP
- **React Toastify 11.0.5** - Notifications

### Qualité de code

- **ESLint 9.38.0** - Linter
- **TypeScript ESLint 8.46.2** - Règles TypeScript

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

## 🔗 API Endpoints

L'application consomme l'API Carambar hébergée sur Render :  
**Base URL** : `https://carambar-api-khpl.onrender.com/`

| Méthode | Endpoint    | Description                    |
| ------- | ----------- | ------------------------------ |
| `GET`   | `/jokes`    | Récupère toutes les blagues    |
| `GET`   | `/joke/:id` | Récupère une blague par son ID |
| `GET`   | `/random`   | Récupère une blague aléatoire  |
| `POST`  | `/jokes`    | Ajoute une nouvelle blague     |

📖 **Documentation complète** : [Swagger UI](https://carambar-api-khpl.onrender.com/api-docs)

---

## 🛠️ Installation et lancement

### Prérequis

- Node.js >= 18
- npm >= 9

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

# URL de l'API Carambar (en local ou en ligne)

```bash
VITE_API_URL=http://localhost:2525/api/v1        # pour le dev
```

---

```bash
# Créer un build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

---

## ✨ Fonctionnalités

- 🎲 **Blague aléatoire** : affichage d'une blague au hasard via bouton
- 📚 **Liste complète** : consultation de toutes les blagues disponibles
- ➕ **Ajout de blague** : formulaire avec validation des champs
- 🧭 **Navigation fluide** : routing SPA avec React Router
- 🔔 **Notifications** : retours utilisateur via React Toastify
- 📱 **Design responsive** : adaptation mobile, tablette et desktop
- 🎨 **Identité visuelle** : respecte la charte graphique Carambar
- 🚫 **Gestion d'erreurs** : page 404 personnalisée

---

## 🎯 Roadmap

### En cours

- 🗑️ Suppression d'une blague
- 🌙 Mode sombre
- ✨ Animations de transitions

### À venir

- 🔐 Authentification (optionnelle)
- ❤️ Système de favoris
- 🔍 Recherche et filtres
- 📊 Statistiques des blagues

---

## 👩‍💻 Auteur

**Helene**  
GitHub : [@Heleneb1](https://github.com/Heleneb1)

---

## 📄 Licence

Ce projet est réalisé dans le cadre d'un projet de formation.
