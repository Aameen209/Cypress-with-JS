describe("Handle Tabs", (() => {
    // Removing the target element the page will run on the same window because cypress is not redirected to another window
    it("Handle tab on the same Page", () => {

        cy.visit("https://the-internet.herokuapp.com/windows") // Visit the target URL
        // After removing the target attribute, the page is opened on the same window
        cy.get(".example >a").invoke('removeAttr', "target").click(); // removeAttr = to remove attribute which is target

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // Verify the URL of the new page after redirection
        cy.wait(3000); // Wait for 3 seconds (if necessary)

        // Operations
        cy.go('back'); // Navigate back to the parent tab
    })

    // Domain should be the same
    it("Visiting the URL after extracting the href value in URL", () => {

        cy.visit("https://the-internet.herokuapp.com/windows") // Visit the target URL
        cy.get(".example >a").then((e) => { // Locate the anchor tag
            // Extracting the href value and putting it in the URL
            let url = e.prop('href'); // href = hyper reference link
            cy.visit(url); // Navigate to the extracted URL
        })
        // Both URLs should be the same for this approach to work (domain should match)
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // Assertion to verify the new URL
        cy.wait(3000); // Wait for 3 seconds (if necessary)

        // Operations
        cy.go('back'); // Navigate back to the parent tab
    })
}))
