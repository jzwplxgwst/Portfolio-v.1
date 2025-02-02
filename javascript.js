function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

window.onload = function () {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        document.querySelector("header").classList.remove("visible");
    } else {
        document.querySelector("header").classList.add("visible");
    }

    lastScroll = currentScroll; 
});