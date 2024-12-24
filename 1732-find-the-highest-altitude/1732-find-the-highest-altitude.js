var largestAltitude = function(gain) {

    let currentGain=0
    let maxNetGain=0
   
    
    for (let i=0; i< gain.length ; i++ ){
     
            currentGain = currentGain+ gain[i]

         maxNetGain=Math.max(maxNetGain,currentGain)
        
    }
  
        return maxNetGain;
        
    }
    
