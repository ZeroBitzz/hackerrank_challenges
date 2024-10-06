function appendAndDelete(s, t, k) {
    let subtractorArr = []
    if(s > t && k >= (s*2)){
        return 'Yes'
    }else if(t > s && k >= (t*2)){
        return 'No'
    }
    for(let i=0; i<s.length; i++){
        if(s[i] !== t[i]){
            break
        }else{
            subtractorArr.push(s[i])
        }
    }
    if((s.length-subtractorArr.length)*2 >= k){
        return 'Yes'
    }else{
        return 'No'
    }
}