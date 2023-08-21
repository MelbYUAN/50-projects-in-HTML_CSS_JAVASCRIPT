const progress = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")
const pre = document.getElementById("pre")
const next = document.getElementById("next")

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        next.disabled = true;
        currentActive = circles.length
    } else {
        addActive()
    }

})

pre.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        pre.disabled = true;
        currentActive = 1
    } else {
        addActive()
    }
})


const addActive = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }

    });

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 2) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        pre.disabled = true
 
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        pre.disabled = false
        next.disabled = false
    }
}

