window.addEventListener('scroll', updateActiveLink);
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Evitar que l'enllaç es comporti de manera predeterminada
        e.preventDefault();
        
        // Obtenim la id de la secció a la que volem fer scroll
        const targetSection = document.querySelector(link.getAttribute('href'));

        // Fer scroll cap a la secció destijada
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Actualitzar l'estat actiu dels enllaços després del scroll
        updateActiveLink();
    });
});

function updateActiveLink() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        const sectionBottom = sectionTop + section.offsetHeight;
        const windowHeight = window.innerHeight;

        // Verificar si la secció està completament visible en la finestra (considerant el centre de la pantalla)
        if (sectionTop < window.pageYOffset + windowHeight / 2 && sectionBottom > window.pageYOffset + windowHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Treure la classe 'active' de tots els enllaços
    navLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Afegir la classe 'active' a l'enllaç corresponent a la secció actual
    if (currentSection) {
        const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    const links = nav.querySelectorAll("a");

    // Toggle menu al fer clic al botó de menú
    toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

    // Oculta el menú al fer clic en qualsevol enllaç
    links.forEach(link => {
        link.addEventListener("click", () => {
        nav.classList.remove("show");
        });
    });

    // Pestanyes de projectes
    // Seleccionem tots els botons de pestanya i els continguts de cada pestanya
    const tabs = document.querySelectorAll(".project-tab");
    const tabContents = document.querySelectorAll(".project-tab-content");

    // Per cada botó de pestanya, escoltem el clic
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
        // Desactivem totes les pestanyes i tots els continguts
        tabs.forEach(t => t.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        // Activem la pestanya que s'ha clicat
        tab.classList.add("active");

        // Busquem el div de contingut que correspon a aquesta pestanya i l'activem
        const target = document.getElementById("tab-" + tab.dataset.tab);
        if (target) {
            target.classList.add("active");
        }
        });
    });
});