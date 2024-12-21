/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum=-Infinity;
  
    //sliding window approach
    //maxSum=0;
    //find the sum of first k values and store in a variable
    //maxSum = Math.max(maxSum,currentSum)
    
    //iterate from k to nums.length, remove first no and add the last iterating variable starting from k  and store in a variable. 
  //  maxSum = Math.max(maxSum,currentSum)
    
    

        let currentSum=0 
    
           for (let i=0;i<k;i++){
             
               currentSum=nums[i]+currentSum ;
            } 

            maxSum=Math.max(currentSum,maxSum)

               
               for (let i=k;i<nums.length;i++){
             
                currentSum=currentSum+ nums[i]- nums[i-k]
                maxSum=Math.max(currentSum,maxSum)
               
            } 
            
            const maxAvg=maxSum/k;
            return maxAvg
    
    
    
    
    
};
