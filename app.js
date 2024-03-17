var friends = ["Jack", "Jill", "John", "Job", "James"]

friends.forEach((item) => {
    console.log(item + ":")
    for (i = 99; i >= 1; i--) {
        if (i == 1) {
            console.log(`${i} line of code in the file, ${i} line of code; ${item} strikes one out, clears it all out, no more lines of code in the file`)
        }
        else {
            console.log(`${i} lines of code in the file, ${i} lines of code; ${item} strikes one out, clears it all out, ${i - 1} lines of code in the file`)
        }
    }
})