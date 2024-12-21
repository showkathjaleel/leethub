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
    }
 
    
return maxOneCount;   
    
}; 

// var longestOnes = function(nums, k) {
//     let left = 0;
//     let maxOneCount = 0;

//     for (let right = 0; right < nums.length; right++) {
//         // If the current number is 0, we "flip" it and decrement k
//         if (nums[right] === 0) {
//             k--;
//         }

//         // If k becomes negative, shrink the window from the left
//         while (k < 0) {
//             if (nums[left] === 0) {
//                 k++;
//             }
//             left++;
//         }

//         // Calculate the maximum size of the window
//         maxOneCount = Math.max(maxOneCount, right - left + 1);
//     }

//     return maxOneCount;
// };


