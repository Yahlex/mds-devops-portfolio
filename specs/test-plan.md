# Plan d'Intégration des Tests Unitaires (Next.js 16 + React 19)

Ce document détaille la stratégie pour intégrer des tests unitaires robustes, une pipeline CI/CD via GitHub Actions, et l'intégration dans le build Docker.

## 1. Stack Technique Choisie

Compte tenu de votre stack (Next.js 16, React 19, TypeScript), voici la recommandation standard et robuste :

*   **Runner & Framework** : [Jest](https://jestjs.io/) (Standard de facto pour Next.js).
*   **Environnement** : `jest-environment-jsdom` (Pour simuler le DOM navigateur).
*   **Librairie de test** : `@testing-library/react` (Pour tester les composants comme un utilisateur).
*   **Support TypeScript** : `ts-node` (Déjà inclus souvent, ou via configuration Next.js native).

> **Note sur React 19** : React 19 étant très récent, nous devrons utiliser les dernières versions des librairies de testing pour assurer la compatibilité (notamment pour les Server Components et l'async rendering).

## 2. Structure des Tests

Nous adopterons une structure co-localisée ou centralisée selon les meilleures pratiques Next.js :

```text
app/
  __tests__/
    Home.test.tsx      # Test de la page d'accueil
components/
  __tests__/
    Navbar.test.tsx    # Test du composant Navbar
    Hero.test.tsx      # Test du composant Hero
    ...
```

## 3. Étapes d'Implémentation

### Étape A : Installation des dépendances

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
```

### Étape B : Configuration (`jest.config.ts`)

Création du fichier de configuration pour gérer :
1.  Les alias de chemins (`@/components/...`).
2.  Le transformateur Next.js (pour compiler TS/JSX).
3.  Le setup file pour `jest-dom` (matchers custom comme `toBeInTheDocument`).
4.  Mocking des assets (CSS, Images) et de `framer-motion` (qui pose souvent problème en test JSDOM).

### Étape C : Écriture des Tests

Priorité donnée aux composants visuels critiques mentionnés :

1.  **Page d'Accueil (`app/page.tsx`)** : Vérifier que les sections principales sont présentes.
2.  **Navbar & Footer** : Vérifier la navigation et les liens.
3.  **Sections (Hero, Philosophy, Services, TechStack)** : Vérifier le rendu du contenu textuel et des listes d'éléments.
4.  **TechMarquee** : Test basique de rendu (car animé).
5.  **ThemeToggle** : Vérifier le changement de classe (simulation du click).

### Étape D : Workflow GitHub Actions (`.github/workflows/ci.yml`)

Création d'un workflow qui se déclenche sur chaque `push` et `pull_request` sur `main`.

**Job : Test & Build**
1.  Checkout du code.
2.  Setup Node.js.
3.  Install dependencies (`npm ci`).
4.  Run Linter (`npm run lint`).
5.  **Run Tests (`npm test`).** (Étape bloquante : si échec, pas de build Docker).
6.  Build Next.js (optionnel ici si fait dans Docker, mais bon pour vérifier la compilation).

### Étape E : Intégration Docker

Modification du `Dockerfile` pour optimiser le processus. Bien que les tests soient gérés par GitHub Actions, il est bonne pratique d'avoir un stage de validation.

Cependant, pour un workflow CI/CD propre :
1.  **CI (GitHub)** : Lance les tests. Si OK -> Déclenche le build Docker.
2.  **Build Docker** : Construit l'image de production pure (sans les devDependencies de test pour alléger l'image).

*Recommandation* : Garder le `Dockerfile` focalisé sur le build de production, et laisser GitHub Actions gérer l'exécution des tests *avant* de lancer la commande `docker build`.

## 4. Plan de rédaction des spécifications (Checklist)

- [ ] Installer les packages npm requis pour Jest et RTL.
- [ ] Créer `jest.config.ts` et `jest.setup.ts`.
- [ ] Ajouter le script `"test": "jest"` et `"test:watch": "jest --watch"` dans `package.json`.
- [ ] Écrire le test unitaire pour `<Hero />`.
- [ ] Écrire le test unitaire pour `<Navbar />`.
- [ ] Écrire le test d'intégration pour la `Page` d'accueil.
- [ ] Configurer le fichier `.github/workflows/ci.yml`.
- [ ] Vérifier que le pipeline passe sur GitHub.

---

**Décision immédiate** : Souhaitez-vous que je commence par **l'installation et la configuration** de l'environnement de test maintenant ?
