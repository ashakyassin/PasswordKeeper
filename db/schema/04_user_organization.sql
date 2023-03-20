-- Drop and recreate User_Organization table (Example)

DROP TABLE IF EXISTS user_organization CASCADE;
CREATE TABLE user_organization (
  user_id INTEGER REFERENCES users(id),
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE
);
