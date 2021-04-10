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
