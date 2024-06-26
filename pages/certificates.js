import { showSlides } from "../assets/scripts/utils.js";

export function generateCertificatesPage() {
    return {
        title: 'Raidy Mustafid - Certificates',
        content: `
            
            <h2>Certificates</h2>
            <div class="certificate-slider">
              <div class="certificate-slide">
                <img src="../assets/images/certificates/sertifikat_course_163_1145124_190922200923-1.jpg" alt="Certificate" class="card__image">
                <div class="certificate-slide__content">
                  <p class="certificate-slide__title">Project Name</p>
                  <p class="certificate-slide__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <button class="certificate-slide__button">View Certificate</button>
                </div>
              </div>
              <div class="certificate-slide">
                <img src="../assets/images/certificates/sertifikat_course_237_1145124_010922092557-1.jpg" alt="Certificate" class="certificate-slide__image">
                <div class="certificate-slide__content">
                  <p class="certificate-slide__title">Project Name</p>
                  <p class="certificate-slide__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <button class="certificate-slide__button">View Certificate</button>
                </div>
              </div>

              <a class="prev">&#10094;</a>
              <a class="next">&#10095;</a>    
            </div>
        `,
        DOMSetup: function() {
          const cards = document.querySelectorAll(".certificate-slide");
          const prev = document.querySelector('.prev');
          const next = document.querySelector('.next');
          let slideIndex = 1;

          prev.addEventListener('click', function() {
            slideIndex = showSlides(slideIndex - 1, {slides: cards, infos: cards, dots: cards});
          });

          next.addEventListener('click', function() {
            slideIndex = showSlides(slideIndex + 1, {slides: cards, infos: cards, dots: cards});
          });
          
          slideIndex = showSlides(slideIndex, {slides: cards, infos: cards, dots: cards});
      }
    }
    
}