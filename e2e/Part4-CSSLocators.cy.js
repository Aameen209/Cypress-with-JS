describe('CSSLocators',() => {

it("csslocators", ()=> {

cy.visit("https://testautomationpractice.blogspot.com/")

cy.get("#Wikipedia1_wikipedia-search-input").type("Test") //tag id 

cy.get("input.wikipedia-search-button").click() //tag class
cy.get("button.start[name='start']").click() //tag class and attribute 
cy.get(".wikipedia-search-results-header").contains("Search results") //Assertions 

})

})