// go()
describe('My Suite',()=>{

    it('Navigation',()=>{

        // Visit the OpenCart demo homepage
        cy.visit('https://demo.opencart.com/')  

        // Validate the page title using an assertion
        cy.title().should('eq','Your Store') // Homepage

        // Click on the "Cameras" menu link
        cy.get('#narbar-menu>ul>li:nth-child(7)>a').click(); 
        // Locator Used: **CSS Selector** (ID + child combinators)
        // Explanation: `#navbar-menu` (ID) > `ul` (unordered list) > `li:nth-child(7)` (7th list item) > `a` (anchor link)

        // Validate the "Cameras" page heading text
        cy.get('#content>h2').should('have.text',"Cameras"); // Cameras Page
        // Locator Used: **CSS Selector** (ID + child)
        // Explanation: `#content` (ID) > `h2` (heading tag inside the content section)

        cy.go('back'); // Go back to the homepage <--
        cy.title().should('eq','Your Store');

        cy.go('forward'); // Navigate forward -->
        cy.get('#content>h2').should('have.text',"Cameras"); // Cameras Page

        cy.reload(); // Reload the page

        cy.go(-1); // Alternative method for going back
        cy.title().should('eq','Your Store') // Homepage

        cy.go(1); // Alternative method for going forward
        cy.get('#content>h2').should('have.text',"Cameras"); // Cameras Page

    });

});
