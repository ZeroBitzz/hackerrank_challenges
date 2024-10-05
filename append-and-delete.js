function appendAndDelete(s, t, k) {
    let changesNeeded = 0
    for(let i=0; i<s.length; i++){
        if(s[i] !== t[i]){
            changesNeeded++
        }
    }
    changesNeeded *= 2
    if(changesNeeded <= k){
        return 'Yes'
    }else{
        return 'No'
    }
}