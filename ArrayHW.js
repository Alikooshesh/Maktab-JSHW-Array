// //1 : Function for delete an index from array
// function deleteByIndex(arr,i) {
//     arr.splice(i,1)
//     return arr
// }

// //2 : Function for combine arrays
// function combiner(...arrays) {
//     let tempArr=[]

//     for (const arr of arrays) {
//         for (const key of arr) {
//             tempArr.push(key)
//         }
//     }

//     return(tempArr);
// }

// //3 : Function for remove duplicate item from array
// function dupDeleter(arr) {
//     let tempArr = []
//     for (const key of arr) {
//         // // With array ready func
//         // if (tempArr.indexOf(key) == -1) {
//         //     tempArr.push(key)
//         // }

//             // Without array funcs
//         if (arrSearch(key,tempArr)!= true) {
//             tempArr.push(key)
//         }
//     }
//     return(tempArr)
// }

// function arrSearch(key,arr) {
//     for (const iterator of arr) {
//         if (iterator == key) {
//             return true
//         }
//     }
// }

//4 Number extractor
// function numEx(str) {
//     let tempNum ;
//     let nums = []
//     let nextFlag = false;

//     for (let index = 0; index < str.length; index++) {
//         tempNum = false
//         if (!isNaN(str[index]) && str[index]!= " ") {
//             nextCheacker(index)
//         }
        
//         if (tempNum != false) {
//             nums.push(tempNum)
//         }

//         if (nextFlag == true) {
//             index = str.indexOf(tempNum) + (tempNum.length - 1)
//             nextFlag = false
//         }
//     }

//     function nextCheacker(index) {
//         if (tempNum != false) {
//             tempNum += str[index]
//         } else {
//             tempNum = str[index]
//         }

//         if (!isNaN(str[index+1]) && str[index+1]!= " ") {
//             nextCheacker(index+1)
//             nextFlag = true;
//         }
//     }

//     return nums
// }

