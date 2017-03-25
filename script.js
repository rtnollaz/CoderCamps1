function myFunction(){
var x = document.getElementById("textBox").value;
var AverageWords = 0;
var SpaceCounter = 0;
var SentenceCounter = 0;
var WordCounter = 1;

for(var i=0; i<=x.length; i++){
  if (x[i] == ' ') {
     SpaceCounter++;
     WordCounter++;
    }

    if (x[i] == '.' || x[i] == '?' || x[i] == '!') {
                SentenceCounter++;
            }

   }
AverageWords = WordCounter/SentenceCounter;
document.getElementById("row1").innerHTML = 'There are ' + AverageWords + ' average words in this text.';
document.getElementById("row2").innerHTML = 'There are ' + SpaceCounter + ' spaces in this text.';
document.getElementById("row3").innerHTML = 'There are ' + SentenceCounter + ' complete sentences in this text.';
document.getElementById("row4").innerHTML = 'There are ' + WordCounter + ' total words in this text.';
  }
