function solution(absolutes, signs) {
    let tmp = []
    for(let i = 0; i < absolutes.length; i++ ){
         
       
        
        if(signs[i]){
            tmp.push(absolutes[i])
        }else{
            tmp.push(absolutes[i] * -1)
        }
    }
    
    
    return tmp.reduce((a,b) => a+b);
}