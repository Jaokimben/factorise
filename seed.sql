-- Données de test pour le développement
-- Utilisateur de test (mot de passe: Test123!)
INSERT OR IGNORE INTO users (id, email, password, first_name, last_name, company) VALUES 
  (1, 'test@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Jean', 'Dupont', 'Entreprise Test');

-- Évaluation de test
INSERT OR IGNORE INTO assessments (id, user_id, assessment_type, status, overall_score, created_at) VALUES 
  (1, 1, 'ia_maturity', 'completed', 65, datetime('now'));

-- Réponses de test
INSERT OR IGNORE INTO assessment_answers (assessment_id, category, question_key, answer_value) VALUES 
  (1, 'vision', 'q1', 4),
  (1, 'vision', 'q2', 3),
  (1, 'data', 'q1', 3),
  (1, 'data', 'q2', 4),
  (1, 'technologie', 'q1', 3),
  (1, 'organisation', 'q1', 3),
  (1, 'ethique', 'q1', 4);
