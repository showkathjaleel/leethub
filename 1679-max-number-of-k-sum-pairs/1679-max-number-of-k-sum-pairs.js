var maxOperations = function(nums, k) {
     let left=0;
    let right=nums.length-1;
    let count=0;
    nums.sort((a,b)=> a-b)
    // console.log(nums,'sortt')



while (left < right){
const sum=nums[left]+nums[right]

      if (sum===k){
        count++;
        right--;
        left++;
      }else if ( sum > k){
        right--;
      }else {
        left++;
      }
       

    }

    return count;
}