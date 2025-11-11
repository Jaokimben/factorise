# Factor AI - Plateforme Complète de Transformation IA

> **Version 4.0.0** - Complete Edition | Sandbox URL: https://3000-iq3bbj8ibym15nrja4r5h-18e660f9.sandbox.novita.ai

## 🎯 Vue d'ensemble du projet

**Factor AI** (anciennement Factorise.io) est une plateforme web professionnelle complète pour la transformation digitale et l'intelligence artificielle. Elle combine un site vitrine multi-pages avec un système d'évaluation de maturité IA avancé.

### ✨ Nouveautés V4 (2025-01-11)

**5 nouvelles pages professionnelles** ajoutées :
- `/services` - 7 services IA détaillés avec métriques ROI
- `/about` - Vision, mission, équipe de 6 experts, technologies
- `/contact` - Formulaire fonctionnel + API endpoint
- `/faq` - 15+ questions avec recherche en temps réel
- `/testimonials` - 6 témoignages + 3 études de cas détaillées

**96 KB de données structurées** bilingues FR/EN ajoutées  
**100+ nouvelles clés** de traduction  
**Navigation unifiée** sur toutes les pages  
**Bundle optimisé** : 105 KB (production-ready)

### Objectifs

- Présenter les services de conseil en transformation digitale et IA
- Permettre aux entreprises d'évaluer leur niveau de maturité IA
- Fournir des recommandations personnalisées basées sur l'évaluation
- Offrir un espace personnel sécurisé pour suivre l'évolution

## Fonctionnalités principales

### ✅ Fonctionnalités actuellement implémentées

#### 0. Support Multi-langue (FR/EN)
- **Changement de langue dynamique** : Toggle FR/EN dans la navigation
- **Traductions complètes** : 11 pages, ~250 clés de traduction
- **Questions d'évaluation** : 40 questions professionnelles en FR/EN
- **Persistance** : Préférence de langue sauvegardée dans localStorage
- **Sans rechargement** : Traduction instantanée via JavaScript
- **Seamless UX** : Pas de duplication de code, même structure HTML

#### 1. Pages Professionnelles Factor AI (V4 - NOUVEAU)

##### Page Services (`/services`)
- **7 services détaillés** : AI Agents, Workflow Automation, Chatbots, Voice AI, KRS, Consulting
- **Métriques ROI** pour chaque service
- **Features, Benefits, Use Cases** complets
- **Cartes interactives** avec animations hover
- **CTA vers contact** intégré

##### Page À Propos (`/about`)
- **Vision & Mission** de Factor AI
- **6 valeurs fondamentales** illustrées
- **Équipe de 6 experts** avec photos et bios
- **6 statistiques clés** : 200+ agents IA, 50+ clients, 1M$ économies moyennes
- **Technologies maîtrisées** : 6 catégories (LLMs, Conversational AI, Voice AI, Cloud, Databases, Integration)
- **Méthodologie en 5 phases** : Discovery, Validation, Development, Deployment, Optimization

##### Page Contact (`/contact`)
- **Formulaire complet** : nom, email, téléphone, entreprise, rôle, message
- **API endpoint fonctionnel** : `POST /api/contact`
- **Validation en temps réel**
- **Messages succès/erreur**
- **Coordonnées** : email, téléphone, adresse
- **Design professionnel** avec 3 cartes d'info

##### Page FAQ (`/faq`)
- **15+ questions** en 6 catégories :
  - Général (3 Q)
  - Services (4 Q)
  - Processus & Délais (3 Q)
  - Tarification & ROI (3 Q)
  - Questions Techniques (3 Q)
  - Support & Formation (3 Q)
- **Recherche en temps réel** avec filtrage intelligent
- **Accordéons cliquables** pour afficher/masquer réponses
- **24 KB de contenu** structuré bilingue

##### Page Témoignages (`/testimonials`)
- **6 témoignages clients** complets avec :
  - Avatars, noms, rôles, entreprises
  - Notes 5 étoiles
  - Citations authentiques
  - Métriques de résultats concrets
- **3 études de cas détaillées** :
  - **E-commerce** (FashionHub) : -70% temps réponse, +28% conversions
  - **Finance** (FinanceConnect) : -900K€/an coûts, +35% satisfaction
  - **SaaS** (DataFlow) : -90% temps recherche, +25% productivité
- **Données structurées** : Défi, Solution, Résultats avec métriques

#### 2. Site Vitrine Public (Homepage)
- **Page d'accueil** avec sections :
  - Hero section avec CTA (Call-to-Action)
  - Services proposés (3 cartes)
  - Section À propos avec expertise
  - CTA secondaire
  - Footer complet avec contact
