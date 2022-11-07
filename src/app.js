// Assets
import favicon from './app/assets/logo-sq.svg';
import profile from './app/assets/profile.jpg';
import resume from './app/assets/Hyun_Dylan_resume.pdf';

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});