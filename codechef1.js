var a=require("readline-sync")
var b=a.questionInt("enter limit::")
var c=a.questionInt("enter 1nd::")
var d=a.questionInt("enetr 2nd::")
for (var i=1; i<=b;i++){
    if (c>d){
      console.log("c is taller")
    break
    }else if (d>c){
        console.log("d is taller")
    break
    }
}

