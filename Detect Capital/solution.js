var detectCapitalUse = function(word) {
    let isCapital = 0;
    let isSmall =0;
    for(let i =0; i < word.length; i+=1) {
        if(word[i] !== word[i].toLowerCase()) {
            if(i !== 0) {
                isCapital += 1;   
            }
            continue;
        }
        isSmall += 1;
    }
    if(isCapital >= 1 && isSmall >= 1) {
        return false;
    }
    return true;
};