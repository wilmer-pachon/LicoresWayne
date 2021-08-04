menu = $("nav ul");
toggle = $("nav ul .menu");

toggle.on("click", function() {
    if (menu.hasClass("active")) {
        menu.removeClass("active");
    } else {
        menu.addClass("active");
    }
})




function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});