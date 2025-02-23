// go()
describe('My Suite',()=>{
    it('Navigation',()=>{
        cy.visit('https://demo.opencart.com/')  
        cy.title().should('eq','Your Store') //Homepage
        cy.get('#narbar-menu>ul>li:nth-child(7)>a').click();
        cy.get('#content>h2').should('have.text',"Cameras"); //cameras Page

        cy.go('back'); //go back to gome <--
        cy.title().should('eq','Your Store');

        cy.go('forward'); //forwar page -->
        cy.get('#content>h2').should('have.text',"Cameras"); //cameras Page

        cy.reload(); //reload the page

        cy.go(-1); //Alterntive of back
        cy.title().should('eq','Your Store') //Homepage

        cy.go(1); //Alternative of forward
        cy.get('#content>h2').should('have.text',"Cameras"); //cameras Page

      
    })
})