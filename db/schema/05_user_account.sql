-- Drop and recreate User_Account table (Example)

DROP TABLE IF EXISTS user_account CASCADE;
CREATE TABLE user_account (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE
);
