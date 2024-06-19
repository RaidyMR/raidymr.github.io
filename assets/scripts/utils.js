function renderPage(page, DOMElement) {
    document.querySelector(".middle").innerHTML = page.content;
    document.title = page.title;
    
    // Add event listener if there is any
    if (page.event && page.handler) {
        document.querySelector(page.query).addEventListener(page.event, page.handler);
    }
}

export {
    renderPage
}