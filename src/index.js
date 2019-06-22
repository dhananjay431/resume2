// export import "../js/core/jquery.3.2.1.min.js";
// export import "../js/core/popper.min.js";
// export import "../js/core/bootstrap.min.js";
// export import "../js/now-ui-kit.js?v=1.1.0";
// export import "../js/aos.js";
// export import "../scripts/main.js";

// require("../js/core/jquery.3.2.1.min.js");
// require("../js/core/popper.min.js");
// require("../js/core/bootstrap.min.js");
// require("../js/now-ui-kit.js?v=1.1.0");
// require("../js/aos.js");
// require("../scripts/main.js");
var message = new SpeechSynthesisUtterance("hello");
var voices = speechSynthesis.getVoices();

message.voice = voices[2];
speechSynthesis.speak(message);
/*
var p = 3,s="";
for(var i=1;i<=10;i++){
s+=`${p} ${i} za ${p*i}  `;
}
console.log(s);
function show(i,p){
if(i==11) return;
console.log(i);
var message = new SpeechSynthesisUtterance(`${p} ${i} za ${p*i}`);
var voices = speechSynthesis.getVoices();
console.log(voices);
message.voice = voices[2];
speechSynthesis.speak(message);
show(i+1);
}
show(1,3)
*/