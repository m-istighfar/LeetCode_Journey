# Write your MySQL query statement below

SELECT id, movie, description, rating 
FROM Cinema
WHERE id % 2 = 1 AND Description <> "boring"
ORDER BY rating DESC