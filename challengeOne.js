function getListWithoutSeven(list) {
    let numberS = '7';
    const result = [];
    list.forEach(element => {
        let value = element.toString();
        if (value.includes(numberS)) {
            let regex = new RegExp(numberS, "g");
            let numberwithoutSeven = value.replace(regex, '');
            if (numberwithoutSeven == '') {
                return;
            }
            result.push(Number(numberwithoutSeven));
        }
        else {
            result.push(element);
        }
    });
    return getListSortReverse(result);
}
function getListSortReverse(list) {
    const sortList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        sortList.push(list[i]);
    }
    return sortList;
}
console.log(getListWithoutSeven([1, 2, 3, 4, 5, 6, 7]));
console.log(getListWithoutSeven([10, 20, 30, 40]));
console.log(getListWithoutSeven([7]));
console.log(getListWithoutSeven([77]));
console.log(getListWithoutSeven([75]));
console.log(getListWithoutSeven([7, 5, 7, 2, 1]));
console.log(getListWithoutSeven([70, 7, 5, 4, 3, 2, 7, 7, 29, 1]));
