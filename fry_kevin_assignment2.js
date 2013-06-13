// Kevin Fry
// SDI 1306
// Project 2
// functions and more


/// VARIABLE DEFINATIONS ///////////////////////////////////////////////////////
var varSocialNetwork = "Twitter";
var numMaxTweetCharacters = 160;
var arrSocialNetworks = ["Twitter","Facebook"];
var arrKeywords = ["grocery shopping",
                   "aisle directories",
                   "find products",
                   "product search",
                   "this week's ad"];
var numSocialNetworksLength = arrSocialNetworks.length;
var outcome;

/// FUNCTIONS //////////////////////////////////////////////////////////////////
// procedure
var funWhatSocialNetwork = function(varArgument){
    if (varArgument === "Twitter"){
        console.log("We're going to do some social networking with "+varArgument);
    } else {
        console.log("We're not going to do some social networking with "+varArgument);
    }
};

// boolean function
var funCheckSameSocialNetworks = function(varSocial1, varSocial2){
    if (varSocial1 === varSocial2) {
        console.log(varSocial1 + " is the social networking tool we'll be using.");
        return true;
    } else {
        console.log(varSocial1 + " is not the same as " + varSocial2);
        return false;
    }
};


// number function
var funHowManyMoreWords = function(numCharacters){
    var numAvgWordCount = 6;
    var numMoreWordsReturn;
    while (numCharacters <= 160){
        numCharacters = numCharacters + 1;
    }
    numMoreWordsReturn = numCharacters / numAvgWordCount;
    return numMoreWordsReturn;
};


// string function
var funComposeSampleTweet = function(strTip, strKeywords){
    var URL = "http://thisweeksad.com/";
    var returnString;
    
    returnString = strTip + " with " + strKeywords + " at " + URL;
    return returnString;
};


// array function
var funAddMoreKeywords = function(numMoreKeywords, arrToAddOnto){
    var arrKeywordsToAdd = ["grocery store prices",
                            "grocery store ads",
                            "grocery store coupons",
                            "online grocery store",
                            "compare grocery store prices",
                            "grocery store job",
                            "virtual grocery store",
                            "24 hour grocery store",
                            "shopping cart",
                            "online shopping",
                            "local grocery store",
                            "grocery store ads",
                            "store ads",
                            "sunday sales ads",
                            "weekly sales ads",
                            "weekly store ads",
                            "grocery deals"];

    for (i=0; i<numMoreKeywords; i++){
        arrToAddOnto.push(arrKeywordsToAdd[i]);
        console.log("We added " + arrKeywordsToAdd[i] + " to the list of keywords we'll use.");
    }
    return arrToAddOnto;
};
/// end functions

// run procedure ///////////////////////////////////////////////////////////////
funWhatSocialNetwork(varSocialNetwork);

// GET VARIABLES ///////////////////////////////////////////////////////////////
myCheckSameSocialNetworks = funCheckSameSocialNetworks("Twitter", "Facebook");
myHowManyMoreWords = funHowManyMoreWords(100);
myComposeSampleTweet = funComposeSampleTweet("How to find products","aisle directories");
myAddMoreKeywords = funAddMoreKeywords(8,arrKeywords);

// OUTPUT
console.log("\n");
console.log("");
console.log("");
console.log("");
console.log("");

// end
