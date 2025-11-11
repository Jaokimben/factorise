# Configuration Base de Données D1 pour Factor AI

## 🚨 Problème Actuel

La page **Inscription** (`/register`) ne fonctionne pas car elle nécessite une base de données D1 pour stocker les utilisateurs.

**Pages affectées** :
- `/register` - Inscription
- `/login` - Connexion  
- `/dashboard` - Tableau de bord utilisateur
- `/assessment` - Évaluation IA

**Pages qui fonctionnent sans D1** :
- ✅ `/` - Homepage
- ✅ `/services` - Services
- ✅ `/testimonials` - Témoignages
- ✅ `/about` - À propos
- ✅ `/faq` - FAQ
- ✅ `/contact` - Contact
- ✅ `/resources` - Ressources

---

## 🔧 Solution : Créer la Base D1 Manuellement

### Étape 1 : Créer la Base D1 via Dashboard Cloudflare

1. **Accéder au Dashboard Cloudflare** :
   - URL : https://dash.cloudflare.com/
   - Connectez-vous avec votre compte (joakimben1234@gmail.com)

2. **Naviguer vers D1 Database** :
   - Dans le menu de gauche : Workers & Pages → D1 SQL Database
   - Ou URL directe : https://dash.cloudflare.com/workers-and-pages/d1

3. **Créer une nouvelle base** :
   - Cliquez sur **"Create database"**
   - Nom : `factorise-ai-production`
   - Cliquez sur **"Create"**

4. **Copier le Database ID** :
   - Une fois créée, vous verrez un **Database ID** (format : `xxxx-xxxx-xxxx-xxxx`)
   - **COPIEZ CE ID** pour l'étape suivante

### Étape 2 : Configurer wrangler.jsonc

Dans le fichier `/home/user/webapp/wrangler.jsonc`, ajoutez la configuration D1 :

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "factorise-ai",
  "compatibility_date": "2025-11-11",
  "pages_build_output_dir": "./dist",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "factorise-ai-production",
      "database_id": "VOTRE_DATABASE_ID_ICI"  // ← Remplacer par le vrai ID
    }
  ]
}
```

### Étape 3 : Appliquer les Migrations SQL

Une fois le `database_id` configuré dans `wrangler.jsonc` :

```bash
# Se placer dans le projet
cd /home/user/webapp

# Appliquer les migrations en production
npx wrangler d1 migrations apply factorise-ai-production

# Vérifier que la base fonctionne
npx wrangler d1 execute factorise-ai-production --command="SELECT name FROM sqlite_master WHERE type='table';"
```

### Étape 4 : Redéployer sur Cloudflare Pages

```bash
# Rebuild et redéployer
npm run build
npx wrangler pages deploy dist --project-name factorise-ai
```

---

## 📊 Structure de la Base de Données

Les migrations créeront automatiquement ces tables :

### Table `users`
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Table `assessments`
```sql
CREATE TABLE assessments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  assessment_type TEXT DEFAULT 'ia_maturity',
  status TEXT DEFAULT 'in_progress',
  overall_score INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Table `assessment_answers`
```sql
CREATE TABLE assessment_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  assessment_id INTEGER NOT NULL,
  category TEXT NOT NULL,
  question_key TEXT NOT NULL,
  answer_value INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (assessment_id) REFERENCES assessments(id)
);
```

### Table `recommendations`
```sql
CREATE TABLE recommendations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  assessment_id INTEGER NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (assessment_id) REFERENCES assessments(id)
);
```

---

## 🧪 Tester l'Inscription

Une fois D1 configuré et déployé :

1. **Accéder à la page d'inscription** :
   - https://36e925cd.factorise-ai.pages.dev/register

2. **Remplir le formulaire** :
   - Prénom : Test
   - Nom : User
   - Email : test@example.com
   - Entreprise : Test Corp
   - Mot de passe : test123

3. **Soumettre** :
   - Si ça fonctionne → redirection vers `/login`
   - Si erreur → vérifier les logs Cloudflare

---

## 🔐 Alternative : Token API avec Permissions D1

Si vous préférez créer D1 via CLI, le token API doit avoir ces permissions :

1. **Accéder aux API Tokens** :
   - https://dash.cloudflare.com/profile/api-tokens

2. **Créer un nouveau token** avec :
   - `Account → D1 → Edit` permission
   - `Account → Workers Scripts → Edit` permission

3. **Remplacer le token** :
   - Dans Deploy tab de GenSpark
   - Coller le nouveau token
   - Re-run `setup_cloudflare_api_key`

4. **Créer D1 via CLI** :
   ```bash
   npx wrangler d1 create factorise-ai-production
   ```

---

## 📝 Résumé

**Status actuel** :
- ✅ Site déployé et fonctionnel pour les pages publiques
- ⚠️ Inscription/Login nécessitent configuration D1
- 🔧 Configuration manuelle requise via Dashboard Cloudflare

**Prochaines étapes** :
1. Créer D1 database via Dashboard
2. Copier le database_id
3. Mettre à jour wrangler.jsonc
4. Appliquer migrations
5. Redéployer

**URLs actuelles** :
- Production : https://36e925cd.factorise-ai.pages.dev
- GitHub : https://github.com/Jaokimben/factorise
