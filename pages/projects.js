import { showSlides, moveSlide } from "../assets/scripts/utils.js";

export function generateProjectsPage() {
    return {
        title: 'Raidy Mustafid - Projects',
        content: `
            <h2>Personal & College Projects</h2>
          <div class="container">
            <div class="projects">
              <div class="image-container">
                <div class="images">
                  <div class="mySlides">
                      <img src="./assets/images/projects/rock-paper-scissors.png">
                  </div>
                  <div class="mySlides">
                    <img src="./assets/images/projects/etch-a-sketch.png">
                  </div>
                  <div class="mySlides">
                    <img src="./assets/images/projects/tic-tac-toe.png">
                  </div>
                  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                  <a class="next" onclick="plusSlides(1)">&#10095;</a>    
                </div>
                <div class="row">
                  <div class="column">
                    <img class="demo cursor" src="./assets/images/projects/rock-paper-scissors.png" style="width:100%" alt="Rock Paper Scissors">
                  </div>
                  <div class="column">
                    <img class="demo cursor" src="./assets/images/projects/etch-a-sketch.png" style="width:100%" alt="Etch-a-Sketch">
                  </div>
                  <div class="column">
                    <img class="demo cursor" src="./assets/images/projects/tic-tac-toe.png" style="width:100%" alt="TicTacToe">
                  </div>
                </div>
              </div>
            </div>
            <div class="infos">
              <div class="card-container">
                <div class="card-info">
                  <div class="title-info"">
                    <img src="./assets/images/icons/information-box.svg" alt="info">
                    <h2>Rock Paper Scissors</h2>
                  </div>
                  <div class="project-info">
                    <p>Simple Rock Paper Scissors game made with HTML, CSS, and JavaScript</p>
                  </div>
                  <div class="buttons-info">
                    <a href="#" class="btn-info source-code">Source Code</a>
                    <a href="#" class="btn-info visit-site">Visit Site</a>
                  </div>
                </div>
                <div class="card-info">
                  <div class="title-info">
                    <img src="./assets/images/icons/information-box.svg" alt="info">
                    <h2>Etch-a-Sketch</h2>
                  </div>
                  <div class="project-info">
                    <p>Check this out</p>
                  </div>
                  <div class="buttons-info">
                    <a href="#" class="btn-info">Source Code</a>
                    <a href="#" class="btn-info">Visit Site</a>
                  </div>
                </div>
                <div class="card-info">
                  <div class="title-info"">
                    <img src="./assets/images/icons/information-box.svg" alt="info">
                    <h2>TicTacToe</h2>
                  </div>
                  <div class="project-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloremque? Aut officia perferendis dolores, quos eos tenetur ad autem minima sunt animi doloremque quisquam enim architecto ab pariatur nemo ipsum?</p>
                  </div>
                  <div class="buttons-info">
                    <a href="#" class="btn-info">Source Code</a>
                    <a href="#" class="btn-info">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        DOMSetup: function() {
            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');
            const dots = document.querySelectorAll('.demo');

            prev.addEventListener('click', function() {
                moveSlide(-1);
            });

            next.addEventListener('click', function() {
                moveSlide(1);
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    showSlides(index + 1);
                });
            });

            showSlides(1);
        }
    }
}