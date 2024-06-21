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
                    <p>
                      I created a simple, fun and interactive Rock, Paper, Scissors game using basic HTML for structure, CSS for styling, and JavaScript for game logic, following the instructions from The Odin Project.
                      The game is first to 5 rounds and the player can choose between Rock, Paper, or Scissors.
                    </p>
                  </div>
                  <div class="buttons-info">
                    <a href="https://github.com/RaidyMR/rock-paper-scissors" class="btn-info source-code">Source Code</a>
                    <a href="https://raidymr.github.io/rock-paper-scissors/" class="btn-info visit-site">Visit Site</a>
                  </div>
                </div>
                <div class="card-info">
                  <div class="title-info">
                    <img src="./assets/images/icons/information-box.svg" alt="info">
                    <h2>Etch-a-Sketch</h2>
                  </div>
                  <div class="project-info">
                    <p>
                      For the Etch-a-Sketch project from The Odin Project, I created a dynamic web application using basic HTML and CSS to structure and style the interface, with features such as a color picker, adjustable grid size, erase capability, and clear functionality, all powered by JavaScript manipulating the DOM for seamless interactivity
                    </p>
                  </div>
                  <div class="buttons-info">
                    <a href="https://github.com/RaidyMR/etch-a-sketch" class="btn-info">Source Code</a>
                    <a href="https://raidymr.github.io/etch-a-sketch/" class="btn-info">Visit Site</a>
                  </div>
                </div>
                <div class="card-info">
                  <div class="title-info"">
                    <img src="./assets/images/icons/information-box.svg" alt="info">
                    <h2>TicTacToe</h2>
                  </div>
                  <div class="project-info">
                    <p>
                      For the TicTacToe project from The Odin Project, I designed a responsive web-based game using HTML for structure, CSS for styling, and JavaScript for functionality. The game offers options to restart, switch between 'X' and 'O', and includes two AI modes: a basic bot making random moves and a strategic AI employing the Minimax Algorithm, implemented using both prototype and class-based paradigms.
                    </p>
                  </div>
                  <div class="buttons-info">
                    <a href="https://github.com/RaidyMR/tictactoe" class="btn-info">Source Code</a>
                    <a href="https://raidymr.github.io/tictactoe/" class="btn-info">Visit Site</a>
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