"use strict";

var i = 0;
var noTextCounter = 0;

$('#submitbutton').click(function(){
    console.log('Click on button');
    var sentence = $("#english-text").val();
    if (checkForBlank(sentence) === false) {
        if (noTextCounter === 0) {
            alert("Enter some text");
        }
        else {
            alert("First enter some text. I said this " + (noTextCounter + 1) + " times already!");
        }
        noTextCounter++;
        return 0;
    }
    
    var cipheredCode = new String;
    var cipherToUse = $('input[name=cipherName]:checked', '#cipher-form').val();
    console.log(cipherToUse);
    if (cipherToUse === 'caesar') {
        cipheredCode = translateToCaesar(sentence);
    }
    else if (cipherToUse === 'atbash') {
        cipheredCode = translateToAtbash(sentence);
    }
    else {
        alert("Please choose the cipher name to continue.");
    }
    $("#cipher").text(cipheredCode);
    console.log("Code reached here");
    $("#cipher").show();
});

$('#submitbutton-2').click(function(){
    console.log('Click on button');
    var sentence = $("#english-text").val();
    var cipheredCode = new String;
    var cipherToUse = $('input[name=cipherName]:checked', '#cipher-form').val();
    console.log(cipherToUse);
    if (checkForBlank(sentence) === false) {
        alert("First enter some dope ass shit. Nigga how many fucking times should I tell ya!");
        return 0;
    }
    if (cipherToUse === 'caesar') {
        cipheredCode = translateToCaesar(sentence);
    }
    else if (cipherToUse === 'atbash') {
        cipheredCode = translateToAtbash(sentence);
    }
    else {
        alert("What cipher nigga?");
    }
    $("#cipher").text(cipheredCode.toUpperCase());
    console.log("Code reached here");
    $("#cipher").show();
});

function checkForBlank(sentenceToCheck) {
    if (sentenceToCheck === "") {
        return false;
    }
    return true;
}

function translateToCaesar(userString) {
    var finalString = new String;
    var newSentence = userString.toUpperCase();
    var numberofCharacters = newSentence.length;
    
    console.log("The sentence is: " + newSentence + " and it has " + numberofCharacters + " characters.");
    for (i = 0; i < numberofCharacters; i++) {
        console.log("The counter is at " + i);
        var testChar = newSentence.charCodeAt(i);
        console.log("Test char is: " + testChar + " and value is: " + String.fromCharCode(testChar));
        
        if (64 > testChar || 91 < testChar) {
                console.log("Entering loop one");
                console.log("Entering: " + String.fromCharCode(testChar));
                var charForThis = testChar;
            }
               
        else {
                if (87 < testChar) {
                console.log("Entering loop two");
                console.log("Value of testChar is: " + testChar);
                var charForThis = testChar-23;
                console.log("New char is: " + charForThis);
                }
                else {
                    console.log("Entering loop three");
                    console.log("Value of testChar is: " + testChar);
                    var charForThis = testChar+3;
                    console.log("Code word: " + String.fromCharCode(charForThis));      
                }
            }
    finalString = finalString.concat(String.fromCharCode(charForThis));
    console.log("Ciphered code: " + finalString);
    }
    return finalString;
}

function translateFromCaesar (userString) {
    var finalString = new String;
    var newSentence = userString.toUpperCase();
    var numberofCharacters = newSentence.length;
    
    console.log("The sentence is: " + newSentence + " and it has " + numberofCharacters + " characters.");
    for (i = 0; i < numberofCharacters; i++) {
        console.log("The counter is at " + i);
        var testChar = newSentence.charCodeAt(i);
        console.log("Test char is: " + testChar + " and value is: " + String.fromCharCode(testChar));
        
        if (64 > testChar || 91 < testChar) {
                console.log("Entering loop one");
                console.log("Entering: " + String.fromCharCode(testChar));
                var charForThis = testChar;
            }
               
        else {
                if (68 > testChar) {
                console.log("Entering loop two");
                console.log("Value of testChar is: " + testChar);
                var charForThis = testChar+23;
                console.log("New char is: " + charForThis);
                }
                else {
                    console.log("Entering loop three");
                    console.log("Value of testChar is: " + testChar);
                    var charForThis = testChar-3;
                    console.log("Code word: " + String.fromCharCode(charForThis));      
                }
            }
    finalString = finalString.concat(String.fromCharCode(charForThis));
    console.log("Ciphered code: " + finalString);
    }
    return finalString;
}

function translateToAtbash (userString) {
    var finalString = new String;
    var newSentence = userString.toUpperCase();
    var numberofCharacters = newSentence.length;
<<<<<<< HEAD
    var charForThis;
=======
    var charForThis = 0;
    var testChar = 0;
>>>>>>> master
    
    console.log("The sentence is: " + newSentence + " and it has " + numberofCharacters + " characters.");
    
    for (i=0; i < numberofCharacters; i++) {
        testChar = newSentence.charCodeAt(i);
        console.log("Loop " + i + " alphabet is: " + String.fromCharCode(testChar) + " and testChar is: " + testChar);
        if (testChar < 64 || testChar > 91) {
                console.log("Entering loop one");
                console.log("Entering: " + String.fromCharCode(testChar));
                charForThis = testChar;
            }

        else {
            console.log("Entering loop two");
            charForThis = (91 - testChar) + 64;
            console.log("Value of ciphered alphabet is: "+ charForThis + " So character is: " + String.fromCharCode(charForThis));
        }
        finalString = finalString.concat(String.fromCharCode(charForThis));
        console.log("Ciphered code: " + finalString);
    }
    
    return finalString;
}

//function translateFromA1z26 (userString) {
//    var finalString = new String;
//    var newSentence = userString.split("-");
//    var numberofCharacters = newSentence.length;
//    var charForThis;
//    
//    console.log("The sentence is: " + newSentence + " and it has " + numberofCharacters + " characters.");
//    
//    for (i=0; i < numberofCharacters; i++) {
//        }
//}
