import { showSlides } from "../assets/scripts/utils.js";

export function generateProjectsPage() {
    return {
        title: 'Raidy Mustafid - Projects',
        content: `
            <h2>Personal & College Projects</h2>
          <div class="project-container">
            <div class="projects">
              <div class="image-container">
                <div class="images">
                  <div class="image-slide">
                      <img src="./assets/images/projects/rock-paper-scissors.png">
                  </div>
                  <div class="image-slide">
                    <img src="./assets/images/projects/etch-a-sketch.png">
                  </div>
                  <div class="image-slide">
                    <img src="./assets/images/projects/tic-tac-toe.png">
                  </div>
                  <a class="prev">&#10094;</a>
                  <a class="next">&#10095;</a>    
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
                    <svg class="icons" xmlns="http://www.w3.org/2000/svg" width="24" height"24" viewBox="0 0 24 24"><path d="M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M13 9V7H11V9H13M13 17V11H11V17H13Z" /></svg>
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
                    <svg class="icons" xmlns="http://www.w3.org/2000/svg" width="24" height"24" viewBox="0 0 24 24"><path d="M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M13 9V7H11V9H13M13 17V11H11V17H13Z" /></svg>
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
                    <svg class="icons" xmlns="http://www.w3.org/2000/svg" width="24" height"24" viewBox="0 0 24 24"><path d="M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M13 9V7H11V9H13M13 17V11H11V17H13Z" /></svg>
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
            const slides = document.getElementsByClassName("image-slide");
            const infos = document.getElementsByClassName("card-info");
            const dots = document.querySelectorAll('.demo');
            let slideIndex = 1;

            prev.addEventListener('click', function() {
                slideIndex = showSlides(slideIndex - 1, {slides, infos, dots});
            });

            next.addEventListener('click', function() {
                slideIndex = showSlides(slideIndex + 1, {slides, infos, dots});
                console.log("next")
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    slideIndex = showSlides(index + 1, {slides, infos, dots});
                });
            });

            slideIndex = showSlides(slideIndex, {slides, infos, dots});
        }
    }
}