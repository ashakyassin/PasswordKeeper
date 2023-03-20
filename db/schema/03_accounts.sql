-- Drop and recreate Accounts table (Example)

DROP TABLE IF EXISTS accounts CASCADE;
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);
