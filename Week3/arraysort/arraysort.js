myArray ={"evens":[], "odds":[], "chars":[]};

function arraySort(anArray) {
    if(typeof anArray == "object"){
        for(i=0; i<anArray.length; i++){
            if(anArray[i]%2==0){
                myArray.evens.push(anArray[i]); 
                myArray.evens.sort();  
            }
            else if(anArray[i]%2>0){
                myArray.odds.push(anArray[i]);
                myArray.odds.sort();
            }
            else{
                myArray.chars.push(anArray[i]);
                myArray.chars.sort();
            }
        }
        return myArray;
    }
    return "invalid input";
}

module.exports = arraySort;
