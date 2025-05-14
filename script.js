


const toggle = document.getElementById('menu-toggle');
const closed = document.getElementById('close-toggle');
const navLinks = document.getElementById('nav-links');


toggle.addEventListener('click', () => {      
    navLinks.classList.toggle('show');
    toggle.style.display = "none";
    toggle.style.transform = "scale(0)";
    toggle.style.transition = "all 0.3s ease"
    setTimeout(()=>{
        closed.style.display = "block";
        closed.style.transform = "scale(1)";
    },300);
    
});
closed.addEventListener('click', () => {      
    navLinks.classList.toggle('show');
    closed.style.display = "none";
    closed.style.transform = "scale(0)";
    closed.style.transition = "all 0.3s ease"
    setTimeout(()=>{
        toggle.style.display = "block";
        toggle.style.transform = "scale(1)"
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
    closed.style.transition = "all 0.3s ease"
    setTimeout(()=>{
        toggle.style.display = "block";
        toggle.style.transform = "scale(1)"
    },300);

}
});




