SELECT 
    start_activity.machine_id,
    ROUND(AVG(CAST(end_activity.timestamp - start_activity.timestamp AS numeric)), 3) AS processing_time
FROM Activity start_activity
JOIN Activity end_activity
    ON start_activity.machine_id = end_activity.machine_id
    AND start_activity.process_id = end_activity.process_id
    AND start_activity.activity_type = 'start'
    AND end_activity.activity_type = 'end'
GROUP BY start_activity.machine_id;
