function renderPage(page) {
    document.querySelector(".middle").innerHTML = page.content;
    document.title = page.title;
}

const generateAboutPage = () => {
    return {
        title: 'Raidy Mustafid - About',
        content: `
            <br>
            <h1>HI, I'M RAIDY MUSTAFID</h1>
            <p>A recent graduate from Pertamina University with a fervent enthusiasm for both learning and imparting knowledge, particularly in the realms of web programming and cybersecurity. Eager to embark on a journey of exploration and contribute meaningfully to these dynamic fields.</p>
            <button onclick="renderPage(generateProjectsPage())" id="show-projects"><span>Check My Projects</span></button>
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
    }
}

const generateProjectsPage = () => {
    return {
        title: 'Raidy Mustafid - Projects',
        content: `
            <h2>Personal & College Projects</h2>
            <div class="slide">
                <a href="https://raidymr.github.io/tic-tac-toe/">
                    <img src="./assets/images/projects/tic-tac-toe.png">
                </a>
            </div>
        `
    }
}

const generateCertificatesPage = () => {
    return {
        title: 'Raidy Mustafid - Certificates',
        content: `
            <br><br>
            <h2>Certificates</h2>
            <p>Coming soon...</p>
            <p> Check my certificates on my LinkedIn profile: <a href="https://www.linkedin.com/in/raidy-mustafid-35a4a21a4/">Raidy Mustafid</a></p>
        `
    }
}

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