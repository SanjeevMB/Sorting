/* ===== Bubble sort ===== */

function bubbleSort(array) {

    let n = array.length - 1;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - i; j++) {

            if (array[j] > array[j + 1]) {

                [array[j], array[j + 1]] = [array[j + 1], array[j]];

            }

        }

    }

    return array;

}

let bubbleSortResult = bubbleSort([6, 3, 1, 9, 8, 10]);

console.log(bubbleSortResult);