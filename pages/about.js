import { renderPage } from '../assets/scripts/utils.js';
import { generateProjectsPage } from './projects.js';

export function generateAboutPage(){
    return {
        title: 'Raidy Mustafid - About',
        content: `
            <br>
            <h1>HI, I'M RAIDY MUSTAFID</h1>
            <p>A recent graduate from Pertamina University with a fervent enthusiasm for both learning and imparting knowledge, particularly in the realms of web programming and cybersecurity. Eager to embark on a journey of exploration and contribute meaningfully to these dynamic fields.</p>
            <button id="show-projects"><span>Check My Projects</span></button>
            <h2>VISIT ME AT:</h2>
            <ul>
                <li><a href="https://www.linkedin.com/in/raidy-mustafid-35a4a21a4/">
                    <img class="icons" src="./assets/images/icons/iconmonstr-linkedin-3.svg" alt="LinkedIn" width="50" height="50">
                </a></li>
                <li><a href="https://github.com/RaidyMR">
                    <img class="icons" src="./assets/images/icons/iconmonstr-github-1.svg" alt="GitHub" width="50" height="50">
                </a></li>
            </ul>
        `,
        DOMSetup: function() {
            document.getElementById('show-projects').addEventListener('click', function(){
                renderPage(generateProjectsPage());
            });
        }
    }
}