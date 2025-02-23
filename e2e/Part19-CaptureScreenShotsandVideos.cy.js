describe('My suite',()=>{
    it('Capture Screenshots',()=>{
    cy.visit('https://demo.opencart.com/')
    cy.screenshot('Homepage');  
    cy.wait(5000);
    cy.get('#logo>a>img').screenshot('logo');

    })  
    it.only('Automatically Capture Screenshots',()=>{ //Automatically capture screenshot on failure - only when executing through CLI
        cy.visit('https://demo.opencart.com/')
     
        cy.get('#narbar-menu>ul>li:nth-child(2)').click(); //camera page
        cy.get("body main li:nth-child(8)").should('have.text',"MP3 Players");
        })  
})
