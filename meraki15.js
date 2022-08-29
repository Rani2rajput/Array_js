elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_even=0
var sum_odd=0
for (var i of elements){
    if (i%2==0){
        sum_even=sum_even+i
        
    }else{
        sum_odd=sum_odd+i
}sum1=sum_even/2
 sum2=sum_odd/2
}console.log(sum1,"sum of even")
console.log(sum2,"sum of odd")