const phrases = ["I am Ali Usman","I am ML Developer","I am Programmer","I am AI Developer"]
const typingSpeed = 150;
const erasingSpeed = 100;
const pauseTime = 1500;

const textElement = document.getElementById("typingtext");
let phraseIndex = 0;
let charIndex = 0;
let isErasing = false;
textElement.classList.add("typing")
function type(){
    const currentPhase =phrases[phraseIndex];
   if (!isErasing){
       textElement.textContent = currentPhase.substring(0,charIndex+1);
       charIndex++;
       if (charIndex == currentPhase.length){
           isErasing = true;
           setTimeout(type,pauseTime);
       } 
       else{
           setTimeout(type,typingSpeed)
       }
   }
   else{
        textElement.textContent = currentPhase.substring(0,charIndex+1)
        charIndex--;
        if (charIndex==0){
            isErasing = false;
            phraseIndex = (phraseIndex+1) % phrases.length;
            setTimeout(type,typingSpeed)
        }
        else{
            setTimeout(type,erasingSpeed);
        }
   }
}
type();