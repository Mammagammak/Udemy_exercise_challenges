function loveCalculator(loveSeeker = prompt("Enter your name:"), potentialPartner = prompt("Enter your potential partner's name:"))
 {
   var n = Math.random();
    n = Math.floor(n*100) + 1;
    console.log(loveSeeker + "you have" + n + "% match with " + potentialPartner + "!");
 }

