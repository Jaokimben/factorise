# Guide de configuration GitHub

## Étapes pour pousser le code sur GitHub

### 1. Autoriser GitHub dans le sandbox

Vous devez d'abord configurer l'authentification GitHub :

1. Allez dans l'onglet **#github** de l'interface sandbox
2. Cliquez sur **"Authorize GitHub"**
3. Connectez-vous à votre compte GitHub
4. Autorisez l'application

### 2. Créer un nouveau repository sur GitHub

Option A : Via l'interface web GitHub
1. Allez sur https://github.com/new
2. Nom du repository : `factorise-io-platform` (ou un autre nom de votre choix)
3. Description : "Plateforme d'évaluation de maturité IA avec authentification et dashboard personnalisé"
4. Choisissez **Public** ou **Private**
5. ❌ **NE PAS** initialiser avec README, .gitignore ou licence (nous avons déjà tout)
6. Cliquez sur **Create repository**

Option B : Via l'interface sandbox après autorisation
- L'assistant pourra créer le repository automatiquement

### 3. Pousser le code

Une fois l'autorisation GitHub configurée dans le sandbox, exécutez :

\`\`\`bash
# Vérifier que Git est initialisé
cd /home/user/webapp
git status

# Ajouter le remote GitHub (remplacez USERNAME et REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Pousser le code (première fois, force push)
git push -f origin main

# Pour les pushs suivants
git push origin main
\`\`\`

### 4. Vérifier sur GitHub

Après le push, vous devriez voir :
- ✅ 18 fichiers
- ✅ 2 commits
- ✅ README.md affiché sur la page principale
- ✅ Documentation ARCHITECTURE.md

### 5. Inviter d'autres développeurs

Pour permettre à d'autres développeurs de modifier le code :

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** > **Collaborators**
3. Cliquez sur **Add people**
4. Entrez le nom d'utilisateur GitHub du développeur
5. Envoyez l'invitation

Les développeurs pourront alors :

\`\`\`bash
# Cloner le repository
git clone https://github.com/USERNAME/REPO.git
cd REPO

# Installer les dépendances
npm install

# Développer localement
npm run dev
\`\`\`

## Structure du code poussé

\`\`\`
webapp/
├── src/
│   ├── index.tsx              # Application Hono principale (33 KB)
│   └── renderer.tsx           # Renderer par défaut
├── public/
│   └── static/
│       └── assessment.js      # Logique d'évaluation (10 KB)
├── migrations/
│   └── 0001_initial_schema.sql  # Schéma base de données
├── dist/                      # Build compilé
├── .gitignore                 # Fichiers ignorés
├── ecosystem.config.cjs       # Config PM2
├── seed.sql                   # Données de test
├── wrangler.jsonc             # Config Cloudflare
├── package.json               # Dépendances
├── README.md                  # Documentation principale (12 KB)
└── ARCHITECTURE.md            # Doc technique (25 KB)
\`\`\`

## Commandes utiles pour les développeurs

\`\`\`bash
# Cloner le repository
git clone https://github.com/USERNAME/REPO.git
cd REPO

# Installer les dépendances
npm install

# Développement local
npm run build
npm run dev:sandbox

# Base de données locale
npm run db:migrate:local
npm run db:seed

# Tester
curl http://localhost:3000

# Commit et push
git add .
git commit -m "feat: nouvelle fonctionnalité"
git push origin main
\`\`\`

## Branches recommandées

Pour une collaboration efficace :

\`\`\`bash
# Branche principale (production)
main

# Branche de développement
git checkout -b develop

# Branches de fonctionnalités
git checkout -b feature/nouvelle-fonctionnalite
git checkout -b fix/correction-bug
git checkout -b docs/mise-a-jour-doc

# Merge après validation
git checkout main
git merge feature/nouvelle-fonctionnalite
git push origin main
\`\`\`

## Protection de la branche main

Recommandations GitHub :

1. **Settings** > **Branches** > **Add rule**
2. Branch name pattern : `main`
3. Activer :
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

## Workflow de collaboration recommandé

\`\`\`
1. Développeur fork ou clone le repo
   ↓
2. Créer une branche feature/xxx
   ↓
3. Développer et tester localement
   ↓
4. Commit avec messages clairs
   ↓
5. Push vers son fork ou sa branche
   ↓
6. Créer une Pull Request vers main
   ↓
7. Code review par un autre développeur
   ↓
8. Merge après validation
   ↓
9. Déploiement automatique (CI/CD)
\`\`\`

## Configuration CI/CD avec GitHub Actions (optionnel)

Créer `.github/workflows/deploy.yml` :

\`\`\`yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: \${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: pages deploy dist --project-name webapp
\`\`\`

## Support

Pour toute question :
- Issues GitHub : Créer une issue sur le repository
- Discussions : Utiliser l'onglet Discussions sur GitHub
- Email : contact@factorise.io

---

**Note** : Ce fichier peut être supprimé après avoir configuré GitHub (il n'est pas nécessaire dans le repository final).
