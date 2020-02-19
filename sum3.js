

function stringClean(myString) {
    var i;
    for (i = 0; i < myString.length; i++) {
        if(!isNaN(parseInt(myString.charAt(i)))){
            //console.log(myString.charAt(i));
            myString = myString.replace(myString.charAt(i), ' ');
        }  
    }
    console.log(myString);
}

stringClean("bonjour 2 hervé");