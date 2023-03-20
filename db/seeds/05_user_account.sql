
INSERT INTO user_account (user_id, account_id)
SELECT u.id, a.id
FROM users u
CROSS JOIN accounts a;
