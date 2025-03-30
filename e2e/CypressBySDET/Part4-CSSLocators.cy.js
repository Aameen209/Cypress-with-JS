/* global cy, Cypress */

describe('CSSLocators', () => {

    it("csslocators", () => {
        // Visit the test automation practice website
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Enter 'Test' into the Wikipedia search input field (using tag ID)
        cy.get("#Wikipedia1_wikipedia-search-input").type("Test")
        
        // Click on the Wikipedia search button (using tag class)
        cy.get("input.wikipedia-search-button").click()
        
        // Click on the start button (using tag class and attribute)
        cy.get("button.start[name='start']").click()
        
        // Verify that the search results header contains 'Search results' (Assertions)
        cy.get(".wikipedia-search-results-header").contains("Search results")
    })

})
