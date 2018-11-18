//use forEach to console.log all the words in the words array.
const words = ['cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon'];
const numbers = [8, 3, 22, 0, -73, 15];
const magicUsers = ['merlin','maleficent','voldemort','grindlevald','dumbledore','bellatrix'];
const hogwartzStudents = ['hermioni','ron','malfoy','james','ginny','luna'];

//function showStudents(item, index) {
		//console.log(item, index);
//}

//hogwartzStudents.forEach(function(item, index) {
		//console.log(item, index);
//});


//magicUsers.forEach(function(item, index) {
		//console.log(item, index);
//});
//function output(item, index, array) {
		//console.log(item, index);
//}
//console.log(magicUsers.forEach(output));


//function logWords() {
	//words.forEach(function(words) {
			//console.log(words);
	//});
//}
//console.log(logWords());

//use forEach to console.log the each number in the numbers array divided by two
//it should console.log: 4, 1.5, etc...

//function logNumbers() {
		//numbers.forEach(function(numbers) {
				//console.log(numbers);
		//});
//}
//console.log(logNumbers());

// use forEach to console.log the each number in the numbers array divided by two.  should log 4, 1.5, etc
//function logHalfNumbers() {
		//numbers.forEach(function(numbers) {
				//console.log(numbers / 2);
		//});
//}
//console.log(logHalfNumbers());

//using the getFirstLetter function below as your callback, use map to create an array containing the first letter of every word from the words array.


//function getFirstLetter(word) {
		//return word.charAt(0);
//}

//const firstLetters = words.map(getFirstLetter);
//console.log(firstLetters);


// use map to create an array containing the last letter of every word from the words array.
//function getLastLetters(word) {
	//return	word.charAt(word.length-1);
//}
//const lastLetters = words.map(getLastLetters);
//console.log(lastLetters);

//use map to create an array containing the revrsed version of each word from the word array. example: first entry will be supmawyttac
//const reversedWords = words.map(function(word) {
		//var wordList = word.split("");
		//wordList.reverse();
		//var wordsFlipped = wordList.join("");
		//return wordsFlipped;
//});
//console.log(reversedWords);



// use map to create an array containing the abolute value of every number in the numbers array.

//const absoluteNumbers = numbers.map(function(number) {
		//return Math.abs(number);
//});
//console.log(absoluteNumbers);

//use map to create an array that contains only the words from the words array containing 's'. all other words should be replaced wit hnull. ex. 'cattywampus','snickersnee' null, etc.

//function getSWords(w) {
		//const sString = RegExp(/s/);
		//if (sString.test(w)) {
				//return w;
		//}
		//return null;
//}
//const wordsWithS = words.map(getSWords);
//console.log(wordsWithS);

// use array method reduce, use reduce to sum up all of the numbers in the numbers array.

function sum(currentTotal, nextNumber) {

}

const sumTotal = numbers.reduce();

//use reduce to find the word from the words array that is last in the alphabet.
const alphabeticallyLast = words.reduce(function() {

});
