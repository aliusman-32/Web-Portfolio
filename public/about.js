const phrases = ["I'm Ali Usman, a passionate programmer and aspiring Machine Learning and AI developer. I enjoy building intelligent systems, solving real-world problems, and continuously exploring new technologies. With a solid foundation in both frontend and backend development, I'm focused on creating impactful digital experiences and advancing in the field of artificial intelligence."]
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
   
    textElement.textContent = currentPhase.substring(0,charIndex+1);
    charIndex++;
    if (charIndex == currentPhase.length){
        setTimeout(type,pauseTime);
        textElement.classList.remove("typing")
        textElement.classList.add("completed")
    } 
    else{
        setTimeout(type,typingSpeed)
    }
   
}
type();