"use strict"

function countVowels(str) {
	str = str.toLowerCase();

	var vowels = "ауоыиэяюёе",
		count = 0;

	for (var i = 0; i < str.length; i++) {

		if (vowels.indexOf(str[i]) !== -1) {
			count++;
		}			
	}

	return count;
}

var str = prompt("Напишите строку", 'программист');

console.log("В строке " + "'" + str + "'" + " - " + countVowels(str) + " русских гласных букв");













// // --------------------------------------------------------------------------------------------------------------------------------
// "use strict"

// function countVowels(str) {

// 	var vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"],
// 		count = 0;

// 	for (var i = 0; i < str.length; i++) {
// 		for (var k = 0; k < vowels.length; k++) {
// 			if (str.toLowerCase()[i] === vowels[k]) {
// 				count++;
// 			}	
// 		}
// 	}

// 	console.log("В строке " + "'" + str + "'" + " - " + count + " русских гласных букв");
// }

// var str = prompt("Напишите строку", 'программист');

// countVowels(str);