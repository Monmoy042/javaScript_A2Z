// Count no. of words in a string
var voiceSpeech = "Hello World, Welcome to the world of NodeJs";
// console.log(voiceSpeech.length);
var count = 0;
for (var i = 0; i < voiceSpeech.length; i++) {
  var char = voiceSpeech[i];
  if (char == " " && voiceSpeech[i - 1] != " ") {
    count++;
  }
}
count++;
console.log(count);
