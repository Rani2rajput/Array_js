l=["2","3","4"]
i=0
while (i<l.length){
    j=0
    while (j<l.length){
        k=0
        while (k<l.length){
            console.log(l[i]+l[j]+l[k]) 
            k=k+1 
        }
        j=j+1
    }
    i=i+1
}
