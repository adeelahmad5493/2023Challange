var wordPattern = function(pattern, s) {
    let str = s.split(' ');
    let patt = pattern.split('');
    
    if(str.length !== patt.length) {
            return false;
    }
    
    for(let i = 0; i < patt.length; i += 1) {
        for(let j = 1; j < patt.length; j += 1 ) {
            if(patt[j] === patt[i]) {
                if(str[j] === str[i]) {
                    continue;
                }
                return false;
            } else {
                if(str[j] === str[i]) {
                    return false;
                }
                continue;
            }
        }
    }
    return true;
};