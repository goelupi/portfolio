document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const scrollContainer = document.querySelector('.inner'); // スクロールするエリアを指定
      if (target && scrollContainer) {
          scrollContainer.scrollTo({ 
              top: target.offsetTop, 
              behavior: 'smooth' 
          });
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        document.querySelector(".scroll-area").scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

