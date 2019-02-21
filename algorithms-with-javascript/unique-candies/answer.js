/*
Joy carries candies with her home but has to split half of her candies with her little brother.

Write a function that takes an array of numbers as an argument, with each number representing a different brand of candy. This function will return the max amount of unique candies you can have after giving half of your candies to your brother.

For example: [1, 1, 5, 5, 5, 6]

The function will return 3 because you can give him the 1, 5, 5 and still have 1, 5, and 6 left over.
*/

//Input: array
//Output: number
//Complexities: O(n^2), O(n)
//Exceptions: If the amount of candies is not divisible by 2, do I give him the extra one? - No
//            Does the array only contain numbers? - Yes

let candies = [8, 4, 8, 5, 5, 5, 50];

function maxUnique(arr) {

    //convert candies into object with amount of unique entries
    let candiesObject = {};
    let giveToBrother = Math.floor(arr.length/2);
    let uniqueCandies = 0;
    let highestCandyNumber;

    //Loop through to add to candiesObject
    for(let i=0; i<arr.length; i++){
        if(candiesObject.hasOwnProperty(arr[i])){
            candiesObject[arr[i]]++;
        } else {
            candiesObject[arr[i]] = 1;
        }
    }

    //Loop to remove candies from candiesObject
    for(let i=0; i<giveToBrother; i++){
        highestCandyIndex = Object.values(candiesObject).indexOf(Math.max(...Object.values(candiesObject)));
    }

    let candiesLength = Object.keys(candiesObject).length;
    let keys = Object.keys(candiesObject)
    while(giveToBrother > 0) {
        highestCandyNumber = Math.max(...Object.values(candiesObject));
        for(let key in candiesObject) {
            if(candiesObject[key] === highestCandyNumber) {
                candiesObject[key]--;
                giveToBrother--;
                break;
            }
        }
    }

    for(let key in candiesObject) {
        if(candiesObject[key]>0) {
            uniqueCandies++;
        }
    }

    return uniqueCandies;
}

console.log(maxUnique(candies));

module.exports = maxUnique;