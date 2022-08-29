var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var count_even=0
var sum_even=0
var count_odd=0
var sum_odd=0
for (i of elements){
    if (i%2===0){
        count_even+=1
        sum_even+=i

    }else{
        count_odd+=1
        sum_odd+=i
}sum1=sum_even/2
sum2=sum_odd/2

}console.log(count_even)
console.log(sum_odd)
console.log(sum1)
console.log(sum2)


