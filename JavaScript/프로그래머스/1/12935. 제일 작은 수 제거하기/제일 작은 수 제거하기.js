function solution(arr) {
    const minNum = Math.min(...arr)
    let tmp = []
    
    if(arr == [] || arr[0] == 10){
        return [-1]
    }else{
      for(let i = 0; i < arr.length; i++){
          if(arr[i] !== minNum){
              tmp.push(arr[i])
          }
      }
    }
   
    return tmp;
}