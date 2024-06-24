const counters = document.querySelectorAll('.counters span');
const container = document.querySelector('.counters'); // Select a single container element

let activated = false;

window.addEventListener('scroll', () => {
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const pageOffset = window.pageYOffset;
console.log( pageOffset,'jhgwhg', +containerTop -window.innerHeight-500);
    // Check if the container is in view
    if (pageOffset > containerTop - window.innerHeight && !activated) {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function update() {
                const target = parseInt(counter.dataset.count, 10);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(update, 10);
                } else {
                    counter.innerText = target;
                }
            }
            update();
        });
        activated = true;
    } else if (pageOffset < containerTop - container.offsetHeight - 500||pageOffset===0 && activated) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});

