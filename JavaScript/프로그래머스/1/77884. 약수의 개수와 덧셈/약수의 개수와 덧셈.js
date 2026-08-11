function solution(left, right) {
    let answer = [];
    
    let cnt = 0; // 약수 갯수 세기
    for(let i = left; i <= right; i++){
        
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                cnt ++
            }
        }
        
        if(cnt % 2 == 0){
            answer.push(i)
        }else{
            answer.push(i * -1) 
        }
      
        cnt = 0
    }
    
     
    
    return answer.reduce((a,b) => a+b);
}