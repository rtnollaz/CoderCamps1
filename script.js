<HTML>
<HEAD>
<SCRIPT>
function countWords(str){
   var count = 0;
   words = str.split(" "); 
    for (i=0 ; i < words.length ; i++){
       // inner loop -- do the count
       if (words[i] != "")
          count += 1; 
    }

   document.theForm.results.value = 
      "There are " +
      count +
      " words in the text string you entered!";
}
</SCRIPT>
</HEAD>
<BODY>
<FORM name="theForm">
Enter a text string:
<TEXTAREA name=inStr rows=5 cols=90>
</TEXTAREA>
<INPUT type=button value="Count Words" onClick="countWords(document.theForm.inStr.value)";>
<INPUT type=button name="theButton" value="Clear Results" onClick='document.theForm.results.value=""';>
Results<br>
<TEXTAREA name=results rows=5 cols=90>
</TEXTAREA>

</FORM>  
</BODY>
</HTML>
