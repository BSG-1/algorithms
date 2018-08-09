// write a function called sensor(text, word) return the text with the word you chose to replace with asterisks
//censor("this is an algorithm", "algorithm")
//returns 'this is an *********'

//this method will split a text, and put it in a new array so you can find the words to replace
function censor(text, word) {
    let arr = text.split(" ");
    // console.log(arr); <-- logs out the split elements of the text ["this", "is", "an", "algorithm"]
    for (let i = 0; i < arr.length; i++) {
        if (word == arr[i]) {
            // console.log(arr[i]); <-- logs out the word if it exists in the elements of the array ("algorithm")
            let asterisks = Array(arr[i].length + 1).join("*");
            // console.log(asterisks); <-- a new variable that makes asterisks for the length of the word (*********)
            let index = arr.indexOf(arr[i]);
            // console.log(index); <-- log out the index of the array where the word exists (3)
            if (index !== -1) {
                arr[index] = asterisks; //<-- replace the index of the array where the word exists with the asterisk version
            }
            console.log(arr.join(" ")); //<-- pull the elements out of the array (now with the asterisks)
        }
    }
}

censor("Now this is an algorithm", "algorithm") //<-- Need to figure out capitals and fringe test cases