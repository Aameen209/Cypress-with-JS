describe('XpathLocators', () => {

    it('find no of tabs', () => {
        // Visit the TestForge website
        cy.visit("https://testforge.co/")
        
        // Using XPath to locate elements:
        // XPath is a syntax for navigating through elements and attributes in an XML or HTML document.
        // Here, we are selecting all 'li' elements within the 'ul' element that has an id of 'menu-new-menu-bar'.
        // The assertion checks if the number of such elements is 6.
        cy.xpath("//ul[@id='menu-new-menu-bar']/li").should('have.length', 6)
    })

    it('Chained Xpath', () => {
        // Visit the TestForge website
        cy.visit("https://testforge.co/")
        
        // Chained XPath usage:
        // Instead of writing a full XPath expression again, we use chaining.
        // First, we select the 'ul' element, then apply another XPath search within it to find all 'li' elements.
        // This improves readability and maintainability.
        cy.xpath("//ul[@id='menu-new-menu-bar']").xpath("./li").should('have.length', 6)
    })

})
