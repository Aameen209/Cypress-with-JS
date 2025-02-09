describe ('XpathLocators', ()=> {

it('find no of tabs', ()=> {

    cy.visit("https://testforge.co/")
    cy.xpath("//ul[@id='menu-new-menu-bar']/li").should('have.length',6)

})
it('Cahined Xpath', ()=> {

    cy.visit("https://testforge.co/")
    cy.xpath("//ul[@id='menu-new-menu-bar']").xpath("./li").should('have.length',6)


})
})