- **Design moderne** avec Tailwind CSS
- **Responsive** pour tous les appareils
- **Navigation fluide** avec ancres

#### 2. Système d'Authentification
- **Inscription utilisateur** : formulaire complet (prénom, nom, email, entreprise, mot de passe)
- **Connexion sécurisée** : authentification par email/mot de passe
- **Gestion de session** : localStorage pour maintenir la session
- **Protection des routes** : redirection automatique si non authentifié

#### 3. Espace Personnel (Dashboard)
- **Vue d'ensemble** des évaluations
- **Statistiques personnalisées** :
  - Nombre total d'évaluations
  - Score moyen de maturité
  - Évaluations complétées
  - Évaluations en cours
- **Historique** des évaluations avec dates et statuts
- **Accès rapide** à une nouvelle évaluation

#### 4. Évaluation de Maturité IA (Version Professionnelle)
- **10 catégories d'évaluation complètes** :
  1. **Stratégie & Vision IA** (4 questions)
  2. **Gouvernance & Politique** (4 questions)
  3. **Données & Infrastructure** (4 questions)
  4. **Modèles & Développement** (4 questions)
  5. **MLOps & Production** (4 questions)
  6. **Sécurité & Confidentialité** (4 questions)
  7. **Talents & Organisation** (4 questions)
  8. **Mesure & ROI** (4 questions)
  9. **Adoption & Change Management** (4 questions)
  10. **Éthique & Responsabilité** (4 questions)
- **40 questions professionnelles** avec échelle de 1 à 5
- **Niveaux de maturité** : Initial, Répétable, Défini, Géré, Optimisé
- **Interface progressive** : une catégorie à la fois
- **Barre de progression** en temps réel
- **Validation** : impossible de passer à la suite sans répondre
- **Sauvegarde automatique** dans la base de données

#### 5. Page de Résultats
- **Score global** de maturité IA (0-100%)
- **Interprétation du score** :
  - 🔴 < 30% : Niveau Initial
  - 🟠 30-50% : Niveau Émergent
  - 🟡 50-70% : Niveau Intermédiaire
  - 🟢 70-85% : Niveau Avancé
  - 🏆 > 85% : Niveau Expert
- **Graphique radar** : visualisation des 5 catégories
- **Scores détaillés** par catégorie avec barres de progression
- **Recommandations prioritaires** :
  - Actions concrètes pour chaque catégorie faible
  - Priorisation (haute/moyenne)
  - Code couleur selon l'urgence
- **Export PDF** : impression des résultats

#### 6. Centre de Ressources (/resources)
- **9 ressources téléchargeables** professionnelles :
  - **Guides** : Implémentation IA, Gouvernance, MLOps Best Practices
  - **Templates** : Stratégie IA (PPTX), Calculateur ROI (Excel), Roadmap Maturité
  - **Cas Clients** : Retail, Finance, Manufacturing
- **Organisé par type** : Guides, Templates, Cas d'usage
- **Métadonnées** : Taille, format, nombre de pages, industrie

### 🔧 Fonctionnalités techniques

- **Multi-langue** : Système i18n avec FR/EN, extensible à d'autres langues
- **Assessment avancé** : 10 catégories, 40 questions, framework de maturité
- **Architecture** : Hono + Cloudflare Pages + D1 Database
- **Frontend** : HTML/CSS avec Tailwind CSS, Axios pour les appels API
- **Backend** : API RESTful avec Hono
- **Base de données** : SQLite (Cloudflare D1)
- **Déploiement** : Cloudflare Pages (edge computing)
- **Visualisation** : Chart.js pour les graphiques

## Architecture technique

### Stack technologique

```
Frontend:
- HTML5 / CSS3
- Tailwind CSS (via CDN)
- JavaScript vanilla
- Axios (requêtes HTTP)
- Chart.js (graphiques)
- FontAwesome (icônes)

Backend:
- Hono Framework (edge runtime)
- TypeScript
- Cloudflare Workers

Base de données:
- Cloudflare D1 (SQLite)
- Migrations SQL versionnées

Déploiement:
- Cloudflare Pages
- Vite (build tool)
- Wrangler (CLI)
```

### Schéma de la base de données

