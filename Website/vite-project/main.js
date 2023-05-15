import './style.css'
import javascriptLogo from './javascript.svg'

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const question = faq.querySelector('.question');
  const answer = faq.querySelector('.answer');
  
  question.addEventListener('click', () => {
    faq.classList.toggle('open');
  });
});

