CREATE TABLE IF NOT EXISTS users_sc (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(200),
    profile_pic text
);

CREATE TABLE IF NOT EXISTS posts_sc (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users_sc(id)
);