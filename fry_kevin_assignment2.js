// Kevin Fry
// SDI 1306
// Project 2
// functions and more

var varSocialNetwork = "Twitter";
var numMaxTweetCharacters = 160;
var arrSocialNetworks = ["Twitter","Facebook"];
var arrKeywords = ["grocery shopping",
                   "aisle directories",
                   "find products",
                   "product search",
                   "this week's ad"
                    ];
var numSocialNetworksLength = arrSocialNetworks.length;

var outcome;

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
    
}