// Convert speech to text using javascript.
// Get voice response from a bot in reply to the input.
//alert("hello");
let mic = document.getElementById("mic");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();
let chatareamain=document.querySelector('.chatarea-main');
let chatareaouter=document.querySelector('.chatarea-outer');
let intro=["hello, i am a chatbot","hii i am a virtual robo","hey i am a helping chatbot"];
let help=["how may i assist you?","how can i help you?"];
let greetings=["i am good thank you ","i am fine, what about you?"];
let  hobbies=["i love to help people :) ","i like to make friends","want to help everyone"];
let maggi=["which type of maggi do you like?","i can make maggi for you :)","would you like cheese maggi"];
let thank=["most welcome :)","not a issue","my pleasure"];
let closing=["ok byy byy","have agreat day :)","bye take care","see you soon..."];

function showuserMsg(userMsg){
    let output='';
    
    output += `<div class="chatarea-inner user">${userMsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
   
}

function showchatbotMsg(chatbotMsg){
    let output='';
    
    output += `<div class="chatarea-inner chatbot">${chatbotMsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;

}

function chatbotVoice(message){

 const speech = new SpeechSynthesisUtterance();
 speech.text = "this is test";
if(message.includes('who are you')){
 let finalResult=intro[Math.floor(Math.random() * intro.length)];
 speech.text=finalResult;  
}
if(message.includes('hello' || 'hii')){
    let finalResult=help[Math.floor(Math.random() * help.length)];
    speech.text=finalResult;  
}
if(message.includes('how are you')){
    let finalResult=greetings[Math.floor(Math.random() * greetings.length)];
    speech.text=finalResult;  
}
if(message.includes('tell me about you')){
    let finalResult=hobbies[Math.floor(Math.random() * hobbies.length)];
    speech.text=finalResult;  
}
if(message.includes('can you make food for me')){
    let finalResult=maggi[Math.floor(Math.random() * maggi.length)];
    speech.text=finalResult;  
}
if(message.includes('thank you' || 'thank you so much')){
    let finalResult=thank[Math.floor(Math.random() * thank.length)];
    speech.text=finalResult;  
}
if(message.includes('ok bye')){
    let finalResult=closing[Math.floor(Math.random() * closing.length)];
    speech.text=finalResult;  
}
//window.speechSynthesis.cancel();
speech.volume = 1; // From 0 to 1
speech.rate = 1; // From 0.1 to 10
speech.pitch = 2; // From 0 to 2
 //window.SpeechSynthesis.speak(speech);
 speechSynthesis.speak(speech);
 chatareamain.appendChild(showchatbotMsg(speech.text));
}
recognition.onresult=function(e){
    let resultIndex=e.resultIndex;
    let transcript=e.results[resultIndex][0].transcript;
  
   chatareamain.appendChild(showuserMsg(transcript));
   chatbotVoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
   mic.style.background="#FF0000"; 
}
mic.addEventListener("click",function(){
    recognition.start();
    mic.style.background="#39c81f";
    console.log("activated");
})
