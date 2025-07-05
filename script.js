  // Preloader fade-out
        window.addEventListener("load", () => {
          const preloader = document.getElementById("preloader");
          preloader.classList.add("hidden");
          navbar.style.display = "flex";
        });


        const navbar = document.getElementById('navbar');
        navbar.style.display = "none";

const toggle = document.getElementById('menu-toggle');
const closed = document.getElementById('close-toggle');
const navLinks = document.getElementById('nav-links');


toggle.addEventListener('click', () => {      
    navLinks.classList.toggle('show');
    toggle.style.display = "none";
    toggle.style.transform = "scale(0)";
    toggle.style.transition = "all 0.3s ease";
    setTimeout(()=>{
        closed.style.display = "block";
        closed.style.transform = "scale(1)";
    },300);
    
});
closed.addEventListener('click', () => {      
    navLinks.classList.toggle('show');
    closed.style.display = "none";
    closed.style.transform = "scale(0)";
    closed.style.transition = "all 0.3s ease";
    setTimeout(()=>{
        toggle.style.display = "block";
        toggle.style.transform = "scale(1)";
    },300);
});

document.addEventListener('click', (e) => {
     // If menu is open and the click is outside the menu and toggle button
    if (navLinks.classList.contains('show') &&
     !navLinks.contains(e.target) &&
     !toggle.contains(e.target)) {
     navLinks.classList.toggle('show');
    
    closed.style.display = "none";
    closed.style.transform = "scale(0)";
    closed.style.transition = "all 0.3s ease";
    setTimeout(()=>{
        toggle.style.display = "block";
        toggle.style.transform = "scale(1)"
    },300);
    return;
}
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    })
});

document.addEventListener('scroll', () => {
    if (navLinks.classList.contains('show')){
        navLinks.classList.toggle('show');
    
        closed.style.display = "none";
        closed.style.transform = "scale(0)";
        closed.style.transition = "all 0.3s ease"
        setTimeout(()=>{
            toggle.style.display = "block";
            toggle.style.transform = "scale(1)"
        },300);
    }
})






    // Create an IntersectionObserver to animate flex-box items when they enter the viewport
    const observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting) {  // Check if the container is visible
               const items = entry.target.querySelectorAll('.service-card');
                items.forEach((item, index) => {
                    setInterval(() => {
                        item.classList.add('show'); // Add animation class
                    }, index * 100); // Stagger the animation
                });
                observer.unobserve(entry.target); // Stop observing after first trigger
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% is visible

      const gridContainer = document.querySelector('.services-grid');
    observer.observe(gridContainer);


    const ulineObserver = new IntersectionObserver((entries, observer) => {
        let entry =  entries[0];
        if (entry.isIntersecting) {
            const item = entry.target.querySelector('.uline');
            setTimeout(() => {
                item.classList.add('show');
            }, 150);
            observer.unobserve(entry.target);
        }
    }, {threshold: 0.1});

ulineObserver.observe(document.querySelector('.container'));


const careSectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const items = document.querySelectorAll('.content');
            items.forEach((item, index) => {
                setInterval(() => {
                    item.classList.add('show');
                }, index * 100);
            }); 
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.3});

careSectionObserver.observe(document.querySelector('.care-section'));


const btnObserver = new IntersectionObserver((entries, observer) => {
    let entry =  entries[0];
    if (entry.isIntersecting) {
        const item = entry.target.querySelector('.btn');
        setTimeout(() => {
            item.classList.add('show');
        }, 1000);
        observer.unobserve(entry.target);
    }
}, {threshold: 0.1});

btnObserver.observe(document.querySelector('.text-content'));




