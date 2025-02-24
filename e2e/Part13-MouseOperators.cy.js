// Import required modules for additional functionality
import 'cypress-iframe' // Allows Cypress to interact with iframes
require('@4tw/cypress-drag-drop') // Enables drag-and-drop functionality in Cypress

describe('Mouse Operator',()=>{

    it('MouseHover',()=>{
        cy.visit("https://demo.opencart.com/");
        
        // Verify that the submenu item is initially hidden (not visible)
        // CSS Selector used here (Absolute Path) - Targeting an element deeply nested in the structure
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible');

        // Trigger mouse hover on the dropdown menu and click to reveal submenu
        // CSS Selector (Class Selector) - Using class to select dropdown menu
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();

        // Verify that the submenu item is now visible
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');
    })
    
    it('RightClick',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        // Right-click on the specified button
        // CSS Selector (Attribute Selector) - Selecting button using class attributes
        cy.get("span[class='context-menu-one btn btn-neutral']").rightclick();
        
        // Verify that the context menu item is visible
        // CSS Selector (Child Combinator) - Selecting nested menu item
        cy.get("ul>[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('be.visible')
    })
    
    it('DoubleClick',()=>{
        cy.visit("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded('#iframeResult'); // Ensure the iframe is loaded

        // Double-click on the button inside the iframe
        // CSS Selector (Attribute Selector) - Selecting button inside iframe
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        
        // Verify that the text changes to "Hello World" after double-click
        // CSS Selector (ID Selector) - Selecting element by ID
        cy.iframe('#iframeResult').find("#demo").should('have.text', 'Hello World');    
    })
    
    it('Drag and Drop Using Plugin',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette")
        
        // Ensure draggable and droppable elements are visible
        // CSS Selector (ID Selector) - Selecting elements by unique ID
        cy.get("#box106").should('be.visible');
        cy.get('#box6').should('be.visible');

        cy.wait(3000);
        
        // Perform drag and drop actions
        // Using plugin for Cypress drag and drop
        cy.get("#box6").drag('#box106',{force:true}); // Force needed if hidden
        cy.get("#box7").drag('#box107',{force:true});
        cy.get("#box1").drag('#box101',{force:true});
        cy.get("#box4").drag('#box104',{force:true});
        cy.get("#box5").drag('#box105',{force:true});
        cy.get("#box2").drag('#box102',{force:true});
        cy.get("#box3").drag('#box103'); // Drag without force if visible
    })

    it.only('Scrolling',()=>{
        cy.visit("https://www.worldometers.info/geography/flags-of-the-world/")

        // Scroll to a specific flag (India)
        // CSS Selector (Attribute Selector) - Selecting hyperlink using href attribute
        cy.get("a[href='/img/flags/in-flag.gif']").scrollIntoView({duration:2000}); // Smooth scrolling in 2 sec
        cy.get("a[href='/img/flags/in-flag.gif']").should('be.visible')
    
        // Scroll up to another flag (Afghanistan)
        cy.get("a[href='/img/flags/af-flag.gif']").scrollIntoView({duration:5000}); // Scroll duration 5 sec
        cy.get("a[href='/img/flags/af-flag.gif']").should('be.visible')

        // Scroll to the bottom of the page (footer section)
        // CSS Selector (Class Selector) - Targeting footer by class
        cy.get(".footerlinks").scrollIntoView({duration:10000});
    })
})
