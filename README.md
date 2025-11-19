# Portfolio Artistique - Chouchou

Portfolio web moderne et performant pour artiste multidisciplinaire (peintures, aquarelles, sculptures, character design).

## ✨ Fonctionnalités

- 🎨 Design artistique inspiré de awwwards.com
- 🌟 Animations Three.js fluides et optimisées
- 📱 Mobile-first, optimisé pour Safari iOS
- ⚡ Performances optimales (lazy loading, code splitting)
- 🎭 Animations fluides avec Framer Motion
- 🎯 TypeScript pour la sécurité des types
- 🏗️ Architecture moderne et maintenable

## 🛠️ Stack Technique

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **3D/Animations**: Three.js + @react-three/fiber + @react-three/drei
- **Animations**: Framer Motion + GSAP
- **Routing**: React Router
- **Build Tool**: Vite (avec optimisations mobile)
- **Code Quality**: ESLint + Prettier

## 📦 Installation

### Prérequis

- Node.js >= 20.0.0
- Yarn 1.22.19

### Installation des dépendances

```bash
# Assurez-vous d'utiliser Node 20+
node --version

# Installer les dépendances
yarn install
```

## 🚀 Développement

```bash
# Lancer le serveur de développement
yarn dev

# Le site sera accessible sur http://localhost:3000
```

## 🏗️ Build

```bash
# Build de production
yarn build

# Prévisualiser le build
yarn preview
```

## 📝 Scripts

```bash
yarn dev          # Lancer le serveur de développement
yarn build        # Build de production
yarn preview      # Prévisualiser le build
yarn lint         # Lancer ESLint
yarn format       # Formater le code avec Prettier
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── common/         # Composants communs (Button, LoadingScreen)
│   ├── layout/         # Layout (Header, Footer, Navigation)
│   ├── gallery/        # Composants galerie
│   └── three/          # Composants Three.js
├── pages/              # Pages principales
│   ├── Home.tsx
│   ├── Gallery.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── hooks/              # Custom React hooks
├── utils/              # Utilitaires et helpers
├── styles/             # Styles globaux et thème
├── assets/             # Images, fonts, etc.
└── types/              # TypeScript types/interfaces
```

## 🎯 Optimisations

### Performance Mobile

- **Pixel Ratio Limité**: Max 2x (pas 3x sur iPhone) pour économiser GPU
- **Code Splitting**: Chargement par route avec React.lazy
- **Lazy Loading**: Images et composants chargés à la demande
- **Compression**: Gzip et Brotli activés
- **Three.js Optimisé**:
  - Antialiasing désactivé sur mobile
  - Nombre de particules réduit (1000 au lieu de 10000+)
  - GPU usage contrôlé

### Safari iOS

- Compatibilité testée avec les spécificités Safari
- Gestion WebGL optimisée
- Prévention du zoom sur focus des inputs
- Media queries compatibles avec anciens Safari

### Accessibilité

- Support `prefers-reduced-motion`
- Navigation clavier optimisée
- Attributs ARIA appropriés
- Contraste respecté

## 🎨 Personnalisation

### Thème

Les variables CSS sont définies dans `src/styles/global.css`:

```css
:root {
  --color-bg-primary: #0a0a0a;
  --color-accent: #f5f5f5;
  /* ... */
}
```

### Ajout d'œuvres

Les œuvres sont définies dans le type `Artwork` (`src/types/artwork.ts`). Pour ajouter des œuvres:

1. Créer un fichier de données (ex: `src/data/artworks.ts`)
2. Utiliser les composants de galerie existants
3. Implémenter le lazy loading des images

## 🚢 Déploiement

### Netlify / Vercel

1. Connecter le repository
2. Build command: `yarn build`
3. Publish directory: `dist`
4. Node version: 20.x

### Configuration recommandée

```toml
# netlify.toml
[build]
  command = "yarn build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📚 Documentation

- Voir `CLAUDE.md` pour l'architecture détaillée
- Chaque composant est documenté avec des commentaires
- Les hooks customs incluent des exemples d'utilisation

## 🤝 Contribution

1. Respecter les conventions de code (ESLint + Prettier)
2. Maintenir le principe DRY (Don't Repeat Yourself)
3. Tester sur mobile et Safari avant commit
4. Optimiser les images avant ajout

## 📄 License

Propriété de l'artiste. Tous droits réservés.

## 🐛 Support

Pour tout problème ou question, créer une issue sur le repository.
