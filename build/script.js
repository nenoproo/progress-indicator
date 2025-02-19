let indicator = document.getElementById('indicator');
let main = document.querySelector('main');

function updateProgressBar() {
    let mainHeight = main.scrollHeight - main.clientHeight; // scrollable height of main
    let scrollPosition = main.scrollTop; // how far we've scrolled from the top
    let progress = scrollPosition / mainHeight; // calculate the progress
    let progressPercentage = (progress * 100 + "%"); // turn progress into a percentage пошто ќе ни треба % за ширината на индикаторот
    
    indicator.style.setProperty('width', progressPercentage); // Set width to new progress, значи вредноста на ширината е процентот
};

// Each time on scroll, recalculate the progress
main.addEventListener('scroll', updateProgressBar);