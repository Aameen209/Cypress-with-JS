describe('My First Test', () => {

  it('Positive test', () => {
      // Visit the OrangeHRM website
      cy.visit("https://www.orangehrm.com/")
  
      // Verify the page title matches the expected value
      cy.title().should('eq','Human Resources Management Software | OrangeHRM')
  })

  it('Negative Test', () => {
      // Visit the OrangeHRM website
      cy.visit("https://www.orangehrm.com/")
      
      // Intentionally checking for an incorrect title to simulate a negative test
      cy.title().should('eq','Orange')
  })
  
  it('Visits Cypress Example Page', () => {
      // Visit the Cypress example page
      cy.visit('https://example.cypress.io');
      
      // Click on the element containing text 'type'
      cy.contains('type').click();
      
      // Verify the URL contains '/commands/actions'
      cy.url().should('include', '/commands/actions');
  })

  //     it('test1', () => {
  //         //STEPS  
  //      })

})

//   describe('My First Test', function() {
//     it('Does not do much!', function() {
//       expect(true).to.equal(true)
//     })
//   })
