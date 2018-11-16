//const _replaceMe_ = null;

////Remove _replaceMe_ and add your own code so that each variable is the correct type

//const numberVar = 12;
//const stringVar = 'hello';
//const booleanVar = false;
//const nullVar = null;
//const undefinedVar = undefined;

//const pi = 3.1415926;
//const piPlusOne =






// create an if-else statment that will randomly log "macro" half of the time and "polo" the other half.
		//const random = Math.random() * 3;
//function getRandom(min,max) {
		//return Math.floor(Math.random() * (10 - 0) + 0);
//}
//if (getRandom() % 2 === 0) {
		//console.log("macro");
//} else {
		//console.log("polo");
//}



// write a for loop that logs the numbers 0 through 5
//for (let i = 0; i <= 5; i++) {
		//console.log(i);
//}


// write a for loop that logs the numbers 0 - 10
//for (let i = 0; i <= 10; i++) {
		//console.log(i);
//}



// write a for loop that logs the numbers 10 - 0
//for (let i = 10; i >= 0; i--) {
		//console.log(i);
//}


// loop that logs "Hippopotamus" 17 times
//for (let i = 0; i < 17; i ++) {
		//console.log("Hippopotamus");
//}

// loop that logs 2,4,6,8,10
//for (let i = 2; i <= 10; i+=2) {
		//console.log(i);
//}

// loop that logs the numbers 2,4,6,8
//for (let i = 2; i <= 8; i +=2) {
		//console.log(i);
//}

// loop that logs 5 - 10
//for (let i = 5; i <= 10; i++) {
		//console.log(i);
//}

// loop that logs "marco!" when i is even "Polo!" when i is odd and "Game Over!" when i is zero
//for (let i = 0; i <= 10; i++) {
		//if (i === 0  ) {
				//console.log('Game Over!!');
		//} else if (i % 2 ===  0) {
				//console.log('Marco!');
		//} else {
				//console.log('Polo!');
		//}
//}

// else if statment to  age , canDrive 16, canVote 18, canDrink 21, canRetire 66
//var age = 17;
//var canDrive = 16;
//var canVote = 18;
//var canDrink = 21;
//var canRetire = 66;
//if (age < 16)   {
//canDrive = false;
		//canVote = false;
		//canDrink = false;
		//canRetire = false;
		//console.log('To young to do any');
//} else if (age >= 16 && age < 18) {
		//canDrive = true;
		//canVote = false;
		//canDrink = false;
		//canRetire = false;
		//console.log('you can drive');
//} else if (age >= 18 && age < 21) {
		//canDrive = true;
		//canVote = true;
		//canDrink = false;
		//canRetire = false;
		//console.log('you can vote now!');
//} else if (age >= 21 && age < 66) {
		//canDrive = true;
		//canVote = true;
		//canDrink = true;
		//canRetire = false;
		//console.log('you can drink');
//} else if (age >=66) {
		//canDrive = true;
		//canVote = true;
		//canDrink = true;
		//canRetire = true;
		//console.log("you can retire");
//}



// another way to right the age ? above
function funChecker(age) {
		if (age < 16) {
				console.log('talk to your parents');
		} else if (age >= 16 && age < 18) {
				console.log('you can drive now');
		} else if (age >= 18 && age < 21) {
				console.log('you can vote and drive');
		} else if (age >= 21 && age < 66) {
				console.log('you can drive, vote, and drink');
		} else if (age >= 66) {
				console.log("you can drive, vote, drink, and retire... congradulations you did it!");
		}
}




