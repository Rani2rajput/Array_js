var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var count_lakhpati=0
var count_crorepati=0
var count_dilwale=0


for (i of kitna_paisa_hai){
    if (i>=100000){
        count_lakhpati=count_lakhpati+1

    }
    else if (i>=10000000){
        count_crorepati=count_crorepati+1


    }
    else{
        count_dilwale=count_dilwale+1

    }

}console.log(count_lakhpati)
console.log(count_crorepati)
console.log(count_dilwale)

