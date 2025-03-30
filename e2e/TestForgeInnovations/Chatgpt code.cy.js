describe('Contact Today', () => {
    it('Submit Enquiry Form', () => {
        cy.visit("https://testforge.co/about-us/");

        // URL Verification ✅
        cy.url().should('include', 'testforge');

        // Click on Contact Today button
        cy.get("button[data-id='1214']")
            .should('exist') // Check if button exists
            .should('be.visible') // Check visibility
            .first() // Select First Element Only
            .click();

        // Enquiry Now Button ✅
        cy.get("input[value='Enquiry now']")
            .should('exist')
            .should('be.visible')
            .click();

        // Fill Form
        cy.get("input[name='your-name']").type('Mohd Aameen Khan');
        cy.get("input[name='your-email']").type('aameenkhan544@gmail.com');
        cy.get("input[name='your-phone']").type('+91-7531917202');
        cy.get("textarea[name='your-message']").type('TESTING!!!');

        // Submit Form
        cy.get("input[value='Enquiry now']").click();

        // Success Message Verification ✅
        cy.get(".wpcf7-response-output")
            .should('be.visible')
            .should('have.text', 'Thank you for your message. It has been sent.');

        // Close Dialog ✅
        cy.get("button[aria-label='Close this dialog']")
            .should('exist')
            .should('be.visible')
            .click();
    });
    it.only('Solution',()=>{
        cy.viewport(1920, 1080); // Adjust to a larger resolution

        cy.visit("https://testforge.co/");
        

        cy.get("#menu-item-14071").trigger('mouseover',{force:true});
        cy.get('#menu-item-14071>ul>li').should('have.length',7);
        cy.get('#menu-item-14071>ul>li').first().click({force:true});
    })
});
    