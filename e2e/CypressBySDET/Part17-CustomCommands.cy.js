//NOT WORKING URL

//Click on link using label
//Overwriting existing contains() commands
//Re-usable custom command

describe('Custom Commands',()=>{

    it("handling links",()=>{
        cy.visit('https://magento.softwaretestingboard.com/') // Navigate to Magento homepage

        // Direct method to click link (commented out)
        /*cy.get('.product-item-name>a[title="Argus All-Weather Tank"]').click()
        cy.get(".page-title>span").should('have.text','Argus All-Weather Tank')
        */

        // Using a custom Cypress command (defined in commands.js)
        cy.clickLink("Radiant Tee"); // Click on "Radiant Tee" using a custom command
        cy.get(".page-title>span").should('have.text','Radiant Tee'); // Verify product page title
    });

    it("over writing existing command",()=>{
        // It should pass for overwriting command in commands.js
        cy.visit('https://demo.nopcommerce.com/') // Navigate to NopCommerce demo site

        // Using a custom command to click on a product link
        cy.clickLink("APPLE MACBOOK BRO 13-inch");

        // Verify that the correct product page opens
        cy.get('.product-title>a[href="/apple-macbook-pro"]').should('have.text','Apple Macbook Pro 13-inch');

        // Not working (direct method, commented out)
        /*cy.get('.product-item-name>a[title="Argus All-Weather Tank"]').click()
        cy.get(".page-title>span").should('have.text','Argus All-Weather Tank')*/

        // Using custom command (commented out)
        // cy.clickLink("Radiant Tee");
        // cy.get(".page-title>span").should('have.text','Radiant Tee');
    });

    it("login command",()=>{
        cy.visit('https://demo.nopcommerce.com/') // Navigate to NopCommerce homepage

        // Perform login operation using a custom Cypress command
        cy.clickLink("Log in"); // Custom command for clicking login link
        cy.loginapp("testing@gmail.com","test123"); // Custom command for logging in with credentials

        // Verify successful login by checking the presence of "My account" link
        cy.get('.ico-account').should('have.text','My account');
    });

});
