describe('My suite',()=>{

    it('Capture Screenshots',()=>{

        cy.visit('https://demo.opencart.com/') // Navigate to the OpenCart demo site

        cy.screenshot('Homepage');  // Take a full-page screenshot and save it as "Homepage"

        cy.wait(5000); // Wait for 5 seconds before taking another screenshot

        cy.get('#logo>a>img').screenshot('logo'); 
        // Capture a screenshot of the logo only
        // Locator Used: **CSS Selector** (ID + anchor + image)
        // Explanation: `#logo` (ID) > `a` (anchor) > `img` (image inside the anchor)

    });  

    it.only('Automatically Capture Screenshots',()=>{ 
        // Automatically captures a screenshot on failure, but only when executing through CLI

        cy.visit('https://demo.opencart.com/') // Open the OpenCart homepage

        cy.get('#narbar-menu>ul>li:nth-child(2)').click(); // Navigate to the "Cameras" page
        // Locator Used: **CSS Selector**
        // Explanation: `#navbar-menu` (ID) > `ul` (unordered list) > `li:nth-child(2)` (2nd list item)

        cy.get("body main li:nth-child(7)").should('have.text',"MP3 Players"); 
        // Assertion: Checking if the 7th `li` inside `main` has the text "MP3 Players"
        // Locator Used: **CSS Selector** (Tag + hierarchy)
        // Explanation: `body` > `main` (main content) > `li:nth-child(7)` (7th list item)

    });  

});
