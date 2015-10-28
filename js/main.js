"use strict";

var i = 0;
var noTextCounter = 0;

$('#submitbutton').click(function(){
    var sentence = $("#english-text").val();
    if (checkForBlank(sentence) === false) {
        if (noTextCounter === 0) {
            alert("Enter something to translate");
        }
        else {
            alert("First enter some text. I said this " + (noTextCounter + 1) + " times already!");
        }
        noTextCounter++;
        return 0;
    }

    var cipheredCode = new String;
    var cipherToUse = $('input[name=cipherName]:checked', '#cipher-form').val();
    if (cipherToUse === 'caesar') {
        cipheredCode = translateToCaesar(sentence);
    }
    else if (cipherToUse === 'atbash') {
        cipheredCode = translateToAtbash(sentence);
    }
    else {
        alert("Please choose the cipher name to continue.");
    }
    $("#main-window").animate({
        height: '350px'
    });
    $("#cipher").text(cipheredCode);
    $("#cipher").show();
});

$('#submitbutton-2').click(function(){
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
    if (cipherToUse === 'caesar') {
        cipheredCode = translateFromCaesar(sentence);
    }
    else if (cipherToUse === 'atbash') {
        cipheredCode = translateToAtbash(sentence);
    }
    else {
        alert("Please choose the cipher name to continue.");
    }
    $("#cipher").text(cipheredCode.toUpperCase());
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
    for (i = 0; i < numberofCharacters; i++) {
        var testChar = newSentence.charCodeAt(i);

        if (64 > testChar || 91 < testChar) {
                var charForThis = testChar;
            }

        else {
                if (87 < testChar) {
                var charForThis = testChar-23;
                }
                else {
                    var charForThis = testChar+3;
                }
            }
    finalString = finalString.concat(String.fromCharCode(charForThis));
    }
    return finalString;
}

function translateFromCaesar (userString) {
    var finalString = new String;
    var newSentence = userString.toUpperCase();
    var numberofCharacters = newSentence.length;
    for (i = 0; i < numberofCharacters; i++) {
        var testChar = newSentence.charCodeAt(i);

        if (64 > testChar || 91 < testChar) {
                var charForThis = testChar;
            }

        else {
                if (68 > testChar) {
                var charForThis = testChar+23;
                }
                else {
                    var charForThis = testChar-3;
                }
            }
    finalString = finalString.concat(String.fromCharCode(charForThis));
    }
    return finalString;
}

function translateToAtbash (userString) {
    var finalString = new String;
    var newSentence = userString.toUpperCase();
    var numberofCharacters = newSentence.length;
    var charForThis = 0;
    var testChar = 0;

    for (i=0; i < numberofCharacters; i++) {
        testChar = newSentence.charCodeAt(i);
        if (testChar < 64 || testChar > 91) {
                charForThis = testChar;
            }

        else {
            charForThis = (91 - testChar) + 64;
        }
        finalString = finalString.concat(String.fromCharCode(charForThis));
    }

    return finalString;
}
