missingNumbers=[];

function findMissingNumbers(theArray){
    for(x=0; x<theArray.length; x++){
        difference = theArray[x+1]-theArray[x];
        if(difference>1){
            for(y=theArray[x]+1; y<theArray[x+1]; y++){
                missingNumbers = missingNumbers + y;
                }
             }
         }
    }
findMissingNumbers([1,5,6,7,10]);
console.log("[" + missingNumbers + "]");