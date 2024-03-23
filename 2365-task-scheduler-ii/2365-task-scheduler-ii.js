/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    
    let map = new Map()
    let day = 0
    
    for (let i = 0; i < tasks.length; i++) {
        
        if (!map.has(tasks[i])) {
            day++
            map.set(tasks[i], day+space)
            
        } else {
            if (day < map.get(tasks[i])) {
                day = map.get(tasks[i])
            }
            day++
            map.set(tasks[i], day+space)
            
        }
    }
    
    return day
    
};