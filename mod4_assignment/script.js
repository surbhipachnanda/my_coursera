(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i=0,j=0;i<names.length;i++) {
      var name= names[i];
      var firstLetter=name[j];
     
 firstLetter=firstLetter.toLowerCase();
      
  if (firstLetter=="j") {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();