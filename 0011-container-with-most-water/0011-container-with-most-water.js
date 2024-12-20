
var maxArea = function(height) {

    //left=0; right=height.length-1

    //find volume of water and store in a variable

    //check which volume of water is greater . currently finded one or previously stored in maxVolume variable and store in max variable 

   // find  left or right is shorter,i++  that lowest  one  


let left=0;
let right=height.length-1;
let maxVol=0;

   while(left<right){

    const currentHeight=Math.min(height[left],height[right])

    const currentVolume=currentHeight * (right-left)
    

    maxVol=Math.max(currentVolume,maxVol)

    if (height[left] < height[right]){
        left++

    }else{
        right--;
    }


   }
console.log(maxVol)
return maxVol

    
};