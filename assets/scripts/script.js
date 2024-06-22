import { generateAboutPage } from '../../pages/about.js';
import { generateProjectsPage } from '../../pages/projects.js';
import { generateCertificatesPage } from '../../pages/certificates.js';

import { renderPage } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    const aboutButton = document.querySelector("#about");
    const projectsButton = document.querySelector("#projects");
    const certificatesButton = document.querySelector("#certificates"); 
    
    aboutButton.addEventListener("click", () => {
        renderPage(generateAboutPage());
    });
    
    projectsButton.addEventListener("click", () => {
        renderPage(generateProjectsPage());
    });

    certificatesButton.addEventListener("click", () => {
        renderPage(generateCertificatesPage());
    });
    
    renderPage(generateAboutPage());
    }
);