/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // "abc", t = "ahbgdc
   let left=0;
   const max=Math.max(s.length,t.length)
    for(let right=0;right<max;right++){

        if (s[left]==t[right]){
            left++;
        }
    }
   
    if (left===s.length)  {
      return true
    } else{
      return false
    }
};