//Not able to FInd anywebsite to execute i frame code
import 'cypress-iframe'
describe('Handling I-Frames',()=>{

    it("approach1 Single I frame",()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")

        const iframe=cy.get("#singleframe")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("welcome{ctrl+a}"); //ctrl+a will select the test
        // cy.get("[aria-label='Bold]").click(); // this will click on Bold button after selecting the test
    })
    it("approach 3- by Use custom command ",()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")

        cy.getIframe('#singleframe').clear().type("welcome{ctrl+a}"); //ctrl+a will select the test
        // cy.get("[aria-label='Bold]").click(); // this will click on Bold button after selecting the test
    })
    it.only("approach 3 - by using cypess-iframe plugin ",()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")
        cy.frameLoaded('#singleframe'); //frame loaded comes from iframe plugin and it's load the frame
        cy.iframe('#singleframe').clear().type("Welcome"); //clear the frame and type the frame
        
    })    
    
})