// Optimized JavaScript for Section Animations
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Check if the section is in the viewport
        if (sectionTop < windowHeight && sectionBottom > 0) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});