function isPalindrome(s) {

    let filtered = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    
    console.log(filtered)
    
    let reversedFilter = filtered.split("").reverse().join("")
    
    return filtered == reversedFilter
}
