// Fades cards in when scrolling
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