```sql
users
├── id (PRIMARY KEY, AUTOINCREMENT)
├── email (UNIQUE, NOT NULL)
├── password (NOT NULL) -- À hasher en production!
├── first_name (NOT NULL)
├── last_name (NOT NULL)
├── company (TEXT)
├── created_at (DATETIME)
└── updated_at (DATETIME)

assessments
├── id (PRIMARY KEY, AUTOINCREMENT)
├── user_id (FOREIGN KEY → users.id)
├── assessment_type (TEXT) -- 'ia_maturity' ou 'strategy'
├── status (TEXT) -- 'in_progress', 'completed'
├── overall_score (INTEGER) -- 0-100
├── created_at (DATETIME)
└── updated_at (DATETIME)

assessment_answers
├── id (PRIMARY KEY, AUTOINCREMENT)
├── assessment_id (FOREIGN KEY → assessments.id)
├── category (TEXT) -- 'vision', 'data', 'technologie', 'organisation', 'ethique'
├── question_key (TEXT)
├── answer_value (INTEGER) -- 1-5
└── created_at (DATETIME)

recommendations
├── id (PRIMARY KEY, AUTOINCREMENT)
├── assessment_id (FOREIGN KEY → assessments.id)
├── category (TEXT)
├── priority (TEXT) -- 'high', 'medium', 'low'
├── title (TEXT)
├── description (TEXT)
└── created_at (DATETIME)
```

### Structure des fichiers

```
webapp/
├── src/
│   ├── index.tsx              # Application Hono principale
│   └── renderer.tsx           # Renderer par défaut
├── public/
│   └── static/
│       └── assessment.js      # Logique frontend de l'évaluation
├── migrations/
│   └── 0001_initial_schema.sql  # Schéma base de données
├── dist/                      # Build de production
│   ├── _worker.js             # Worker Cloudflare compilé
│   ├── _routes.json           # Configuration routage
│   └── static/                # Assets statiques
├── ecosystem.config.cjs       # Configuration PM2
├── seed.sql                   # Données de test
├── wrangler.jsonc             # Configuration Cloudflare
├── package.json               # Dépendances et scripts
├── vite.config.ts             # Configuration Vite
└── tsconfig.json              # Configuration TypeScript
```

### API Endpoints

#### Authentification
```
POST /api/auth/register
Body: { email, password, firstName, lastName, company }
Response: { success: true, userId, message }

POST /api/auth/login
Body: { email, password }
Response: { success: true, user: { id, email, firstName, lastName, company } }
```

#### Évaluations
```
POST /api/assessments
Body: { userId, assessmentType }
Response: { success: true, assessmentId }

POST /api/assessments/:id/answers
Body: { answers: [{ category, questionKey, value }] }
Response: { success: true, score }

GET /api/users/:userId/assessments
Response: { assessments: [...] }

GET /api/assessments/:id
Response: { assessment: {...}, answers: [...] }
```

## Installation et développement

### Prérequis

- Node.js 18+
- npm ou yarn
- Compte Cloudflare (pour le déploiement)

### Installation

```bash
# Cloner le repository
git clone <votre-repo-github>
cd webapp

# Installer les dépendances
npm install

# Construire le projet
npm run build
```

### Développement local

#### Option 1 : Avec PM2 (recommandé pour le sandbox)

```bash
# Construire d'abord
npm run build

# Créer la base de données locale
npm run db:migrate:local

# Démarrer avec PM2
pm2 start ecosystem.config.cjs

# Voir les logs
pm2 logs webapp --nostream

# Arrêter
pm2 stop webapp
```

#### Option 2 : Avec Wrangler directement

```bash
# Développement avec hot reload
npm run dev:sandbox

# Ou sans base de données
npm run dev
```

### Base de données

```bash
# Appliquer les migrations en local
npm run db:migrate:local

# Peupler avec des données de test
npm run db:seed

# Réinitialiser la base de données
npm run db:reset

# Console SQL locale
npm run db:console:local
```

### Tests

```bash
# Nettoyer le port 3000
npm run clean-port

# Tester l'application
npm run test
# Ou
curl http://localhost:3000
```

## Déploiement sur Cloudflare Pages

### Première configuration

```bash
# Se connecter à Cloudflare
npx wrangler login

# Créer la base de données D1 en production
npx wrangler d1 create webapp-production

# Copier le database_id dans wrangler.jsonc

# Appliquer les migrations en production
npm run db:migrate:prod
```

### Déploiement

```bash
# Build + Deploy
npm run deploy

# Ou avec nom de projet spécifique
npm run deploy:prod
```

### Variables d'environnement

Pour ajouter des secrets (clés API, etc.) :

```bash
npx wrangler pages secret put API_KEY --project-name webapp
```

## Guide d'utilisation

### Pour les utilisateurs

1. **Accéder au site** : Ouvrir la page d'accueil
2. **S'inscrire** : Cliquer sur "Commencer l'évaluation" ou "Connexion"
3. **Créer un compte** : Remplir le formulaire d'inscription
4. **Se connecter** : Utiliser email et mot de passe
5. **Lancer une évaluation** : Depuis le dashboard, cliquer sur "Nouvelle Évaluation"
6. **Répondre aux questions** : 20 questions organisées en 5 catégories
7. **Consulter les résultats** : Score global, graphiques, recommandations
8. **Suivre l'évolution** : Historique des évaluations dans le dashboard

