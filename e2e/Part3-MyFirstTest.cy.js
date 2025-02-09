describe('My First Test', () => {

    it('Positive test', () => {
    
        cy.visit("https://www.orangehrm.com/")
    
        cy.title().should('eq','Human Resources Management Software | OrangeHRM')
    })

    it('Negative Test', () => {
    
        cy.visit("https://www.orangehrm.com/")
        
        cy.title().should('eq','Orange')
    })
    
    it('Visits Cypress Example Page', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  })

//     it('test1', () => {
//         //STEPS  
//      })

//   })


//   describe('My First Test', function() {
//     it('Does not do much!', function() {
//       expect(true).to.equal(true)
//     })
  })