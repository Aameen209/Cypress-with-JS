/// <reference types="cypress" />

// 'describe' defines a test suite - a group of related tests
// Used to logically group test cases together

describe("Check UI Elements", () => {

    // 'it' defines an individual test case
    it("Checking radio buttons", () => {
        // 'cy.visit()' navigates to the given URL
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Using CSS selectors to locate elements
        // 'cy.get()' is used to select elements based on their attributes
        cy.get("input#female").should('be.visible')  /// be.visible checks if the Female radio button is visible
        // Example: input#female - This is a CSS selector using tag and ID
        cy.get("input#male").should('be.visible')  /// be.visible checks if the Male radio button is visible
        // Example: input#male - This is a CSS selector using tag and ID
        
        // Selecting a radio button using 'check()' method
        cy.get("input#male").check().should('be.checked')  /// Select Male and confirm it is checked
        cy.get("input#female").should('not.be.checked')  /// Ensure Female is not checked
        
        // Selecting another radio button
        cy.get("input#female").check().should('be.checked')  /// Select Female and confirm it is checked
        cy.get("input#male").should('not.be.checked')  /// Ensure Male is not checked
    })

    it("Checking checkboxes", () => {
        // Navigating to the webpage
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Checking visibility of a checkbox
        cy.get("input#sunday").should('be.visible')  /// be.visible checks if the Sunday checkbox is visible
        // Example: input#sunday - This is a CSS selector using tag and ID
        
        // Selecting a single checkbox using 'check()' method
        cy.get("input#sunday").check().should('be.checked') /// Selecting single checkbox
        
        // Unselecting a checkbox using 'uncheck()' method
        cy.get("input#sunday").uncheck().should('not.be.checked') /// Unselecting single checkbox
        
        // Selecting all checkboxes using a common CSS selector
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')  /// Selecting all checkboxes
        // Example: input.form-check-input[type='checkbox'] - This is a CSS selector using class and attribute
        
        // Unselecting all checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')  /// Unselecting all checkboxes
        
        // Selecting the first and last checkbox among multiple checkboxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked') /// Select first checkbox
        // Example: .first() - This method is used to select the first matching element
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked') /// Select last checkbox
        // Example: .last() - This method is used to select the last matching element
        
        // Ensuring the first checkbox remains visible after selection
        cy.get("input.form-check-input[type='checkbox']").first().check()
            .and('be.visible') /// Checking if first checkbox is still visible after checking
    })
})
