function getListWithSquare(list:Array<number>): Array<number> {
    const numberSS = 77;
    const result = [] as Array<number>;
    list.forEach(element => {
       let numberSquared = element * element; 
       if(numberSquared <= numberSS){
        result.push(numberSquared)
       }
    });

    return getListSortAscending(result);
}

function getListSortAscending (list:Array<number>): Array<number> {
    if(list.length <= 1){
        return list;
    }
    const mid = Math.floor(list.length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    
    return merge(getListSortAscending(left),getListSortAscending(right));
}

function merge(left:Array<number>, right:Array<number>): Array<number> {
    const sortList:Array<number> = [];
    let indexLeft=0;
    let indexRight=0;
    
    while (indexLeft + indexRight < left.length + right.length){
        const leftNumber = left[indexLeft];
        const rightNumber = right[indexRight];
      
        if(leftNumber == undefined){
            sortList.push(rightNumber);
            indexRight++;
        }
        else if(rightNumber == undefined){
            sortList.push(leftNumber);
            indexLeft++;
        }
        else if(leftNumber < rightNumber){
            sortList.push(leftNumber);
            indexLeft++;
        }
        else{
            sortList.push(rightNumber);
            indexRight++;
        }
    }
    return sortList;
}

console.log(getListWithSquare([-6, -5, 0, 5, 6]));
console.log(getListWithSquare([-10, 10]));
console.log(getListWithSquare([-2, -1]));
console.log(getListWithSquare([1, 2, 3, 5, 6, 8, 9]));