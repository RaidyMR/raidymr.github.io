

const generateAboutPage = () => {
    return {
        title: 'My Portfolio - About',
        content: `
            <h2>About Me</h2>
            <p>A recent graduate from Pertamina University with a fervent enthusiasm for both learning and imparting knowledge, particularly in the realms of web programming and cybersecurity. Eager to embark on a journey of exploration and contribute meaningfully to these dynamic fields.</p>
        `,
    }
}

const generateProjectsPage = () => {
    return {
        title: 'My Portfolio - Projects',
        content: `
            <h2>Personal & College Projects</h2>
            <div class="slide">
                <a href="https://raidymr.github.io/tic-tac-toe/">
                    <img src="./assets/images/project/tic-tac-toe.png">
                </a>
            </div>
        `
    }
}

const generateCertificatesPage = () => {
    return {
        title: 'My Portfolio - Certificates',
        content: `
            <h2>Certificates</h2>
            <p>Coming soon...</p>
            <p> Check my certificates on my LinkedIn profile: <a href="https://www.linkedin.com/in/raidy-mustafid-35a4a21a4/details/certifications/">Raidy Mustafid</a></p>
        `
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("#mainContent");
    const aboutButton = document.querySelector("#about");
    const projectsButton = document.querySelector("#projects");
    const certificatesButton = document.querySelector("#certificates");
    
    function renderPage(page) {
        mainContent.innerHTML = page.content;
        document.title = page.title;
    }
    
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