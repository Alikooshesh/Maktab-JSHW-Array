//1 : Function for delete an index from array
function deleteByIndex(arr,i) {
    arr.splice(i,1)
    return arr
}

//2 : Function for combine arrays
function combiner(...arrays) {
    tempArr=[]

    for (const arr of arrays) {
        for (const key of arr) {
            tempArr.push(key)
        }
    }

    return(tempArr);
}

//3 : Function for remove duplicate item from array
function dupDeleter(arr) {
    tempArr = []
    for (const key of arr) {
        // // With array ready func
        // if (tempArr.indexOf(key) == -1) {
        //     tempArr.push(key)
        // }

            // Without array funcs
        if (arrSearch(key,tempArr)!= true) {
            tempArr.push(key)
        }
    }
    return(tempArr)
}

function arrSearch(key,arr) {
    for (const iterator of arr) {
        if (iterator == key) {
            return true
        }
    }
}

