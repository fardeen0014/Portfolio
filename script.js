const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
// contact me animation//
// Get the "get in touch" heading element
// Get the "get in touch" heading element
const heading = document.querySelector(".heading");

// Set the initial position of the heading
let position = 0;

// Define the animation function
function animate() {
  // Increment the position
  position += 5;

  // Check if the position has gone past the top or bottom of its range
  if (position > 20) {
    position = -20;
  }

  // Set the position of the heading
  heading.style.transform = `translateY(${position}px)`;

  // Call the animation function again in 50 milliseconds
  setTimeout(animate, 50);
}

// Call the animation function to start the animation
animate();

// Get all the boxes on the page
const boxes = document.querySelectorAll('.resume .col .box');

// Add an event listener to each box
boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    // On mouseenter, animate the box by scaling it up and adding a drop shadow
    box.style.transform = 'scale(1.05)';
    box.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.1)';
  });

  box.addEventListener('mouseleave', () => {
    // On mouseleave, remove the animation by resetting the transform and drop shadow
    box.style.transform = 'scale(1)';
    box.style.boxShadow = 'var(--box-shadow)';
  });
});

// Get all the skill elements
const skillElems = document.querySelectorAll('.skill');

// Add a mouseover event listener to each skill element
skillElems.forEach((elem) => {
  elem.addEventListener('mouseover', () => {
    // On mouseover, add a class to the element to trigger an animation
    elem.classList.add('animated');
    
    // Remove the class after a short delay to allow the animation to complete
    setTimeout(() => {
      elem.classList.remove('animated');
    }, 1000);
  });
});





