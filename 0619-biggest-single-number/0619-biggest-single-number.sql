# Write your MySQL query statement below

SELECT MAX(num) AS num
FROM ( SELECT num
    FROM Mynumbers
    GROUP BY num
    HAVING COUNT(num) = 1
     ) AS num_filter