SELECT Users.name, SUM(IF(Rides.distance IS NULL, 0, Rides.distance)) AS travelled_distance
FROM Users
LEFT JOIN Rides ON Users.id = Rides.user_id
GROUP BY Users.id
ORDER BY travelled_distance DESC, Users.name ASC;
