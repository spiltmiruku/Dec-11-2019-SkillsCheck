CREATE TABLE IF NOT EXISTS users_sc (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text
);