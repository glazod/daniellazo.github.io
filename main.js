// Future interactivity can be added here
console.log('Homepage JS loaded');

/*hamburger*/
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    const icon = document.getElementById("hamburger");
    menu.classList.toggle("show");
    icon.textContent = menu.classList.contains("show") ? "✖" : "☰";
  }
  