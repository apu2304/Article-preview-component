const shareIcons = document.getElementsByClassName('circle');
  
Array.from(shareIcons).forEach(shareIcon => {
      shareIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the document
  
        const tip = shareIcon.querySelector('.tip');
        tip.classList.toggle('active');
      });
});
  
    // Hide the tooltip when clicking outside of it
document.addEventListener('click', (event) => {
    Array.from(shareIcons).forEach(shareIcon => {
        const tip = shareIcon.querySelector('.tip');
        if (!shareIcon.contains(event.target) && !tip.contains(event.target)) {
          tip.classList.remove('active');
        }
    });
});

  
