// Function to handle the scroll event
function handleScroll() {
    if (window.scrollY > 10) {
      document.querySelector('.back').style.top = '0px';
      document.querySelector('.navbar').style.background='var(--g)';
      
    } else {
      document.querySelector('.back').style.top = '-60px';
      document.querySelector('.navbar').style.background='none';
    }
  }

  
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");

const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const nav6 = document.querySelector("#nav-6");
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6];
const gridDiv = document.querySelector(".grid");

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}


// Function to handle the navigation toggle
function toggleNav() {  
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");

    // Set .back style to top: 0px
    document.querySelector('.back').style.top = '0px';
    
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");

   
  }
  
   if(hamburgerMenu.classList.contains("active")){
    document.querySelector('.back').style.top = '0px';
    console.log("sastisih")
    }else{
    document.querySelector('.back').style.top = '-60px';
    }
}


// // Event listener for hamburger menu click
hamburgerMenu.addEventListener("click", toggleNav);





// Hover event listener for grid div
gridDiv.addEventListener("mouseenter", () => {
  document.querySelector('.back').style.top = '0px';
});

gridDiv.addEventListener("mouseleave", () => {
  handleScroll(); // Revert back to scrollY function
});

// Scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial call to handleScroll to set initial state based on scroll position
handleScroll();
