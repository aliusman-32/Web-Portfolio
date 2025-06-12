window.onload = function(){
    const progressContainers = document.querySelectorAll("[data-percent]");
    progressContainers.forEach(container =>
    {
        const percent = parseInt(container.dataset.percent);
        const circle = container.querySelector(".progress-ring");
        const percentText = container.querySelector(".percent-text");
        const radius = 50;
        const circumference = 2*Math.PI*radius;
        const offset = circumference -(percent/100)*circumference
        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        setTimeout(() => {
        circle.style.transition = "stroke-dashoffset 2s ease";
        circle.style.strokeDashoffset = offset;
        }, 300);
        percentText.textContent = percent; 
    }
    )
}
