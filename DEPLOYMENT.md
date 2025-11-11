# Guide de déploiement Cloudflare Pages

## Prérequis

- ✅ Compte Cloudflare (gratuit : https://dash.cloudflare.com/sign-up)
- ✅ Node.js 18+ installé
- ✅ Code déjà construit (`npm run build`)

## Étape 1 : Configuration initiale

### 1.1 Installation de Wrangler (si pas déjà fait)

\`\`\`bash
npm install -g wrangler
# Ou utiliser via npx
\`\`\`

### 1.2 Connexion à Cloudflare

\`\`\`bash
npx wrangler login
\`\`\`

Cela ouvrira votre navigateur pour autoriser Wrangler.

### 1.3 Vérification de l'authentification

\`\`\`bash
npx wrangler whoami
\`\`\`

Vous devriez voir votre email Cloudflare.

## Étape 2 : Création de la base de données D1

### 2.1 Créer la base de données en production

\`\`\`bash
npx wrangler d1 create webapp-production
\`\`\`

**Résultat attendu :**
\`\`\`
✅ Successfully created DB 'webapp-production'

[[d1_databases]]
binding = "DB"
database_name = "webapp-production"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
\`\`\`

### 2.2 Copier le database_id dans wrangler.jsonc

Ouvrez `wrangler.jsonc` et remplacez :

\`\`\`jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "webapp-production",
      "database_id": "COLLER_ICI_LE_DATABASE_ID"
    }
  ]
}
\`\`\`

### 2.3 Appliquer les migrations

\`\`\`bash
npx wrangler d1 migrations apply webapp-production
\`\`\`

Cela créera les tables : `users`, `assessments`, `assessment_answers`, `recommendations`.

### 2.4 (Optionnel) Vérifier la base de données

\`\`\`bash
npx wrangler d1 execute webapp-production --command="SELECT name FROM sqlite_master WHERE type='table'"
\`\`\`

Vous devriez voir vos 4 tables.

## Étape 3 : Premier déploiement

### 3.1 Build du projet

\`\`\`bash
npm run build
\`\`\`

Vérifiez que le dossier `dist/` contient :
- `_worker.js` (votre application compilée)
- `_routes.json` (configuration des routes)
- `static/` (fichiers JavaScript frontend)

### 3.2 Créer le projet Cloudflare Pages

\`\`\`bash
npx wrangler pages project create webapp \\
  --production-branch main \\
  --compatibility-date 2025-11-11
\`\`\`

### 3.3 Déployer

\`\`\`bash
npx wrangler pages deploy dist --project-name webapp
\`\`\`

**Résultat attendu :**
\`\`\`
✨ Success! Uploaded 3 files (X.XX sec)

✨ Deployment complete! Take a peek over at https://xxxxxxxx.webapp.pages.dev
\`\`\`

### 3.4 Tester le déploiement

Ouvrez l'URL fournie dans votre navigateur :
- ✅ Page d'accueil s'affiche
- ✅ Navigation fonctionne
- ✅ Formulaire d'inscription/connexion accessible

## Étape 4 : Configuration des variables (si nécessaire)

### 4.1 Variables publiques

Éditez `wrangler.jsonc` :

\`\`\`jsonc
{
  "vars": {
    "ENVIRONMENT": "production",
    "API_VERSION": "v1"
  }
}
\`\`\`

### 4.2 Secrets (tokens, clés API)

**Pour JWT_SECRET par exemple :**

\`\`\`bash
npx wrangler pages secret put JWT_SECRET --project-name webapp
# Entrez votre secret quand demandé
\`\`\`

**Lister les secrets :**

\`\`\`bash
npx wrangler pages secret list --project-name webapp
\`\`\`

## Étape 5 : Déploiements suivants

### 5.1 Via la commande npm

\`\`\`bash
npm run deploy
\`\`\`

Cette commande fait automatiquement :
1. `npm run build`
2. `npx wrangler pages deploy dist`

### 5.2 Via CI/CD GitHub Actions

Ajoutez le secret Cloudflare dans GitHub :

1. Settings > Secrets and variables > Actions
2. New repository secret
3. Name : `CLOUDFLARE_API_TOKEN`
4. Value : Votre token Cloudflare (https://dash.cloudflare.com/profile/api-tokens)

Créez `.github/workflows/deploy.yml` :

\`\`\`yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: \${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: \${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name webapp
\`\`\`

## Étape 6 : Configuration du domaine custom (optionnel)

### 6.1 Via Wrangler

\`\`\`bash
npx wrangler pages domain add example.com --project-name webapp
\`\`\`

### 6.2 Via le dashboard Cloudflare

1. https://dash.cloudflare.com
2. Workers & Pages > webapp
3. Custom domains > Set up a custom domain
4. Entrez votre domaine : `www.example.com`
5. Cloudflare configure automatiquement les DNS

## Étape 7 : Monitoring et logs

### 7.1 Logs en temps réel

\`\`\`bash
npx wrangler pages deployment tail --project-name webapp
\`\`\`

### 7.2 Dashboard Cloudflare

https://dash.cloudflare.com

- **Analytics** : Trafic, bande passante, requêtes
- **Deployments** : Historique des déploiements
- **Settings** : Configuration du projet
- **Logs** : Logs d'erreurs et de requêtes

## Étape 8 : Rollback (retour en arrière)

### 8.1 Lister les déploiements

\`\`\`bash
npx wrangler pages deployment list --project-name webapp
\`\`\`

### 8.2 Via le dashboard

1. Workers & Pages > webapp > Deployments
2. Trouvez le déploiement précédent
3. Cliquez sur les 3 points > Rollback to this deployment

## Commandes utiles

\`\`\`bash
# Vérifier la config
npx wrangler pages project list

# Voir les détails d'un projet
npx wrangler pages project get webapp

# Supprimer un projet (⚠️ Attention)
npx wrangler pages project delete webapp

# Infos sur la base de données
npx wrangler d1 info webapp-production

# Exécuter une requête SQL
npx wrangler d1 execute webapp-production --command="SELECT COUNT(*) FROM users"

# Backup de la base de données
npx wrangler d1 export webapp-production --output=backup.sql
\`\`\`

## Troubleshooting

### Erreur : "Database not found"

**Solution :**
\`\`\`bash
# Vérifier que le database_id est correct dans wrangler.jsonc
npx wrangler d1 list
\`\`\`

### Erreur : "Binding not found"

**Solution :**
\`\`\`bash
# Vérifier que le binding "DB" est bien configuré
cat wrangler.jsonc
\`\`\`

### Erreur 500 après déploiement

**Solution :**
\`\`\`bash
# Voir les logs
npx wrangler pages deployment tail --project-name webapp

# Vérifier que les migrations sont appliquées
npx wrangler d1 migrations list webapp-production
\`\`\`

### Déploiement lent

**Solution :**
- Vérifiez votre connexion internet
- La première fois est plus lente (création du projet)
- Les déploiements suivants sont plus rapides (cache)

## Limites du plan gratuit Cloudflare

- ✅ 100,000 requêtes/jour
- ✅ Illimité en bande passante
- ✅ 500 builds/mois
- ✅ D1 : 5 GB de stockage
- ✅ D1 : 5 millions de lectures/jour

**Pour plus :** Upgrade vers Workers Paid ($5/mois)

## Prochaines étapes

Après le déploiement :

1. ✅ Tester toutes les fonctionnalités
2. ✅ Créer un compte utilisateur de test
3. ✅ Faire une évaluation complète
4. ✅ Vérifier les résultats
5. ✅ Configurer un domaine custom
6. ✅ Mettre en place CI/CD
7. ✅ Ajouter des utilisateurs réels

## Support

- Documentation Cloudflare : https://developers.cloudflare.com/pages/
- Community Discord : https://discord.gg/cloudflaredev
- Support Cloudflare : https://dash.cloudflare.com/?to=/:account/support

---

**Dernière mise à jour** : 11 novembre 2025
