function getSumOfMoneyThatCANNOTChange(list) {
    const sortListOfCoins = list.sort((a, b) => a - b);
    let count = 1;
    for (let coin of sortListOfCoins) {
        if (coin <= count) {
            count += coin;
        }
        else {
            return count;
        }
    }
    return count;
}
console.log(getSumOfMoneyThatCANNOTChange([5, 7, 1, 1, 2, 3, 22, 222]));
console.log(getSumOfMoneyThatCANNOTChange([1, 1, 1, 1, 1]));
console.log(getSumOfMoneyThatCANNOTChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));
console.log(getSumOfMoneyThatCANNOTChange([1, 2, 3]));
console.log(getSumOfMoneyThatCANNOTChange([1]));
console.log(getSumOfMoneyThatCANNOTChange([]));
console.log(getSumOfMoneyThatCANNOTChange([3]));
