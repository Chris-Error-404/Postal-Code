// JavaScript to make region boxes appear on scroll
document.addEventListener('DOMContentLoaded', function () {
    const regionBoxes = document.querySelectorAll('.region-box, .region-box2, .region-box3');

    function checkVisibility() {
        regionBoxes.forEach(function (box) {
            const boxPosition = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxPosition < windowHeight - 50) { // Trigger when box is near bottom of window
                box.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run it once to check for already visible boxes
});



