function strToMatrix(matrixStr:string):Array<Array<number>>{
    let result:Array<Array<number>> = []
    let x:Array<string> = matrixStr.split("\n")
    for (let row of x){
        let temp:Array<number> = []
        row.split(" ").forEach((item) => {
            temp.push(Number(item))
        });
        result.push(temp)
    }
    return result
}

// This function takes a string like '1 2 3 4\n5 6 7 8' and converts it into a matrix. There are literally no checks here.