function secondHighest(arr) {

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }

    return secondMax === -Infinity ? null : secondMax;
}

console.log(secondHighest([10, 50, 30, 80, 20]));