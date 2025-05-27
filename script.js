window.addEventListener('scroll', updateActiveLink);
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Evitar que el enlace se comporte de forma predeterminada (desplazamiento)
        e.preventDefault();
        
        // Obtener el ID de la sección correspondiente al enlace
        const targetSection = document.querySelector(link.getAttribute('href'));

        // Hacer scroll hacia la sección deseada
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Actualizar el estado activo
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

        // Verificar si la sección está parcialmente visible en la ventana
        if (sectionTop < window.pageYOffset + windowHeight / 2 && sectionBottom > window.pageYOffset + windowHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Remover la clase 'active' de todos los enlaces
    navLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Añadir la clase 'active' al enlace correspondiente
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

  // Toggle menu al hacer clic en el botón
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Oculta el menú al hacer clic en cualquier enlace
  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
});