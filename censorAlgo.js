// write a function called sensor(text, word) return the text with the word you chose to replace with asterisks
//censor("this is an algorithm", "algorithm")
//returns 'this is an *********'


//this method will split a text, and put it in a new array so you can find the words to replace
function censor(text, word) {
    var arr = text.split(" ")
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (word === arr[i]) {
            console.log(arr[i]);
        }
    }
    // replace();
}

//this method will replace words with asterisks
function replace(word) {
    for (let i = 0; i < array.length; i++) {

    }
}



censor("this is an algorithm", "algorithm")