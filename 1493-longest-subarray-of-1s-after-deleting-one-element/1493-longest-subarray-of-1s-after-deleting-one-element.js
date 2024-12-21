/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    let k=1;
    let firstElement=0;
    let maxSubArray=0;
    
    for (let right=0;right<nums.length;right++){
        
        if (nums[right]===0){
            k--;
        }
        
        while(k<0){
            if (nums[firstElement]===0){
                k++;
            }
            firstElement++;
        }
        // Input: [1, 1, 0, 1]
// After deleting the 0, the longest subarray is [1, 1, 1].
// The result is right - firstElement because you don't count the 0 that was removed.
        maxSubArray=Math.max(maxSubArray,right-firstElement )
        
    }
    return maxSubArray
    
    
};