/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
     let left=0;
    let maxOneCount=0;
   
    

    
    for (let i=0;i<nums.length;i++){
        if (nums[i]===0){
            k--;      
        }
        
        while( k < 0){
            if (nums[left]===0){
                 k++;
                    
            }
           left++;  
           
            
        }
      maxOneCount= Math.max(maxOneCount, i - left +1)
        //You can flip one 0 to 1, resulting in [1, 1, 1, 1].
        //The result is i - left + 1 because the entire window is valid after flipping
    }
 
    
return maxOneCount;   
    
}; 