### Pour les développeurs

#### Ajouter une nouvelle question

Modifier `/public/static/assessment.js` :

```javascript
const assessmentQuestions = {
  nouvelle_categorie: {
    title: "Titre de la catégorie",
    icon: "fa-icon-name",
    questions: [
      {
        key: "q1",
        text: "Votre question ?",
        description: "Description explicative"
      }
    ]
  }
}
```

#### Ajouter une nouvelle page

Dans `/src/index.tsx` :

```typescript
app.get('/nouvelle-page', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html>
      <!-- Votre HTML -->
    </html>
  `)
})
```

#### Ajouter un endpoint API

```typescript
app.get('/api/nouveau-endpoint', async (c) => {
  try {
    // Logique métier
    return c.json({ success: true, data: result })
  } catch (error) {
    return c.json({ error: 'Message d\'erreur' }, 500)
  }
})
```

## Améliorations futures recommandées

### Multi-langue

- [x] **Support bilingue FR/EN** : Implémenté avec toggle dynamique
- [ ] **Autres langues** : ES, DE, IT (structure prête, ajouter traductions)
- [ ] **Détection automatique** : Langue du navigateur par défaut
- [ ] **URLs localisées** : /fr/, /en/ (optionnel)

### Sécurité

- [ ] **Hashage des mots de passe** : Utiliser bcrypt ou argon2
- [ ] **JWT Tokens** : Authentification par tokens au lieu de localStorage
- [ ] **HTTPS obligatoire** : Forcer HTTPS en production
- [ ] **Rate limiting** : Limiter les tentatives de connexion
- [ ] **Validation des entrées** : Valider côté serveur tous les inputs
- [ ] **Protection CSRF** : Ajouter des tokens CSRF

### Fonctionnalités

- [ ] **Reset mot de passe** : Email de récupération
- [ ] **Profil utilisateur** : Page pour modifier les informations
- [ ] **Comparaison d'évaluations** : Voir l'évolution dans le temps
- [ ] **Export PDF avancé** : Rapport complet avec logo
- [ ] **Partage de résultats** : Lien de partage sécurisé
- [ ] **Notifications email** : Envoi des résultats par email
- [ ] **Tableau de bord admin** : Gestion des utilisateurs
- [ ] **Multi-langue** : Support FR/EN
- [ ] **Mode sombre** : Toggle light/dark
- [ ] **Coaching personnalisé** : Suggestions basées sur le secteur

### Performance

- [ ] **Optimisation images** : Compression et lazy loading
- [ ] **Mise en cache** : Service Worker pour offline
- [ ] **Pagination** : Pour la liste des évaluations
- [ ] **Optimisation DB** : Index supplémentaires si nécessaire

### Analytics

- [ ] **Tracking utilisateur** : Google Analytics ou Plausible
- [ ] **Métriques métier** : Taux de complétion des évaluations
- [ ] **A/B Testing** : Tester différentes versions de questions

## URLs actuelles

- **Local** : http://localhost:3000
- **Production** : À configurer après déploiement

### Pages disponibles

- `/` - Page d'accueil
- `/login` - Connexion
- `/register` - Inscription
- `/dashboard` - Espace personnel (authentification requise)
- `/assessment` - Évaluation de maturité IA (authentification requise)
- `/results?id=X&score=Y` - Résultats d'évaluation (authentification requise)

## État actuel du projet

- ✅ Architecture complète fonctionnelle
- ✅ Authentification de base implémentée
- ✅ Évaluation de maturité IA complète
- ✅ Dashboard avec statistiques
- ✅ Résultats avec graphiques et recommandations
- ✅ Base de données D1 configurée
- ✅ Design responsive et moderne
- ⚠️ Sécurité à renforcer (hashing passwords)
- ⚠️ Tests unitaires à ajouter
- 📦 Prêt pour le déploiement sur Cloudflare Pages

## Déploiement et configuration

**Dernière mise à jour** : 11 novembre 2025

## Contribution

Ce projet est open source. Les développeurs peuvent :

1. Forker le repository
2. Créer une branche pour leurs modifications
3. Soumettre une Pull Request avec description détaillée

### Conventions de code

- TypeScript strict
- Prettier pour le formatage
- Commits conventionnels (feat:, fix:, docs:, etc.)
- Tests pour les nouvelles fonctionnalités

## Support et contact

Pour toute question ou support :
- Email : contact@factorise.io
- Issues GitHub : [Lien vers issues]

## Licence

Tous droits réservés © 2025 Factorise.io

---

**Développé avec** ❤️ **par l'équipe Factorise.io**
