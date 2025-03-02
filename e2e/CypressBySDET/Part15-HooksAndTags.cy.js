// before = Executes once before all tests in the describe block
// after = Executes once after all tests in the describe block
// beforeEach = Executes before each 'it' block
// afterEach = Executes after each 'it' block


//Hooks =
//Tags =
describe('MytestSuuite', () => {
    before(() => {
        cy.log("**** Launch App ****")
    })
    after(() => {
        cy.log("*** Close App ***")
    })
    beforeEach(() => {
        cy.log("**** Login ****")
    })
    afterEach(() => {
        cy.log("*** Logout ***")
    })

    it('Search', () => {  // Executes test for searching
        cy.log("**** Searching ****")
    })
    
    it.skip('Advanced search', () => {  // Executes test for advanced search
        cy.log("**** Advanced Search ****")
    })
    
    it.only('listing Products', () => {  // Executes test for listing products
        cy.log("**** listing products ****")
    })
})
