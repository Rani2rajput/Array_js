// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// var list=[]
// for(var i of list1){
//     if (!list2.includes(i)){
//         list.push(i)
//     }
// }console.log(list)



var list=["rani","shivani","monty"]
var list1=["rani","khemu","rajput"]
var list3=[]
for (var i of list){
    if (!list1.includes(i)){
        list3.push(i)

    }
}console.log(list3)



