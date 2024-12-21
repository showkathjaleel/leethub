/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let currVowelLength=0;
    let maxVowelLength=0;
    //find no of vowels in first k letters and store in currVowelLength
    //maxVowelLength=Math.max (currVowelLength, maxVowelLength)
    //loop from k to nums.length 
 //   currVowelLength= if last one is  vowel, count++ and first one is a vowel , count --;
    //maxVowelLength=Math.max (currVowelLength, maxVowelLength)
    
    const vowels=['a','e','i','o','u']
    
    for (let i=0;i<k;i++)
    {
        if ( vowels.includes(s[i]) ) {
            currVowelLength++
            }
    }
    maxVowelLength=Math.max(maxVowelLength,currVowelLength)
  
               
        for (let i=k;i<s.length;i++)
        {
          if ( vowels.includes(s[i]) )
             {
            currVowelLength++
            }
        
           if ( vowels.includes(s[i-k]) )
               {
            currVowelLength--
            }
               
           
                maxVowelLength=Math.max(maxVowelLength,currVowelLength)
                
                
    }
    return maxVowelLength;
    
    
};