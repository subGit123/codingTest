function solution(n) {
    if(n == 0) return ""
    if(n == 1) return "수"
    
    if(n > 1 && n % 2 == 0){
        return "수박".repeat(n / 2)
    }else if(n > 1 && n % 2 == 1){
        return "수박".repeat(n / 2) + "수"
    }
    
    
   
}