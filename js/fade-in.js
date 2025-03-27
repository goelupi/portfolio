//fade-in

const observer = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => { 
  if (entry.intersectionRatio > 0.1) { // 10%表示されたら 
  entry.target.classList.add('fade-in'); 
  observer.unobserve(entry.target); // 一度発火したら監視解除 
  }
   }); 
  }, { threshold: 0.3 }); 
  
  const elements = document.querySelectorAll('.animate'); 
  elements.forEach((el) => observer.observe(el));