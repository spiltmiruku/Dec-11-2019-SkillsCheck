DELETE FROM posts_sc
WHERE id = $1;
SELECT * FROM posts_sc
WHERE author_id = $2