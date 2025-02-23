//NOT WORKING URL

//Click on lnk using label
//over writing existing contains() commands
// re-usable custom command


describe('Custom Commands',()=>{
    it("handling links",()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
        //direct without using custom command
        /*cy.get('.product-item-name>a[title="Argus All-Weather Tank"]').click()
        cy.get(".page-title>span").should('have.text','Argus All-Weather Tank')
        */

        //using custom command
        cy.clickLink("Radiant Tee");
        cy.get(".page-title>span").should('have.text','Radiant Tee');

    })
    it("over writing existing command",()=>{
        //It should pass for overwrinting command in command.js
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink("APPLE MACBOOK BRO 13-inch")
        cy.get('.product-title>a[href="/apple-macbook-pro"]').should('have.text','Apple Macbook Pro 13-inch')
        //Not working
        //direct without using custom command
        /*cy.get('.product-item-name>a[title="Argus All-Weather Tank"]').click()
        cy.get(".page-title>span").should('have.text','Argus All-Weather Tank')*/
        // //using custom command
        // cy.clickLink("Radiant Tee");
        // cy.get(".page-title>span").should('have.text','Radiant Tee');
        
    })
    it("login command",()=>{
        cy.visit('https://demo.nopcommerce.com/')
        //login
        //search product
        cy.clickLink("Log in"); //custom command = ?
        cy.loginapp("testing@gmail.com","test123");
        cy.get('.ico-account').should('have.text','My account');
        
    })
})