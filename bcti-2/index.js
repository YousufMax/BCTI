 const footer = document.querySelector('footer');
        footer.style.opacity = 0;
        footer.style.transform = 'translateY(50px)';
        window.addEventListener('scroll', () => {
            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (footerTop < windowHeight) {
                footer.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                footer.style.opacity = 1;
                footer.style.transform = 'translateY(0)';
            }
        });
     const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });